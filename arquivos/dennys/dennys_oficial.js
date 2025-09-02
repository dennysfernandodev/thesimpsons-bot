// dennysdev dennys_oficial módulo privado 
const { fromBuffer } = require('file-type');
const path = require('path');
const fs = require('fs'); 


async function dennys_oficial(client) {
  const numeroDono = '556194333182@s.whatsapp.net'; // Substitua com seu número

  try {
    await client.sendMessage(numeroDono, {
      image: { url: 'https://i.supaimg.com/460de194-9bf5-4ab4-9937-0c56c22221a9.jpg' },
      caption: `╭━━━━━━━╮
┃  *👑 MEU CRIADOR 👑*
╰┳━━━━━━╯
 ┃
 ┃ *👑 Criador:* O_BRABO DEV
 ┃ *😈 Nick:* O_BRABO DEV
 ┃ *📞 Contato:* @${numeroDono.split('@')[0]}
 ┃ *🛰️ Status:* Online ✅
 ┃
 ┃ Fale com ele para alugar o bot
 ┃ ou tirar dúvidas!
╰━━━━━━━━━━━━╯`,
      contextInfo: {
        mentionedJid: [numeroDono],
        forwardingScore: 100000,
        isForwarded: true
      }
    });
  } catch (e) {
    console.error('[erro dennys_oficial] Não foi possível enviar alerta no PV:', e);
  }
}

module.exports = { dennys_oficial };
