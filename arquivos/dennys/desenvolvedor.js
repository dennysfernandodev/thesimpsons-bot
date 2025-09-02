// area do colaborador do dennys onde vc pode emplemetar o blackaut mesmo criptografado 
module.exports = async ({ client, command, prefix, q, from, info, reply, reagir, isGroup, isModo18, DENNYS_API, DENNYS_KEY }) => {
if (!['play2', 'porvid'].includes(command)) return false; 

/*☆ （ tosh ）☆
     ╔──────╗
 𝐎_𝐁𝐑𝐀𝐁𝐎 𝐃𝐄𝐕// exemplo de uso 
╭──╚──────╝──
LEITOR API*/
const DARK_APIKEY = "sua apikey";
const DARK_USERNAME = "seu username";
const BaseApiDark = "http://dark.cloud:2025";
const API_KEY_BRONXYS = "sua apikey"
const BaseApiSpeed = "https://speedcloud"; 
const Speed_Apikey = "sua apikey";
//---------------------------------------------------------------------------------------------------
//area de personalização 

switch (command) {

case 'play2': {
await reagir(from, '🕝');
if (!q) {
await reply(`Cadê o nome da música?\nExemplo: *${prefix}play mc livinho*`);
return true;
}
try {
const data = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
const video = data?.resultado?.resultado?.[0];
if (!video) {
await reply("Nenhuma música encontrada. Tente outro nome.");
return true;
}
const videoTitle = video.title || 'Título desconhecido';
const videoImage = video.image || 'https://i.imgur.com/SB3lZNh.jpeg';
const videoAuthor = video.author?.name || 'Artista desconhecido';
const videoDuration = video.duration?.timestamp || video.timestamp || 'Duração desconhecida';
const videoUrl = video.url || '';
await client.sendMessage(from, {
audio: { url: `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(videoUrl)}&apikey=${DENNYS_KEY}` },
fileName: `${videoTitle}.mp3`,
mimetype: "audio/mpeg", ptt: true,
contextInfo: {
externalAdReply: {
title: videoTitle,
body: `🕒 Duração: ${videoDuration}, Canal: ${videoAuthor}`,
thumbnail: await getBuffer(videoImage), mediaType: 2, mediaUrl: videoUrl, sourceUrl: videoUrl
}}}, { quoted: info });
} catch (e) { console.error("Erro no comando play2:", e);
await reply('Erro ao tentar tocar a música. Tente novamente.');
}
return true; //substitui o breake por return true;
}

case 'porvid': {
if (!isModo18 && isGroup) {
await reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`);
return true;
}
try {
await reagir(from, "😈");
await reply(`Processando o pedido safadinho...`);
const url = `${DENNYS_API}/api/18/anal?${q}&apikey=${DENNYS_KEY}`;
const buffer = await getBuffer(url);
await client.sendMessage(from, { video: buffer, caption: "Tenha uma boa sessão safado 😏." }, { quoted: info });
} catch (e) { console.error("Erro no porvid:", e);
await reply(" Ocorreu um erro ao buscar o conteúdo.");
}
return true;
}

default:
return false;
  }
};
