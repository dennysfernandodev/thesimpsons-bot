const fs = require('fs');
const path = './arquivos/banco_dados/móduloadmin/fechamentos.json';

// Garante que o diretório exista
const garantirDiretorio = () => {
  const dir = require('path').dirname(path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// Carrega os dados do JSON
function carregar() {
  garantirDiretorio();
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
  return JSON.parse(fs.readFileSync(path));
}

// Salva os dados no JSON
function salvar(dados) {
  fs.writeFileSync(path, JSON.stringify(dados, null, 2));
}

// Agenda o fechamento do grupo
function agendarFechamento(bot, grupoId, horario) {
  const dados = carregar();
  if (!dados[grupoId]) dados[grupoId] = {};
  dados[grupoId].fechar = horario;
  salvar(dados);
  agendarFechamentoReal(bot, grupoId, horario);
}

// Agenda a abertura do grupo
function agendarAbertura(bot, grupoId, horario) {
  const dados = carregar();
  if (!dados[grupoId]) dados[grupoId] = {};
  dados[grupoId].abrir = horario;
  salvar(dados);
  agendarAberturaReal(bot, grupoId, horario);
}

// Remove todos os agendamentos de um grupo
function deletarAgendamento(grupoId) {
  const dados = carregar();
  delete dados[grupoId];
  salvar(dados);
}

// Agendamento real do fechamento
function agendarFechamentoReal(bot, grupoId, horario) {
  const [hora, minuto] = horario.split(':').map(Number);

  const loop = () => {
    const agora = new Date();
    const proxima = new Date();
    proxima.setHours(hora, minuto, 0, 0);
    if (proxima <= agora) proxima.setDate(proxima.getDate() + 1);

    const msAteLá = proxima - agora;
    setTimeout(async () => {
      try {
        await bot.groupSettingUpdate(grupoId, 'announcement');
        console.log(`✅ Grupo ${grupoId} fechado às ${hora}:${String(minuto).padStart(2, '0')}`);
      } catch (e) {
        console.error(`❌ Erro ao fechar grupo ${grupoId}:`, e);
      }
      loop(); // Reagenda para o próximo dia
    }, msAteLá);
  };

  loop();
}

// Agendamento real da abertura
function agendarAberturaReal(bot, grupoId, horario) {
  const [hora, minuto] = horario.split(':').map(Number);

  const loop = () => {
    const agora = new Date();
    const proxima = new Date();
    proxima.setHours(hora, minuto, 0, 0);
    if (proxima <= agora) proxima.setDate(proxima.getDate() + 1);

    const msAteLá = proxima - agora;
    setTimeout(async () => {
      try {
        await bot.groupSettingUpdate(grupoId, 'not_announcement');
        console.log(`✅ Grupo ${grupoId} aberto às ${hora}:${String(minuto).padStart(2, '0')}`);
      } catch (e) {
        console.error(`❌ Erro ao abrir grupo ${grupoId}:`, e);
      }
      loop(); // Reagenda para o próximo dia
    }, msAteLá);
  };

  loop();
}

// Restaura os agendamentos ao iniciar o bot
function restaurarAgendamentos(bot) {
  const dados = carregar();
  console.log('🔄 Restaurando agendamentos de grupos...');
  for (const grupoId in dados) {
    const config = dados[grupoId];
    console.log(`→ Grupo ${grupoId} | Fechar: ${config.fechar || '-'} | Abrir: ${config.abrir || '-'}`);
    if (config.fechar) agendarFechamentoReal(bot, grupoId, config.fechar);
    if (config.abrir) agendarAberturaReal(bot, grupoId, config.abrir);
  }
}

// Exporta as funções
module.exports = {
  agendarFechamento,
  agendarAbertura,
  deletarAgendamento,
  restaurarAgendamentos
};
