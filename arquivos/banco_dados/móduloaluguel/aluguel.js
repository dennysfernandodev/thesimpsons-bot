const fs = require('fs');
const aluguelPath = './container/banco_dados/móduloaluguel/aluguel.json';
let rg_aluguel = JSON.parse(fs.readFileSync(aluguelPath));

function salvar() {
  fs.writeFileSync(aluguelPath, JSON.stringify(rg_aluguel, null, 2));
}

function registrar(grupo, nome, tempoDias) {
  const agora = new Date();
  agora.setDate(agora.getDate() + tempoDias);

  const data = {
    grupo,
    nome,
    vencimento: agora.toISOString()
  };

  rg_aluguel = rg_aluguel.filter(g => g.grupo !== grupo);
  rg_aluguel.push(data);
  salvar();
  return data.vencimento;
}

function remover(grupo) {
  rg_aluguel = rg_aluguel.filter(g => g.grupo !== grupo);
  salvar();
}

function getGrupo(grupo) {
  return rg_aluguel.find(g => g.grupo === grupo);
}

function expirado(grupo) {
  const g = getGrupo(grupo);
  if (!g) return true;
  return new Date() > new Date(g.vencimento);
}

module.exports = {
  registrar,
  remover,
  getGrupo,
  expirado,
  rg_aluguel
};
