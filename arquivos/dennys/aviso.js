//dennys dev domina 
const { fromBuffer } = require('file-type');
const path = require('path');
const fs = require('fs'); 

async function notificarReinicio(client) {
const path = './ultimoreinicio.json';
if (fs.existsSync(path)) {
try {
const data = JSON.parse(fs.readFileSync(path));
const chatId = data.chatId;
if (!chatId || typeof chatId !== 'string') {
return;
}
const isGrupo = chatId.endsWith('@g.us');
const mensagem = isGrupo
? '😈 *BRABO BOT* 😈 Tá On de novo BB!'
: '😈 *BRABO BOT* 😈 Tá On de novo BB!';
await client.sendMessage(chatId, { text: mensagem });
fs.unlinkSync(path); 
} catch (e) {
console.log("Erro ao enviar mensagem de reinício:", e);
}
}
}

module.exports = { notificarReinicio };