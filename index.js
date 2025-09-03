
/*╓┰*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*
│┃֪࣪╭★∻∹⋰⋰ ☆∻∹⋰⋰ ★∻∹⋰⋰
║┃֪࣪├ׁ̟̇❮☆ *BLACKOUT 5*
║┃֪࣪├ׁ̟̇❮☆ •bot particular nao copie e nem venda
║┃֪࣪├ׁ̟̇❮☆ •todos direitos reservados ao Tosh blackout 
┗:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
 MÓDULOS E FUNÇÕES*/
const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore } = require('@whiskeysockets/baileys');
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
MÓDULOS E FUNÇÕES*/
const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn,execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, simih, botoff, colors, RSM_FUNC, infoSystem, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, AssemblyAI, level2, chaves, grupos, aluguel, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter } = require('./exports.js');
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
MÓDULOS ADICIONAIS INDEX*/
const { fromBuffer } = require('file-type');
const path = require('path');
const { Storage } = require('megajs');
const { Aki } = require('aki-api');
const sharp = require('sharp');
const tosh = require('fs');
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
 JS-MENUS/INFORMAÇÕES*/
const { linguagem, mess, getInfo, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, ftmenu, premium, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, votacao, antispam, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, sabrpg, autorpg, bcbet, minerar, cavalosrpg, elitepasse, coderpg, galosrpg, roubosrpg } = require('./exports.js');

const registrar = JSON.parse(fs.readFileSync('./arquivos/users.json'));
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
INFORMAÇÕES*/
var { antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./settings/nescessario.json");
const music = JSON.parse(fs.readFileSync("./database/data/music.json"));
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const { fundo1, fundo2, imgnazista, imggay, imgcorno, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb,sococmd,brigacmd,batercmd } = require("./settings/links_img.json");
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const { NomeDoBot, NickDono, Emoji, prefix, DENNYS_API, DENNYS_KEY, nomeLoja, donoloja } = require("./settings/config.json");
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./settings/media/audios.json')
const { logomenu } = require('./settings/loja.json');

const { imageToWebp2, videoToWebp2, writeExifImg2, writeExifVid2 } = require('./arquivos/sticker/exif2')
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const { version } = require('./package.json'); 
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const { mensagens, enviar, sortear } = require("./settings/message.js")
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
UPLOAD USANDO API*/
function igstalk(username) { return new Promise((resolve,reject) => {
axios.get('https://www.instagram.com/'+ username +'/channel/?__a=1',{ method: 'GET',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
				"cookie": "ig_did=085C2CB5-8000-4441-85DD-CF5BCA1FE157; ig_nrcb=1; csrftoken=7ZyQtU7rsZFsOgvKLjflk0KLMmTC4Chh; mid=YooZLAALAAF_nhOq9DEEIGOl8xB8; fbm_124024574287414=base_domain=.instagram.com; fbsr_124024574287414=d4okoqSIG-fbjXgJKE07737dLXrQkN682RmOZvAdn8M.eyJ1c2VyX2lkIjoiMTAwMDQxMDU2ODc1NDA4IiwiY29kZSI6IkFRQ3ZLZkpVdzZ3WkVaUmhleTRodjFyV05BZ0JlUXM1cVRlVTJnWnZrbjkxOXllN2lfUGM1a2VjUHRIZF9qdy1KS2tDcE9Jb3ZTUmF0SGxDaTZNdzFCODFYdXJ0OEZ4aVZKVGNTMzRLbVFMVHFYVzY5NGU1X0ltcDFZSmdWSVBwLUFwblpJbkRkWWRYSURSSk9oRVZScGNuRVE1MVMwNWtXeFZxZ0EwQzZRN1VsQzcxVTdCLWNDS0haNzk3cU9vYk9yRl9mcHVZdUs3a3Fic1djaU5NVF9TbkszN2kyLVFxalEtei1SanF3bFNONnNxWXJWaUhfbTIzSWJWdUVwZUZxRzYweldoR0NxLUM5TXF5dHNYTGRzM3NNY25IS3Z0Tmc2VzIxRHFpM3poSGQybFNQUS1IR2U1ZERkUWIyS3liZzlYUXNCX3FvemhWOHi3WVBFLVYwUmi3V2s5VEpiMWNaMlBQcEFPaDJRR0lEZyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFKakVxOGZNUmNYQm1sOUpkWkFzcUxqaU9wVGZic2dYYUd6dDZaQUhla0FtV0lUOUdPdWpkSlFjMVlkMFR5SjYwWkF5Mm5PWkFRemtCREUwbU1wdkZ3WDN5cTdkVnppWkNFYjR3NkZQRnlOSVdiY29aQVc1RWEwdjJNOXdxYnd4SXBITkFESTBCZXB5eFg1UU9NN3dtUDhaQWi3NVlKQ04xR213a2d6eXRjQjBRVFNBRXlDc1lZWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY1NDM0NTk2MX0; fbsr_124024574287414=d4okoqSIG-fbjXgJKE07737dLXrQkN682RmOZvAdn8M.eyJ1c2VyX2lkIjoiMTAwMDQxMDU2ODc1NDA4IiwiY29kZSI6IkFRQ3ZLZkpVdzZ3WkVaUmhleTRodjFyV05BZ0JlUXM1cVRlVTJnWnZrbjkxOXllN2lfUGM1a2VjUHRIZF9qdy1KS2tDcE9Jb3ZTUmF0SGxDaTZNdzFCODFYdXJ0OEZ4aVZKVGNTMzRLbVFMVHFYVzY5NGU1X0ltcDFZSmdWSVBwLUFwblpJbkRkWWRYSURSSk9oRVZScGNuRVE1MVMwNWtXeFZxZ0EwQzZRN1VsQzcxVTdCLWNDS0haNzk3cU9vYk9yRl9mcHVZdUs3a3Fic1djaU5NVF9TbkszN2kyLVFxalEtei1SanF3bFNONnNxWXJWaUhfbTIzSWJWdUVwZUZxRzYweldoR0NxLUM5TXF5dHNYTGRzM3NNY25IS3Z0Tmc2VzIxRHFpM3poSGQybFNQUS1IR2U1ZERkUWIyS3liZzlYUXNCX3FvemhWOHi3WVBFLVYwUmi3V2s5VEpiMWNaMlBQcEFPaDJRR0lEZyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFKakVxOGZNUmNYQm1sOUpkWkFzcUxqaU9wVGZic2dYYUd6dDZaQUhla0FtV0lUOUdPdWpkSlFjMVlkMFR5SjYwWkF5Mm5PWkFRemtCREUwbU1wdkZ3WDN5cTdkVnppWkNFYjR3NkZQRnlOSVdiY29aQVc1RWEwdjJNOXdxYnd4SXBITkFESTBCZXB5eFg1UU9NN3dtUDhaQWi3NVlKQ04xR213a2d6eXRjQjBRVFNBRXlDc1lZWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY1NDM0NTk2MX0", "set-cookie": "csrftoken=7ZyQtU7rsZFsOgvKLjflk0KLMmTC4Chh; Domain=.instagram.com; expires=Sat, 03-Jun-2023 12:35:09 GMT; Max-Age=31449600; Path=/; Secure" }})
.then(({ data }) => {
const user = data.graphql.user
let result = {
id: user.id,
biography: user.biography,
followers: user.edge_followed_by.count,
following: user.edge_follow.count,
fullName: user.full_name,
highlightCount: user.highlight_reel_count,
isBusinessAccount: user.is_business_account,
isRecentUser: user.is_joined_recently,
accountCategory: user.business_category_name,
linkedFacebookPage: user.connected_fb_page,
isPrivate: user.is_private,
isVerified: user.is_verified,
profilePicHD: user.profile_pic_url_hd,
username: user.username,
postsCount: user.edge_owner_to_timeline_media.count }
resolve(result)})
.catch(reject)})
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇÃO PARA FAZER UPLOAD USANDO A API*/
function uploadX(midia) {
return new Promise(async (resolve, reject) => {
try {
const FormData = require('form-data');
const fetch = require('node-fetch');
const { fromBuffer } = require("file-type");
const { ext } = await fromBuffer(midia);
const form = new FormData();
form.append("file", midia, "tmp." + ext);
fetch(`https://api.bronxyshost.com.br/api-bronxys/link_imagem?apikey=astroshop`, {
method: "POST",
body: form
}).then((response) => response.json())
.then((data) => {
resolve(data.link);
}).catch((error) => reject(error));
} catch (error) {
console.log(error);
reject(error);
}});
}
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");
async function reiniciarSAB() {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}
var AsMsg = [];
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
°ABAIXO: INÍCIO DE CONEXÃO*/
async function iniciarClient() {
module.exports = client = async(client, folderUserAuth) => {
module.exports = upsert = async(upsert, client) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(client, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

const isBotao = true

const VRF_JSON_GRUPO = fs.existsSync(`./database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
client.sendMessage(info.key.remoteJid, {text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
case 30:
await delay(1000);
client.sendMessage(info.key.remoteJid, {text: `O(a) adminstrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid}});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await client.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
BODY*/
const body = type === "conversation" ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : "";

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body ? body.trim().split(/ +/).slice(1) : [];

const budy2 = (body || "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = (body || "").trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const cmd = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" "); 

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
try {var groupMetadata = isGroup ?  await client.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup && info.key.participant ? (info.key.participant.includes(':') ? info.key.participant.split(':')[0] + '@s.whatsapp.net' : info.key.participant) : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = (body || "").substring((body || "").indexOf(' ') + 1);

const botNumber = await client.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = (body || "").split(/ +/g);
const testat = body || "";
const ants = body || "";

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

/* ~🍺~ RESPOSTAS DO BAR DO MOE ~🍺~
     ☆ THE SIMPSONS BOT ☆
~🍺~🍺~🍺~🍺~🍺~🍺~🍺~🍺~🍺~🍺~🍺~
DEFINIÇÃO SIMIH*/
const SIMI_OFC = [
  "D'oh!",
  "Coma meus shorts!",
  "Woo hoo!",
  "Ha-ha!",
  "Mmmm... Rosquinhas...",
  "Cala a boca, Flanders!",
  "Ay, caramba!",
  "Pior. Resposta. De todas.",
  "Você é um Zé Roela!",
  "Excellent...",
  "Vá beber uma Duff no Bar do Moe.",
  "Tentar é o primeiro passo para o fracasso.",
  "Isso é mais chato que um sermão do Reverendo Lovejoy."
];
function simiResponderAleatorio() {
  const resposta = SIMI_OFC[Math.floor(Math.random() * SIMI_OFC.length)];
  return resposta;
}

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇÃO DE GRUPO*/
const dirGroup = `./database/grupos/activation_gp/${from}.json`

const nescj = "./settings/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
const data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false, antibot: false,
antidoc: false, antictt: false, antinuke: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [], forca_inc: false,  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: true
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ADMS/DONO/ETC..CONST*/
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';
const quoted = info.quoted ? info.quoted : info
const isBot = info.key.fromMe ? true : false
const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt
dfndofc = setting.numerodono+"@s.whatsapp.net"
const key_buddah = "RIQlX"
const DonoOficial = dfndofc.includes(sender) 
const isPremium = premium.includes(sender) || SoDono
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial
const isBanned = ban.includes(sender)
const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv
const isAudioMenu = nescessario.menu_audio
const isAntiPv = nescessario.antipv 
const isAntiPv2 = nescessario.antipv2
const isAntiPv3 = nescessario.antipv3
const isBotoff = nescessario.botoff
const listanegraG = nescessario.listanegraG
const isAnticall = nescessario.anticall
const TOKEN_GPT = nescessario.TOKEN_GPT
const isCmdPremium = nescessario.cmd_premium
const isBlockCmdG = nescessario.blockCmdG
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇAO DE REGISTRO*/
function isRegistrado(id) {
    return registrar.some(usuario => usuario.id === id);
}
const isRegistradoRemetente = sender ? isRegistrado(sender) : false;
const isregistrador = sender ? isRegistrado(sender) : true;
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇÕES*/
const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const Antidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const Antiloc = isGroup ? dataGp[0].antiloc : undefined
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined
const isAntibot = isGroup ? dataGp[0].anticatalogo : undefined
const isAntinuke = isGroup ? dataGp[0].anticatalogo : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined
const isModo18 =  isGroup ? dataGp[0].adulto : undefined
const isModobn =  isGroup ? dataGp[0].jogos : undefined
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isNsfw = isGroup ? dataGp[0].nsfw : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined

const isSabCityOFF = !JSON.stringify(autorpg).includes(from) || autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
MENUS REQUIRE*/
const { menu,lojadobot,alterador, rpgmenu, menuadulto ,menumbr ,adms,menudono, menufigu,menulogos, menuprem, menudown, efeitos,brincadeiras, animes} = require("./settings/lib/menus.js"); 
//---------------------------------------------------------------------------------------------------
/*☆ （ Grimório ）☆
     ╔──────╗
     ☆Toshiruz☆
╭──╚──────╝──
VERIFICADOS*/
if(!isVerificado) {//Obrabo DEV 
var Toshiruz = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5511962390241-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `Usuário: ${pushname}` } } }
} else {
var Toshiruz = info
}

/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
TUMBL COM ID CHANNEL*/
function reply(msg) {
  // Envie para o remetente ou grupo, sem usar ID_CHANNEL
  client.sendMessage(from, { text: msg });
}
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------

const budahVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}
const budahContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}
const budahDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}} 

/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇÕES DE MARCAÇÕES ESSENCIAL*/
const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const identifyAtSign = (number) => {
return number.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const detectTinder = (query) => {
return query.replace("#p#", prefix).replace("#p#", prefix).replace("#pc#", prefix+command).replace("#pc#", prefix+command)
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
client.sendMessage(from, { text: texto }, { quoted: info }).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return client.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
//TEMPOS DO BOT*/
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
//definiçao momento 2 by: Obrabo DEV 
function formatarHoraAtual() {
const agora = new Date();
const hora = agora.getHours().toString().padStart(2, '0');
const minuto = agora.getMinutes().toString().padStart(2, '0');
const segundo = agora.getSeconds().toString().padStart(2, '0');
return `${hora}:${minuto}:${segundo}`;
}
const horaAtual = formatarHoraAtual();


const sendSticker = (from, filename, info) => {
client.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

const sendImage = (ytb) => {
client.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (idGroup, textINFO) => {
client.sendMessage(idGroup, {text: textINFO})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
client.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
client.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
client.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
client.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await client.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
client.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
client.groupParticipantsUpdate(from, [sender], "remove")
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
//AUTOFIGU*/
const enviarfigu = async (figu, tag) => {//Obrabo DEV 
client.sendMessage(from, { sticker: { url: figu } }, { quoted: tag });
};
if (isAutofigu && isGroup) {//Obrabo DEV com função integrada
const message = info.message;
const isVideo = !!message?.videoMessage;
const media = message?.imageMessage || message?.videoMessage;
if (
budy.includes(`${prefix}sticker`) || 
budy.includes(`${prefix}s`) || 
budy.includes(`${prefix}stk`) || 
budy.includes(`${prefix}st`) || 
budy.includes(`${prefix}fsticker`) || 
budy.includes(`${prefix}f`) || 
budy.includes(`${prefix}fstiker`)) return;
if (media && !info.key.fromMe) {
if (isVideo && media.seconds > 10) return await reply("Vídeo muito longo! Envie um com até 10 segundos.");
try {
const legenda = `[👑]->Dono: ${NickDono}`;
const autor = `[🖱️]->Solicitado: ${pushname}\n[🪬]->Grupo: ${groupName}\n[🤖]->Bot: ${NomeDoBot}`;
 const mediaType = isVideo ? 'video' : 'image';
const rane = getRandom('.' + await getExtension(media.mimetype));
const buff = await getFileBuffer(media, mediaType);
fs.writeFileSync(rane, buff);
const rano = getRandom('.webp');
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
fs.unlinkSync(rane);
if (err) { console.log(err);
return await reply("Erro ao converter em figurinha.");
}
const json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor };
const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
const exif = Buffer.concat([exifAttr, jsonBuff]);
exif.writeUIntLE(jsonBuff.length, 14, 4);
const nomemeta = "temp.exif";
fs.writeFileSync(nomemeta, exif);
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
client.sendMessage(info.key.remoteJid, { sticker: fs.readFileSync(rano) }, { quoted: info });
fs.unlinkSync(nomemeta);
fs.unlinkSync(rano);
});
});
} catch (e) { console.log(e);
await reply("Erro ao criar figurinha automática.");
}
}
}


var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./database/func/afk/afk-@${nmrdnofc1}.json`));  
client.sendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: seloMeta})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-sab") || info.key.fromMe && budy.includes("reiniciar-sab")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

if(!isPremium && !SoDono && !info.key.fromMe && isCmdPremium.includes(command)) return reply(enviar.msg.premium)
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
BAN GRUPO & BOT OFF*/
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: seloMeta}).catch(e => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ISQUOTED/CONSTS*/
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = (body || "").substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
BLOCK CMD*/
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('O comando foi bloqueado, entre em contato com a administração.')

if(isBlockCmdG.includes(command) && !SoDono) return reply('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
SISTEMA DE DINHEIRO*/
const { AdicionarGold, RemoverGold } = require("./arquivos/js/dinheiro.js")
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const { color, bgcolor } = require('./arquivos/js/color.js');

const tipoMensagem = type == 'audioMessage' ? 'Áudio' 
    : type == 'stickerMessage' ? 'Figurinha' 
    : type == 'imageMessage' ? 'Imagem' 
    : type == 'videoMessage' ? 'Vídeo' 
    : type == 'documentMessage' ? 'Documento' 
    : type == 'contactMessage' ? 'Contato' 
    : type == 'locationMessage' ? 'Localização' 
    : type == 'pollCreationMessage' ? 'Enquete' 
    : 'Mensagem';
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
CONSOLE*/
if (!isGroup && isCmd) {
    console.log(color('╓┰╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•✩͙╌╮', "blue"));
    console.log(color('║┋ </>☆ Blackout ☆</>', "white"));
    console.log(color('║┣╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•͙✩̣╌╯', "blue"));
    console.log(color('║┃֪࣪╭◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ USUÁRIO: ${pushname}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ COMANDO: ${command}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ HORÁRIO: ${time}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ DATA: ${new Date().toLocaleDateString()}`, "white"));
    console.log(color('║┖┴◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color('┗─๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──︩︪┛', "blue"));
}

if (isCmd && isGroup) {
    console.log(color('╓┰╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•✩͙╌╮', "blue"));
    console.log(color('║┋ </>☆ Blackout ☆</>', "white"));
    console.log(color('║┣╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•͙✩̣╌╯', "blue"));
    console.log(color('║┃֪࣪╭◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ USUÁRIO: ${pushname}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ COMANDO: ${command}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ GRUPO: ${groupName}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ HORÁRIO: ${time}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ DATA: ${new Date().toLocaleDateString()}`, "white"));
    console.log(color('║┖┴◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color('┗─๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──︩︪┛', "blue"));
}

if (!isCmd && isGroup && !info.key.fromMe) {
    console.log(color('╓┰╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•✩͙╌╮', "blue"));
    console.log(color('║┋ </>☆ Blackout ☆</>', "white"));
    console.log(color('║┣╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•͙✩̣╌╯', "blue"));
    console.log(color('║┃֪࣪╭◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ USUÁRIO: ${pushname}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ MENSAGEM: ${tipoMensagem}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ GRUPO: ${groupName}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ HORÁRIO: ${time}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ DATA: ${new Date().toLocaleDateString()}`, "white"));
    console.log(color('║┖┴◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color('┗─๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──︩︪┛', "blue"));
}

if (!isGroup && !isCmd && !info.key.fromMe) {
    console.log(color('╓┰╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•✩͙╌╮', "blue"));
    console.log(color('║┋ </>☆ Blackout ☆</>', "white"));
    console.log(color('║┣╌✩̣̣̣̣̣ͯ┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•͙✩̣╌╯', "blue"));
    console.log(color('║┃֪࣪╭◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ USUÁRIO: ${pushname}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ MENSAGEM: ${tipoMensagem}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ HORÁRIO: ${time}`, "white"));
    console.log(color(`║┃֪࣪├ׁ̟̇❮☆ DATA: ${new Date().toLocaleDateString()}`, "white"));
    console.log(color('║┖┴◆:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*', "blue"));
    console.log(color('┗─๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──๋︩︪──︩︪┛', "blue"));
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
 JOGO DA VELHA*/
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept =` *🎮JOGO DA VELHA🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual =` *🎮JOGO DA VELHA🕹️*
          
Jogo da velha termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = ` *🎮JOGO DA VELHA🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

client.sendMessage(from, {text: chatWon}, {quoted: seloMeta,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./arquivos/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮JOGO DA VELHA🕹️ 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTIBOT */
async function checarAntibot(evento) {
const grupo = await getGp(evento.id) 
if (!grupo.antibot) return
for (let participante of evento.participants) {
if (participante.endsWith('@g.us')) continue 
const info = await conn.groupMetadata(evento.id)
const isBot = await conn.isOnWhatsApp(participante)
if (isBot && participante.includes('bot') || participante.startsWith('1650')) {
await client.groupParticipantsUpdate(evento.id, [participante], 'remove')
await client.sendMessage(evento.id, { text: `Removi ${participante} por antibot estar ativo.` })
}}}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTINUKE */
async function checarAntinuke(evento) {
const grupo = await getGp(evento.id)
if (!grupo.antinuke) return
const membrosRemovidos = evento.participants.length
const autor = evento.author
if (membrosRemovidos >= 3) {
if (!isBotGroupAdmins) return
try {
await client.groupParticipantsUpdate(evento.id, [autor], 'remove')
await client.sendMessage(evento.id, { text: `Removi ${autor} por comportamento suspeito (antinuke ativo).` })
} catch (e) {
console.log('Erro ao remover quem tentou nuke:', e)
}}}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
NAMORO */
const namoro1 = JSON.parse(fs.readFileSync("./database/func/namoro1.json"))
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const namoro2 = JSON.parse(fs.readFileSync("./database/func/namoro2.json"))
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
aceitar namoro*/
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
RECUSAR NAMORO*/
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./database/func/namoro2.json", JSON.stringify(namoro2))
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
INÍCIO DO AKINATOR*/
const akinator = JSON.parse(fs.readFileSync("./database/grupos/games/akinator.json"))

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish > 0) {
  if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Eu sabia cara, eu sou demais!`)
  } else if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
    AB = akinator.map(i => i.id).indexOf(from)
    akinator.splice(AB, 1)
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
    reply(`Poxa não foi dessa vez... Quem sabe na próxima!️`)
  }
}

if(JSON.stringify(akinator).includes(from) && akinator[akinator.map(i => i.id).indexOf(from)].jogador === sender && akinator[akinator.map(i => i.id).indexOf(from)].finish <= 0 && Number(akinator[akinator.map(i => i.id).indexOf(from)].dia) === Number(moment.tz('America/Sao_Paulo').format('DD')) && isGroup) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(aki.progress <= 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[▒▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 10) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█▒▒▒▒▒▒▒▒▒]`
  if(aki.progress > 20) per = `〔 *${aki.progress.toFixed(1)}%* 〕[██▒▒▒▒▒▒▒▒]`
  if(aki.progress > 30) per = `〔 *${aki.progress.toFixed(1)}%* 〕[███▒▒▒▒▒▒▒]`
  if(aki.progress > 40) per = `〔 *${aki.progress.toFixed(1)}%* 〕[████▒▒▒▒▒▒]`
  if(aki.progress > 50) per = `〔 *${aki.progress.toFixed(1)}%* 〕[█████▒▒▒▒▒]`
  if(aki.progress > 60) per = `[██████▒▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 70) per = `[███████▒▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 80) per = `[████████▒▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress > 90) per = `[█████████▒] *${aki.progress.toFixed(1)}%*`
  if(aki.progress >= 90 || aki.currentStep >= 90) {
      await aki.win()
      jogo.now = true
      akinator[AB].finish += 1
      fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
      client.sendMessage(from, {image: {url: aki.answers[0].absolute_picture_path }, caption: `〔 ${aki.answers[0].name}: ${aki.answers[0].description} 〕\n–\n🧙🏻‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei?\n• ${II}Observação:{II} _Responda com "sim" ou "não", sem as aspas._`}, {quoted: seloMeta})
    } else {
      if(budy2.toLowerCase() === "sim" || budy2.toLowerCase() === "s") {
        await aki.step("0")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao" || budy2.toLowerCase() === "n") {
        await aki.step("1")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase().replace("ã", "a") === "nao sei" || budy2.toLowerCase() === "nsei" || budy2.toLowerCase() === "n sei") {
        await aki.step("2")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente sim" || budy2.toLowerCase() === "provavelmente s") {
        await aki.step("3")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
      }
      if(budy2.toLowerCase() === "provavelmente nao" || budy2.toLowerCase() === "provavelmente n") {
        await aki.step("4")
        reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: ${aki.question}\n–\n📊: ${per}`)
}
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANAGRAMA*/
if(isGroup && fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado.\nA palavra original era: *${dataAnagrama.original}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)		
		setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
client.sendMessage(from, {text:`Decifre a palavra embaralhada abaixo:\n• ${II}Anagrama:${II} ${dataAnagrama2.embaralhada}\n• ${II}Dica:${II} ${dataAnagrama2.dica}`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
client.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou! O animal era: *${dataAnagrama.original}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `🤔 Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando esta mensagem.`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
client.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await client.sendMessage(from, {image: wew, caption: garticText, thumbnail: wew}, {quoted: seloMeta})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
client.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
let dataEnigmadataEnigma333 = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:
–
${dataEnigmadataEnigma333.charada}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await client.sendMessage(from, {image: wew, caption: enigmaTezt, thumbnail: wew}, {quoted: seloMeta})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply('Tá perto hein! Tente novamente...')
if(budy.toUpperCase() == whatMusic.resposta) { 
client.sendMessage(from,{text: `• Resposta Correta: *${whatMusic.resposta}*\nParabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
textM = `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡
–
${wmusic.trechoMusic}
–
🤔😱 Qual música pertence o trecho apresentado acima?
• ${II}Dica:${II} ${wmusic.dica}`
await client.sendMessage(from, {text: textM}, {quoted: seloMeta})
}, 5000)
}
}
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
MUTAR USUÁRIO*/
const GroupsMutedActived = []
for(let obj of muted) {
GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
CONTADOR-DE-MENSAGENS*/
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
EVAL-EXECUÇÕES*/
if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return client.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return client.sendMessage(from, {text: bang}, {quoted: seloMeta})
}

client.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI-IMAGEM*/
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
if(dataGp[0].legenda_imagem != "0") {
client.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI-STICKER*/
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
client.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: seloMeta})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
if(dataGp[0].legenda_documento != "0") {
client.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: seloMeta}) 
}
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
client.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
client.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇAO TOGIF*/
const downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
  const FileType = require("file-type");
  let quoted = message.msg ? message.msg : message
  let mime = (message.msg || message).mimetype || ''
  let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
  const stream = await downloadContentFromMessage(quoted, messageType)
  let buffer = Buffer.from([])
  for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
  }
  let type = await FileType.fromBuffer(buffer)
  filedesbug = `${Math.floor(Math.random() * 9999)}`
  trueFileName = attachExtension ? (filedesbug + '.' + type.ext) : filename
  // save to file
  await fs.writeFileSync(trueFileName, buffer)
  return trueFileName
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI NOTAS FAKES */
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI-VIDEO*/
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return client.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
if(dataGp[0].legenda_video == "0") {
client.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: seloMeta})
} else {
client.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: seloMeta})  
}
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI-AUDIO*/
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
client.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: seloMeta})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI_LIGAR*/
if(!isGroup && isAnticall) {
client.ws.on('CB:call', async (B) => {
var msgcallblock = `./database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
client.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
client.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
client.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}
//ant pv================1
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
client.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 
//ant pv================2
var MSG_ANTPV2_ENC = []
if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2)
}
//ant pv================3
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {return}

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && level2[level2.map(i => i.id).indexOf(sender)].block == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I 🥉"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II 🥉"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III 🥉"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I 🥈"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II 🥈"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III 🥈"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I 🥇"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II 🥇"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III 🥇"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV 🥇"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I 🌀"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II 🌀"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III 🌀"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV 🌀"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I 💎"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II 💎"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III 💎"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV 💎"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I 🔮"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II 🔮"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III 🔮"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV 🔮"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I ❤️‍🔥"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II ❤️‍🔥"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III ❤️‍🔥"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV ❤️‍🔥"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V ❤️‍🔥"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I 👑"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II 👑"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III 👑"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV 👑"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V 👑"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I 🎓"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II 🎓"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I 🪄"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II 🪄"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III 🪄"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I ⚒️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II ⚒️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III ⚒️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I 🛰️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II 🛰️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III 🛰️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I 🪩"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II 🪩"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III 🪩"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "The Jhocker ⚜️"
if(newlevel >= 10000000) newpatente = "Veterano 🎩"
level2[AB].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
await client.sendMessage(from, {text: `*🎉 LEVEL UP! 🎖️*\nParabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• O novo level foi alcançado por completar *${level2[AB].contador} golds.*\n• Sua nova patente foi desbloqueada, você agora é *${newpatente}*`, mentions: [sender]}, {quoted: info})
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`☆ Parabéns ${pushname}, você completou com sucesso 10M de golds, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de golds... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`)
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
const imageUrl3 = 'https://i.imgur.com/0x73zMO.jpeg'; 
try {
await client.sendMessage(from, { text: `*☆ SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de golds à triplicar. Agora você tem *${level2[CD].contador} golds*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, 
 mentions: [sender], quoted: info,image: { url: imageUrl3 }, 
caption: "Parabéns, você alcançou o nível supremo!"  });
    } catch (e) {
console.log("Erro ao enviar mensagem com imagem:", e);
return reply("Erro ao enviar a mensagem com imagem.");
}
break;

}
}

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const toUpdateDay = JSON.parse(fs.readFileSync("./database/usuarios/SystemRPG/attday.json"));
const datinhadodia = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
client.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
client.sendMessage(from,px)
}}}

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
const isVotoDuelo = isGroup ? votacao.includes(from) : false

const AdicionarVoto = async(IDGRUPO, R1, R2, R3, R4, mention) => {
votacao.push(IDGRUPO)
fs.writeFileSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`, `[]`)
fs.writeFileSync('./database/func/votacao/voting.json', JSON.stringify(votacao))
await sleep(2000)
const otos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`))
otos.push({razao: R1 ? R1 : '-', votos: R2.trim() + '@s.whatsapp.net', votos2: R3.trim() + '@s.whatsapp.net', duracao: R4})
fs.writeFileSync(`./database/func/votacao/votos/${IDGRUPO}.json`, JSON.stringify(otos))
setTimeout(async function() {
let voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`))
let verdade = voto.filter(V1 => V1.votacao == '01')
let falso = voto.filter(V2 => V2.votacao == '02')
if(verdade.length == falso.length) return mention(`*😱🗳️ VOTAÇÃO EMPATADA! 🗳️😱*\n• Os 2 usuários terminaram em empate, com a mesma pontuação de votos.\nEntão a decisão está na mão dos adms, se vai refazer a votação, ou decidir o ganhador de alguma forma.\n—\n• [1] Total de Votos do Usuário da Cor Vermelha ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• [2] Total de Votos do Usuário da Cor Azul ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*`)
mention(`*❌ VOTAÇÃO ENCERRADA! 🗳️*\n• Soma total de todos os membros que realizaram seus votos: *${verdade.length + falso.length}*\n—\n• Quantidade de Votos que Usuário Vermelho recebeu ( @${otos[0].votos.split('@')[0]} ): *${verdade.length}*\n• Quantidade de Votos que o Usuário Azul recebeu ( @${otos[0].votos2.split('@')[0]} ): *${falso.length}*\n—\n🎉🌟 *@${verdade.length > falso.length ? otos[0].votos.split('@')[0] : otos[0].votos2.split('@')[0]}* acaba de ganhar a votação! Parabéns ao ganhador e aos ambos participantes... Se você não ganhou, não fique com raiva um dia você ganha! Confie em si próprio!`)
fs.unlinkSync(`./database/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
fs.writeFileSync("./database/func/votacao/voting.json", JSON.stringify(votacao)) /* Modificar.. */
}, R4*60*1000)
}

const DeletarVotos = (IDGRUPO) => {
processo = votacao.indexOf(IDGRUPO)
while(processo >= 0) {
votacao.splice(processo, 1)
processo = votacao.indexOf(IDGRUPO)
}
fs.writeFileSync(`./database/func/votacao/voting.json`, JSON.stringify(votacao)) /* Adicionar.. */
fs.unlinkSync(`./database/func/votacao/votos/${IDGRUPO}.json`) /* Remover.. */
fs.unlinkSync(`./database/func/votacao/p_votos/${IDGRUPO}.json`) /* Remover.. */
}

if(fs.existsSync(`./database/func/votacao/p_votos/${from}.json`)) {
if (budy2 === '1'){
let voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '01'})
fs.writeFileSync(`./database/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n—\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n—\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto +=  `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy2 === '2'){
const voto = JSON.parse(fs.readFileSync(`./database/func/votacao/p_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./database/func/votacao/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions(`Olá @${sender.split('@')[0]}, não é possível votar duas vezes.`, filtro, true)
} else {
voto.push({participante: id_voto, votacao: '02'})
fs.writeFileSync(`./database/func/votacao/p_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `*🗳️ VOTAÇÃO 🌟* - Informações de usuário(s) que participaram:\n–\n*@${_votos[0].votos.split('@')[0]} VS @${_votos[0].votos2.split('@')[0]}*\n• Participante [1] : @${_votos[0].votos.split('@')[0]}\n• Participante [2] : @${_votos[0].votos2.split('@')[0]}\n–\n• Quant. de votos contabilizados: *${voto.length}*\n• Tempo definido pelo admin para o encerramento: *${_votos[0].duracao} min(s).*\n—\n• Voto(s) Contabilizado(s) do(s) Usuário(s):\n——\n`
for(let i = 0; i < voto.length; i++) {
_voto += `• O(a) participante *@${voto[i].participante.split('@')[0]}* votou no integrante *(${voto[i].votacao})*.\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
}
}	

let isCmdKey = Array('aluguel', 'alugueis', 'alugar', 'alugarbot', 'loja', 'dono').some(item => item === command)

if(isModoAluguel && isCmd && !SoDono && !isCmdKey) {
if(!JSON.stringify(grupos).includes("matheuzinho")) {
grupos.push({id: "matheuzinho", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))}
if(!JSON.stringify(grupos).includes(from)) {
grupos.push({id: from, limite: 5, validado: false})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
AB = grupos.map(i => i.id).indexOf(from)
if(grupos[AB].validado == false) {
if(grupos[AB].limite <= 1) {
grupos.splice(AB, 1)
fs.writeFileSync("./database/grupos/grupos.json", JSON.stringify(grupos, null, 2))
reply(`⏰️🤨😑 *O tempo de espera acabou!* Visto que o(s) senhor(es) não desejam comprar uma chave, estou saindo do grupo...`)
await sleep(3000)
return client.groupLeave(from)
} else {
grupos[AB].limite -= 1
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
return mention(`️🥹😪 Não encontrei o grupo em meus registros! Por favor, caso esteja alugado ou deseja adquirir uma chave de ativação, entre em contato com o meu dono: *@${nmrdn.split('@')[0]}*`)
}}}

if (isx9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await client.sendMessage(from, {text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./database/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))

var palavrasfr = JSON.parse(fs.readFileSync("./database/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

function reactMessage(emoji) {
client.sendMessage(from, {react: {text: emoji, key: info.key}})
}

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isPremium && dataGp[0]?.Limitar_CMD) {
  
var TEMPO_A = Math.floor(Date.now() / 1000) 
 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)

if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

var TEMPO_M = TEMPO_A - TEMPO_D

var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60

if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

client.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await client.sendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

client.sendImageMentions = (photo, text, mem, ids) => {
(ids == null || ids == undefined || ids == false) ? client.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: { "mentionedJid": mem}}) : client.sendMessage(from, {image: photo, caption: text.trim(), contextInfo: {"mentionedJid": mem}})
}

if(chaves.length > 0) {caixa = []
for(k of chaves) {
if(budy2.toUpperCase() === k.key) {
caixa.push(k.key)
}
}
if(VerificarJSON(chaves, caixa[0])) {
AD = chaves.map(i => i.key).indexOf(caixa[0])
timeday = chaves[AD].dias
pessoa = chaves[AD].cliente
infinity = chaves[AD].dias > 0 ? false : true
if(!VerificarJSON(grupos, "matheuzinho")) {
grupos.push({id: "matheuzinho", gps: []})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(infinity == false) {
if(chaves[AD].tipo == 1 && isGroup) {
if(!VerificarJSON(aluguel, from)) {
aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
const imageUrl = 'https://i.imgur.com/0x73zMO.jpeg'; 
reply({
text: `🌟🛒 O grupo foi registrado com sucesso ao aluguel! *Qualquer dúvida entre em contato com meu dono.*`,
image: { url: imageUrl },caption: "Imagem ilustrativa"});
await sleep(2000)
client.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else {
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + timeday
aluguel[AB].tempo += timeday
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para o grupo em meu banco de dados.`)
await sleep(2000)
client.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
}
}
        
if(chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map(i => i.id).indexOf("matheuzinho")
if(!VerificarJSON(grupos[CD].gps, from)) {
if(!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({id: from})
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`✅️🌟 Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`)
await sleep(2000)              
client.sendMessage(nmrdn, {text: `⚠️🌟️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split('@')[0]}*.\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else reply("[!] Este grupo já está registrado em meu banco de dados.")
} else reply("[!] Já foi validado neste mês uma cortesia neste grupo.")
}
} else {
if(chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O grupo foi salvo no meu banco de dados com sucesso!`)
}}}}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
RENDER MENUS*/
const toshiruz = './menu/dono.jpeg';
const dono = `Usuario: ${pushname}`;
const donoimg = 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const menuImagem = './menu/menu.jpeg';
const canalOficial = 'https://whatsapp.com/channel/0029VazmYZk72WTneBn3b91t';
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
SELOS*/
const seloGpt = {"key": {"participant": "18002428478@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Chat GPT", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:Chat GPT\nitem1.TEL;waid=18002428478:18002428478\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloMeta = {"key": {"participant": "13135550002@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Meta IA", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:Meta IA\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloNubank = {"key": {"participant": "556194333182@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Nubank", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Nubank;;;\nFN:Nubank\nitem1.TEL;waid=556194333182:556194333182\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloBb = {"key": {"participant": "556140040001@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Banco do Brasil", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Banco Do Brasil;;;\nFN:Banco do Brasil\nitem1.TEL;waid=556140040001:556140040001\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloBradesco = {"key": {"participant": "556194333182@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Bradesco", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Bradesco;;;\nFN:Bradesco\nitem1.TEL;waid=556194333182:556194333182\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloSantander = {"key": {"participant": "556194333182@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Santander", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Santander;;;\nFN:Santander\nitem1.TEL;waid=556194333182:556194333182\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloItau = {"key": {"participant": "556194333182@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Itaú", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Itaú;;;\nFN:Itaú\nitem1.TEL;waid=551140044828:551140044828\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
DEFINIÇÃO PING*/
function formatUptime(uptime) {
let hours = Math.floor(uptime / 3600);
let minutes = Math.floor((uptime % 3600) / 60);
let seconds = Math.floor(uptime % 60);
return `${hours}h ${minutes}m ${seconds}s`;
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇÃO PARA FAZER UPLOAD USANDO A API*/

const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

async function upload(midia) {
  try {
    const tipo = await fromBuffer(midia);
    if (!tipo || !tipo.ext) {
      console.error('Tipo de arquivo não identificado.');
      return 'Erro: Tipo de arquivo inválido.';
    }

    let form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', midia, {
      filename: 'tmp.' + tipo.ext,
      contentType: 'application/octet-stream'
    });

    const response = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    });

    return response.data.trim(); // retorna o link do upload
  } catch (erro) {
    console.error('Erro ao fazer upload:', erro);
    return 'Erro ao enviar arquivo.';
  }
}


/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
API SHAZAM */
async function arcloud(base64Audio) {
try {
const response = await fetch('https://api.audd.io/', {
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({
api_token: 'de4f28b22cd385dc2f613440f77fcc61', 
audio: base64Audio, return: 'timecode,apple_music,spotify',method: 'recognize'})
});
const json = await response.json();
if (!json || !json.result) { console.log('Resposta inválida da API AudD:', json);
return null;
}
return json.result; 
} catch (e) { console.error('Erro na função arcloud:', e);
return null;
}}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FUNÇÃO DE IMAGENS */
function getRandomMeme(filePath) {
const fullPath = path.resolve(__dirname, filePath);
if (!fs.existsSync(fullPath)) throw new Error("Arquivo JSON não encontrado!");
const data = JSON.parse(fs.readFileSync(fullPath));
if (!Array.isArray(data) || data.length === 0) throw new Error("Lista de memes vazia.");
return data[Math.floor(Math.random() * data.length)];
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
STATUSPREMIUM  */
const positivo = 'Sim ✓';
const negativo = 'Não ×';

const statuspremium = isPremium ? positivo : negativo;

const adm = '🛡️adm';
const membro = '👤membro';
const pv = 'privado';

let tipoCargo = !isGroup ? pv : isGroupAdmins ? adm : membro;





/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
COMEÇO DAS CASES ABAIXO */
// THE SIMPSONS BOT by Obrabo DEV



switch(command){//início de cases

case 'alugargp':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode alugar o bot!")
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`D'oh! Use o formato certo, seu Zé Roela!\nExemplo:\n${prefix+command} ${nmrdn.split('@')[0]}/30`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
if(!Number(dias)) return reply(`Ay, caramba! Só números para os dias!`)
matheuzinho = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await client.onWhatsApp(matheuzinho.split('@')[0])
if(checkwpp == undefined) {
return reply(`D'oh! O número ${matheuzinho.split('@')[0]} não é válido no whatsapp`)
}
if(Number(dias) <= 0) return reply(`Precisa de pelo menos 1 dia, seu pão-duro!`)
if(dias.includes('.')) return reply("Ay, caramba! Sem números quebrados!")
aluguel.push({id: from, nome: groupName, tempo: Number(dias) + 1, totalRent: Number(dias) + 1, cliente: matheuzinho, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Excellent! Grupo adicionado ao meu império.`)
} else {
if(!Number(args[0])) return reply(`D'oh! Diga quantos dias a mais de aluguel!`)
hehe = Number(args[0])
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Excellent! +${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} adicionado${Number(args[0]) > 1 ? 's' : ''} para este grupo.`)
}
break

case 'removeraluguel':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode mexer no aluguel!")
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!Number(args[0])) return reply(`D'oh! Diga quantos dias quer remover!\nExemplo: ${prefix+command} 10`)
if(!JSON.stringify(aluguel).includes(from)) return reply(`D'oh! Este grupo não está alugado.`)
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(args[0])
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Smithers, anote aí! ${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} fo${Number(args[0]) > 1 ? 'ram' : 'i'} retirado${Number(args[0]) > 1 ? 's' : ''} deste grupo.`)
break

case 'cortesia24': {
if (!SoDono) return reply("Excellent... Mas só o Mr. Burns pode dar 'cortesias'!");
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");

const metadata = await client.groupMetadata(from);
const pushgrupo = metadata.subject;

if (JSON.stringify(aluguel).includes(from)) return reply(`D'oh! O grupo ${pushgrupo} já está no meu sistema...`);

if (!JSON.stringify(grupos).includes(from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
aluguel.push({
id: from,
nome: pushgrupo,
tempo: 24,
totalRent: 24,
cliente: nmrdn,
save: Number(moment.tz('America/Sao_Paulo').format('mm')),
cortesia: true
});

fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));

reply(`Sintam a minha generosidade, reles mortais! Cortesia de 24h liberada neste grupo.`);
}
break;

case 'lista-aluguel':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode ver os lucros!")
if(aluguel.length > 0) {
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
matheuzinho = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[matheuzinho].nome = ingfoo[g].subject
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}
txt = `~💰~ *IMPÉRIO DO MR. BURNS* ~💰~\n\n[Total: *${aluguel.length}*] - Meus grupos alugados:\n—\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`
if(aluguel[i].cortesia == false) {
txt += `• Tempo de Servidão: *${hmm} dia${hmm > 1 ? 's' : ''}*\n• Pobre Coitado: *wa.me/${aluguel[i].cliente.split('@')[0]}*\n—\n`
} else {
txt += `_Este grupo está na minha "generosa" cortesia de 24h._\n—\n`
}
}
reply(txt)
} else {
reply(`D'oh! Nenhum grupo alugado. Smithers, solte os cães!`)
}
break

case 'lastrent': {
if (!SoDono) return reply("Excellent... Mas só o Mr. Burns pode ver os lucros!");

if (aluguel.length > 0) {
const matheuzinho = [...aluguel];
const rank = matheuzinho.sort((a, b) => a.tempo - b.tempo);
let txt = "~📋~ *LISTA DE INADIMPLENTES DO SMITHERS* ~📋~\n\nEstes estão quase sem tempo para me pagar:\n—\n";
for (let i = 0; i < Math.min(3, rank.length); i++) {
if (rank[i].cortesia === false) {
const hmm = rank[i].tempo;
txt += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? 's' : ''}\n• Pobre Coitado: *wa.me/${rank[i].cliente.split('@')[0]}*\n—\n`;
}}
reply(txt.trim());
} else {
reply(`D'oh! Nenhum grupo alugado. Smithers, solte os cães!`);
}}
break;

case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:MM:SS')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
day = `~🍩~ *RELATÓRIO DIÁRIO DE SPRINGFIELD* ~🍩~\n\n• ${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Bot: *${NomeDoBot}*\n• Criador: *${NickDono}*\n• Estou em *${ingfoo.length}* grupos.`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) matheuzinho = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) matheuzinho = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) matheuzinho = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) matheuzinho = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) matheuzinho = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) matheuzinho = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) matheuzinho = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) matheuzinho = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) matheuzinho = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) matheuzinho = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) matheuzinho = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  matheusSabe = `• `
  if(aluguel[AB].cortesia == false) {
matheusSabe += `${hmm} dia${hmm > 1 ? 's' : ''} restantes`} else {matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`}
matheusSabe += ` até o fim do aluguel.`
} else {matheusSabe = ``}
day += `\n——\n☢️ *Energia da Usina Nuclear:*\n${matheuzinho} ${matheusSabe}`}
reply(`${day}`)
break

case 'aluguel':
case 'alugueis':
case 'alugar':
case 'alugarbot':
case 'loja':
case 'lojinha': { // Agrupamos todos os comandos de loja aqui
    client.sendMessage(from, { react: { text: '🛒', key: info.key } });

    // Chamamos a função 'tabela', que já está corrigida e com o layout certo
    const legendaLoja = tabela(prefix, NomeDoBot, pushname, sender, nomeLoja, numerodono, NickDono, tempo, hora);

    await client.sendMessage(from, { 
        image: { url: menuImagem }, 
        caption: legendaLoja, 
        mentions: [sender], 
        contextInfo: {
            externalAdReply: {
                title: dono,
                body: `${NomeDoBot}`,
                thumbnailUrl: donoimg,
                sourceUrl: canalOficial, // Mantemos o sourceUrl se você usar
                mediaType: 1,
                renderLargerThumbnail: false
            },
            // As linhas abaixo foram removidas para corrigir o erro
            forwardingScore: 999,
            isForwarded: true
        }
    }, { quoted: seloNubank });
}
break;

case 'codelistrent': { //THE SIMPSONS BOT by Obrabo DEV
if (!SoDono) return reply("Excellent... Mas só o Mr. Burns pode ver os lucros!");

const chaves = require('./database/grupos/aluguel/chaves.json');
if (!Array.isArray(chaves) || chaves.length === 0) {
 return reply("D'oh! Não há nenhuma chave registrada no meu cofre.");
}

let txt = `~🔑~ *CHAVES DO COFRE DO MR. BURNS* ~🔑~\n\n[Total: *${chaves.length}*] - Lista de Códigos de Aluguel:\n`;
let caixa = [];

for (let i of chaves) {
const nmr = i.dias || 0;
txt += `\n—\n• Código Secreto: *${i.key}*\n• Contratante: *@${i.cliente.split('@')[0]}*\n• Validade: ${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `Contrato Infinito! Excellent!`}`;
caixa.push(i.cliente);
}

reply(isGroup ? "Smithers, mande os registros no privado deste Zé Roela!" : "Enviando os registros... não conte para a Receita Federal.");
client.sendMessage(sender, { text: txt, mentions: caixa });
}
break;

case 'gerarcodegp':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode criar contratos!")
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return reply(`D'oh! Use o formato certo, seu Zé Roela!\n• Exemplo: *${prefix+command} ${nmrdn.split('@')[0]}/30*`)
matheuzinho = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkkeygp] = await client.onWhatsApp(matheuzinho.split('@')[0])
if(checkkeygp == undefined) {
return reply(`D'oh! O número *${matheuzinho.split('@')[0]}* não é válido no whatsapp`)
}
nmr = Number(v2) > 0 ? Number(v2) : 0
idks = `G${v2}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(matheuzinho.slice(2, 8))}`
idks += `M${nmr}H-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}B`
chaves.push({key: idks, tipo: 1, dias: nmr, cliente: matheuzinho, valor: 0})//tipo 1 = aluguel de grupo
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
mention(`Excellent! Contrato gerado! A chave é:\n-> *${idks}*\n——\n• Dias de Servidão: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}*\n• Pobre Coitado: *@${matheuzinho.split('@')[0]}*`)
break

case 'gerarcodecort'://by matheuzinho
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode dar 'cortesias'!")
reagir(from, "😀")
cort = 24 
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`Sinta a minha "generosidade"! Aqui está um código cortesia:\n-> *${idks}*`)
break

case 'delcodegp':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode rasgar contratos!")
if(!JSON.stringify(chaves).includes("matheuzinho")) return reply(`D'oh! Não há contratos para rasgar.`)
if(!q) return reply(`D'oh! Qual código você quer que eu destrua?`)
if(!JSON.stringify(chaves).includes(q)) return reply("Pior. Código. De todos. Não achei!")
AD = chaves.map(i => i.key).indexOf(q)
chaves.splice(AD, 1)
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`Excellent! O código *${q}* foi destruído! Smithers, solte os cães!`)
break
 
case 'rm_aviso':
case 'rm_avisos': {
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");

const grupoAlvo = black_.find(obj => Array.isArray(obj.PUXAR) && obj.PUXAR.includes(from));
if (!grupoAlvo) return reply("Este grupo está mais limpo que a ficha do Ned Flanders, não tem avisos.");

grupoAlvo.PUXAR.splice(grupoAlvo.PUXAR.indexOf(from), 1);

fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
  reply("Woo hoo! Aviso removido. Pode voltar a fazer suas travessuras.");
}
break;

case 'rg_aviso':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(`D'oh! Use o formato certo, seu Zé Roela!\nExemplo: ${prefix}rg_aviso 20:00|Fechando o bar do Moe!`)
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply("Woo hoo! Aviso deletado. Ninguém vai saber de nada.")
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply("Woo hoo! Aviso agendado! Mais eficiente que a Usina Nuclear.")
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply("Woo hoo! Aviso agendado! Mais eficiente que a Usina Nuclear.")
}
break

case 'iddogrupo':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode ver isso!")
reply(`A identidade secreta deste grupo, segundo os arquivos do FBI do Skinner, é:\n\n*${from}*`)
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ÍNICIO JOGOS */
case 'duelo': case 'votacao': case 'voting': {//THE SIMPSONS BOT by Obrabo DEV
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem começar uma briga.");
if (!isGroup) return reply('D\'oh! Só pode ter briga em grupo!');
if (args.length === 0) return reply(`Ay, caramba! Use o formato certo, seu Zé Roela!\n${prefix + command} @Bart/@Milhouse/1`);
const txt = args.join(' ');
const nmr = txt.split('/')[0].replace(/@|\s/g, '');
const nmr2 = txt.split('/')[1].replace(/@|\s/g, '');
const tempo = txt.split('/')[2];
if (!Number(tempo)) return reply('D\'oh! Diga quanto tempo dura a briga (em minutos).');
let ppimg, ppimg2;
try {
ppimg = await client.profilePictureUrl(`${nmr}@s.whatsapp.net`);
} catch {
ppimg = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg';
}
try {
ppimg2 = await client.profilePictureUrl(`${nmr2}@s.whatsapp.net`);
} catch {
ppimg2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg';
}
const canvasURL = `https://dksapis.online/api/canvas/ship?foto1=${encodeURIComponent(ppimg)}&foto2=${encodeURIComponent(ppimg2)}&fundo=https://i.imgur.com/dEe337u.jpeg&mat=100`;
await client.sendMessage(from, { image: { url: canvasURL },caption: `💥 *QUE COMECE A BRIGA!* 💥\n@${nmr} VS @${nmr2}`,
mentions: [`${nmr}@s.whatsapp.net`, `${nmr2}@s.whatsapp.net`]
}, { quoted: seloMeta });

const msg = `~🥊~ *VOTAÇÃO DO DUELO* ~🥊~\n\n*@${nmr}* VS *@${nmr2}*\n\n• Para votar, envie *1* ou *2* no grupo.\n\n⚠️ Só pode votar uma vez, seu Zé Roela!\n\n*Tempo:* ${tempo} minuto${tempo > 1 ? 's' : ''}`;
await client.sendMessage(from, { text: msg,
mentions: [`${nmr}@s.whatsapp.net`, `${nmr2}@s.whatsapp.net`]
}, { quoted: seloMeta });

AdicionarVoto(from, "-", nmr, nmr2, tempo, mention);
}
break;

case 'zerar_votacao': case 'cancel_voting':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem parar a briga.")
if(!fs.existsSync(`./database/func/votacao/p_votos/${from}.json`)) return reply(`D'oh! Que votação? Não tem nada aqui.`)
DeletarVotos(from)
reply("Woo hoo! Votação cancelada! Vão todos beber uma Duff no Bar do Moe!")
break

case 'addpalavras_forca':
case 'addpalavras_f':
if(!SoDono) return reply("Só o Professor Frink pode adicionar palavras novas!")
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(`D'oh! Use o formato: *palavra|tema|dica*`)
if(q.lastIndexOf("|") < 0) return reply(`D'oh! Use o formato: *palavra|tema|dica*`)
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply("Pior. Palavra. De todas. Já existe.")
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Woo hoo! Palavra adicionada ao jogo da forca!")
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':
if(!SoDono) return reply("Só o Professor Frink pode remover palavras!") 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Woo hoo! Palavra removida. Era muito difícil para o Homer.")
break

case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem resetar o jogo.")
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(dataGp[0].forca_inc == false) return reply(`D'oh! O jogo nem começou!\nUse: ${prefix}jogodaforca`)
rv_forca()
reply(`Woo hoo! Jogo da forca resetado! Comecem de novo, seus Zé Roelas!`)
break
  
case 'mostrar_forca':
case 'ver_forca':
case 'iniciar_forca':
case 'jogodaforca':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
try {
if(dataGp[0].forca_inc) return reply(`Ay, caramba! O jogo já está rolando!\nUse: ${prefix}r-forca [letra]`)
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
reply(mess.forcaStarted(DM_FR, linha_fr, prefix)) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!dataGp[0].forca_inc) return reply(`D'oh! O jogo nem começou!\nUse: ${prefix}jogodaforca`)
if(!q.toLowerCase().trim()) return reply("D'oh! Diga uma letra, seu bocó!")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Ay, caramba! Só letras normais!")
if(q.trim().length == 2) return reply("D'oh! Uma letra de cada vez!")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Essa letra já foi, seu Zé Roela!")
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
if(q.length > 2) {reply("Hmm, tentando adivinhar a palavra toda, espertinho?")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Woo hoo! Você acertou a palavra toda! Vou resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Woo hoo! Você completou a palavra: < ${DM_FR.palavra_ofc} >. Vou resetar o jogo...`:`Woo hoo! Acertou a letra!`}`)
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(mess.forcaStartedRespond(DM_FR, ERROS, ERRQ, linha_fr, letra_ut))
} else {
reply(`${q2.length > 2 ? `D'oh! Você errou a palavra toda! Ha-ha! Vou resetar.` :ERROS+ERRQ == 6 ? `D'oh! Você errou 6 vezes! Perdeu, seu Zé Roela! Vou resetar.` : `D'oh! Errou!`}`)
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
MEMBROS*/
case 'quando':
if (args.length < 1) return reply('D\'oh! Pergunte alguma coisa!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Hmm, deixe-me ver na minha bola 8 mágica...\n*Pergunta:* ${body.slice(1)}\n*Resposta:* ${randomm}`
} else if (random2 == 1) {
texto = `Hmm, deixe-me ver na minha bola 8 mágica...\n*Pergunta:* ${body.slice(1)}\n*Resposta:* Daqui a 1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Hmm, deixe-me ver na minha bola 8 mágica...\n*Pergunta:* ${body.slice(1)}\n*Resposta:* Daqui a ${random2} ${random3}`
}
reply(texto)
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ADMINISTRAÇÃO*/
case 'listaddi': case 'ddilist':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
if(q.length < 1) return reply(`D'oh! Diga o código do país!\nExemplo: *${prefix}listaddi 55*`)
if(isNaN(q))return reply(`Ay, caramba! Só números!`)
teks = `~👮~ *RELATÓRIO DO CHEFE WIGGUM* ~👮~\n\nNúmeros com DDI +${args[0]} em Springfield:\n–\n`
men = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
}
}
if(teks.indexOf('⇒') < 0) return reply(`D'oh! Nenhum estrangeiro com o DDI *+${args[0]}* encontrado.`)
client.sendMessage(from, {text: teks, mentions: men}, {quoted: seloMeta}).catch((error) => {
    reply("D'oh! Deu erro.")
})
break

case 'listabr': case 'brlist':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
teks = `~🇧🇷~ *LISTA DE BRASILEIROS EM SPRINGFIELD* ~🇧🇷~\n\n[Total: *${groupMembers.length}*]\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return reply('D\'oh! Não achei nenhum brasileiro aqui.')
client.sendMessage(from, {text: teks, mentions: men}, {quoted: seloMeta}).catch((error) => {
    reply("D'oh! Deu erro.")
})
break

case 'listaddd': case 'dddlist':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
if(q.length < 1) return reply(`D'oh! Diga o DDD!\nExemplo: *${prefix}listaddd 11*`)
if(isNaN(q))return reply(`Ay, caramba! Só números!`)
teks = `~📞~ *LISTA TELEFÔNICA DO MOE* ~📞~\n\nNúmeros com DDD *${q}*:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return reply('D\'oh! Não achei ninguém com esse DDD.')
client.sendMessage(from, {text: teks, mentions: men}, {quoted: seloMeta}).catch((error) => {
    reply("D'oh! Deu erro.")
})
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Woo hoo! Limpei os fantasmas da contagem de mensagens, como o Vovô Simpson limpando a garagem.")
break

case 'tirar_docnt':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Woo hoo! Tirei esse Zé Roela da contagem.")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`D'oh! Só funciona em grupos, seu Zé Roela!`)
if(!isGroupAdmins) return reply(`Ha-ha! Só os valentões (admins) podem usar isso.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`D'oh! Use o formato certo!\nExemplo: ${prefix}anotar Título|Texto da anotação`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`D'oh! Já tem uma anotação com esse título!\nUse ${prefix}tirar_nota ${q5} para apagar.`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Woo hoo! Anotado na lousa do Bart!")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Woo hoo! Anotado na lousa do Bart!")
}
} else {
if(!q) return reply("D'oh! Diga o título da anotação para apagar.")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("D'oh! Não achei essa anotação.")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply(`Woo hoo! Anotação "${q}" apagada!`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`D'oh! Só funciona em grupos, seu Zé Roela!`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("D'oh! Diga o título da anotação que você quer ver.")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação na lousa do Bart.")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("D'oh! Não achei nenhuma anotação com esse título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação na lousa do Bart.")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `~칠~ *LOUSA DO BART* ~칠~\n\nAnotações do grupo *${groupName}*:\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Título: ⟮ ${anotar[i2].puxar[i].nota} ⟯\n↳ Texto: 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'registrar':
try {
let caminhoArquivo = './arquivos/users.json';
if (!fs.existsSync(caminhoArquivo)) {
fs.writeFileSync(caminhoArquivo, JSON.stringify([], null, 2));
}
let registrar = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf8'));
let novoUsuario = {
id: sender,
nome: pushname,
telefone: info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IOS' : 'WhatsApp Web'};
function isRegistrado(id) {
return registrar.some(user => user.id === id);
}
if (isRegistrado(sender)) {
return reply("D'oh! Você já é um cidadão de Springfield.");
    } else {
registrar.push(novoUsuario);
fs.writeFileSync(caminhoArquivo, JSON.stringify(registrar, null, 2));
return reply("Woo hoo! Bem-vindo a Springfield! Usuário registrado com sucesso!");
}
    } catch (erro) {
console.error("Erro ao registrar usuário:", erro);
return reply("D'oh! Deu erro no cartório. Tente de novo.");
}
break;

case 'usuarios':
let listaUsuarios = "~📋~ *LISTA DE CIDADÃOS DE SPRINGFIELD* ~📋~\n\n";
registrar.forEach((usuario, index) => {
listaUsuarios += `${index + 1}. ${usuario.nome}\n`;
});
return reply(listaUsuarios);
break;

case 'excluir_usuarios':
let numero = parseInt(q);
if (isNaN(numero) || numero <= 0 || numero > registrar.length) {
return reply("D'oh! Diga um número válido da lista, seu Zé Roela!");
}
let indice = numero - 1;
let usuarioExcluido = registrar.splice(indice, 1)[0];
fs.writeFileSync('./arquivos/users.json', JSON.stringify(registrar, null, 2));
return reply(`Ha-ha! O usuário ${usuarioExcluido.nome} foi expulso de Springfield!`);
break;

case 'totalcmd'://THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: `🍩`, key: info.key } }); 
await reply('Obrabo DEV dominando tudo... como o Mr. Burns!') 
const filePath = path.resolve(__dirname, 'index.js'); 
fs.readFile(filePath, 'utf8', async (err, data) => { 
if (err) {
console.error("Erro ao ler index.js:", err);
return reply("D'oh! Não consegui contar os comandos.");
}
const regex = /case\s'(\w+)'/g;
let match;
const caseNames = [];
while ((match = regex.exec(data)) !== null) {
caseNames.push(match[1]);
}
if (caseNames.length === 0) {
return reply("D'oh! Não achei nenhum comando.");
}
const output = caseNames.map(cmd => `🍩 ${cmd}`).join('\n');
const totalCount = caseNames.length;
const message = `~🍩~ *ROSQUINHAS DO HOMER (COMANDOS)* ~🍩~\n\nO *${NomeDoBot}* tem *${totalCount}* comandos no total.\n\n*Lista completa:*\n\n${output}`;
try {
const media = await client.sendMessage(from, { image: { url: menuImagem }, caption: message }, { quoted: seloMeta}); 
 } catch (error) {
console.error("Erro ao enviar imagem:", error);
reply(message); 
}});
break;

case 'ping': { // THE SIMPSONS BOT by Obrabo DEV - Versão de Alta Velocidade
    // A reação é mantida pois é uma operação muito rápida e não bloqueia o resto do código.
    client.sendMessage(from, { react: { text: `🍩`, key: info.key } });

    // Função interna para calcular o tempo de atividade. É extremamente rápida.
    function runtime(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = Math.floor(seconds % 60);
        return `${hours}h ${minutes}m ${secs}s`;
    }

    // Cálculos de tempo e informações do sistema. São operações muito rápidas.
    let responseTime = (Date.now() / 1000) - info.messageTimestamp;
    let uptime = process.uptime();
    let currentTime = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const fs = require('fs');
    const indexPath = './index.js';
    let totalCommands = 0;
    if (fs.existsSync(indexPath)) {
        const fileContent = fs.readFileSync(indexPath, 'utf8');
        totalCommands = (fileContent.match(/case '/g) || []).length;
    }
    let systemInfo = {
        osType: infoSystem.type(),
        osRelease: infoSystem.release(),
        freeMemory: (infoSystem.freemem() / Math.pow(1024, 3)).toFixed(2),
    };

    // A montagem da mensagem de texto é uma operação instantânea.
    let responseMessage = `  ~☢️~ *PAINEL DA USINA NUCLEAR* ~☢️~

┌─📊 *RELATÓRIO DO SMITHERS*
│
├ ⏱️ *Velocidade:* ${responseTime.toFixed(3)} seg
├ 🔋 *Ligado há:* ${runtime(uptime)}
├ 💻 *Sistema:* ${systemInfo.osType}
├ 📂 *Versão:* ${systemInfo.osRelease}
├ 🧠 *RAM Livre:* ${systemInfo.freeMemory} GB
├ ⏰ *Hora do Bar do Moe:* ${currentTime}
├ 📈 *Comandos:* ${totalCommands}
│
└───────────

 Woo hoo! by Obrabo DEV`.trim();

    // Envia apenas a mensagem de texto, que é a operação mais rápida possível.
    // A chamada para a API de imagem e o contextInfo foram removidos para garantir velocidade máxima.
    await client.sendMessage(from, { text: responseMessage, mentions: [sender] }, { quoted: info });
}
break;

case 'perfil'://THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: `🍺`, key: info.key } }); 
try {
let ppimg;
try {
ppimg = await client.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
 } catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
let status;
try {
status = (await client.fetchStatus(sender)).status;
        } catch {
status = "Privado ou inexistente.";
        }
let pushgrupo = "Bar do Moe (Privado)"; 
if (from.endsWith('@g.us')) { 
try {
const groupMetadata = await client.groupMetadata(from);
pushgrupo = groupMetadata.subject;
 } catch (err) {
console.log("Erro ao obter o nome do grupo:", err);
pushgrupo = "Nome do grupo indisponível";
}}
const palavrasConselho = ["A culpa é minha e eu coloco em quem eu quiser!","Por que eu tive que nascer pai?","Operador! Me dê o número da polícia!","Tentar é o primeiro passo para o fracasso.","Rosquinhas... Existe algo que elas não possam fazer?"];
const conselho = palavrasConselho[Math.floor(Math.random() * palavrasConselho.length)];
const randomPercentage = () => `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
const randomProgramPrice = () => Math.ceil(Math.random() * 10000);
const bio = await client.fetchStatus(sender);
const bioo = bio.status || "Sem bio, que nem o Homer sem cérebro";
const programa = randomProgramPrice();
const gerarPerfil = () => `  ~🍺~ *ANÁLISE DO TIO MOE* ~🍺~

_Aqui está o que eu acho de você, seu beberrão..._

┌─📊 *SEUS ATRIBUTOS*
│
├ 🐮 *Gado:* ${randomPercentage()}%
├ 😈 *Puta:* ${randomPercentage()}%
├ 🔥 *Safadeza:* ${randomPercentage()}%
├ 😍 *Gostosura:* ${randomPercentage()}%
├ 🤘 *Corno:* ${randomPercentage()}%
├ ✨ *Beleza:* ${randomPercentage()}%
│
└───────────

📝 *Programa:* ${programa}
📜 *Bio:* ${bioo}
💡 *Conselho do Homer:* ${conselho}
🏠 *Local:* ${pushgrupo}

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: ppimg },caption: gerarPerfil(), mentions: [sender] },{ quoted: seloMeta });
} catch (e) { console.log(e); 
}
break;

case 'delcase'://THE SIMPSONS BOT by Obrabo DEV
if (!SoDono) return reply('D\'oh! Só o Professor Frink pode mexer no código!');
if (!q) return reply('D\'oh! Diga o nome do comando para eu apagar, seu Zé Roela!');
const indexPathDel = 'index.js'; 
let fileContentDel = fs.readFileSync(indexPathDel, 'utf8');
let regex = new RegExp(`case ['"]${q}['"]:([\\s\\S]*?)(?=case|break;)`, 'g');
if (!regex.test(fileContentDel)) {
return reply('Pior. Comando. De todos. Não achei.');
}
let updatedContent = fileContentDel.replace(regex, '').trim();
fs.writeFileSync(indexPathDel, updatedContent);
reply(`Woo hoo! O comando *${q}* foi apagado com sucesso!`);
break;

case 'addcase'://THE SIMPSONS BOT by Obrabo DEV
if (!SoDono) return reply('D\'oh! Só o Professor Frink pode mexer no código!');
if (!q) return reply('D\'oh! Cadê o código da nova invenção?');
const indexPath = 'index.js'; 
let fileContent = fs.readFileSync(indexPath, 'utf8');
let newContent = [
fileContent.slice(0, fileContent.lastIndexOf('break') + 5),
`\n\n${q}`,
fileContent.slice(fileContent.lastIndexOf('break') + 5)
    ].join('');
fs.writeFileSync(indexPath, newContent);
reply('Woo hoo! Nova invenção adicionada com sucesso!');
break;

case 'compartilharcase': //THE SIMPSONS BOT by Obrabo DEV
if (!SoDono) return reply('D\'oh! Só o Professor Frink pode compartilhar as invenções!');
if (!q) return reply('D\'oh! Diga o nome da invenção!');
const caseName = q.trim();
try {
const fileData = fs.readFileSync('index.js', 'utf8'); 
const regex = new RegExp(`case ['"\`]${caseName}['"\`]:([\\s\\S]*?)break;`, 'i');
const match = fileData.match(regex);
if (match) {
let caseCode = match[0]; // Captura todo o código da case
if (caseCode.length > 4000) {
return reply('Ay, caramba! O código é maior que a lista de inimigos do Bart!');
}
client.sendMessage(from, { text: `~🧪~ *Invenção do Professor Frink* ~🧪~\n\n"${caseName}":\n\n${caseCode}`});
} else {
reply('D\'oh! Não tenho uma invenção com esse nome.');
}
} catch (error) {
reply('D\'oh! O laboratório explodiu!');
console.error(error);
}
break;

case 'gerarlink':
client.sendMessage(from, { react: { text: `🔗`, key: info.key } }); 
try {
if (isQuotedImage) {
boij = isQuotedImage || isQuotedVideo 
? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage 
: info;
const fetch = require('node-fetch');
const FormData = require('form-data');
async function uploadImageToImgur(imageBuffer) {
const form = new FormData();
form.append('image', imageBuffer, { filename: 'image.jpg' });
const response = await fetch('https://api.imgur.com/3/image', {
method: 'POST',
body: form,
headers: {
'Authorization': 'Client-ID 400116076ba4b73'
}
});
console.log('Response status:', response.status);
console.log('Response headers:', response.headers.raw());
const data = await response.json();
console.log('Response data:', data); 
if (response.ok && data.data && data.data.link) {
return data.data.link;
 } else {
throw new Error('Failed to retrieve the image URL from the response.');
}}
const owgi = await getFileBuffer(boij, "image");
const imageUrl = await uploadImageToImgur(owgi);
reply(imageUrl);
    } else {
reply('D\'oh! Marque a foto, seu Zé Roela!');
}
  } catch (e) {
console.log('Error details:', e); 
reply('D\'oh! Deu erro...');
}
break;

case 'gerarlink2':
async function uploadDennys(fileBuffer, fileType) {
const FormData = require('form-data');
const fetch = require('node-fetch');
const form = new FormData();
form.append('file', fileBuffer, { filename: `file.${fileType}`, contentType: `application/${fileType}` });
const response = await fetch('https://api.dennys.niid.com.br/upload/single', {
method: 'POST', body: form, headers: form.getHeaders(), });
if (!response.ok) {
throw new Error('Falha ao enviar o arquivo para o servidor.');
}
const data = await response.json();
if (data && data.fileUrl) { return data.fileUrl;
} else { throw new Error('Não foi possível obter o URL do arquivo enviado.');
}}
let fileBuffer;
let fileType;
if (isQuotedImage) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage;
fileBuffer = await getFileBuffer(boij, 'image');
fileType = 'jpg';
} else if (isQuotedSticker) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.stickerMessage;
fileBuffer = await getFileBuffer(boij, 'sticker');
fileType = 'webp';
} else if (isQuotedDocument) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage || info.message.documentMessage;
fileBuffer = await getFileBuffer(boij, 'document');
fileType = 'doc';
} else if (isQuotedVideo) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage || info.message.videoMessage;
fileBuffer = await getFileBuffer(boij, 'video');
fileType = 'mp4';
} else if (isQuotedAudio) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.audioMessage;
fileBuffer = await getFileBuffer(boij, 'audio');
fileType = 'mp3';
} else {
reply('D\'oh! Marque uma mídia para eu transformar em link!');
return;
}
reply("Woo hoo! Enviando o link...");
const ddr = await uploadDennys(fileBuffer, fileType);
await reply(ddr);
break;

case 'gerarlink3': case 'upload':
YSG = isQuotedVideo || isQuotedImage || isQuotedAudio || isImage || isVideo
if(!YSG) {
reply(`D'oh! Marque uma imagem, vídeo ou áudio (até 200MB)!`)
return
}
    await reagir(from, '🔗');
if(isMedia && info.message.imageMessage.fileLenght < 209715200 || isQuotedImage && info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.fileLength < 209715200) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
await sleep(1000)
reagir(from, "📷")
res = await upload(owgi)
reply(res) 
} else if(isMedia && info.message.videoMessage.fileLength < 209715200 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 209715200) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
await sleep(1000)
reagir(from, "📽")
res = await upload(owgi)
reply(res)
} else if(isQuotedAudio && info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength < 209715200) {
boij = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage
owgi = await getFileBuffer(boij, 'audio')
await sleep(1000)
reagir(from, "📄")
res = await upload(owgi)
reply(res)
} else {
reagir(from, "❗")
reply('D\'oh! O arquivo é maior que o Homer! Só até 200MB.')
}
break

case 'idgp'://THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: `🍩`, key: info.key } }); 
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isBotGroupAdmins) return reply("Preciso ser admin pra xeretar, né?");
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
try {
const ppUrl = await client.profilePictureUrl(from, 'image');
const buffer = await getBuffer(ppUrl);
const metadata = await client.groupMetadata(from);
const groupName = metadata.subject;
const groupMembers = metadata.participants;
const groupAdmins = groupMembers.filter(member => member.admin !== null);
const groupDesc = metadata.desc || "Sem descrição, que nem o cérebro do Homer.";
const now = new Date();
const data = now.toLocaleDateString('pt-BR');
const hora = now.toLocaleTimeString('pt-BR');
client.sendMessage(from, {
image: buffer,
caption: `  ~🛒~ *RELATÓRIO DO KWIK-E-MART* ~🛒~

_"Obrigado, volte sempre!"_

┌─📋 *INFORMAÇÕES DO GRUPO*
│
├ 📌 *Nome:* ${groupName}
├ 👥 *Membros:* ${groupMembers.length}
├ 🗣️ *Admins:* ${groupAdmins.length}
├ 🆔 *ID:* ${from}
│
└───────────

---
🗓️ *Data:* ${time2}
⏰ *Hora:* ${date}

 Woo hoo! by Obrabo DEV`, 
thumbnail: null }, { quoted: seloGpt });
} catch (error) { console.error(error);
await reply("D'oh! Não consegui xeretar as informações do grupo. A culpa é do Milhouse!");
}
break;
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
MENUS*/
case 'menu': {
client.sendMessage(from, { react: { text: '🍩', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/Menuprincipal.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
// A variável 'legendaMenu' agora contém o texto no estilo Simpsons
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩
  *MENU PRINCIPAL*
🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩

🟡 ${prefix}menudownload → _Baixar Músicas e Vídeos_
🟡 ${prefix}menufigu → _Criar Figurinhas_
🟡 ${prefix}brincadeiras → _Jogos e Interações_
🟡 ${prefix}menurpg → _Economia e RPG_
🟡 ${prefix}menumembros → _Utilidades e Infos_
🟡 ${prefix}menulogos → _Logos e Efeitos de Imagem_
🟡 ${prefix}menupremium → _Comandos para Vips_
🟡 ${prefix}menu18 → _Conteúdo do Bar do Moe_
🟡 ${prefix}menuadm → _Comandos de Admin_
🟡 ${prefix}menudono → _Painel do Chefe_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menumembros': {
client.sendMessage(from, { react: { text: '🎷', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
│
└───────────

🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷
 *MEMBROS & UTILIDADES*
🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷

👤 ${prefix}perfil → _Vê seu perfil maluco_
📶 ${prefix}ping → _Vê a velocidade do bot_
📊 ${prefix}rankativo → _Vê os mais falantes_
🏆 ${prefix}ranklevel → _Confere sua patente_
🌐 ${prefix}traduzir → _[idioma|texto]_
🗣️ ${prefix}gtts → _[idioma] [texto]_
🧮 ${prefix}calcular → _[10 + 10]_
🆔 ${prefix}idgp → _Mostra as infos do grupo_
💡 ${prefix}sugestao → _[sua sugestão]_
🐞 ${prefix}bug → _[relate um problema]_
⭐ ${prefix}avalie → _[diga o que acha do bot]_
🔮 ${prefix}oraculo → _[faça uma pergunta]_
📜 ${prefix}frasedodia → _Receba um conselho do Homer_
🪙 ${prefix}moeda → _Joga cara ou coroa_
❤️ ${prefix}crush → _[nome1/nome2]_
✨ ${prefix}horoscopo → _[seu signo]_
🗺️ ${prefix}maps → _[endereço]_
📰 ${prefix}g1noticia → _Últimas notícias_
✍️ ${prefix}anotacao → _Vê as notas do grupo_
😴 ${prefix}ausente → _[motivo]_
👑 ${prefix}dono → _Vê as infos do meu criador_
🎲 ${prefix}role → _Descobre quem você é no rolê_
🤬 ${prefix}insulto → _Receba um insulto do Bart_
🎟️ ${prefix}sorteio → _Sorteia um número_
🤔 ${prefix}escolha → _[opção1/opção2]_
🤥 ${prefix}mentira → _Detector de mentiras_
ℹ️ ${prefix}infocmd → _[comando]_
👀 ${prefix}checkativo → _[@marcar]_
📈 ${prefix}dados → _[dos Grupos]_
👤 ${prefix}tagme
😀 ${prefix}emoji → _[/whatsapp]_
📖 ${prefix}conselhobiblico
💘 ${prefix}cantadas
🤖 ${prefix}simi → _[fale com ele]_
🛒 ${prefix}loja → _[serviços]_
☎️ ${prefix}listaddi
🇧🇷 ${prefix}listabr
🗑️ ${prefix}limpar_mortos-cnt
🚫 ${prefix}tirar_docnt
📝 ${prefix}tirar_nota
🔗 ${prefix}download-link

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menu18': {
client.sendMessage(from, { react: { text: '🍺', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/Menuhentai.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺
        *BAR DO MOE (+18)*
🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺

🎬 ${prefix}pornovid → _(random)_
🎥 ${prefix}sexvideo → _(random)_
😈 ${prefix}hentai → _(random)_
🍑 ${prefix}bigass → _(random)_
⛓️ ${prefix}bdsm → _(random)_
👩‍❤️‍💋‍👩 ${prefix}lesbian → _(random)_
🐙 ${prefix}tentaculos → _(random)_
팻 ${prefix}gordinha → _(random)_
✍️ ${prefix}plaquinha
✍️ ${prefix}plaquinha1
✍️ ${prefix}plaquinha2
✍️ ${prefix}plaquinha3
✍️ ${prefix}plaquinha4
✍️ ${prefix}plaquinha5
✍️ ${prefix}plaquinha6
✍️ ${prefix}plaquinha7
㊗️ ${prefix}wallpaperanimes → _(random)_
🎭 ${prefix}cosplay → _(random)_
🍀 ${prefix}blackclover → _(random)_
🐉 ${prefix}dbz → _(random)_
💥 ${prefix}jujutsukaisen → _(random)_
👊 ${prefix}myheroacademy → _(random)_
🍥 ${prefix}naruto → _(random)_
🏴‍☠️ ${prefix}oniepiece → _(random)_
👾 ${prefix}animeradom → _(random)_
🏞️ ${prefix}wallpapers4k → _(random)_
😂 ${prefix}animemes → _(random)_
⚓ ${prefix}azurlane → _(random)_
🐲 ${prefix}dragonmaid → _(random)_
⚧️ ${prefix}futanari → _(random)_
🤯 ${prefix}konosuba → _(random)_
👹 ${prefix}monstergirls → _(random)_
💀 ${prefix}overlord → _(random)_
🔴 ${prefix}pokemon → _(random)_
❄️ ${prefix}rezero → _(random)_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menumembros': {
client.sendMessage(from, { react: { text: '🎷', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
│
└───────────

🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷
 *MEMBROS & UTILIDADES*
🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷

👤 ${prefix}perfil → _Vê seu perfil maluco_
📶 ${prefix}ping → _Vê a velocidade do bot_
📊 ${prefix}rankativo → _Vê os mais falantes_
🏆 ${prefix}ranklevel → _Confere sua patente_
🌐 ${prefix}traduzir → _[idioma|texto]_
🗣️ ${prefix}gtts → _[idioma] [texto]_
🧮 ${prefix}calcular → _[10 + 10]_
🆔 ${prefix}idgp → _Mostra as infos do grupo_
💡 ${prefix}sugestao → _[sua sugestão]_
🐞 ${prefix}bug → _[relate um problema]_
⭐ ${prefix}avalie → _[diga o que acha do bot]_
🔮 ${prefix}oraculo → _[faça uma pergunta]_
📜 ${prefix}frasedodia → _Receba um conselho do Homer_
🪙 ${prefix}moeda → _Joga cara ou coroa_
❤️ ${prefix}crush → _[nome1/nome2]_
✨ ${prefix}horoscopo → _[seu signo]_
🗺️ ${prefix}maps → _[endereço]_
📰 ${prefix}g1noticia → _Últimas notícias_
✍️ ${prefix}anotacao → _Vê as notas do grupo_
😴 ${prefix}ausente → _[motivo]_
👑 ${prefix}dono → _Vê as infos do meu criador_
🎲 ${prefix}role → _Descobre quem você é no rolê_
🤬 ${prefix}insulto → _Receba um insulto do Bart_
🎟️ ${prefix}sorteio → _Sorteia um número_
🤔 ${prefix}escolha → _[opção1/opção2]_
🤥 ${prefix}mentira → _Detector de mentiras_
ℹ️ ${prefix}infocmd → _[comando]_
👀 ${prefix}checkativo → _[@marcar]_
📈 ${prefix}dados → _[dos Grupos]_
👤 ${prefix}tagme
😀 ${prefix}emoji → _[/whatsapp]_
📖 ${prefix}conselhobiblico
💘 ${prefix}cantadas
🤖 ${prefix}simi → _[fale com ele]_
🛒 ${prefix}loja → _[serviços]_
☎️ ${prefix}listaddi
🇧🇷 ${prefix}listabr
🗑️ ${prefix}limpar_mortos-cnt
🚫 ${prefix}tirar_docnt
📝 ${prefix}tirar_nota
🔗 ${prefix}download-link

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menudownload': {
client.sendMessage(from, { react: { text: '🍺', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺
    *MENU DE DOWNLOADS*
🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺

🎵 ${prefix}play → _[nome da música]_
🎶 ${prefix}play2 → _[nome da música]_
📁 ${prefix}playdoc → _[música/doc]_
💽 ${prefix}playmix → _[cantor/max10]_
🔗 ${prefix}ytmp3 → _[música/link]_
🎬 ${prefix}playvideo → _[nome do video]_
🎥 ${prefix}playvideo2 → _[nome do video]_
 Shazam ${prefix}shazam → _[marcar música]_
📹 ${prefix}playdocvideo → _[video/doc]_
🎞️ ${prefix}playmixvid → _[nome do cantor]_
📼 ${prefix}ytmp4 → _[video/link]_
📜 ${prefix}transcricao → _[link]_
💃 ${prefix}tiktokvideo → _[link]_
💌 ${prefix}frasesdeamor
🤔 ${prefix}pensador → _[ex/poesia]_
🛒 ${prefix}playstore → _[app]_
📲 ${prefix}infoapi → _[dennys api]_
🖼️ ${prefix}pinterest → _[nome]_
🧑‍🤝‍🧑 ${prefix}metadinha → _[random]_
🏞️ ${prefix}wallpaper → _[nome]_
♈ ${prefix}signo → _[nome]_
♌ ${prefix}signo2 → _[nome]_
📺 ${prefix}serie → _[nome]_
🍿 ${prefix}filme → _[nome]_
㊗️ ${prefix}otakuanime → _[nome]_
🙏 ${prefix}oração → _[tema]_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menuadm': {
client.sendMessage(from, { react: { text: '☢️', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️
  *PAINEL DE CONTROLE*
☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️

🚫 ${prefix}antiimg → _[1/0]_
🚫 ${prefix}antivideo → _[1/0]_
🚫 ${prefix}antiaudio → _[1/0]_
🚫 ${prefix}antisticker → _[1/0]_
🚫 ${prefix}antilinkgp → _[1/0]_
🚫 ${prefix}antifake → _[1/0]_
👋 ${prefix}bemvindo → _[1/0]_
📈 ${prefix}leveling → _[1/0]_
🔞 ${prefix}modoadulto → _[1/0]_
🛡️ ${prefix}so_adm → _[1/0]_
👢 ${prefix}kick → _[@marcar]_
🔨 ${prefix}ban → _[@marcar]_
⬆️ ${prefix}promover → _[@marcar]_
⬇️ ${prefix}rebaixar → _[@marcar]_
✏️ ${prefix}nomegp → _[novo nome]_
✍️ ${prefix}descgp → _[nova descrição]_
📢 ${prefix}marcar → _[mensagem]_
🔄 ${prefix}grupo → _[f/a]_
🔗 ${prefix}linkgp
📋 ${prefix}listadmins
ℹ️ ${prefix}grupoinfo

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menudono': {
client.sendMessage(from, { react: { text: '💰', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/meudono.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

💰💰💰💰💰💰💰💰💰💰💰💰
      *IMPÉRIO DO MR. BURNS*
💰💰💰💰💰💰💰💰💰💰💰💰

🔴 ${prefix}botoff
🟢 ${prefix}boton
➕ ${prefix}addpremium
➖ ${prefix}delpremium
📈 ${prefix}addlevel
📉 ${prefix}tirarlevel
🪙 ${prefix}addgold
🗑️ ${prefix}tirargolds
🚫 ${prefix}blockcmdgp → _[cmd]_
✅ ${prefix}unblockcmdgp → _[cmd]_
🏠 ${prefix}alugargp
👋 ${prefix}removeraluguel
⏳ ${prefix}cortesia24
📋 ${prefix}lista-aluguel
🛍️ ${prefix}comprarbot
📊 ${prefix}totalcmd
👥 ${prefix}usuários → _[lista]_
🚷 ${prefix}excluir_usuarios → _[lista]_
🌍 ${prefix}verificado-global
🔐 ${prefix}privphotobot
🔒 ${prefix}privaddgroup
😴 ${prefix}ausente
📲 ${prefix}compartilharcase → _[nome]_
➕ ${prefix}addcase
🗑️ ${prefix}delcase
🔨 ${prefix}bangp
🔄 ${prefix}unbangp
💎 ${prefix}listacmdprem
✨ ${prefix}addcmdprem
❌ ${prefix}delcmdprem
🖼️ ${prefix}fundobemvindo
🌇 ${prefix}fundosaiu
👑 ${prefix}serpremium
📂 ${prefix}listagp
👀 ${prefix}visualizarmsg
🎵 ${prefix}audio-menu
✍️ ${prefix}addpalavra
🗑️ ${prefix}delpalavra
💳 ${prefix}addpix
✏️ ${prefix}setpix
🗑️ ${prefix}delpix
💯 ${prefix}zerarsc
🎁 ${prefix}gerargf
🗑️ ${prefix}delgf
🔑 ${prefix}codelistgp
⚙️ ${prefix}gerarcodegp
🗑️ ${prefix}delcodegp
🚫 ${prefix}blocklevel
✅ ${prefix}unblocklevel
🗑️ ${prefix}rmlevel

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menulogos': {
client.sendMessage(from, { react: { text: '✒️', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️
      *MENU DE LOGOS*
☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️☢️

🎨 ${prefix}venomlogo1 → _[texto]_
🎨 ${prefix}venomlogo2 → _[texto]_
🎨 ${prefix}venomlogo3 → _[texto]_
🎨 ${prefix}venomlogo4 → _[texto]_
🎨 ${prefix}venomlogo5 → _[texto]_
🎨 ${prefix}venomlogo6 → _[texto]_
🎨 ${prefix}venomlogo7 → _[texto]_
🎨 ${prefix}venomlogo8 → _[texto]_
🎨 ${prefix}venomlogo9 → _[texto]_
🎨 ${prefix}venomlogo10 → _[texto]_
🎨 ${prefix}venomlogo11 → _[texto]_
🎨 ${prefix}venomlogo12 → _[texto]_
🎨 ${prefix}venomlogo13 → _[texto]_
🎨 ${prefix}venomlogo14 → _[texto]_
🎨 ${prefix}venomlogo15 → _[texto]_
🎭 ${prefix}logoanonimos → _[texto]_
👻 ${prefix}logoespectro → _[texto]_
🌊 ${prefix}logosuweg → _[texto]_
💻 ${prefix}logoshacker → _[texto]_
⛓️ ${prefix}logostrava → _[texto]_
💥 ${prefix}travazapimg → _[random]_
🖌️ ${prefix}criarimg → _[nome]_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menufigu': {
client.sendMessage(from, { react: { text: '🛹', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹
  *MENU DE FIGURINHAS*
🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹

✂️ ${prefix}s → _(Marcar foto/vídeo)_
✍️ ${prefix}attp → _(Seu texto)_
🎬 ${prefix}togif → _(Marcar sticker)_
🌉 ${prefix}toimg → _(Marcar sticker)_
🤖 ${prefix}stickeria → _(Criar com IA)_
🎭 ${prefix}roubar → _(Nome/Autor)_
😀 ${prefix}figuemoji → _(max 10)_
😂 ${prefix}figumemes → _(max 10)_
㊗️ ${prefix}figuanime → _(max 10)_
👶 ${prefix}figubebe → _(max 10)_
🐶 ${prefix}figuanimais → _(max 10)_
🐸 ${prefix}figuflork → _(max 10)_
👧 ${prefix}figucoreana → _(max 10)_
🦁 ${prefix}figudesenho → _(max 10)_
🔞 ${prefix}figu18 → _(max 10)_
📦 ${prefix}figurinhas → _(max 10)_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'alteradores': {
client.sendMessage(from, { react: { text: '🧪', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪
  *LABORATÓRIO DO FRINK*
🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪

🐢 ${prefix}videolento → _[marca]_
🐇 ${prefix}videorapido → _[marca]_
🔄 ${prefix}videocontrario → _[marca]_
🐌 ${prefix}audiolento → _[marca]_
🐆 ${prefix}audiorapido → _[marca]_
📉 ${prefix}grave → _[marca]_
🔉 ${prefix}grave2 → _[marca]_
🐿️ ${prefix}esquilo → _[marca]_
💥 ${prefix}estourar → _[marca]_
🔊 ${prefix}bass → _[marca]_
🔊 ${prefix}bass2 → _[marca]_
👦 ${prefix}vozmenino → _[marca]_
🔗 ${prefix}gerarlink → _[img]_
🌐 ${prefix}gerarlink2 → _[aud/vid/img]_
📤 ${prefix}upload → _[aud/vid/img]_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: info });
}
break;

case 'brincadeiras': {
client.sendMessage(from, { react: { text: '🛹', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/Menubrinks.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
// A variável 'legendaMenu' agora contém o texto no estilo Simpsons
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹
    *JOGOS & BRINCADEIRAS*
🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹🛹

#️⃣ ${prefix}Jogodavelha → _[@Marcar]_
🪢 ${prefix}Jogodaforca → _[Iniciar]_
🧞 ${prefix}Akinator → _[iniciar jogo]_
🎰 ${prefix}Cassino
💣 ${prefix}Minado → _[dificuldade]_
✊ ${prefix}Ppt → _[Pedra/Papel/Tesoura]_
🧠 ${prefix}Anagrama → _[1/0]_
🎨 ${prefix}Gartic → _[1/0]_
🎶 ${prefix}Whatmusic → _[1/0]_
🐾 ${prefix}Quizanimal → _[1/0]_
🧩 ${prefix}Enigma → _[1/0]_
🤔 ${prefix}Vab → _[Você prefere?]_
🖐️ ${prefix}Eununca → _[Eu nunca, eu já]_

🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺
    *INTERAÇÕES & RANKS*
🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺🍺

🏳️‍🌈 ${prefix}Gay → _[marca (@)]_
🤘 ${prefix}Corno → _[marca (@)]_
🔥 ${prefix}Gostoso → _[marca (@)]_
😍 ${prefix}Gostosa → _[marca (@)]_
😈 ${prefix}safado → _[marca (@)]_
😘 ${prefix}Beijo → _[marca (@)]_
👊 ${prefix}soco → _[marca (@)]_
💀 ${prefix}Matar → _[marca (@)]_
👋 ${prefix}Tapa → _[marca (@)]_
💥 ${prefix}brigar → _[marca (@)]_
❤️‍🔥 ${prefix}Casal → _[Casal do grupo]_
🏆 ${prefix}Rankgay → _[5 gays]_
🏆 ${prefix}Rankcorno → _[5 cornos]_
🏆 ${prefix}Rankgostoso → _[5 gostosos]_
🏆 ${prefix}Rankotakus → _[5 otakus]_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menupremium': {
client.sendMessage(from, { react: { text: '💰', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/Menuvip.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
// A variável 'legendaMenu' agora contém o texto no estilo Simpsons
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

💰💰💰💰💰💰💰💰💰💰💰💰
      *MENU PREMIUM*
💰💰💰💰💰💰💰💰💰💰💰💰

🔓 ${prefix}Destrava
🎬 ${prefix}edits → _(random)_
✨ ${prefix}editsjujutsu → _[random]_
🍥 ${prefix}editsnaruto → _[random]_
🔥 ${prefix}freefire → _[random]_
🔫 ${prefix}freefire2 → _[random]_
🤖 ${prefix}gemini → _[pergunte algo]_
🧠 ${prefix}chatgpt → _[pergunte algo]_
👤 ${prefix}pessoafake → _[número]_
📍 ${prefix}localizarcep → _[número]_
☎️ ${prefix}Listaddd → _[Número]_
💳 ${prefix}Gerarcpf
📋 ${prefix}Premiumlist
🤏 ${prefix}Tinyurl → _[Link]_
✂️ ${prefix}Cuttly → _[Link]_
🔗 ${prefix}Bitly → _[Link]_
📱 ${prefix}Celular → _[Nome]_
🗺️ ${prefix}Scep → _[Número]_
💲 ${prefix}Cotacao → _[Moeda]_
💰 ${prefix}Dinextenso → _[Valor]_
📞 ${prefix}Sip → _[Número]_
📄 ${prefix}Validarcnpj → _[número]_
📸 ${prefix}Igstalk → _[@usuário]_
🆔 ${prefix}Validarcpf → _[número]_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menuefeitos': {
client.sendMessage(from, { react: { text: '🧪', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
// A variável 'legendaMenu' agora contém o texto no estilo Simpsons
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️
    *MENU DE EFEITOS*
🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️🖼️

🚩 ${prefix}Comunismo     → _(marcar)-(img)_
🇧🇷 ${prefix}Bolsonaro     → _(marcar)-(img)_
🏳️‍🌈 ${prefix}lgbt          → _(marcar)-(img)_
🎨 ${prefix}boboross      → _(marcar)-(img)_
🤦 ${prefix}facepalm      → _(marcar)-(img)_
🪦 ${prefix}morterip      → _(marcar)-(img)_
⭕ ${prefix}circle        → _(marcar)-(img)_
🔄 ${prefix}invertcores   → _(marcar)-(img)_
👾 ${prefix}pixelate      → _(marcar)-(img)_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;

case 'menuanime': {
client.sendMessage(from, { react: { text: '㊗️', key: info.key } });
if (isAudioMenu) {
try {
const audiomenu = fs.readFileSync('./arquivos/audios/menu.mp3');
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} catch (error) { console.error("Erro ao carregar áudio do menu local:", error);
}}
// A variável 'legendaMenu' agora contém o texto no estilo Simpsons
let legendaMenu = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

┌─🍩 *INFORMAÇÕES*
│
├ Homer: *${NomeDoBot}*
├ Bart: *${pushname}*
├ Lisa: *${statuspremium}*
├ Marge: *${hora}*
├ Maggie: *${prefix}*
│
└───────────

🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒
      *LOJA DE QUADRINHOS*
🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒

😂 ${prefix}animemes      → _[random]_
👧 ${prefix}loli          → _[random]_
🐱 ${prefix}neko          → _[random]_
👰 ${prefix}waifu         → _[random]_
😘 ${prefix}beijo2        → _[random]_
👒 ${prefix}luffy         → _[random]_
⚔️ ${prefix}zoro          → _[random]_
👺 ${prefix}tanjiro       → _[random]_
👁️ ${prefix}gojo          → _[random]_
🎋 ${prefix}nezuko        → _[random]_
💙 ${prefix}rem           → _[random]_
🍥 ${prefix}naruto        → _[random]_
⚡ ${prefix}sasuke        → _[random]_
🌸 ${prefix}sakura        → _[random]_
👁️‍🗨️ ${prefix}itachi        → _[random]_
📖 ${prefix}kakashi       → _[random]_
🌀 ${prefix}madara        → _[random]_
💜 ${prefix}hinata        → _[random]_
🎭 ${prefix}obito         → _[random]_
🔩 ${prefix}pain          → _[random]_
💥 ${prefix}deidara       → _[random]_
🌼 ${prefix}ino           → _[random]_
🕊️ ${prefix}konan         → _[random]_
🐌 ${prefix}tsunade       → _[random]_
🐸 ${prefix}jiraya        → _[random]_
👓 ${prefix}sarada        → _[random]_
🔩 ${prefix}boruto        → _[random]_
🐍 ${prefix}mitsuki       → _[random]_
⚡ ${prefix}minato        → _[random]_
🌶️ ${prefix}kushina       → _[random]_
🏜️ ${prefix}gaara         → _[random]_
🧠 ${prefix}shikamaru     → _[random]_
🌪️ ${prefix}temari        → _[random]_
🐙 ${prefix}killerbee     → _[random]_
🐺 ${prefix}yamcha        → _[random]_
🌳 ${prefix}yamato        → _[random]_
👑 ${prefix}vegeta        → _[random]_
🐉 ${prefix}goku          → _[random]_
🗡️ ${prefix}trunks        → _[random]_
🧒 ${prefix}goten         → _[random]_
🧪 ${prefix}bulma         → _[random]_
🤖 ${prefix}android18     → _[random]_
💪 ${prefix}broly         → _[random]_
👩‍🔬 ${prefix}android21     → _[random]_
🤺 ${prefix}asuna         → _[random]_
⚔️ ${prefix}kirito        → _[random]_
⛓️ ${prefix}eren          → _[random]_
🧹 ${prefix}levi          → _[random]_
🧣 ${prefix}mikasa        → _[random]_
🐉 ${prefix}meliodas      → _[random]_
🗡️ ${prefix}guts          → _[random]_
👑 ${prefix}elizabeth     → _[random]_

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { image: { url: menuImagem },
caption: legendaMenu, mentions: [sender], contextInfo: {
externalAdReply: {
title: dono,
body: `${NomeDoBot}`,
thumbnailUrl: donoimg,
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: seloMeta });
}
break;
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
VERIFICADOS*/
case 'verificado-global': 
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode mexer nos selos!")
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("Smithers, remova os selos de verificado! Não quero que esses reles mortais se sintam importantes.")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`Excellent! O selo de verificado foi ativado em todos os meus comandos!`) 
}
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ÁUDIO-MENU*/
case 'audio-menu': 
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode mexer no áudio!")
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`Woo hoo! Áudio do menu ativado!`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`Ok, áudio do menu desativado. Que chato.`)
}
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
DONO*/
case 'owner':
case 'odono':
case 'dono': 
case 'infodono': {
await reagir(from, "👑");
const audioPath = './arquivos/audios/tosh.mp3';
if (isAudioMenu) {
try {
if (fs.existsSync(audioPath)) {
const audiomenu = fs.readFileSync(audioPath);
await sleep(1000);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg',ptt: true});
} else {
console.warn("Áudio local não encontrado:", audioPath);
}
} catch (error) { console.error('Erro ao enviar o áudio local:', error);
}}
const numerodn = numerodono_ofc;
const legendaDono = getInfo.infoOwner(prefix, NickDono, numerodn, NomeDoBot, Emoji, sender);
await client.sendMessage(from, {
image: { url: './menu/dono.jpeg' }, caption: legendaDono,mentions: [sender],mquoted: seloMeta });
}
break;

case 'criador': case 'suporte-dono': {
client.sendMessage(from, { react: { text: `🍺`, key: info.key } }); 
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:;Matt Groening;;;\n' + 'FN:Obrabo DEV\n' + 'item1.TEL;waid=556194333182:+55 61 9433-3182\n' + 'item1.X-ABLabel:Telefone do Bar do Moe\n' + 'END:VCARD'
await client.sendMessage(from, { contacts: { displayName: 'Obrabo DEV', contacts: [{vcard}]}
})
await msgSemQuoted(`ou ligue para o Bar do Moe: +55 61 9433-3182`)
audiomenu = await fs.readFileSync("./arquivos/audios/dono.mp3")
await sleep(5000);
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})}
break

case 'infotinder':
client.sendMessage(from, {text: getInfo.infoTinderSabs(prefix)}, {quoted: seloGpt})
break

case 'destrava':
client.sendMessage(from, { react: { text: `🛹`, key: info.key } }); 
if(!isPremium && !isGroupAdmins) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!")
client.sendMessage(from, {text: destrava(prefix)}, {quoted: seloGpt})
break 

case 'lojinha':
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
let gifTabela = './menu/menucompleto.mp4'; 
client.sendMessage(from, { video: { url: gifTabela },gifPlayback: true, caption: tabela(prefix, NomeDoBot, pushname, sender, nomeLoja, numerodono, NickDono, tempo, hora)}, { quoted: seloMeta });
break;

case 'destrava2':
if(!isPremium && !isGroupAdmins) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!")
client.sendMessage(from, {text: destrava2 (prefix)}, {quoted: seloGpt})
break 

case 'pessoafake': case 'cpf': {//THE SIMPSONS BOT by Obrabo DEV
if(!isPremium && !isGroupAdmins) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!")
if (!q) return reply(`D'oh! Diga o número para o Chefe Wiggum investigar!`);
await reply("Circulando, circulando... Puxando a ficha do meliante...");
try {
const res = await fetch(`${DENNYS_API}/api/dados-pessoais?numero=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
const json = await res.json();
if (!json.status || !json.resultado) {
return reply('D\'oh! Não achei nada sobre esse Zé Roela.');
}
const r = json.resultado;
const legenda = `  ~👮~ *FICHA CRIMINAL* ~👮~

👤 Nome: ${r.nomeCompleto}
🎂 Idade: ${r.idade}
🆔 CPF: ${r.cpf}
📧 Email: ${r.email}
📱 Telefone: ${r.telefone}
🌆 Cidade: ${r.cidade}
🏙️ Estado: ${r.estado}
📮 CEP: ${r.cep}
📍 Endereço: ${r.endereco}
`;
await client.sendMessage(from, { image: { url: r.foto },
caption: legenda }, { quoted: info });
} catch (e) { console.log(e);
await reply('D\'oh! O sistema da polícia caiu.');
}}
break;

case 'localizarcep': {//THE SIMPSONS BOT by Obrabo DEV
if(!isPremium && !isGroupAdmins) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!")
if (!q) return reply(`D'oh! Diga o CEP, seu Zé Roela!`);
try {
await reply("Procurando no mapa de Springfield...");
const res = await fetchJson(`${DENNYS_API}/api/consulta/cep/${encodeURIComponent(q)}?apikey=${DENNYS_KEY}`);
if (!res || !res.status) {
return reply("D'oh! Não achei esse CEP nem perto da casa do Flanders.");
}
let msg = `  ~📍~ *ENDEREÇO ENCONTRADO* ~📍~

🔹 *CEP:* ${res.cep}
🏙️ *Cidade:* ${res.cidade}
🌆 *Bairro:* ${res.vizinhança}
🛣️ *Rua:* ${res.rua}
📍 *Estado:* ${res.estado}
🛠️ *Serviço:* ${res.serviço}
` ;
await reply(msg);
} catch (e) { console.log("Erro na consulta de CEP:", e);
await reply("D'oh! O mapa rasgou.");
}}
break;

case 'chatgpt': {//THE SIMPSONS BOT by Obrabo DEV
if(!isPremium && !isGroupAdmins) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!")
try {
if (!q) return reply(`D'oh! O que você quer perguntar para a Lisa?`);
await reply("Hmm, deixe-me pensar... 🧠");
const response = await fetchJson(`${DENNYS_API}/api/ai/texto/chatgpt?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
if (!response || !response.status || !response.resposta) {
return reply("D'oh! A Lisa está ocupada tocando saxofone. Tente de novo.");
}
await reply(`  ~🧠~ *RESPOSTA DA LISA* ~🧠~\n${response.resposta}`);
} catch (e) { console.log("Erro no comando chatgpt:", e);
await reply("D'oh! Meu cérebro superaqueceu.");
}}
break;

case 'gemini': { // THE SIMPSONS BOT by Obrabo DEV
    if (!isPremium && !isGroupAdmins) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!");
    try {
        if (!q) return reply(`D'oh! O que você quer perguntar para a Lisa?\nExemplo: ${prefix + command} Qual o sentido da vida, rosquinhas?`);
        await reply("Hmm, a Lisa está consultando os livros dela... 🧠");

        // Puxa a chave da API do seu arquivo de configuração
        const { GEMINI_API_KEY } = require('./settings/config.json');
        
        // Monta o corpo da requisição para a API oficial do Gemini
        const requestBody = {
            contents: [{
                parts: [{
                    text: q
                }]
            }]
        };

        // Faz a chamada para a API oficial, agora usando o endpoint do Gemini 2.5 Pro
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        // Extrai a resposta do JSON da API oficial
        const resposta = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!resposta) {
            return reply("D'oh! A Lisa está ocupada tocando saxofone. Tente de novo.");
        }

        await reply(`  ~🧠~ *RESPOSTA DA LISA (2.5 PRO)* ~🧠~\n${resposta}`);
        
    } catch (e) {
        console.log("Erro no comando gemini:", e);
        await reply("D'oh! Meu cérebro superaqueceu. Tente de novo.");
    }
}
break;

case 'edits': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/edits.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Vídeo inválido no JSON.');
await client.sendMessage(from, { video: { url }, caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'editsjujutsu': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/editsjujutsu.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Vídeo inválido no JSON.');
await client.sendMessage(from, { video: { url }, caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'editsnaruto': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/editsnaruto.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Vídeo inválido no JSON.');
await client.sendMessage(from, { video: { url }, caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'freefire': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/freefire.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { video: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'freefire2': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/freefire2.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { video: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'wallpaperanimes': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/wallpaperanimes.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'animeradom': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/wall.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'wallpapers4k': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/wallpapers4k.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'animemes': {
if (!isPremium) return reply(enviar.msg.premium)
const memes = require('./arquivos/banco_dados/animememe.json');
const url = memes[Math.floor(Math.random() * memes.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'pornovid': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/sex.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Vídeo inválido no JSON.');
await client.sendMessage(from, { video: { url }, caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'sexvideo': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/sexv.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Vídeo inválido no JSON.');
await client.sendMessage(from, { video: { url }, caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'tentaculos': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/tentaculos.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'rezero': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/rezero.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'pokemon': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/pokemon.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'overlord': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/overlord.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'oniepiece': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/oniepiece.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'naruto': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/naruto.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'myheroacademy': {
const tosh = require('./arquivos/banco_dados/myheroacademy.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'monstergirls': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/monstergirls.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'lesbian': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/lesbian.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'konosuba': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/konosuba.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'jujutsukaisen': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/jujutsukaisen.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'hentai': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/hentai.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'gordinha': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/gordinha.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'futanari': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/futanari.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'dragonmaid': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/dragonmaid.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'dbz': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/dbz.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'cosplay': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/cosplay.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'blackclover': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/blackclover.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'bdsm': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/bdsm.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'bigass': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/ass.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'azurlane': {
if (!isPremium) return reply(enviar.msg.premium)
const tosh = require('./arquivos/banco_dados/azurlane.json');
const url = tosh[Math.floor(Math.random() * tosh.length)];
if (!url.startsWith('http')) return reply('Imagem inválida no JSON.');
await client.sendMessage(from, { image: { url },
caption: `${NomeDoBot}` }, { quoted: info });
}
break;

case 'plaquinha':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'plaquinha2':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'plaquinha3':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'plaquinha4':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'plaquinha5':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'plaquinha6':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'plaquinha7':{
if(!isModo18 && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modoadulto 1`)
reagir(from, "😈")
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer =(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
client.sendMessage(sender, {image: {url: buffer }, caption: `*Plaquinha feita ${pushname}*`})
await client.sendMessage(sender, { react: { text: `🔞`, key: info.key }})
}
reply(`a plaquinha esta sendo enviado no seu privado...`)
break

case 'tradutor':
case 'traduzir'://THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`D'oh! Use: ${prefix + command} idioma|texto, seu Zé Roela!`);
let txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
let [idioma, texto] = txt.split("|");
if (!texto || !idioma) return reply(`Ay, caramba! Faltou o idioma ou o texto!`);
await reply("A Lisa está pegando o dicionário dela... 🧠");
const url = `${DENNYS_API}/api/ai/texto/chatgpt?query=Traduza para ${idioma} o texto: ${encodeURIComponent(texto)}&apikey=${DENNYS_KEY}`;
const res = await fetchJson(url);
if (!res || !res.status || !res.resposta) {
return reply("D'oh! A tradução é mais difícil que entender o Vovô.");
}
await reply(`~🌐~ *TRADUÇÃO DA LISA* ~🌐~\n\n*Para ${idioma}:*\n${res.resposta}`);
} catch (e) { console.log(e);
await reply("D'oh! Deu erro na tradução.");
}
break;

case 'idiomas':
case 'idioma':
client.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: seloGpt})
break

case 'infobv':
case 'infowelcome':
case 'infobemvindo':
client.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: seloGpt})
break

case 'getquoted':
case 'getinfo':  
case 'get':  
case 'mek':
reply(JSON.stringify(info, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
client.sendMessage(from, {text: `Woo hoo! Aqui está um CPF, não conte para o Chefe Wiggum: ${cpf}`}, {quoted: seloGpt})
break

case 'ddd':
if(args.length < 1) return reply(`D'oh! Diga o DDD, seu Zé Roela!\nExemplo: ${prefix + command} 11`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `~☎️~ *LISTA TELEFÔNICA DE SPRINGFIELD* ~☎️~\n\nCidades em ${ddds.data.state} com DDD ${q}:\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
client.sendMessage(from, {text: dddlist}, {quoted: seloGpt})
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ADMS-FUNÇÕES-AKI*/
case 'nomegp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
blat = args.join(" ")
client.groupUpdateSubject(from, `${blat}`)
client.sendMessage(from, {text: 'Woo hoo! Nome do grupo alterado com sucesso!'}, {quoted: seloMeta})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
blabla = args.join(" ")
client.groupUpdateDescription(from, `${blabla}`)
client.sendMessage(from, {text: 'Woo hoo! Descrição do grupo alterada com sucesso!'}, {quoted: seloGpt})
break

case 'requestgp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
if(!q) return reply(mess.syntaxRequestProhibited(prefix))
const req = await client.groupRequestParticipantsList(from)
if (args[0] === '-r') {
await client.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "reject")
} else if (args[0] === '-a') {
mentionSemQuoted(`Woo hoo! @${args[1].split(' ')[0]}, pode entrar no Bar do Moe! O admin deixou.`)
await client.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "approve")
} else if (args[0] === '-list') {
let totalRequest = req.length
if (req == 0) return reply(`D'oh! Ninguém quer entrar no grupo. Que chato.`)
ABC = `~🚪~ *FILA PARA ENTRAR NO BAR DO MOE* ~🚪~\n\n( Total: ${totalRequest} )\n-\n`
for (var i of req) {
ABC += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\n• Número solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
ABC += `–\n`
}
mention(ABC)
}
break;

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
if(!q) return reply("D'oh! Diga o número de quem você quer convidar para a festa do Homer!")
try {
photoG = await client.profilePictureUrl(from, 'image') 
} catch {
photoG = thumbnail 
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await client.groupInviteCode(from)
client.sendMessage(rcrt, {text: "*Woo hoo!* Você foi convidado para entrar no grupo! É mais legal que uma rosquinha grátis!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Woo hoo! Convite enviado! Tomara que ele traga cerveja Duff.")
break

case 'listatm':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`D'oh! Não tem ninguém na lista de transmissão do Kent Brockman.`)
bl = "~📢~ *LISTA DE TRANSMISSÃO DO CANAL 6* ~📢~\n\n";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("D'oh! Já está na lista de transmissão.") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Woo hoo! Registrado para receber as notícias do Canal 6!")
break

case 'tirardatm':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("D'oh! Não está na lista para ser tirado.") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./database/func/tmgroup.json", JSON.stringify(rgp))
reply("Woo hoo! Tirado da lista de transmissão. Menos um para ouvir o Kent Brockman.")
break

case 'fazertm':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
var rgp = JSON.parse(fs.readFileSync("./database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("D'oh! Não tem ninguém para receber as notícias!") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var Blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `~📢~ *NOTÍCIA URGENTE DO CANAL 6* ~📢~\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
client.sendMessage(rgp[i].id, DFC)}
break

case 'grupo': { // THE SIMPSONS BOT by Obrabo DEV
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
if (!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!");
const Blackout = require('fs');
const grupoMod = require('./arquivos/banco_dados/móduloadmin/grupo.js');
let mdata_2 = {};
try {
mdata_2 = isGroup ? await client.groupMetadata(from) : {};
} catch (e) {
console.error('Erro ao obter metadados do grupo:', e);
}
const pushgrupo = mdata_2?.subject || 'Grupo';
if (args[0] === 'agendar') {
const tipo = args[1];
const hora = args[2];
if (!['fechar', 'abrir'].includes(tipo))
return reply('D\'oh! Use "agendar fechar HH:MM" ou "agendar abrir HH:MM"');
if (!/^\d{2}:\d{2}$/.test(hora))
return reply('Ay, caramba! Formato de hora inválido. Exemplo: 20:00');
if (tipo === 'fechar') {
grupoMod.agendarFechamento(client, from, hora);
reply(`Woo hoo! Agendado para fechar o Bar do Moe todos os dias às ${hora}.`);
} else {
grupoMod.agendarAbertura(client, from, hora);
reply(`Woo hoo! Agendado para abrir o Bar do Moe todos os dias às ${hora}.`);
}
} else if (args[0] === 'deletar') {
grupoMod.deletarAgendamento(from);
reply('Woo hoo! Agendamentos removidos. A anarquia reina!');
} else if (args[0] === 'a') {
try {
await client.groupSettingUpdate(from, 'not_announcement');
await client.sendMessage(from, {
video: Blackout.readFileSync('./arquivos/videos/abrir.mp4'),
caption: `*🍺 GRUPO ABERTO! 🍺*\n\n_Woo hoo! O Bar do Moe abriu! Podem entrar, seus beberrões!_\n\n_Aberto pelo valentão ${pushname}_`,
gifPlayback: true, gifAttribution: true }, { quoted: info });
} catch (error) {
console.error(error);
reply('D\'oh! Não consegui abrir o grupo.');
}
} else if (args[0] === 'f') {
try {
await client.groupSettingUpdate(from, 'announcement');
await client.sendMessage(from, {
video: Blackout.readFileSync('./arquivos/videos/fechar.mp4'),
caption: `*🍺 GRUPO FECHADO! 🍺*\n\n_Já chega por hoje, seus Zé Roelas! Vão pra casa!_\n\n_Fechado pelo valentão ${pushname}_`,
gifPlayback: true, gifAttribution: true }, { quoted: info });
} catch (error) {
console.error(error);
reply('D\'oh! Não consegui fechar o grupo.');
}} else {
await reply(`  ~👮~ *LEIS DO GRUPO* ~👮~

_Circulando, circulando, nada para ver aqui... exceto estas regras!_

┌─📜 *OPÇÕES DO COMANDO*
│
├ 🔓 *${prefix}grupo a*
│   ↳ _Abre o grupo para todos._
│
├ 🔐 *${prefix}grupo f*
│   ↳ _Fecha o grupo para admins._
│
├ 🗓️ *${prefix}grupo agendar fechar 20:00*
│   ↳ _Agenda o fechamento._
│
├ 🗓️ *${prefix}grupo agendar abrir 08:00*
│   ↳ _Agenda a abertura._
│
├ 🗑️ *${prefix}grupo deletar*
│   ↳ _Remove os agendamentos._
│
└───────────

 Woo hoo! by Obrabo DEV`);
}}
break;

case 'listagrupos':
if (!isGroup) return reply('D\'oh! Este comando é só para o dono, seu Zé Roela!')
try {
dddEstados = {
'11': 'São Paulo', '12': 'São Paulo', '13': 'São Paulo', '14': 'São Paulo',
'15': 'São Paulo', '16': 'São Paulo', '17': 'São Paulo', '18': 'São Paulo',
'19': 'São Paulo', '21': 'Rio de Janeiro', '22': 'Rio de Janeiro', '24': 'Rio de Janeiro',
'27': 'Espírito Santo', '28': 'Espírito Santo', '31': 'Minas Gerais', '32': 'Minas Gerais',
'33': 'Minas Gerais', '34': 'Minas Gerais', '35': 'Minas Gerais', '37': 'Minas Gerais',
'38': 'Minas Gerais', '41': 'Paraná', '42': 'Paraná', '43': 'Paraná',
'44': 'Paraná', '45': 'Paraná', '46': 'Paraná', '47': 'Santa Catarina',
'48': 'Santa Catarina', '49': 'Santa Catarina', '51': 'Rio Grande do Sul',
'53': 'Rio Grande do Sul', '54': 'Rio Grande do Sul', '55': 'Rio Grande do Sul',
'61': 'Distrito Federal', '62': 'Goiás', '64': 'Goiás', '63': 'Tocantins',
'65': 'Mato Grosso', '66': 'Mato Grosso', '67': 'Mato Grosso do Sul', '68': 'Acre',
'69': 'Rondônia', '71': 'Bahia', '73': 'Bahia', '74': 'Bahia', '75': 'Bahia',
'77': 'Bahia', '79': 'Sergipe', '81': 'Pernambuco', '87': 'Pernambuco',
'82': 'Alagoas', '83': 'Paraíba', '84': 'Rio Grande do Norte', '85': 'Ceará',
'88': 'Ceará', '86': 'Piauí', '89': 'Piauí', '91': 'Pará', '93': 'Pará',
'94': 'Pará', '92': 'Amazonas', '97': 'Amazonas', '95': 'Roraima', '96': 'Amapá',
'98': 'Maranhão', '99': 'Maranhão'
}
let grupos = await client.groupFetchAllParticipating()
let resposta = `~🗺️~ *MAPA DOS BAIRROS DE SPRINGFIELD* ~🗺️~\n\n`
let mentions = []
for (let [id, grupo] of Object.entries(grupos)) {
let participantes = grupo.participants || []
let estadoCategorias = {}
for (let participante of participantes) {
let numero = participante.id.split('@')[0].replace(/\D/g, '')
if (numero.length < 11 || !numero.startsWith('55')) {
console.log(`Número inválido: ${numero}`)
continue
}
let ddd = numero.substring(2, 4)
let estado = dddEstados[ddd] || 'Shelbyville'
if (!estadoCategorias[estado]) estadoCategorias[estado] = []
estadoCategorias[estado].push(`+${numero}`)
mentions.push(participante.id)
}
resposta += `*📍 Bairro:* *${grupo.subject}*\n`
resposta += `👥 *Total de Zé Roelas:* ${participantes.length}\n\n`
for (let [estado, usuarios] of Object.entries(estadoCategorias)) {
resposta += `*🌎 Região: ${estado}*\n`
usuarios.forEach((numero, index) => {
resposta += `${index + 1}. ${numero}\n`
})
resposta += `\n`
}
resposta += `${'-'.repeat(40)}\n\n`
}
await client.sendMessage(from, { text: resposta.trim(), mentions }, { quoted: seloMeta})
} catch (error) {
console.log('[LISTA_GRUPOS] Erro:', error)
reply('D\'oh! O mapa rasgou. Tente de novo.')
}
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':
case 'gpinfo':
if (!isregistrador) return reply(`D'oh! Você não está registrado! Use: ${prefix}registrar`)
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins)return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
try {
var ppUrl = await client.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await client.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `~🏫~ *RELATÓRIO DO DIRETOR SKINNER* ~🏫~\n\n• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data de Criação: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Última Alteração: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Admins (Valentões): *${groupAdmins.length}*\n• Membros (Zé Roelas): *${somembros.length}*\n• Total: *${puxarInfo.participants.length} pessoas*\n-\n• Grupo Fechado? *${returnAnnounce}*\n• Membros podem editar? *${returnRestrict}*\n-\n• Para ver quem fala mais, use: *${prefix}atividade*\n• Para ver quem não faz nada, use: *${prefix}inativos 10`
client.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: seloMeta})
break 

case 'regras':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
ppUrl = await client.profilePictureUrl(from, 'image')
const meetadata = await client.groupMetadata(from)
client.sendMessage(from, { image: { url: ppUrl }, caption: `~칠~ *REGRAS DA ESCOLA DE SPRINGFIELD* ~칠~\n\n*NOME:* ${groupName}\n*ALUNOS:* ${groupMembers.length}\n*MONITORES:* ${groupAdmins.length}\n*DESCRIÇÃO:* ${meetadata.desc}`, thumbnail: null }, { quoted: seloMeta })
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~\n\n`+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue
blue.caption = q.length > 1 ? `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~\n\n`+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~\n\n`+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `~📢~ *AVISO DO CHEFE WIGGUM:* ~📢~\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
client.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar': { // THE SIMPSONS BOT by Obrabo DEV
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
if (!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!");
try {
const groupData = await client.groupMetadata(from);
const participants = groupData.participants.map(p => p.id);
const groupAdmins = groupData.participants
.filter(p => p.admin !== null)
.map(p => p.id);
const membrosComuns = participants.filter(p => !groupAdmins.includes(p));
if (membrosComuns.length === 0) {
return reply(`D'oh! *${pushname}* - Só tem valentões aqui, não tem Zé Roelas para marcar.`);
}
if (isAudioMenu) {
const audioPath = './arquivos/audios/marcar.mp3';
try {
if (fs.existsSync(audioPath)) {
const audioData = fs.readFileSync(audioPath);
await client.sendMessage(from, { audio: audioData,mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
} else { console.warn("Áudio de marcar não encontrado:", audioPath);
}
} catch (err) { console.error("Erro ao enviar o áudio de marcar:", err);
}}
const vídeomenu = fs.readFileSync('./arquivos/videos/marcar.mp4');
let legenda = `~📢~ *AVISO DO PREFEITO QUIMBY* ~📢~\n\nMencionando todos os Zé Roelas do grupo.${q ? `\n\n*Mensagem:* ${q}` : ''}\n\n`;
membrosComuns.forEach(id => {
legenda += `☆ @${id.split('@')[0]}\n`;
});
await client.sendMessage(from, { video: vídeomenu, mimetype: 'video/mp4', gifPlayback: true,
caption: legenda, mentions: membrosComuns}, { quoted: info });
} catch (e) { console.error(e);
await reply('D\'oh! O Homer comeu o megafone.');
  }}
break;

case 'marcar2':
try {
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(q.includes(`${prefix}`)) return reply("Ay, caramba! Sem comandos aqui!")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `☆@${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('D\'oh! Deu erro pra marcar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(q.includes(`${prefix}`)) return reply("Ay, caramba! Sem comandos aqui!")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `☆https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
client.sendMessage(from, {text: teks}, {quoted: seloMeta})
} catch {
reply('D\'oh! Deu erro pra marcar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return reply("Só o Professor Frink pode mexer nisso!")
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando a geringonça...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('D\'oh! Marque um vídeo ou gif para eu transformar nessa coisa redonda.')}
client.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Ay, caramba! Marque a mensagem de quem você quer trazer de volta dos mortos!')
sleep(5000)
response2 = await client.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Olá, pessoal! O Dr. Nick Riviera trouxe o Zé Roela de volta!')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("D'oh! Só o meu criador pode me mandar embora!")
try {
client.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só o Mr. Burns pode fazer isso!")
mentions(`@${sender.split("@")[0]} Woo hoo! Agora você é um valentão (admin)!`, [sender], true)
client.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só o Mr. Burns pode fazer isso!")
mentions(`@${sender.split("@")[0]} Ha-ha! Agora você é um Zé Roela (membro comum) de novo!`, [sender], true)
client.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(menc_os2 == botNumber) return reply("D'oh! Não posso me advertir!");
if(menc_os2 == nmrdn) return reply("D'oh! Não posso advertir meu criador!");
if(groupAdmins.includes(menc_os2)) return reply("Ay, caramba! Não posso advertir um valentão!");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("D'oh! O Zé Roela já não está mais aqui.")
ADVT.push(menc_os2); setGp(dataGp)
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {client.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
client.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!marc_tds) return reply("Ay, caramba! Marque o Zé Roela que você quer perdoar.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("D'oh! Esse Zé Roela não tem nenhuma advertência.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("Woo hoo! A advertência foi removida. Pode voltar a fazer besteira.")
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
INFOS EXECUÇÃO DONO */
case 'sairdogp':
if(!SoDono)return reply("Só o Mr. Burns pode fazer isso!")
if(!q) return reply(`D'oh! Diga o número do grupo da lista!\nExemplo: ${prefix}sairdogp 0`)
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry  => entry[1])
var ingfoo = groups.map(v => v)
try {
client.sendMessage(ingfoo[q].id, {text: "Fui! O Homer me chamou pra beber uma Duff."}) 
setTimeout(() => {
client.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Woo hoo! Saí do grupo que você mandou, chefe!")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('Excellent... Mas só o Mr. Burns pode ver suas propriedades.')
var getGroups = await client.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `~💰~ *IMPÉRIO DO MR. BURNS* ~💰~\n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await client.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await client.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Link protegido pelos cães de caça."
}
teks1 += `( ${i} ) - Nome: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Zé Roelas: ${ingfoo[i].participants.length}\n-\n`
}
var audiomenu = await fs.readFileSync("./arquivos/audios/aguarde.mp3")
await sleep(3000);
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `~📝~ *RELATÓRIO DA LISA* ~📝~\n\nAtividade dos membros de Springfield:\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `• Cidadão: *@${uscnt.id.split('@')[0]}*\n• Comandos: *${uscnt.cmd_messages}*\n• Mensagens: *${uscnt.messages}*\n• Aparelho: *${uscnt.aparelho}*\n• Figurinhas: *${uscnt.figus}*\n–\n`
}
mention(teks)
} else return reply('*D\'oh! Ninguém falou nada ainda.*')
} catch (e){
console.log(e)
}
break

case 'autorizar':
case 'autoriza':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
const solAll = await client.groupRequestParticipantsList(from);
if (solAll == false) return reply('D\'oh! Não tem ninguém querendo entrar no Bar do Moe.');
let formattedString = solAll.map(item => `★ Zé Roela: *@${item.jid.replace('@s.whatsapp.net', '')}*\n★ Pediu para entrar em: *${moment.unix(item.request_time).format('LLL')}*`).join('\n———\n');
mention(`~🚪~ *FILA PARA ENTRAR NO BAR DO MOE* ~🚪~\n\n${formattedString}\n–\n★ Opções: _SIM | NÃO | ALL | NOALL_`);
await client.sendMessage({chatJid: from, sender: sender, expectedMessages: ["sim", "nao", "não", "all", "noall", "exit"], filter: (info) => info?.message?.extendedTextMessage?.text || info?.message?.conversation}, client)
.then(async(collected) => {
const AutoResp = collected?.message?.extendedTextMessage?.text || collected?.message?.conversation;
const lowerCaseAutoResp = AutoResp.toLowerCase(); 
if (/sim/gi.test(lowerCaseAutoResp)) {
await client.groupRequestParticipantsUpdate(from, [solAll[0].jid], 'approve');
} else if (/não|nao/gi.test(lowerCaseAutoResp)) {
await client.groupRequestParticipantsUpdate(from, [solAll[0].jid], 'reject');
} else if (/noall/gi.test(lowerCaseAutoResp)) {
for (let i = 0; i < solAll.length; i++) {
await client.groupRequestParticipantsUpdate(from, [solAll[i].jid], 'reject');
}
} else if (/all/gi.test(lowerCaseAutoResp)) {
for (let i = 0; i < solAll.length; i++) {
await client.groupRequestParticipantsUpdate(from, [solAll[i].jid], 'approve');
}
}
}).catch(async (err) => {
console.log(err)
});
break;

case 'versolitacoes':
case 'solicitacao':
case 'solitacoes': {
if(!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
//Bot Precisa Ser adm
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
//UpsertType 
try {
const re = await client.groupRequestParticipantsList(from)
let totalRequest = re.length
//Total de pessoas 
if (totalRequest === 0) {
return reply(`D'oh! Não tem ninguém querendo entrar no Bar do Moe.`)
  } else {
return reply(`Tem ${totalRequest} Zé Roelas querendo entrar no Bar do Moe.`)
}
//Erro
} catch (error) {
//Console.log 
console.log('Erro ao Verificar ')
//Erro
reply('D\'oh! Deu erro.')
}
}
//fim
break

case 'inativos':
case 'inativo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(q.match(/[a-z]/i) || !q) return reply(`D'oh! Use um número!\nExemplo: ${prefix+command} 0\nIsso vai mostrar quem está dormindo como o Vovô Simpson.`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Woo hoo! Ninguém está dormindo com ${q} mensagens.`)
bli = `~😴~ *LISTA DE SONOLENTOS DO VOVÔ SIMPSON* ~😴~\n\nUsuários com *${q.trim()}* mensagens ou menos:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
mention(bli)
break

case 'banfake'://THE SIMPSONS BOT by Obrabo DEV
case 'removerfake':
{
if (!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");
let TemSimm = [];
for (let SerarSeTem of groupMembers) {
if (!SerarSeTem.id.startsWith("55") && SerarSeTem.id !== botNumber && SerarSeTem.admin === null) { TemSimm.push(SerarSeTem.id);
}}
if (TemSimm.length === 0) {
return reply("Woo hoo! O Chefe Wiggum disse que não tem nenhum gringo suspeito aqui.");
}
let limite = 5;
let RemoverAgora = TemSimm.slice(0, limite);
let H_Ricky_the_Jhocker = `D'oh! ${RemoverAgora.length} gringos suspeitos encontrados! Removendo agora...`;
client.sendMessage(from, { text: `${H_Ricky_the_Jhocker}\n\n_Vamos deixar Springfield mais segura!_`, 
mentions: RemoverAgora});
try {
for (let i = 0; i < RemoverAgora.length; i++) {
await sleep(300); // Pausa para evitar travamento
await client.groupParticipantsUpdate(from, [RemoverAgora[i]], 'remove');
}
client.sendMessage(from, { text: `Woo hoo! Os ${RemoverAgora.length} primeiros gringos foram deportados com sucesso!`,});
    } catch (error) {
console.error("Erro ao remover números fake:", error);
client.sendMessage(from, { 
text: "D'oh! O Chefe Wiggum comeu uma rosquinha e não conseguiu prender ninguém. Tente de novo.",});
}}
break;

case 'banghost':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")  
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`D'oh! Diga o número de mensagens para eu saber quem está dormindo como o Vovô!\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Woo hoo! Ninguém está dormindo com ${q.trim()} mensagens.`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
client.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
txt = args.join(" ")
if(!txt) return reply(`Ay, caramba! Use o formato certo para o trote!\nExemplo: ${prefix}correio 5511.../Sua mensagem`)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('*D\'oh! Para quem é o trote?*')
if(!txt2) return reply('*D\'oh! Qual é a mensagem do trote?*')
let [result] = await client.onWhatsApp(txt1)
if(!result) return reply(`D'oh! Esse número não existe, seu Zé Roela!`)
setTimeout(() => {reagir(from, "💌️")}, 50)
reply("Woo hoo! Trote enviado com sucesso!")
client.sendMessage(result.jid, {text: `~☎️~ *Trote do Bar do Moe* ~☎️~\n\nAlguém te mandou a seguinte mensagem anônima:\n\n_"${txt2}"_`}).catch((error) => {
return reply("D'oh! O Moe desligou na minha cara. Tente de novo.")
})
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply("Só o Matt Groening pode mudar meu nome!")
setting.NomeDoBot = q
fs.writeFileSync('./settings/config.json', JSON.stringify(setting, null, 2))
reply(`Woo hoo! Meu nome foi alterado para: ${q}`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply("Só o Matt Groening pode mudar o nome do dono!") 
setting.NickDono = q
fs.writeFileSync('./settings/config.json', JSON.stringify(setting, null, 2))
reply(`Woo hoo! O nick do dono foi alterado para: ${q}`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply("Só o Matt Groening pode mudar o número do dono!")  
if(q.match(/[a-z]/i)) return reply("D'oh! Só números, seu Zé Roela!")
reply(`Woo hoo! O número do dono foi alterado para: ${q}`)
setting.numerodono = q
fs.writeFileSync('./settings/config.json', JSON.stringify(setting, null, 2))
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply("Só o Matt Groening pode mudar meu prefixo!")
setting.prefix = q
fs.writeFileSync('./settings/config.json', JSON.stringify(setting, null, 2))
reply(`Woo hoo! O prefixo foi alterado para: ${setting.prefix}`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'emoji-bot':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply("Só o Matt Groening pode mudar meu emoji!")
setting.Emoji = q
fs.writeFileSync('./settings/config.json', JSON.stringify(setting, null, 2))
reply(`Woo hoo! O emoji foi alterado para ${q}!`)
setTimeout(async () => {
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'configurar':
reply(`~⚙️~ *PAINEL DO PROFESSOR FRINK* ~⚙️~\n\n${prefix}nome-bot [Homer Simpson]\n${prefix}nick-dono [Matt Groening]\n${prefix}numero-dono [5511...]\n${prefix}prefixo-bot [!]\n${prefix}emoji-bot [🍩]\n\n_Para mais edições, fale com o meu criador! Glavin!_`)
break

case 'privphotobot': {
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if (!q) return reply(`D'oh! Use 'all', 'cntt' ou 'ngm', seu Zé Roela!`)
if (args[0] === 'all') {
reply(`Excellent! Agora todos podem ver minha bela foto.`)
await client.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`Excellent! Agora só meus contatos podem ver minha foto.`)
await client.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`Excellent! Ninguém pode ver minha foto. Privacidade total!`)
await client.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if (!q) return reply(`D'oh! Use 'all', 'cntt' ou 'ngm', seu Zé Roela!`)
if (args[0] === 'all') {
reply(`Excellent! Agora todos podem me adicionar em grupos.`)
await client.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`Excellent! Agora só meus contatos podem me adicionar em grupos.`)
await client.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`Excellent! Ninguém pode me adicionar em grupos.`)
await client.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply("Só o Matt Groening pode mudar meu prefixo!")
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/config.json', JSON.stringify(setting, null, 2))
reply(`Woo hoo! O prefixo foi alterado para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra mandar aqui, que nem o Diretor Skinner!")
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, {text: 'Woo hoo! Nome do grupo alterado com sucesso!'}, {quoted: seloMeta})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
client.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply("Só o Mr. Burns pode fazer isso!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!q) return reply('D\'oh! Cadê o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
client.sendMessage(groupMembers[i].id, {image: buff}, {caption: `~📢~ *AVISO DO PREFEITO QUIMBY* ~📢~\n\n*Grupo:* ${groupName}\n*Mensagem:* ${body.slice(6)}`})
}
reply('Woo hoo! Transmissão enviada!')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `~📢~ *AVISO DO PREFEITO QUIMBY* ~📢~\n\n*Grupo:* ${groupName}\n*Mensagem:* ${body.slice(6)}`)
}
reply('Woo hoo! Transmissão enviada!')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
nescessario.numero_dono1 = q.trim()
dono1 = nescessario.numero_dono1
setNes(nescessario)
reply(`Excellent! Segundo dono alterado para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
nescessario.numero_dono2 = q.trim()
dono2 = nescessario.numero_dono2
setNes(nescessario)
reply(`Excellent! Terceiro dono alterado para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
nescessario.numero_dono3 = q.trim()
dono3 = nescessario.numero_dono3
setNes(nescessario)
reply(`Excellent! Quarto dono alterado para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
nescessario.numero_dono4 = q.trim()
dono4 = nescessario.numero_dono4
setNes(nescessario)
reply(`Excellent! Quinto dono alterado para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
nescessario.numero_dono5 = q.trim()
dono5 = nescessario.numero_dono5
setNes(nescessario)
reply(`Excellent! Sexto dono alterado para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
nescessario.numero_dono6 = q.trim()
dono6 = nescessario.numero_dono6
setNes(nescessario)
reply(`Excellent! Sétimo dono alterado para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
reply(mess.ownersList(NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
ytb = `~😎~ *VALENTÕES DE SPRINGFIELD* ~😎~\n\nAdmins do grupo *${groupMetadata.subject}*\n*Total:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(DonoOficial) {
if(fs.existsSync("./database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Woo hoo! O chefe voltou!")
} else {
reply("D'oh! Você nem estava fora, seu Zé Roela.")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("D'oh! Você nem estava fora, seu Zé Roela.")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Woo hoo! O valentão voltou!")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões (admins) podem tirar uma soneca.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Woo hoo! O chefe foi tirar uma soneca. Mensagem de ausência definida!`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`D'oh! Diga o motivo da sua ausência!\nExemplo: ${prefix+command} Fui beber uma Duff no Bar do Moe`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Woo hoo! Mensagem de ausência criada. Se quiser voltar, use o comando *ativo*")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Woo hoo! Mensagem de ausência alterada. Se quiser voltar, use o comando *ativo*")
}
} else {
return reply("D'oh! Comando só para valentões (admins) e o Mr. Burns (dono).")
}
break

case 'addpremium': 
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode dar acesso ao clube!")
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return mention(`Excellent! Diga o número do Zé Roela e por quantos dias ele será premium.\n• Exemplo: *${prefix+command} @${nmrdn.split('@')[0]}/30*\n• Para premium infinito, use 0 dias.`)
usur = nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(usur)
if(bla) {
AB = premium.map(i => i.id).indexOf(usur)
if(premium[AB].infinito == true) return reply(`D'oh! Este Zé Roela já tem premium infinito.`)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
client.sendMessage(from, {text: `Excellent! ${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} adicionado${Number(tempo50) > 1 ? `s` : ``} para o usuário @${usur.split("@")[0]}`, mentions: [usur]}, {quoted: seloMeta})
} else {
premium.push({id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
client.sendMessage(from, {text: `${Number(tempo50) > 0 ? `Excellent! @${usur.split("@")[0]} foi adicionado à lista premium!` : `Excellent! @${usur.split("@")[0]} agora tem o privilégio do premium infinito!`}`, mentions: [usur]}, {quoted: seloMeta})
}
break

case 'delpremium':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode demitir!")
if(!marc_tds) return reply(`Smithers, marque o Zé Roela que será demitido!`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply("D'oh! Este número não está na lista premium.")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
client.sendMessage(from, {text: `Ha-ha! @${marc_tds.split("@")[0]} foi demitido da lista premium!`, mentions: [marc_tds]}, {quoted: seloMeta})
break

case 'premiumlist':
if(premium.length == 0) return reply(`D'oh! Não tem ninguém no clube do Mr. Burns.`)
tkks = `~💰~ *LISTA DO CLUBE DO MR. BURNS* ~💰~\n\n[Total: *${premium.length}*]\n–\n`
tkks += premium.map((v, index) =>  `*[${index+1}]* - Zé Roela: @${v.id.split('@')[0]}\n• Contrato: ${v.infinito == false ? `*Expira em ${v.dias} dia${v.dias > 1 ? `s` : ``}.*` : `*Contrato Infinito! Excellent!*`}`).join('\n––\n')
mention(tkks)
break

case 'limpar':
    if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
    if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.");

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
        const blankMessage = '\u200B' + '\n'.repeat(100);

        for (let i = 0; i < 4; i++) {
            await client.sendMessage(from, { text: blankMessage });
            await sleep(250);
        }

        const finalMessage = `🧹${'\n'.repeat(50)}❲❗❳ *LIMPEZA DA MARGE CONCLUÍDA* ✅`;
        await client.sendMessage(from, { text: finalMessage }, { quoted: seloMeta, contextInfo: { forwardingScore: 500, isForwarded: true } });

    } catch (e) {
        console.error("Erro ao limpar o chat:", e);
        reply("D'oh! A Marge não conseguiu limpar a bagunça do Homer.");
    }

break;


case 'd_':
if(!isPremium) return reply("~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!")
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`D'oh! Use: ${prefix + command} nome${sprd}peso${sprd}tipo\n-\nTipos: pdf, apk, mp3, etc.`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
// ... (outras conversões de mimetype)
let Messagemdoc = {document: fs.readFileSync('./database/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
client.sendMessage(from, Messagemdoc, {quoted: seloMeta})
} catch (err) {
console.log(err)
reply(`D'oh! Deu erro no documento.`)
}
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins && !isPremium) return reply("Ha-ha! Só os valentões (admins) ou premium podem usar isso.")
if(!menc_prt) return reply("Ay, caramba! Marque a mensagem que você quer que eu apague, como o Bart apaga a lousa.")
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':
if(!SoDono && !isnit && !info.key.fromMe) return reply("Só a Marge pode mudar a decoração da casa!")
if(!isQuotedImage) return reply("D'oh! Marque uma imagem, seu Zé Roela!")
reply('Woo hoo! Trocando o papel de parede... Se não funcionar, a culpa é do Homer.')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
logoslink.fundo1 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`Woo hoo! A imagem de bem-vindo foi alterada para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply("Só a Marge pode mudar a decoração da casa!")
if(!isQuotedImage) return reply("D'oh! Marque uma imagem, seu Zé Roela!")
reply('Woo hoo! Trocando o papel de parede... Se não funcionar, a culpa é do Homer.')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
logoslink.fundo2 = res
fs.writeFileSync("./settings/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`Woo hoo! A imagem de "tchau" foi alterada para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':
case 'antiligação':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`Woo hoo! Anti-ligação ativado! Se me ligar, vai levar um trote do Bart!`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('Ok, anti-ligação desativado. Pode me ligar pra beber uma Duff.')
}
break

case 'antipv':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Woo hoo! Anti-PV ativado! Se mandar mensagem no meu privado, o Homer come seu número!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('Ok, anti-PV desativado. Pode vir falar comigo no privado, seu Zé Roela.')
}
break

case 'antipv2':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("Woo hoo! Anti-PV 2 ativado! Vou te encher o saco se mandar mensagem no privado!")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply("Ok, Anti-PV 2 desativado. Pode vir falar comigo no privado.")
}
break

case 'antipv3':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("Woo hoo! Anti-PV 3 ativado! Vou ignorar todo mundo no PV, menos o Mr. Burns e os ricaços.")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("Ok, Anti-PV 3 desativado. Vou responder todo mundo, que chato.")
}
break

case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Woo hoo! Agora tem tempo de espera entre os comandos, que nem a fila do Kwik-E-Mart!" : "Ok, sem limite de comandos. Anarquia!")
break;

case 'tempocmd':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!q.trim()) return reply(`D'oh! Diga o tempo em segundos!\nExemplo: ${prefix+command} 60 (para 1 minuto)`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Woo hoo! Agora o tempo de espera entre os comandos é de ${TimeCount(q.trim())}.`)
break;

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply("Só o Mr. Burns pode fazer isso!")
if(!q.length > 6) return reply("D'oh! Marque o Zé Roela que você quer bloquear.")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('D\'oh! Esse Zé Roela já está bloqueado.')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
client.sendMessage(from, {text: `Ha-ha! O usuário @${blcp.split("@")[0]} foi bloqueado!`, mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply("Só o Mr. Burns pode fazer isso!")
if(!q.length > 6) return reply("D'oh! Marque o Zé Roela que você quer desbloquear.")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('D\'oh! Esse Zé Roela nem estava bloqueado.')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
client.sendMessage(from, {text: `Woo hoo! O usuário @${blcp.split("@")[0]} foi perdoado.`, mentions: [blcp]})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply("Só o Professor Frink pode mexer nisso!")
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return client.sendMessage(from, {text: `Glaven! Deu erro: ${err}`}, {quoted: seloMeta})
if(stdout) {
client.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply("Só o Professor Frink pode mexer nisso!")
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
client.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;  
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'gtts':
try {
if (args.length < 1) return client.sendMessage(from,{text: `D'oh! Use: ${prefix}gtts pt Oi, seu Zé Roela!`}, {quoted: seloMeta})
const gtts = require('./arquivos/funcoes/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, {text: 'D\'oh! Faltou o código do idioma!'}, {quoted: seloMeta})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Ay, caramba! Texto muito grande!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
client.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: seloMeta}).catch(e => {
return reply("D'oh! Deu erro.")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply("D'oh! Deu erro.")
}
break

case 'tagme':
const tagme = `Ay, caramba! É você, @${sender.split("@")[0]}!`
await mentions(tagme, [sender], true)
break

case 'modoaluguel': case 'aluguel': case 'modorent':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(args.length < 1) return reply('D\'oh! É 1 para ativar e 0 para desativar!')
if(Number(args[0]) === 1) {
if(isModoAluguel) return reply('O modo aluguel já está ativo, seu pão-duro.')
dataGp[0].aluguel = true
setGp(dataGp)
reply('Excellent! Modo aluguel ativado. Paguem-me!')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return reply('O modo aluguel já está desativado.')
dataGp[0].aluguel = false
setGp(dataGp)
reply('Ok, modo aluguel desativado. Por enquanto...')
} else {
reply('D\'oh! É 1 para ativar e 0 para desativar!')
}
break

case 'addcmdprem':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode mexer no clube!")
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`D'oh! Não pode adicionar o mesmo comando, seu Zé Roela.`)
if(isCmdPremium.includes(args[0]))return reply('D\'oh! Este comando já é para os ricaços.')
isCmdPremium.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`Excellent! O comando *${args[0]}* agora é exclusivo do Clube do Mr. Burns.`)
break

case 'delcmdprem':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode mexer no clube!")
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`D'oh! Não pode deletar o mesmo comando, seu Zé Roela.`)  
if(!isCmdPremium.includes(args[0]))return reply('D\'oh! Este comando nem era para os ricaços.')
var i = isCmdPremium.indexOf(args[0])
isCmdPremium.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`Excellent! O comando *${args[0]}* foi liberado para os reles mortais.`)
break

case 'listacmdprem':
tkks = `~💰~ *LISTA DO CLUBE DO MR. BURNS* ~💰~\n\n[Total: *${isCmdPremium.length}*] - Comandos só para quem tem grana:\n–\n`
tkks += isCmdPremium.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
client.sendMessage(from, {text: tkks.trim()}, {quoted: seloMeta})
break

case 'blocklist':
if(ban.length == 0) return reply(`Woo hoo! A cela do Chefe Wiggum está vazia.`)
tkks = `~👮~ *LISTA DE PROCURADOS DE SPRINGFIELD* ~👮~\n\n[Total: *${ban.length}*] - Zé Roelas bloqueados:\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Meliante: @${v.split('@')[0]}`).join('\n–\n')
client.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: seloMeta})
break

case 'blockcmdgp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Ay, caramba! Não pode bloquear o comando de bloquear!`)
if(getComandoBlock(from).includes(args[0]))return reply('D\'oh! Este comando já está na detenção.')
addComandos(from, args[0])
reply(`O comando *${args[0]}* foi para a detenção com o Bart!`)
break

case 'unblockcmdgp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Ay, caramba! Não pode desbloquear o comando de bloquear!`)  
if(!getComandoBlock(from).includes(args[0]))return reply('D\'oh! Este comando nem estava na detenção.')
deleteComandos(from, args[0])
reply(`Woo hoo! O comando *${args[0]}* foi liberado da detenção!`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if(getComandoBlock(from).length == 0) return reply("A lousa do Bart está limpa! Nenhum comando na detenção.");
tkks = `~칠~ *LOUSA DO BART* ~칠~\n\n[Total: *${getComandoBlock(from).length}*] - Comandos na detenção:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
client.sendMessage(from, {text: tkks.trim()}, {quoted: seloMeta})
break

case 'blockcmdg':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return reply(`D'oh! Não pode bloquear o mesmo comando, seu Zé Roela.`)
if(isBlockCmdG.includes(args[0]))return reply('D\'oh! Este comando já está bloqueado em toda Springfield.')
isBlockCmdG.push(args[0])
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`Excellent! O comando *${args[0]}* foi bloqueado em toda Springfield!`)
break

case 'unblockcmdg':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return reply(`D'oh! Não pode desbloquear o mesmo comando, seu Zé Roela.`)  
if(!isBlockCmdG.includes(args[0]))return reply('D\'oh! Este comando nem estava bloqueado.')
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`Excellent! O comando *${args[0]}* foi liberado para toda Springfield.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return reply("A cidade de Springfield está livre! Nenhum comando bloqueado.")
tkks = `~💰~ *DECRETOS DO MR. BURNS* ~💰~\n\n[Total: *${isBlockCmdG.length}*] - Comandos bloqueados em toda Springfield:\n–\n`
tkks += isBlockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
client.sendMessage(from, {text: tkks.trim()}, {quoted: seloMeta})
break

case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`D'oh! Diga o que você acha do bot!\nExemplo: ${prefix}avalie "Pior. Bot. De todos."`)
if(args.length >= 400) return client.sendMessage(from, {text: 'Ay, caramba! Menos de 400 letras!'}, {quoted: seloMeta})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
client.sendMessage(nmrdn, {text: tdptls}, {quoted: seloMeta})
reply("Woo hoo! Sua avaliação foi enviada para o Matt Groening! Obrigado!")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`D'oh! Diga qual o bug!\nExemplo: ${prefix}bug "o bot explodiu a usina nuclear"`)
if(args.length >= 800) return client.sendMessage(from, {text: 'Ay, caramba! Menos de 800 letras!'}, {quoted: seloMeta})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
client.sendMessage(nmrdn, {text: teks1}, {quoted: seloMeta})
reply("D'oh! Bug reportado ao Professor Frink. Se for zoeira, vou soltar os cães!")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`D'oh! Diga sua sugestão!\nExemplo: ${prefix}sugestao "mais rosquinhas!"`)
if(args.length >= 800) return client.sendMessage(from, {text: 'Ay, caramba! Menos de 800 letras!'}, {quoted: seloMeta})
sug = `[ Sugestão ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
client.sendMessage(nmrdn, {text: sug, mentions: sender}, {quoted: seloMeta})
reply("Woo hoo! Sugestão enviada para os roteiristas! Obrigado!")
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
BAIXAR/PESQUISAS */
case 'memes': case 'memedroid':
try {
reply("Ha-ha! Procurando uma piada do Krusty...")
res = await axios.get(`https://api.bronxyshost.com.br/api-bronxys/memes?apikey=`+API_KEY_BRONXYS);
teks = pickRandom(res.data.pesquisa.resultado)
await client.sendMessage(from, {image: await getBuffer(teks.imagem), caption: mess.memesImages(teks)}, {quoted: seloMeta}).catch(() => {
return reply("D'oh! O meme não teve graça.");
})
} catch (e) {
return reply("D'oh! O meme não teve graça.");
}
break;

case 'memesvid': case 'ifunnyvideo':
try {
reply("Hora do show do Comichão e Coçadinha!")
res = await axios.get(`https://api.bronxyshost.com.br/api-bronxys/memesvid?apikey=`+API_KEY_BRONXYS);
teks = pickRandom(res.data.videos)
await client.sendMessage(from, {video: await getBuffer(teks.video), caption: mess.iFunnyVideo(teks)}, {quoted: seloMeta}).catch(() => {
return reply("D'oh! O vídeo explodiu.");
})
} catch (e) {
return reply("D'oh! O vídeo explodiu.");
}
break;

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`D'oh! Notícia sobre o quê?`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
reply(theNews.data.articles.map(d => `~📢~ *NOTÍCIAS DO KENT BROCKMAN* ~📢~\n\n${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}`).join('\n\n---------------------------\n\n'))
} catch (e) {
return reply("D'oh! O Kent Brockman está de folga.")
}
break

case 'bbbnews': case 'bbb24news': case 'bbb24': case 'bbb': case 'bigbrother':
if(args[0] === "-fhouse") { /* Notícias fora da casa, o que estão comentando fora da casa? */
try {
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/bbb24/fora-da-casa?apikey=`+API_KEY_BRONXYS)
client.sendMessage(from, {image: {url: data.resultado[0].image}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n- _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: seloMeta})
} catch(error) {
return reply("D'oh! O Kent Brockman não está cobrindo isso.")
}
} else if(args[0] === "-dhouse") { /* Noticias dentro da casa, ou seja, no local. */
try {
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/bbb24/news?apikey=`+API_KEY_BRONXYS)
client.sendMessage(from, {image: {url: data.resultado[0].image}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n- _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: seloMeta})
} catch(error) {
return reply("D'oh! O Kent Brockman não está cobrindo isso.")
}
} else if(args[0] === "-bigdays") { /* BigDays - Dias de ocorrências do Big Days. */
try {
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/bbb24/bigdays?apikey=`+API_KEY_BRONXYS)
client.sendMessage(from, {image: {url: data.resultado[0].image}, caption: data.resultado.map((v, index) => `*${index+1}.* ${v.title}\n- _${v.headline}_\n–\n• Sessão da Notícia: *${capitalizeFirstLetter(v.session)}*\n• Postagem: *${v.posted}*\n• Mais informações: *${v.link}*`).join("\n———\n")}, {quoted: seloMeta})
} catch(error) {
return reply("D'oh! O Kent Brockman não está cobrindo isso.")
}
}
break;

case 'cases':
if(!SoDono) return reply("Só o Professor Frink pode ver as invenções!")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("D'oh! Não tem nenhuma invenção no laboratório.") } }
client.sendMessage(from, { text: `~🧪~ *INVENÇÕES DO PROFESSOR FRINK* ~🧪~\n\n${listCases()}` }, { quoted: seloMeta });
} catch (e) {
console.log(e)
reply('D\'oh! O laboratório explodiu!') }
break

case 'mentira':
// Frases do Detector de Mentiras do Chefe Wiggum
var respostas = ["Isso é mais falso que o cabelo do Krusty!", "Verdade! Tão verdadeiro quanto o amor do Homer por rosquinhas.", "Hmm, suspeito... Parece uma desculpa do Bart para não fazer o dever.", "Mentira! O Ralph Wiggum acreditaria, mas eu não.", "Verdade! Pode apostar uma Duff nisso.", "Isso é tão mentira que o Nelson Muntz diria 'Ha-ha!'."];
var verrificar = respostas[Math.floor(Math.random() * respostas.length)];
await reply(`~🤥~ *DETECTOR DE MENTIRAS* ~🤥~\n\nAtivado: *${verrificar}*`);
break

case 'escolha':
var opcoes = q.split("/");
if (opcoes.length < 2) return reply(`D'oh! Preciso de opções!\nEx.: *${prefix+command} Rosquinha/Cerveja Duff/Costeleta de porco*`)
var escolhido = opcoes[Math.floor(Math.random() * opcoes.length)];
// Frases da Escolha do Homer
var frasesEscolha = [`Hmm... Rosquinha... Cerveja... A escolha do Homer é: *${escolhido}*!`, `Meu cérebro diz uma coisa, minha barriga diz *${escolhido}*.`, `A resposta está no fundo de uma lata de Duff... e ela diz *${escolhido}*.`, `Se eu escolher errado, posso culpar o Milhouse? Ok, então é *${escolhido}*.`];
var fraseFinal = frasesEscolha[Math.floor(Math.random() * frasesEscolha.length)];
await reply(fraseFinal);
break

case 'sorteio':
if (!q) return reply(`D'oh! Sorteio entre o quê?\nEx.: *${prefix+command} 1/100*`)
var [min, max] = q.split("/").map(Number);
if (isNaN(min) || isNaN(max) || min >= max) return reply("D'oh! Valores inválidos, seu Zé Roela!");
var sortear = Math.floor(Math.random() * (max - min + 1)) + min;
// Frases da Loteria de Springfield
var frasesSorteio = [`O bilhete premiado da loteria do Apu é... *${sortear}*!`, `O resultado do bolão do Bar do Moe é *${sortear}*! O Barney já gastou o prêmio em cerveja.`, `O Kent Brockman anuncia, ao vivo, o número vencedor: *${sortear}*!`, `A roleta do Krusty parou no... *${sortear}*! Hey, hey!`];
var fraseSorteioFinal = frasesSorteio[Math.floor(Math.random() * frasesSorteio.length)];
await reply(`~🎟️~ *LOTERIA DE SPRINGFIELD* ~🎟️~\n\n${fraseSorteioFinal}`);
break

case 'frasedodia':
// Frases do Conselho do Homer
var frases = ["Tentar é o primeiro passo para o fracasso.", "Por que eu tive que nascer pai?", "Rosquinhas... Existe algo que elas não possam fazer?", "A culpa é minha e eu coloco em quem eu quiser!", "Álcool: a causa e a solução de todos os problemas da vida.", "Se algo é difícil de fazer, não vale a pena ser feito."];
var frase = frases[Math.floor(Math.random() * frases.length)];
await reply(`~🍩~ *CONSELHO DO HOMER* ~🍩~\n\n_"${frase}"_`);
break

case 'moeda':
var sortear2 = Math.random() < 0.5 ? "🪙 Cara" : "🪙 Coroa";
// Frases do Cara ou Coroa no Bar do Moe
var frasesMoeda = [`Joguei a moeda e... *${sortear2}*! Agora me dê uma rosquinha.`, `O resultado é... *${sortear2}*! Se deu cara, você paga a Duff. Se deu coroa, eu bebo.`, `A moeda do Apu diz... *${sortear2}*! Obrigado, volte sempre!`];
var fraseMoedaFinal = frasesMoeda[Math.floor(Math.random() * frasesMoeda.length)];
await reply(fraseMoedaFinal);
break

case 'crush':
if (!q) return reply(`D'oh! Diga os nomes!\nEx.: *${prefix+command} Homer/Marge*`)
var [pessoa1, pessoa2] = q.split("/");
if (!pessoa1 || !pessoa2) return reply("D'oh! Preciso de dois nomes, seu Zé Roela!");
var porcentagem = Math.floor(Math.random() * 101);
// Frases da Análise Amorosa da Lisa
var mensagens = [
    `A compatibilidade é de *${porcentagem}%*! Pior. Casal. De todos.`,
    `A chance é de *${porcentagem}%*! Talvez role algo, que nem o Milhouse e a Lisa.`,
    `A chance é de *${porcentagem}%*! Isso pode dar certo, como o Homer e a Marge!`,
    `A chance é de *${porcentagem}%*! Woo hoo! Combinação perfeita! Mais quente que a Usina Nuclear!`,
    `A compatibilidade é de *${porcentagem}%*! Tão provável quanto o Homer fazer dieta.`,
    `A chance é de *${porcentagem}%*! Se não der certo, a culpa é do Milhouse.`
];
var mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
await reply(`~❤️~ *ANÁLISE AMOROSA DA LISA* ~❤️~\n\nAnalisando *${pessoa1}* e *${pessoa2}*...\n${mensagem}`);
break

case 'horoscopo':
// Frases do Horóscopo da Lisa
var signos = {
    "áries": "Hoje você vai ter a energia do Homer correndo atrás de rosquinhas! ⚡",
    "touro": "Relaxe no sofá, como o Homer. Evite o trabalho. 🌿",
    "gêmeos": "Você estará mais arteiro que o Bart, cuidado com a detenção! 👀",
    "câncer": "Hmm, dia de ficar em casa com a família, como a Marge. 🌊",
    "leão": "Seu brilho será maior que a careca do Homer! 🔥",
    "virgem": "Dia de organizar tudo, como a Lisa com seus livros. 📋",
    "libra": "Tente equilibrar uma rosquinha em cada mão. ⚖️",
    "escorpião": "Você estará mais misterioso que o Sr. Burns... Excellent... 🕵️",
    "sagitário": "Aventure-se! Mas não acabe na delegacia como o Homer. 🏹",
    "capricórnio": "Trabalhe duro, como o Smithers. 🏆",
    "aquário": "Faça algo maluco, como o Professor Frink! 🌌",
    "peixes": "Siga seus sonhos, mesmo que seja só sonhar com rosquinhas. 🎭"
};
var signo = q.toLowerCase();
if (!signos[signo]) return reply("D'oh! Isso não é um signo, seu Zé Roela!");
await reply(`~🔮~ *HORÓSCOPO DA LISA* ~🔮~\n\n*${signo.charAt(0).toUpperCase() + signo.slice(1)}*: ${signos[signo]}`);
break

case 'oraculo':
if (!q) return reply("D'oh! Pergunte algo para a Bola 8 Mágica do Homer!");
// Frases da Bola 8 Mágica do Homer
var respostas = ["Woo hoo! Sim!", "Hmm... Rosquinhas... Digo, talvez.", "D'oh! Não sei!", "Não conte com isso, seu Zé Roela.", "Ha-ha! Não!", "A resposta está no fundo de uma lata de Duff.", "Sim, a menos que o Bart se meta no meio.", "Pergunte de novo depois da soneca."];
var resposta = respostas[Math.floor(Math.random() * respostas.length)];
await reply(`🤔 Você perguntou: *${q}*\n🔮 Resposta: *${resposta}*`);
break

case 'insulto':
// Frases dos Insultos do Bart
var insultos = ["Ha-ha! Você é mais burro que o Homer!", "Seu Zé Roela!", "Você é a pior. Pessoa. De todos.", "Ay, caramba! Que mané!", "Coma meus shorts!", "Você é tão chato quanto o Ned Flanders.", "Você tem a sorte do Milhouse."];
var insultoEscolhido = insultos[Math.floor(Math.random() * insultos.length)];
await reply(insultoEscolhido);
break

case 'role':
// Frases dos Tipos de Pessoas em Springfield
var tipos = ["O que some e ninguém acha, como o Homer na hora de trabalhar 🕵️", "O que bebe todas as Duffs e dorme no sofá 🍻", "O que cuida dos amigos, como a Marge 🏥", "O DJ da festa, como o Otto Mann 🎶", "O que vai embora cedo, como o Milhouse 🚕", "O intelectual que acha a festa chata, como a Lisa 🎷", "O que faz piada de tudo, como o Bart 🛹", "O dono da festa, como o Mr. Burns 💰"];
var staticas = tipos[Math.floor(Math.random() * tipos.length)];
await reply(`🎉 No rolê, você é: *${staticas}*!`);
break

case 'maps'://slayer
if (!args[0]) return reply('D\'oh! Diga o endereço, seu Zé Roela!');
let endereco = args.join(' ');
let linkMaps = `https://www.google.com/maps/search/${encodeURIComponent(endereco)}`;
// Frases do Mapa de Springfield
var frasesMaps = [`Procurando no mapa de Springfield... Tomara que não seja em Shelbyville.`, `Local encontrado! Fica perto do Bar do Moe. Cuidado para não sair de lá bêbado.`, `Achei! É logo depois da casa dos Flanders. Tente não ser muito barulhento.`];
var fraseMapsFinal = frasesMaps[Math.floor(Math.random() * frasesMaps.length)];
reply(`~🗺️~ *MAPA DE SPRINGFIELD* ~🗺️~\n\n${fraseMapsFinal}\n\n📍 ${endereco}\n🔗 [Ver no Google Maps](${linkMaps})`);
break;

case 'g1noticia':
reagir(from, "📺")
const globox = await getBuffer(`https://astromods-iszv.onrender.com/api/noticias/globo?apikey=${KEY_Ricky}`)
var bla = `~📢~ *NOTÍCIAS DO KENT BROCKMAN* ~📢~\n\n📰 *Notícia:* ${globox.resultado[0].noticia}\n💬 *Descrição:* ${globox.resultado[0].desc}\n🔆 *Categoria:* ${globox.resultado[0].categoria}\n⏳️ *Postado:* ${globox.resultado[0].postado}\n🔗 *Link:* ${globox.resultado[0].link}`
client.sendMessage(from, {image: {url: globox.resultado[0].imagem}, caption: bla}, {quoted: seloMeta})
break

case 'akinator':
  if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");

  if (!akinator.some(game => game.id === from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) {
    return reply("D'oh! O Akinator está tirando uma soneca no sofá. Volte mais tarde!");
  }

  if (!akinator.some(game => game.id === from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
    jogo.now = true;
    akinator.splice(0, 1);
    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2));
  }

  if (!akinator.some(game => game.id === from)) {
    reply(`~🧞~ *JOGO DO AKINATOR* ~🧞~\n\nAtenção, ${pushname}! Vou ler sua mente como a Marge lê as intenções do Homer...\n\n_Responda com: *Sim*, *Não*, *Não sei*, *Provavelmente sim* ou *Provavelmente não*_\n\nBoa sorte, seu Zé Roela!`);

    const dateAKI = moment.tz('America/Sao_Paulo').format('DD');
    let aki;

    try {
      aki = new Aki({ region: 'pt', childMode: false });
      await aki.start();
    } catch (e) {
      console.log("Região 'pt' falhou. Tentando com 'en'...");
      aki = new Aki({ region: 'en', childMode: false });
      await aki.start();
    }

    jogo.now = false;
    jogo.jogador = sender;

    akinator.push({
      id: from,
      jogador: sender,
      finish: 0,
      dia: dateAKI,
    });

    fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2));

    reply(`~🧞~ *PERGUNTA DO AKINATOR* ~🧞~\n\n*Questão:* ${aki.question}`);
  } else {
    const jogadorAtual = akinator.find(game => game.id === from).jogador.split('@')[0];
    return mention(`D'oh! O(a) @${jogadorAtual} já está jogando. Espere sua vez, como eu espero pela cerveja Duff!`);
  }
  
break;

case 'resetaki':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!JSON.stringify(akinator).includes(from) && !SoDono) return reply("D'oh! Não tem nenhum jogo pra resetar, seu Zé Roela.")
nosei = SoDono ? 0 : akinator.map(i => i.id).indexOf(from)
if(akinator[nosei].jogador == sender || isGroupAdmins || SoDono) {
jogo.now = true
akinator.splice(nosei, 1)
  fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
reply(`Woo hoo! Jogo resetado! Pode começar de novo.`)
} else {
reply("Ha-ha! Só os valentões (admins) ou quem começou a bagunça podem resetar.")
}
break

case 'take':
if(!isQuotedSticker) return reply('Ay, caramba! Marque uma figurinha, seu Zé Roela!')
try {
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return reply(`D'oh! Você não tem uma marca d'água! Use o comando *${prefix}rgtake* primeiro, seu bocó.`)
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${rgtake[i8].mcdagua2}`, `${rgtake[i8].mcdagua1}`)
var sti = new Buffer.from(mantap, 'base64');
client.sendMessage(from, {sticker: sti, contextInfo: {externalAdReply:{title: `Woo hoo! Renomeado para: ${rgtake[i8].mcdagua1}|${rgtake[i8].mcdagua2}`,body:"", previewType:"PHOTO",thumbnail: sti}}})
} catch(e) {
reply("D'oh! Deu erro. A culpa é do Milhouse.")
}
break

case 'rgtake':
var [TP, TP2] = q.split("|")
rgtakergtake = []
for (i of rgtake) {rgtakergtake.push(i.usuario)}
if(rgtakergtake.indexOf(sender) >= 0) return reply("D'oh! Você já tem uma marca d'água, seu Zé Roela!")
if(!q.includes("|")) return reply(`Ay, caramba! Use: *${prefix + command} Nome do Pacote|Autor*`)
if(!TP) return reply(`D'oh! Faltou o primeiro nome, seu bocó!`)
if(!TP2) return reply(`D'oh! Faltou o segundo nome, seu bocó!`)
rgtake.push({usuario: sender, mcdagua1: TP, mcdagua2: TP2})
fs.writeFileSync("./database/usuarios/take.json", JSON.stringify(rgtake, null, 2))
reply(`Woo hoo! Sua marca d'água foi registrada! Agora use *${prefix}take* para roubar figurinhas como o Bart rouba rosquinhas!`)
break

case 'rntake':
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return reply(`D'oh! Você não tem uma marca d'água para renomear, seu Zé Roela!`)
if(!q.includes("|")) return reply(`Ay, caramba! Use: *${prefix + command} Nome do Pacote|Autor*`)
var [MARCAD1, MARCAD2] = q.split("|")
if(!MARCAD1) return reply(`D'oh! Faltou o primeiro nome, seu bocó!`)
if(!MARCAD2) return reply(`D'oh! Faltou o segundo nome, seu bocó!`)
rgtake[i8].mcdagua1 = MARCAD1
rgtake[i8].mcdagua2 = MARCAD2
fs.writeFileSync("./database/usuarios/take.json", JSON.stringify(rgtake, null, 2) + '\n')
reply(`Woo hoo! Sua marca d'água foi alterada para *"${MARCAD1}|${MARCAD2}"*!`)
break

case 'frases': case 'pensador':
if(!q) return reply(`Hmm, sobre o que você quer filosofar?\nExemplo: *${prefix+command} rosquinhas`);
AB = await fetchJson(`http://api-expr.sabapi.tech:6060/search/pensador?query=${q}&apikey=`+API_KEY_BRONXYS)
ABC = ""
ABC += `${AB.resultado.map(v => `“${v.frase}”`).join('\n–\n')}`
reply(`~🧠~ *PENSAMENTOS DA LISA* ~🧠~\n\n${ABC}`).catch(e => {
return reply("D'oh! Meu cérebro superaqueceu. Tente uma palavra mais fácil.")
})
break;

case 'jogo': case 'jogos': case 'game': case 'games': 
if (!q) return reply("D'oh! Qual jogo você quer que eu procure na loja do Comic Book Guy?")
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await reply("Pior. Jogo. De todos. Não achei.");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
client.sendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: seloMeta})
}
break;

case 'celular':
try {
if(!q.trim()) return reply(`D'oh! Qual celular você quer que o Professor Frink analise?\nExemplo: ${prefix+command} MyPhone`);
reply("Glaven! Analisando os circuitos...");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info_celular?celular=${q}&apikey=astroshop`);
reply(`~🧪~ *ANÁLISE DO PROFESSOR FRINK* ~🧪~\n\n📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico!"}`);
} catch (e) {
return reply("D'oh! A geringonça explodiu!");
}
break;

case "threads": case "thr":
if(!q.includes("threads.net")) return reply(`D'oh! Cadê o link do Threads, seu Zé Roela?`)
reply("Woo hoo! Baixando o vídeo...")
try {
client.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/threads?url=${q}&apikey=astroshop`}})
} catch (e) {
return reply("D'oh! O Homer comeu o fio da internet. Tente de novo.")
}
break;

/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
COMANDOS DOWNLOADS*/

case 'oracao': { // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!args[0]) return reply(`Ora-bolas, vizinho! Diga sobre o que você quer orar, amiguinho.\nExemplo: *${prefix}oracao proteção*`);
        const tema = args.join(" ").trim();
        const respostaIA = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Escreva uma oração curta e amigável no estilo de Ned Flanders sobre ${encodeURIComponent(tema)}&apikey=${DENNYS_KEY}`);
        const oracao = respostaIA?.resposta || "Ora-bolas! Que o seu dia seja abençoadinho, vizinho!";
        const imagem = `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent("igreja de springfield " + tema)}`;
        await client.sendMessage(from, {
            image: { url: imagem },
            caption: `~🙏~ *ORAÇÃO DO FLANDERS* ~🙏~\n\n*Tema:* ${tema}\n\n_"${oracao}"_`
        }, { quoted: info });
    } catch (e) {
        console.error("ERRO NO COMANDO ORAÇÃO:", e);
        await reply("Ora-bolas! Parece que o sinal divino está meio fraquinho. Tente de novo, vizinho!");
    }
}
break;

case 'play': // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("D'oh! Precisa me dizer o nome da música, seu Zé Roela!");
        reply("_Afinando o saxofone da Lisa... 🎷_");

        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        const resultados = Array.isArray(res?.resultado) ? res.resultado : [];
        if (!resultados.length) return reply("Pior que não achei! Nem na loja de discos do Comic Book Guy.");

        const video = resultados.find(v => v.videoId || v.url);
        if (!video) return reply("D'oh! Não encontrei um vídeo para essa música.");

        if (video?.duration?.seconds >= 3600)
            return reply("Ay, caramba! Uma hora de música? A atenção do Homer não dura tanto!");

        const mensagem = `┌─── ･ ｡ﾟ🎷: *. JAZZ DA LISA .* :🎷｡ﾟ･ ───┐
│
├ 🎵 *Título:* ${video.title}
├ 👤 *Canal:* ${video.author?.name || 'Desconhecido'}
├ ⏱️ *Duração:* ${video.duration?.timestamp || '??'}
├ 📅 *Lançado:* ${video.ago || 'Desconhecido'}
│
├─🎼 *Tocando agora para:* ${pushname}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();

        await client.sendMessage(from, {
            image: { url: video.thumbnail || video.image },
            caption: mensagem
        }, { quoted: info });

        const audioUrl = `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            fileName: `${video.title}.mp3`
        }, { quoted: info });

    } catch (e) {
        console.error("Erro no play:", e);
        return reply("D'oh! O Homer comeu o fio da internet. Tente outro nome.");
    }
break;

case 'play2': // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("D'oh! Diga o nome da música para o play2, seu bocó!");
        await reply(`Woo hoo! Procurando sua música, ${pushname}...`);
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("Pior que não achei! Nem na loja de discos do Comic Book Guy.");
        const video = res.resultado.find(v => v.type === 'video');
        if (!video) return reply("D'oh! Não encontrei um vídeo para essa música.");
        if (video?.duration?.seconds >= 3600)
            return reply("Ay, caramba! Uma hora de música? A atenção do Homer não dura tanto!");
        const mensagem = `┌─── ･ ｡ﾟ🍺: *. BAR DO MOE .* :🍺｡ﾟ･ ───┐
│
├ 🎵 *No Jukebox:* ${video.title}
├ 👤 *Artista:* ${video.author?.name || 'Desconhecido'}
│
├─🥃 *Pedido por:* ${pushname}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
        const fundo = 'https://i.imgur.com/BE8Rbzu.jpeg';
        const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=BAR%20DO%20MOE&text2=${encodeURIComponent(video.title)}&text3=Duracao:%20${encodeURIComponent(video.duration?.timestamp || '0:00')}&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
        await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
        const audioUrl = `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: info });
    } catch (e) {
        console.error("Erro no play2:", e);
        return reply("D'oh! O Homer derrubou cerveja no Jukebox. Tente outra música.");
    }
break;

case 'playdoc': // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("Precisa de um documento? Diga o nome da música, seu Zé Ruela!");
        await reply('Procurando nos arquivos do Diretor Skinner...');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("Pior que não achei! Nem na loja de discos do Comic Book Guy.");
        const video = res.resultado.find(v => v.type === 'video');
        if (!video) return reply("D'oh! Não encontrei um vídeo para essa música.");
        if (video?.duration?.seconds >= 3600)
            return reply("Ay, caramba! Uma hora de música? A atenção do Homer não dura tanto!");
        const mensagem = `┌─── ･ ｡ﾟ🏫: *. ESCOLA DE SPRINGFIELD .* :🏫｡ﾟ･ ───┐
│
├ 📄 *Relatório Musical para:* ${pushname}
│
├ 🎵 *Título:* ${video.title}
├ 🎤 *Artista:* ${video.author?.name || 'Desconhecido'}
├ 🕒 *Duração:* ${video.duration?.timestamp || '??'}
│
├─📝 *Nota:* A+ (Não conte para o Bart)
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
        const fundo = 'https://i.imgur.com/FUsmFrf.jpeg';
        const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=RELATORIO%20ESCOLAR&text2=${encodeURIComponent(video.title)}&text3=Duracao:%20${encodeURIComponent(video.duration?.timestamp || '0:00')}&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
        await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
        const audioUrl = `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, { document: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: info });
    } catch (e) {
        console.error("Erro no playdoc:", e);
        return reply("D'oh! O Homer comeu o seu dever de casa. Tente de novo.");
    }
break;

case 'ytmp3': // THE SIMPSONS BOT by Obrabo DEV
    await reagir(from, '🍩');
    if (!q) return reply("D'oh! Me dê o link ou o nome da música, senão como eu vou saber, né?");
    const cleanUrl = q.split("&")[0].split("?si=")[0].trim();
    const isURL = cleanUrl.includes("youtube.com") || cleanUrl.includes("youtu.be");
    const parametro = isURL ? `url=${encodeURIComponent(cleanUrl)}` : `nome=${encodeURIComponent(q)}`;
    try {
        await client.sendMessage(from, {
                audio: { url: `${DENNYS_API}/api/download/play?${parametro}&apikey=${DENNYS_KEY}` },
                fileName: `audio.mp3`,
                mimetype: "audio/mpeg"
            }, { quoted: info }
        );
    } catch (e) {
        console.error("Erro ao baixar áudio:", e);
        reply("D'oh! O Homer comeu o fio da internet. Verifique o link e tente de novo.");
    }
break;

case 'playmix': // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("Quer um mix? Diga o nome da música ou artista, seu Zé Ruela!");
        await reply('Woo hoo! Preparando um mix mais legal que a fita de trotes do Bart!');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("Pior que não achei! Nem na loja de discos do Comic Book Guy.");
        const audios = res.resultado.filter(v => v.type === 'video').slice(0, 10);
        if (audios.length === 0) return reply("D'oh! Não achei nenhum vídeo pra fazer o mix.");
        for (let i = 0; i < audios.length; i++) {
            const video = audios[i];
            const mensagem = `┌─── ･ ｡ﾟ📼: *. FITA K7 DO BART .* :📼｡ﾟ･ ───┐
│
├ 🎶 *Faixa ${i + 1}/10:*
├ ${video.title}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
            const fundo = 'https://i.imgur.com/BecQ61A.jpeg';
            const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=MIX%20DO%20BART&text2=${encodeURIComponent(video.title)}&text3=Faixa%20${i+1}&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
            await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
            const audioUrl = `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(video.url)}&apikey=${DENNYS_KEY}`;
            await client.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: info });
            await sleep(1000);
        }
    } catch (e) {
        console.error("Erro no playmix:", e);
        return reply("D'oh! O Milhouse enrolou a fita. Tente de novo.");
    }
break;

case 'playvideo': { // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("D'oh! Diga o nome do vídeo que você quer ver na TV!");
        await reply('Sintonizando o Canal 6... Não mude de canal!');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("D'oh! Não achei esse vídeo nem nas fitas velhas do Vovô.");
        const video = res.resultado.find(v => v.type === 'video');
        if (!video) return reply("D'oh! Não encontrei um vídeo para isso.");
        if (video?.duration?.seconds >= 3600)
            return reply("Ay, caramba! Uma hora de vídeo? A atenção do Homer não dura tanto!");
        const mensagem = `┌─── ･ ｡ﾟ📺: *. CANAL 6 .* :📺｡ﾟ･ ───┐
│
├ 🎬 *Programa:* ${video.title}
├ 👤 *Apresentador:* ${video.author?.name || 'Desconhecido'}
├ 🕒 *Duração:* ${video.duration?.timestamp || '??'}
│
├─🍿 *Pipoca pronta para:* ${pushname}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
        await client.sendMessage(from, { image: { url: video.thumbnail || video.image }, caption: mensagem }, { quoted: info });
        const videoUrl = `${DENNYS_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, { video: { url: videoUrl }, mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: info });
    } catch (e) {
        console.error("Erro no playvideo:", e);
        return reply("D'oh! A antena caiu. Tente sintonizar outro vídeo!");
    }
}
break;

case 'playvideo2': { // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("D'oh! Diga o nome do vídeo que você quer ver na TV!");
        await reply('Sintonizando o Canal 6... Não mude de canal!');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("D'oh! Não achei esse vídeo nem nas fitas velhas do Vovô.");
        const video = res.resultado.find(v => v.type === 'video');
        if (!video) return reply("D'oh! Não encontrei um vídeo para isso.");
        if (video?.duration?.seconds >= 3600)
            return reply("Ay, caramba! Uma hora de vídeo? A atenção do Homer não dura tanto!");
        const mensagem = `┌─── ･ ｡ﾟ📺: *. CANAL 6 .* :📺｡ﾟ･ ───┐
│
├ 🎬 *Programa:* ${video.title}
├ 👤 *Apresentador:* ${video.author?.name || 'Desconhecido'}
├ 🕒 *Duração:* ${video.duration?.timestamp || '??'}
│
├─🍿 *Pipoca pronta para:* ${pushname}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
        const fundo = 'https://i.imgur.com/nAPrnNo.jpeg';
        const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=CANAL%206&text2=${encodeURIComponent(video.title)}&text3=Duracao:%20${encodeURIComponent(video.duration?.timestamp || '0:00')}&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
        await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
        const videoUrl = `${DENNYS_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, { video: { url: videoUrl }, mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: info });
    } catch (e) {
        console.error("Erro no playvideo2:", e);
        return reply("D'oh! A antena caiu. Tente sintonizar outro vídeo!");
    }
}
break;

case 'playdocvideo': { // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("Precisa de um documento de vídeo? Diga o nome, seu Zé Ruela!");
        await reply('Procurando nos arquivos do Diretor Skinner...');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("Pior que não achei! Nem na loja de discos do Comic Book Guy.");
        const video = res.resultado.find(v => v.type === 'video');
        if (!video) return reply("D'oh! Não encontrei um vídeo para isso.");
        if (video?.duration?.seconds >= 3600)
            return reply("Ay, caramba! Uma hora de vídeo? A atenção do Homer não dura tanto!");
        const mensagem = `┌─── ･ ｡ﾟ🏫: *. ESCOLA DE SPRINGFIELD .* :🏫｡ﾟ･ ───┐
│
├ 📄 *Relatório de Mídia para:* ${pushname}
│
├ 🎬 *Título:* ${video.title}
├ 🕒 *Duração:* ${video.duration?.timestamp || '??'}
│
├─📝 *Nota:* A+ (Não conte para o Bart)
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
        const fundo = 'https://i.imgur.com/u6RjcMD.jpeg';
        const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=RELATORIO%20ESCOLAR&text2=${encodeURIComponent(video.title)}&text3=Duracao:%20${encodeURIComponent(video.duration?.timestamp || '0:00')}&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
        await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
        const videoDocUrl = `${DENNYS_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, { document: { url: videoDocUrl }, mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: info });
    } catch (e) {
        console.error("Erro no playdocvideo:", e);
        return reply("D'oh! O Homer comeu o seu dever de casa. Tente de novo.");
    }
}
break;

case 'playmixvid': { // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply("Quer um mix de vídeos? Diga o nome, seu Zé Ruela!");
        await reply('Woo hoo! Preparando uma maratona de Comichão e Coçadinha!');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
            return reply("Pior que não achei! Nem na loja de discos do Comic Book Guy.");
        const videos = res.resultado.filter(v => v.type === 'video').slice(0, 5);
        if (videos.length === 0) return reply("D'oh! Não achei nenhum vídeo pra fazer o mix.");
        for (const video of videos) {
            if (video?.duration?.seconds >= 3600) continue;
            const mensagem = `┌─── ･ ｡ﾟ📺: *. MARATONA DE VÍDEOS .* :📺｡ﾟ･ ───┐
│
├ 💥 *Episódio:* ${video.title}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim();
            const fundo = 'https://i.imgur.com/ZwDIKbw.jpeg';
            const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=MARATONA&text2=${encodeURIComponent(video.title)}&text3=Duracao:%20${encodeURIComponent(video.duration?.timestamp || '0:00')}&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
            await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
            const videoUrl = `${DENNYS_API}/api/download/playvd?nome=${encodeURIComponent(video.url)}&apikey=${DENNYS_KEY}`;
            await client.sendMessage(from, { video: { url: videoUrl }, mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: info });
            await delay(1500);
        }
    } catch (e) {
        console.error("Erro no playmixvid:", e);
        return reply("D'oh! A TV explodiu. Tente de novo mais tarde.");
    }
}
break;

case 'ytmp4': { // THE SIMPSONS BOT by Obrabo DEV
    await reagir(from, '🍩');
    if (!q) return reply("D'oh! Me dê o link ou o nome do vídeo, senão como eu vou saber, né?");
    const isURL = q.includes("youtube.com") || q.includes("youtu.be");
    const parametro = isURL ? `url=${encodeURIComponent(q)}` : `nome=${encodeURIComponent(q)}`;
    try {
        const videoUrl = `${DENNYS_API}/api/download/playvd?${parametro}&apikey=${DENNYS_KEY}`;
        await client.sendMessage(from, { video: { url: videoUrl }, fileName: `video.mp4`, mimetype: "video/mp4" }, { quoted: info });
    } catch (e) {
        console.error("Erro ao baixar vídeo:", e);
        await reply("D'oh! O Homer comeu o fio da internet. Verifique o link e tente de novo.");
    }
}
break;

case 'shazam': { // THE SIMPSONS BOT by Obrabo DEV
    if (!isQuotedAudio) return reply('Ay, caramba! Mande um áudio para eu adivinhar a música, como a Lisa com o saxofone dela!');
    const senderId = sender.replace(/[^0-9]/g, '');
    try {
        const audioMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
        const dataMedia = await getFileBuffer(audioMsg, 'audio');
        const mime = audioMsg.mimetype || '';
        const ext = mime.split('/')[1] || 'mp3';
        const filePath = `./database/data/media/audios/shazam/shazam-${senderId}.${ext}`;
        fs.writeFileSync(filePath, dataMedia);
        const base64Audio = fs.readFileSync(filePath, { encoding: "base64" });
        const hasil = await arcloud(base64Audio);
        if (!hasil) {
            DLT_FL(filePath);
            return await reply('D\'oh! Nem o Professor Frink conseguiria identificar essa música.');
        }
        const tituloDetectado = hasil.title || hasil.song || 'Desconhecido';
        const artista = hasil.artist || hasil.subtitle || 'Artista desconhecido';
        const capa = hasil.album?.cover || hasil.spotify?.album?.images?.[0]?.url || null;
        const data = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(tituloDetectado)}&apikey=${DENNYS_KEY}`);
        const video = data?.resultado?.[0];
        let thumbBuffer = null;
        if (capa) {
            try {
                const res = await fetch(capa);
                if (res.ok) thumbBuffer = await res.buffer();
            } catch (e) {
                console.warn('⚠️ Falha ao baixar a imagem de capa:', e.message);
            }
        }
        if (thumbBuffer) {
            await client.sendMessage(from, {
                image: thumbBuffer,
                caption: `┌─── ･ ｡ﾟ🎶: *. MÚSICA IDENTIFICADA .* :🎶｡ﾟ･ ───┐
│
├ 🎵 *Título:* ${video.title}
├ 👤 *Artista:* ${video.author?.name || 'Desconhecido'}
│
└─ Woo hoo! by Obrabo DEV ─┘`.trim()
            }, { quoted: info });
        }
        await client.sendMessage(from, {
            audio: { url: `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(tituloDetectado)}&apikey=${DENNYS_KEY}` },
            mimetype: 'audio/mpeg',
            ptt: false,
            jpegThumbnail: thumbBuffer || null
        }, { quoted: info });
    } catch (err) {
        console.error("Erro no comando SHAZAM:", err);
        await reply("D'oh! O Homer derrubou cerveja no aparelho de som. Tente de novo.");
    } finally {
        try {
            const pasta = `./database/data/media/audios/shazam`;
            const arquivos = fs.readdirSync(pasta).filter(f => f.includes(`shazam-${senderId}`));
            arquivos.forEach(arquivo => {
                const caminho = `${pasta}/${arquivo}`;
                if (fs.existsSync(caminho)) fs.unlinkSync(caminho);
            });
        } catch (e) {
            console.error("Erro ao apagar arquivos temporários do shazam:", e);
        }
    }
}
break;

case 'transcricao': { // THE SIMPSONS BOT by Obrabo DEV
    if (!q) return reply(`Ay, caramba! Mande o link do vídeo do YouTube para a Lisa transcrever!\nExemplo: *${prefix + command} https://...*`);
    try {
        await reagir(from, '📝');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/transcricao?url=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res || !res.status || !res.resultado || !res.resultado.transcript) {
            return reply("D'oh! Não consegui entender o que eles estão falando. Deve ser o sotaque do Vovô.");
        }
        const texto = res.resultado.transcript;
        const partes = texto.match(/[\s\S]{1,4000}/g);
        for (const parte of partes) {
            await client.sendMessage(from, { text: `  ~📜~ *TRANSCRIÇÃO DA LISA* ~📜~\n\n${parte}` }, { quoted: info });
        }
    } catch (err) {
        console.error("Erro na transcrição:", err);
        await reply("D'oh! O Homer usou o vídeo para gravar o jogo de futebol. Tente outro.");
    }
}
break;

case 'tiktokvideo': case 'tktv': { // THE SIMPSONS BOT by Obrabo DEV
    if (!q) return reply(`Woo hoo! Mande o link do TikTok para eu baixar!\n\nExemplo: *${prefix + command} https://vm.tiktok.com/...*`);
    await reagir(from, '💃');
    try {
        const urlAPI = `${DENNYS_API}/api/download/tiktok/video?url=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
        const res = await fetch(urlAPI);
        if (!res.ok || !res.headers.get("content-type")?.includes("video")) {
            return reply("D'oh! Não consegui baixar. Esse link é mais furado que uma rosquinha!");
        }
        const videoBuffer = await res.buffer();
        await client.sendMessage(from, { video: videoBuffer, caption: `_Ay, caramba! Vídeo baixado!_`, mimetype: 'video/mp4' }, { quoted: info });
    } catch (err) {
        console.error("Erro ao baixar vídeo do TikTok:", err);
        await reply("D'oh! O Homer tentou dançar e quebrou a internet. Tente de novo.");
    }
}
break;

case 'pensador': { // THE SIMPSONS BOT by Obrabo DEV
    if (!q) return reply(`Hmm, sobre o que você quer filosofar?\nExemplo: *${prefix + command} rosquinhas*`);
    try {
        await reagir(from, '🤔');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/pensadorPesquisa?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res || !res.status || !res.resultado || res.resultado.length === 0) {
            return reply("D'oh! Não achei nenhuma frase inteligente sobre isso. Nem a Lisa sabe.");
        }
        const frases = res.resultado;
        let texto = `  ~🧠~ *PENSAMENTOS DA LISA* ~🧠~\n\n`;
        frases.forEach((item, i) => { texto += `_${i + 1}._ ${item.frase}\n\n`; });
        await client.sendMessage(from, { text: texto.trim() }, { quoted: info });
    } catch (err) {
        console.error('Erro na pesquisa do Pensador:', err);
        await reply("D'oh! Meu cérebro superaqueceu. Tente uma palavra mais fácil.");
    }
}
break;

case 'frasesdeamor': { // THE SIMPSONS BOT by Obrabo DEV
    if (!q) return reply(`Oh, Marge! Sobre o que você quer uma frase de amor?\nExemplo: *${prefix + command} rosquinhas*`);
    try {
        await reagir(from, '❤️');
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/frasesDeAmor?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res || !res.status || !res.resultado || res.resultado.length === 0) {
            return reply("D'oh! Não achei nada romântico sobre isso. Tente 'cerveja'.");
        }
        const frases = res.resultado;
        let mensagem = `  ~❤️~ *FRASES DO HOMER PARA A MARGE* ~❤️~\n\n`;
        mensagem += frases.map((frase, index) => `_${index + 1}._ “${frase}”`).join('\n\n');
        await client.sendMessage(from, { text: mensagem }, { quoted: info });
    } catch (err) {
        console.error('Erro ao buscar frases de amor:', err);
        return reply("D'oh! O amor é complicado. Tente de novo.");
    }
}
break;

case 'playstore': { // THE SIMPSONS BOT by Obrabo DEV
    if (!q) return reply("Qual app você quer que o Comic Book Guy procure na Play Store?\nExemplo: *playstore The Simpsons: Tapped Out*");
    await reagir(from, "🤓");
    try {
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/playstore?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
        if (!res.status || !res.resultado?.resultado || res.resultado.resultado.length === 0)
            return reply("Pior. Pesquisa. De todas. Tente outro nome.");
        const apps = res.resultado.resultado;
        let texto = `  ~🤓~ *LOJA DE APPS DO COMIC BOOK GUY* ~🤓~\n\n`;
        for (const app of apps) {
            texto += `📦 *${app.nome}*\n`;
            texto += `👨‍💻 _Desenvolvedor:_ ${app.desenvolvedor}\n`;
            texto += `⭐ _Avaliação:_ ${app.estrelas}\n`;
            texto += `🔗 _Link:_ ${app.link}\n`;
            texto += `------------------------------\n`;
        }
        reply(texto);
    } catch (err) {
        console.error("Erro na pesquisa Play Store:", err);
        await reply("Pior. Erro. De todos. Tente de novo mais tarde.");
    }
}
break;

case 'infoapi': { // THE SIMPSONS BOT by Obrabo DEV
    await reagir(from, "☢️");
    try {
        const url = `${DENNYS_API}/api/userinfo?apikey=${DENNYS_KEY}`;
        const res = await fetchJson(url);
        if (!res?.status || !res?.dados) {
            return reply("D'oh! Não achei seus dados. Você não deve ser o Mr. Burns.");
        }
        const info = res.dados;
        const uptime = process.uptime();
        const uptimeFormatado = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
        const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        const dataAtual = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
        const canvasUrl = `${DENNYS_API}/api/canva/bemVindo?` +
            `titulo=${encodeURIComponent('PAINEL DE CONTROLE')}` +
            `&avatar=${encodeURIComponent(info.foto)}` +
            `&fundo=${encodeURIComponent('https://files.catbox.moe/2kexev.jpg')}` +
            `&desc=${encodeURIComponent('Nível: ' + info.level)}` +
            `&nome=${encodeURIComponent(info.username.trim())}` +
            `&apikey=${encodeURIComponent(info.apikey)}`;
        const mensagem = `  ~☢️~ *PAINEL DE CONTROLE DO MR. BURNS* ~☢️~

_Excellent... Smithers, libere o acesso._

┌─🔑 *DADOS DA SUA APIKEY*
│
├ 🛹 *Usuário:* ${info.username.trim()}
├ 🔑 *APIKEY:* ${info.apikey}
├ 📈 *Nível:* ${info.level}
├ 📊 *Requisições:* ${info.request}
├ 🤵 *ADM:* ${info.adm === "true" ? "Sim" : "Não"}
│
└───────────

┌─⚡ *STATUS DO BOT*
│
├ ⏰ *Horário Atual:* ${hora}
├ 🗓️ *Data:* ${dataAtual}
├ 🔋 *Uptime:* ${uptimeFormatado}
│
└───────────

 Woo hoo! by Obrabo DEV`.trim();
        await client.sendMessage(from, { image: { url: canvasUrl }, caption: mensagem }, { quoted: info });
    } catch (err) {
        console.error("Erro ao buscar dados da API:", err);
        return reply("D'oh! O sistema está em colapso! Chame o Homer!");
    }
}
break;

case 'pinterest': // THE SIMPSONS BOT by Obrabo DEV
    try {
        if (!q) return reply('Ay, caramba! Diga o que você quer que eu desenhe!');
        reply('Procurando meu giz de cera...');
        await client.sendMessage(from, {
            image: { url: `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent(q)}` }
        }, { quoted: info });
    } catch (error) {
        console.log(error);
        return reply("D'oh! Minha mão está doendo de tanto desenhar. Tente outra coisa!");
    }
break;

case 'metadinha': { // THE SIMPSONS BOT by Obrabo DEV
    await reagir(from, "❤️");
    try {
        const res = await fetchJson(`${DENNYS_API}/api/imagem/metadinha?apikey=${DENNYS_KEY}`);
        if (!res.masculina || !res.feminina) return reply("D'oh! Não consegui achar um par perfeito. Nem o Homer e a Marge.");
        await client.sendMessage(from, { image: { url: res.masculina }, caption: `_Para ele, como o Homer_ 🍩` }, { quoted: info });
        await client.sendMessage(from, { image: { url: res.feminina }, caption: `_Para ela, como a Marge_ 💙` }, { quoted: info });
    } catch (e) {
        console.error("Erro ao gerar metadinha:", e);
        await reply("D'oh! O amor é complicado. Tente de novo.");
    }
}
break;

case 'wallpaper': { // THE SIMPSONS BOT by Obrabo DEV
    if (!q) return reply(`D'oh! Diga o que você quer de papel de parede!\nExemplo: *${prefix + command} rosquinhas*`);
    await reagir(from, "🖼️");
    try {
        const res = await fetchJson(`${DENNYS_API}/api/pesquisa/wallpaper?query=${q}&apikey=${DENNYS_KEY}`);
        if (!res.status || !res.resultado || res.resultado.length === 0) return reply("Pior. Wallpaper. De todos. Tente outro nome.");
        for (let i = 0; i < res.resultado.length; i++) {
            const wallpaper = res.resultado[i];
            const imagem = wallpaper.image?.[0] || wallpaper.imagem?.[0];
            if (!imagem) continue;
            await client.sendMessage(from, { image: { url: imagem }, caption: `_Woo hoo! Papel de parede ${i + 1}!_` }, { quoted: info });
        }
    } catch (e) {
        console.error("Erro ao buscar wallpaper:", e);
        await reply("D'oh! O Homer usou a parede para anotar o placar do jogo. Tente de novo.");
    }
}
break;
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANIMES */
case 'loli': {//THE SIMPSONS BOT by Obrabo DEV
  reply("Opa, opa, opa! Circulando, circulando... Vou mandar isso no seu PV, seu meliante!");
try {
const waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu');
const wbuttsssr = [
{ buttonId: `-loli`, buttonText: { displayText: `Próxima >>` }, type: 1 },
];
const buttonMessagessfgr = { image: { url: waifuddd.data.url },caption: 'Hmm, suspeito... Anotado na minha caderneta.', buttons: wbuttsssr,headerType: 2 };
await client.sendMessage(sender, buttonMessagessfgr, { quoted: seloMeta });
} catch (err) { console.error('Erro ao buscar imagem:', err);
reply('D\'oh! A imagem escapou da detenção. Tente de novo.');
}}
break;

case 'neko':{//THE SIMPSONS BOT by Obrabo DEV
reply("Procurando um gato... Tomara que não seja o Bola de Neve II de novo...")
waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
var wbuttsssr = [
{buttonId: `-neko`, buttonText: {displayText: `Mais Gatinhos >>`}, type: 1},
]
let buttonMessagessfgr = { image: {url:waifuddd.data.url},
caption: 'Miau!', headerType: 2 }     
await client.sendMessage(from, buttonMessagessfgr, { quoted: seloMeta }).catch(err => {
return('D\'oh! O gato fugiu.')})}
break

case 'waifu':{//THE SIMPSONS BOT by Obrabo DEV
reply("Woo hoo! Procurando a melhor Waifu... depois da Marge, claro.")
waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
{buttonId: `-waifu`, buttonText: {displayText: `Outra Waifu >>`}, type: 1},
]
let buttonMessagessfgr = { image: {url:waifuddd.data.url},
caption: 'Mmmm... Waifu.', headerType: 2 }     
await client.sendMessage(from, buttonMessagessfgr, { quoted: seloMeta }).catch(err => { return('D\'oh! Ela não quis sair comigo.')})
}
break

case 'akane'://THE SIMPSONS BOT by Obrabo DEV
case 'akame':
case 'youg':
case 'luffy':
case 'zoro':
case 'gojo':
case 'tanjiro':
case 'nezuko':
case 'rem':
case 'naruto':
case 'sasuke':
case 'sakura':
case 'itachi':
case 'kakashi':
case 'madara':
case 'hinata':
case 'obito':
case 'pain':
case 'deidara':
case 'konan':
case 'ino':
case 'tsunade':
case 'jiraya':
case 'boruto':
case 'sarada':
case 'mitsuki':
case 'minato':
case 'kushina':
case 'gaara':
case 'shikamaru':
case 'temari':
case 'killerbee':
case 'yamato':
case 'yamcha':
case 'vegeta':
case 'goku':
case 'trunks':
case 'goten':
case 'bulma':
case 'broly':
case 'android18':
case 'android21':
case 'asuna':
case 'kirito':
case 'eren':
case 'mikasa':
case 'levi':
case 'meliodas':
case 'elizabeth':
case 'guts': {
try {
const personagem = command.charAt(0).toUpperCase() + command.slice(1);
await client.sendMessage(from, {
image: {
url: `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent(personagem)}`},caption: `Pior. Personagem. De todos. Mas aqui está sua imagem de *${personagem}*` }, { quoted: info });
} catch (e) { console.log(" ERRO:", e);
await reply("D'oh! Não achei esse personagem nem na loja de quadrinhos do Comic Book Guy.");
}}
break;

case 'animemes'://THE SIMPSONS BOT by Obrabo DEV
case 'animememe':
case 'memesanime': {
try {
await client.sendMessage(from, {
image: {
url: `${DENNYS_API}/api/imagem/animememe?apikey=${DENNYS_KEY}`}, caption: 'Ha-ha! O Nelson aprovaria essa piada.'}, { quoted: info });
} catch (e) {
console.log("ERRO ao buscar animeme:", e);
await reply("D'oh! O meme não teve graça e não quis carregar.");
}}
break;

case 'beijo2':{
await reply("Mmmm... Beijo...")
waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
var wbuttsssr = [
{buttonId: `-beijo2`, buttonText: {displayText: `Beijar de Novo >>`}, type: 1},
]
let buttonMessagessfgr = { image: {url:waifuddd.data.url},caption: 'Isso me lembra da Marge... 😉', headerType: 2}               
await client.sendMessage(from, buttonMessagessfgr, { quoted: info }).catch(err => { return('D\'oh! Levei um fora.')})
}
break
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
LOGOS TEXTO*/
case 'travazapimg'://THE SIMPSONS BOT by Obrabo DEV
try {
reply('Ay, caramba! Procurando uma imagem para o seu trote...');
const toshiruzresponse = await fetch(`${DENNYS_API}/api/imagem/travaZapImg?apikey=${DENNYS_KEY}`);
const data = await toshiruzresponse.json();
if (!data?.data?.imagemUrl) {
return reply('D\'oh! Não achei nenhuma imagem para o seu trote.');
}
await client.sendMessage(from, { image: { url: data.data.imagemUrl }, caption: `Use com sabedoria, seu pestinha!` }, { quoted: seloMeta });
} catch (err) {
console.error('[ERRO TRAVAZAPIMG]', err);
reply('D\'oh! A TV quebrou! A API está fora do ar.');
}
break

case 'criarimg'://THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply(`D'oh! Diga o que você quer que eu desenhe!\nExemplo: ${prefix + command} rosquinha rosa`);
reply('_Pegando meu giz de cera... Não conte para a Marge!_');
try {
const toshiruzUrl = `${DENNYS_API}/api/ai/imagem/imagemAi?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
await client.sendMessage(from, { image: { url: toshiruzUrl }, caption: `Woo hoo! Um desenho de: *${q}*` }, { quoted: seloMeta }); } catch (e) { console.error(e);
reply("D'oh! Acabou a tinta amarela. Tente outra coisa!");
}
break;

case 'logoanonimos':
case 'toshiruslogo'://THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Qual texto você quer na sua logo anônima, seu Zé Roela?`);
reply('Criando uma logo mais misteriosa que o Sr. Burns...');
const logoUrl = `${DENNYS_API}/api/imagem/logo/logo?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui está sua logo anônima para: *${q}*` }, { quoted: seloGpt });
} catch (err) { console.error('[ERRO LOGO]', err);
reply('D\'oh! A TV quebrou! A API está fora do ar.');
}
break;

case 'logoespectro':
case 'toshiruslogo2'://THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Qual texto você quer na sua logo espectro, seu Zé Roela?`);
reply('Criando uma logo mais assustadora que o Vovô contando histórias...');
const logoUrl = `${DENNYS_API}/api/imagem/logo/logo2?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui está sua logo espectro para: *${q}*` }, { quoted: seloGpt });
} catch (err) { console.error('[ERRO LOGO]', err);
reply('D\'oh! A TV quebrou! A API está fora do ar.');
}
break;

case 'logosuweg':
case 'toshiruslogo2'://THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Qual texto você quer na sua logo suweg, seu Zé Roela?`);
reply('Criando uma logo no estilo do Pichei, digo, do Bart...');
const logoUrl = `${DENNYS_API}/api/imagem/logo/logo3?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui está sua logo suweg para: *${q}*` }, { quoted: seloGpt });
} catch (err) { console.error('[ERRO LOGO]', err);
reply('D\'oh! A TV quebrou! A API está fora do ar.');
}
break;

case 'logoshacker':
case 'toshiruslogo4'://THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Qual texto você quer na sua logo hacker, seu Zé Roela?`);
reply('Hackeando o sistema da escola... Digo, criando sua logo...');
const logoUrl = `${DENNYS_API}/api/imagem/logo/logo4?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui está sua logo hacker para: *${q}*` }, { quoted: seloGpt });
} catch (err) { console.error('[ERRO LOGO]', err);
reply('D\'oh! A TV quebrou! A API está fora do ar.');
}
break;

case 'logostrava':
case 'toshiruslogo5'://THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Qual texto você quer na sua logo trava, seu Zé Roela?`);
reply('Criando uma logo mais travada que o cérebro do Homer...');
const logoUrl = `${DENNYS_API}/api/imagem/logo/logo5?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui está sua logo trava para: *${q}*` }, { quoted: seloGpt });
} catch (err) { console.error('[ERRO LOGO]', err);
reply('D\'oh! A TV quebrou! A API está fora do ar.');
}
break;

case 'venomlogo1'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?');
const teks = body.slice(7);
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!');
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*');
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`);
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) {
console.error('Erro no comando venom1:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo2'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) {
console.error('Erro no comando venomlogo2:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo3'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) {
console.error('Erro no comando venomlogo3:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo4'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) {
console.error('Erro no comando venomlogo4:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo5'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo5:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo6'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo6:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo7'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo7:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo8'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo8:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo9'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo8:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;

case 'venomlogo10'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo10:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo11'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo11:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo12'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo12:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo13'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo13:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo14'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo14:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
                                 
case 'venomlogo15'://THE SIMPSONS BOT by Obrabo DEV
try {
if (args.length < 1) return reply('D\'oh! Qual o nome para a logo?')
teks = body.slice(7)
if (teks.length > 10) return reply('Ay, caramba! Texto muito grande, no máximo 10 letras!')
reply('*Woo hoo! Fazendo sua logo... Se der erro, a culpa é do Milhouse!*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloGpt });
} catch (e) { console.error('Erro no comando venomlogo15:', e);
reply('D\'oh! Deu erro. Tente de novo, seu Zé Roela!');
}
break;
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
OUTROS */
case 'signo2': {//THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Ay, caramba! Qual o seu signo? A Lisa vai ler seu futuro!\nExemplo: ${prefix + command} Câncer`);
const signosValidos = [
      "aries", "touro", "gemeos", "gêmeos", "cancer", "câncer", "leao", "leão",
      "virgem", "libra", "escorpiao", "escorpião", "sagitario", "sagitário",
      "capricornio", "capricórnio", "aquario", "aquário", "peixes"
];
const signoUser = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
if (!signosValidos.includes(signoUser)) { return reply("D'oh! Isso não é um signo, seu Zé Roela!");
}
const blackoutapi = q.charAt(0).toUpperCase() + q.slice(1);
await client.sendMessage(from, { image: {
url: `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent("Signo " + blackoutapi)}`},caption: `Woo hoo! Uma imagem para o signo de *${blackoutapi}*`}, { quoted: info });
} catch (e) { console.log("ERRO NO COMANDO SIGNO:", e);
await reply("D'oh! A bola de cristal da Lisa quebrou. Tente de novo.");
}}
break;

case 'signo': {//THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Ay, caramba! Qual o seu signo? Vou ver qual Cavaleiro de Ouro você seria!\nExemplo: ${prefix + command} Virgem`);
const cavaleiros = {
aries: 'Mu de Áries',
touro: 'Aldebaran de Touro',
gemeos: 'Saga de Gêmeos',
gêmeos: 'Saga de Gêmeos',
cancer: 'Máscara da Morte de Câncer',
câncer: 'Máscara da Morte de Câncer',
leao: 'Aiolia de Leão',
leão: 'Aiolia de Leão',
virgem: 'Shaka de Virgem',
libra: 'Dohko de Libra',
escorpiao: 'Milo de Escorpião',
escorpião: 'Milo de Escorpião',
sagitario: 'Aioros de Sagitário',
sagitário: 'Aioros de Sagitário',
capricornio: 'Shura de Capricórnio',
capricórnio: 'Shura de Capricórnio',
aquario: 'Camus de Aquário',
aquário: 'Camus de Aquário',
peixes: 'Afrodite de Peixes'};
const signoUser = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
if (!cavaleiros[signoUser]) {
return reply("D'oh! Isso não é um signo, seu Zé Roela!");
}
const cavaleiro = cavaleiros[signoUser];
const ia = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Conte a história do cavaleiro ${encodeURIComponent(cavaleiro)}&apikey=${DENNYS_KEY}`);
const descricao = ia?.resposta || "Pior. Cavaleiro. De todos.";
await client.sendMessage(from, {image: { url: `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent(cavaleiro)}` },caption: `🛡️ *${cavaleiro}*\n\n${descricao}` }, { quoted: info });
} catch (e) { console.log("ERRO NO COMANDO SIGNO:", e);
await reply("D'oh! O cosmo do meu bot falhou. Tente de novo.");
}}
break;

case 'catalogo': { //THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
const { lerArquivo } = require('./arquivos/banco.js');
const db = lerArquivo('./arquivos/produtos.json');
const produtos = db?.catalogo || [];
if (produtos.length === 0) return reply('D\'oh! O Kwik-E-Mart está sem estoque. Volte sempre!');
let texto = `  ~🛒~ *Catálogo do Kwik-E-Mart* ~🛒~\n\n`;
for (let produto of produtos) {
    texto += `🆔 *ID:* ${produto.id}\n`;
    texto += `📦 *Produto:* ${produto.nome}\n`;
    texto += `💸 *Preço:* R$ ${produto.preco.toFixed(2)}\n`;
    texto += `💬 Compre usando: *${prefix}comprar ${produto.id}*\n`;
    texto += `*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*\n`;
}
await client.sendMessage(from, { image: {url: logomenu }, caption: texto }, { quoted: info });
}
break;

case 'produtos': { // THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
const { lerArquivo } = require('./arquivos/banco.js');
const produtos = lerArquivo('./arquivos/produtos.json').catalogo || [];
if (produtos.length === 0) return reply('D\'oh! O Kwik-E-Mart está sem estoque. Volte sempre!');

const isGroup = from.endsWith('@g.us');
const destino = isGroup ? sender : from;

if (isGroup) {
await reply(`Obrigado, volte sempre! Enviando os produtos no seu privado, ${pushname}...`);
}

for (let p of produtos) {
await client.sendMessage(destino, { image: { url: p.imagem },
caption: `🛍️ *${p.nome}*\n💵 R$${p.preco}\n🆔 ID: ${p.id}\n\n📥 Digite: *${prefix}comprar ${p.id}*` }, { quoted: info });
}}
break;

case 'comprar': { // THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
const { lerArquivo, salvarArquivo } = require('./arquivos/banco.js');
const dbProdutos = lerArquivo('./arquivos/produtos.json');
const produtos = dbProdutos?.catalogo || [];
const pedidos = lerArquivo('./arquivos/pedidos.json') || {};
if (!q) return reply(`D'oh! Qual o ID do produto, seu Zé Roela?\nUse *${prefix}catalogo* para ver as opções.`);
const id = parseInt(q.trim());
const produto = produtos.find(p => p.id === id);
if (!produto || typeof produto.preco !== 'number') {
return reply('Pior. Produto. De todos. Não achei esse ID.');
}
const numero = sender.replace(/[^0-9]/g, '');
if (!pedidos[numero]) pedidos[numero] = [];
pedidos[numero].push(produto);
salvarArquivo('./arquivos/pedidos.json', pedidos);
reply(`Woo hoo! ${produto.nome} adicionado ao seu carrinho!\n*Vou mandar os detalhes no seu privado, não conte para o Homer!*`);
const chavePix = '00020126680014BR.GOV.BCB.PIX0114chave@pix.com5204000053039865404' + 
produto.preco.toFixed(2).replace('.', '') + 
'5802BR5925Loja Obrabo DEV6009SaoPaulo62070503***6304';
const chavePixTexto = 'pix: 11962201730';
const mensagemPrivada = `
  ~🛒~ *Pedido do Kwik-E-Mart* ~🛒~

Produto: *${produto.nome}*
Valor: *R$${produto.preco.toFixed(2)}*

💳 *Pagamento via Pix:*
Chave: *${chavePixTexto}*
Valor: *R$${produto.preco.toFixed(2)}*

💰 Confirme o pagamento nesse número ${donoloja} com seu comprovante.
✅ Assim que o pagamento for confirmado, enviaremos sua encomenda.

✍️Finalise sua compra Exemplo: *${prefix}finalizar*

📍 *Mantenha este número salvo para atualizações do pedido.*
`.trim();

const cliente = sender.split('@')[0] + '@s.whatsapp.net';
await client.sendMessage(cliente, { image: { url: produto.imagem || 'https://via.placeholder.com/300x300.png?text=Produto+sem+imagem' },
caption: mensagemPrivada });

  // === MENSAGEM AO DONO ===
const config = require('./settings/config.json');
const numeroDono = config.donoloja.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  const mensagemDono = `  ~🛒~ *NOVO PEDIDO NO KWIK-E-MART!* ~🛒~

_"Obrigado, volte sempre!"_

┌─🧾 *DETALHES DO PEDIDO*
│
├ 👤 *Cliente:* wa.me/${numero}
├ 🛍️ *Produto:* ${produto.nome}
├ 💰 *Valor:* R$${produto.preco.toFixed(2)}
│
└───────────

🚨 *AÇÃO NECESSÁRIA* 🚨
_Verifique o pagamento manualmente._

 Woo hoo! by Obrabo DEV`.trim();

await client.sendMessage(numeroDono, { text: mensagemDono });
}
break;

case 'meupedido': {//THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
const { lerArquivo } = require('./arquivos/banco.js');
const pedidos = lerArquivo('./arquivos/pedidos.json');
const numero = sender.replace(/[^0-9]/g, '');
const meuPedido = pedidos[numero];
if (!meuPedido || meuPedido.length === 0) return reply('Seu carrinho está mais vazio que a cabeça do Homer.');
let total = 0;
let lista = meuPedido.map((p, i) => {
total += p.preco;
return `${i + 1}. ${p.nome} - R$${p.preco}`;
}).join('\n');
reply(`  ~🛒~ *Seu Carrinho no Kwik-E-Mart* ~🛒~\n${lista}\n\n*Total:* R$${total.toFixed(2)}`);
}
break;

case 'cancelarpedido': { // THE SIMPSONS BOT by Obrabo DEV
const { lerArquivo, salvarArquivo } = require('./arquivos/banco.js');
const pedidos = lerArquivo('./arquivos/pedidos.json');
const numero = sender.replace(/[^0-9]/g, '');
const idCancelado = args[0];

if (!pedidos[numero] || pedidos[numero].length === 0) {
return reply('D\'oh! Você não tem pedidos para cancelar.');
}

if (idCancelado) {
const idNum = parseInt(idCancelado);
const pedidosDoCliente = pedidos[numero];
const cancelados = pedidosDoCliente.filter(p => p.id === idNum);

if (cancelados.length === 0) return reply(`Pior. ID. De todos. Não achei o pedido ${idNum}.`);

pedidos[numero] = pedidosDoCliente.filter(p => p.id !== idNum);
salvarArquivo('./arquivos/pedidos.json', pedidos);

await client.sendMessage(sender, { text: `Ay, caramba! Cancelei seu pedido. Se mudar de ideia, use *${prefix}comprar ${idNum}*` });

for (const item of cancelados) {
 await client.sendMessage(sender, { image: { url: item.imagem },
caption: `Pedido cancelado:\n📦 *${item.nome}*\n💵 R$${item.preco.toFixed(2)}`
});
}

return reply(`Woo hoo! Pedido ID ${idNum} cancelado.`);
}

const todosCancelados = pedidos[numero];
delete pedidos[numero]; // Remove todos os pedidos do cliente
salvarArquivo('./arquivos/pedidos.json', pedidos);

await client.sendMessage(sender, { text: 'Ay, caramba! Cancelei tudo. Vou mandar os produtos de volta pro Apu.' });

for (const item of todosCancelados) { await client.sendMessage(sender, { image: { url: item.imagem }, caption: ` Pedido cancelado:\n📦 *${item.nome}*\n💵 R$${item.preco.toFixed(2)}`
});
}
reply('Woo hoo! Todos os seus pedidos foram cancelados com sucesso.');
}
break;

case 'finalizar': { //THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
const { lerArquivo, salvarArquivo } = require('./arquivos/banco.js');
const pedidos = lerArquivo('./arquivos/pedidos.json');
const numero = sender.replace(/[^0-9]/g, '');
if (!pedidos[numero] || pedidos[numero].length === 0) {
return reply('D\'oh! Você não tem pedidos para finalizar.');
}
const pedidoCliente = pedidos[numero];
let total = 0;
let lista = '';

for (let item of pedidoCliente) {
total += item.preco;
lista += `🆔 ${item.id} - ${item.nome} - R$${item.preco.toFixed(2)}\n`;
}
const chavePixTexto = 'pix: abellvolkssss@icloud.com'; // sua chave pix
const config = require('./settings/config.json');
const numeroDono = config.donoloja.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

const comprovanteCliente = `  ~🛒~ *COMPROVANTE KWIK-E-MART* ~🛒~

_"Obrigado, volte sempre!"_

┌─🧾 *DETALHES DA COMPRA*
│
├ 🏪 *Loja:* ${donoloja}
├ 👤 *Cliente:* wa.me/${numero}
│
├ 🛍️ *Produtos:* ${lista}
│
├ 💰 *Total:* R$${total.toFixed(2)}
│
└───────────

┌─💳 *PAGAMENTO VIA PIX*
│
├ 🔑 *Chave:* ${chavePixTexto} Dennys Fernando Banco Santander !
├ 💲 *Valor:* R$${total.toFixed(2)}
│
└───────────

🚨 *PRÓXIMO PASSO* 🚨
_Envie o comprovante de pagamento para o Apu em: wa.me/${donoloja}_

✅ _Assim que o pagamento for confirmado, sua entrega será iniciada!_

 Woo hoo! by Obrabo DEV`.trim();
const cliente = numero + '@s.whatsapp.net';
await client.sendMessage(cliente, { image: { url: logomenu }, // imagem de capa do comprovante
caption: comprovanteCliente
});

const mensagemDono = `  ~🛒~ *PEDIDO FINALIZADO* ~🛒~

_"Obrigado, volte sempre!"_

┌─🧾 *RESUMO DO PEDIDO*
│
├ 👤 *Cliente:* wa.me/${numero}
│
├ 📦 *Produtos:*
${lista}
│
├ 💰 *Total:* R$${total.toFixed(2)}
│
└───────────

⏳ *STATUS:*
_Aguardando pagamento do cliente._

 Woo hoo! by Obrabo DEV`.trim();
await client.sendMessage(numeroDono, { text: mensagemDono });
reply('Woo hoo! Mandei o comprovante no seu privado. Agora pague o Apu antes que ele tenha um chilique!');
}
break;

case 'addproduto': {//THE SIMPSONS BOT by Obrabo DEV
client.sendMessage(from, { react: { text: '🛒', key: info.key } });
if (!SoDono) return reply('Só o Apu pode mexer no estoque!');
const [nome, preco, imagem] = q.split('|').map(s => s.trim());
if (!nome || !preco || !imagem) return reply('D\'oh! Formato errado! Use: nome|preco|link_da_imagem');
const { lerArquivo, salvarArquivo } = require('./arquivos/banco.js');
const db = lerArquivo('./arquivos/produtos.json');
const id = db.catalogo.length + 1;
db.catalogo.push({ id, nome, preco: parseFloat(preco), imagem });
salvarArquivo('./arquivos/produtos.json', db);
reply(`Woo hoo! Produto adicionado ao Kwik-E-Mart! ID: ${id}`);
}
break;

case 'apagarpedidos': { // THE SIMPSONS BOT by Obrabo DEV
if (!SoDono) return reply('Só o Apu pode mexer nos pedidos!');

const { lerArquivo, salvarArquivo } = require('./arquivos/banco.js');
const pedidos = lerArquivo('./arquivos/pedidos.json');

if (!isGroup) {
const numeroCliente = from.replace(/[^0-9]/g, '');
if (!pedidos[numeroCliente]) {

return reply('Esse Zé Roela não tem nenhum pedido.');
}

delete pedidos[numeroCliente];
salvarArquivo('./arquivos/pedidos.json', pedidos);
return reply(`Woo hoo! Pedidos do cliente *${numeroCliente}* foram para o lixo, como as rosquinhas de ontem.`);
}
reply('Esse comando só pode ser usado no privado com o cliente.');
}
break;

case 'comprarbot':
case 'gitclone': {
try {
await reagir(from, "🤖");
const ai = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Venda um bot de WhatsApp de forma inteligente, destacando que é totalmente atualizado, com comando de IA, loja, grupo, login e painel web, ideal para revenda. E incentive a falar com o dono no final.&apikey=${DENNYS_KEY}`);
const mensagemIA = ai?.resposta || "Woo hoo! Este bot é mais esperto que a Lisa!";
await client.sendMessage(from, { image: { url: "./menu/menu.jpeg" },
caption: `  ~💰~ *PAGAMENTO DO BOT* ~💰~

_"Excellent... Pague logo, seu reles mortal!"_

┌─💳 *PAGAMENTO VIA PIX*
│
├ 💲 *Valor:* 90,00 REAIS
├ 🔑 *Chave Pix:* abellvolkssss@icloud.com
│
└───────────

🚨 *IMPORTANTE* 🚨
_Mande o comprovante para o Dono!_

👑 *Falar com o Dono:*
${numerodono}

${mensagemIA}` }, { quoted: seloNubank });
} catch (e) { console.error("ERRO AO ENVIAR INFORMAÇÕES DE VENDA:", e);
await reply("D'oh! Não consegui carregar as informações do bot agora.");
}}
break;

case 'fakechat': case 'fakemsg':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
client.sendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
reply(`Ay, caramba! Use assim: ${prefix+command} @vítima|mensagem_dela|sua_resposta`);
}
break;

case 'spoiler': case 'morechat':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break;

case 'obesidade': case 'obeso': // @Crap </>
if(!q.includes("/")) return reply(`D'oh! Use assim: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
const resultado = obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await client.sendMessage(from, {react: {text: `🦴`, key: info.key}})
reply(`• Seu IMC é: *${resultado}* -> Você está mais magro que o Mr. Burns!`)
} else if (resultado <= 18.5 || resultado <= 24.9) {
await client.sendMessage(from, {react: {text: `👍`, key: info.key}})
reply(`• Seu IMC é: *${resultado}* -> Você está no peso ideal. Nem gordo, nem magro. Que chato.`)
} else if (resultado <= 25 || resultado <= 29.9) {
await client.sendMessage(from, {react: {text: `🤔`, key: info.key}})
reply(`• Seu IMC é: *${resultado}* -> Você está com sobrepeso. Quase no nível Homer!`);
} else if (resultado <= 30 || resultado <= 39.9) {
await client.sendMessage(from, {react: {text: `🍩`, key: info.key}})
reply(`• Seu IMC é: *${resultado}* -> Obesidade. Woo hoo! Mais rosquinhas!`);
} else if (resultado > 40) {
await client.sendMessage(from, {react: {text: `🐳`, key: info.key}})
reply(`• Seu IMC é: *${resultado}* -> Obesidade mórbida! Você venceu o Homer!`);
}
break;

case 'contardias': case 'countdays': // @Crap</>
if(!q.includes("/")) return reply(`D'oh! Use a barra! Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Ay, caramba! A data completa! *(dia/mês/ano)*\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
const tempo = timeDate('DD/MM/YYYY')
countDay = countDays(q.split("/"), tempo.split("/"))
reply(`Faltam *${countDay}* dia(s). Quase lá!`)
} catch(e) {
return reply(mess.error())
}
break;

case 'serie': { // THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`D'oh! Diga o nome da série!\nExemplo: ${prefix + command} Comichão e Coçadinha`);
const serie = q.trim();
const respostaIA = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Conte um spoiler da série ${encodeURIComponent(serie)}&apikey=${DENNYS_KEY}`);
  const spoiler = respostaIA?.resposta || "Pior. Spoiler. De todos.";
await client.sendMessage(from, { image: { url: `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent(serie)}`
},
caption: `🎞️ *${serie}*\n\n🧨 *Spoiler:* ${spoiler}` }, { quoted: info });
} catch (e) { console.log("ERRO NO COMANDO SERIE:", e);
await reply("D'oh! A TV explodiu. Tente de novo.");
}}
break;

case 'filme': { // THE SIMPSONS BOT by Obrabo DEV
try {
  if (!q) return reply(`D'oh! Diga o nome do filme!\nExemplo: ${prefix + command} O Homem Radioativo`);
const filme = q.trim();
const respostaIA = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Conte um spoiler do filme ${encodeURIComponent(filme)}&apikey=${DENNYS_KEY}`);
const spoiler = respostaIA?.resposta || "Pior. Spoiler. De todos.";
await client.sendMessage(from, { image: {
url: `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent("Filme " + filme)}`
},
caption: `🎬 *${filme}*\n\n🧨 *Spoiler:* ${spoiler}` }, { quoted: info });
} catch (e) { console.error("ERRO NO COMANDO FILME:", e);
await reply("D'oh! O Homer comeu a fita. Tente de novo.");
}}
break;

case 'otakuanime': { // THE SIMPSONS BOT by Obrabo DEV
try {
if (!q) return reply(`Pior. Anime. De todos. Diga o nome!\nExemplo: ${prefix + command} Pokémon`);
const anime = q.trim();
const dados = await fetchJson(`${DENNYS_API}/api/pesquisa/animeinfo?nome=${encodeURIComponent(anime)}&apikey=${DENNYS_KEY}`);
if (!dados || dados.status === false) return reply("D'oh! Não achei esse anime nem na loja de quadrinhos do Comic Book Guy.");
const { titulo, lancamento, episodio, sinopse } = dados;
const ia = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Conte um spoiler do anime ${encodeURIComponent(anime)}&apikey=${DENNYS_KEY}`);
const spoiler = ia?.resposta || "Pior. Spoiler. De todos.";
const imagemUrl = `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent("Anime " + anime)}`;
await client.sendMessage(from, { image: { url: imagemUrl }, caption:
`📺 *${titulo || anime}*
📅 *Lançamento:* ${lancamento || "Desconhecida"}
🆕 *Último Episódio:* ${episodio || "Sem informações"}
📝 *Sinopse:* ${sinopse || "Sinopse não disponível"}
🧨 *Spoiler:* ${spoiler}`
  }, { quoted: info });

} catch (e) { console.error("ERRO NO COMANDO ANIME:", e);
await reply("D'oh! Não consegui achar as informações.");
}}
break;

case "gruposwhatsapp":
reply("Procurando grupos... Tomara que não seja o dos Corta-Pedras de novo!")

var abcd = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gruposwhatsapp?apikey=astroshop`)

let gps = "  ~🍺~ *Grupos no Bar do Moe* ~🍺~\n\n"

for ( i = 0; i < abcd.length; i++) {

gps += `${abcd[i].titulo}\n\nRegras: ${abcd[i].regras}\nLink: ${abcd[i].link}\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
}
reply(gps)
break

case "letra": case "liryc": case "letram": case "letramusic": case "letramusica": {
if(!q.trim()) return reply(`D'oh! Qual a música?\nExemplo: ${prefix+command} Garota de Ipanema`)
try {
audiomenu = await fs.readFileSync("./arquivos/audios/aguarde.mp3")
 await sleep(2000);
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})
const abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/letra_musica?letra=${q.trim()}&apikey=astroshop`)
reply(`  ~🎷~ *Letra da Lisa* ~🎷~\n\n - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply("D'oh! Não achei a letra.")
}
}
break;

case 'letra2': case 'lyrics2': case 'letramusic2':
if (!q) return reply(`D'oh! Qual o nome da música?\nExemplo: ${prefix + command} Baby Shark`)
try {
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/letramusic?query=${q}&apikey=`+API_KEY_BRONXYS)
reply(`• Música: *${data.resultado.name}*\n• Artista: *${data.resultado.artist}*\n–\n🎙️ Letra da Música:\n–\n${data.resultado.lyrics}`)
} catch(e) {
return reply("D'oh! Não achei a letra.")
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply("Só o Mr. Burns pode fazer isso!")
if(!q) return reply( `D'oh! Faltou a mensagem!\nExemplo : ${prefix + command} Rosquinhas grátis!`)
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `  ~📢~ *MENSAGEM DO PREFEITO DIAMOND JOE QUIMBY* ~📢~\n\n ${q}`
client.sendMessage(anu[i], {text: txt})
}
reply(`Woo hoo! Mensagem enviada para todos os grupos!`)
}
break

case 'join': case 'entrar':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
string = args.join(' ')
if(!string) return reply('D\'oh! Cadê o link do grupo?')
if(string.includes('chat.whatsapp.com/') || reply('Ay, caramba! Esse link não parece certo.') ) {
link = string.split('app.com/')[1]
try {
client.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('D\'oh! O grupo está mais lotado que o Bar do Moe na sexta-feira!')
}
if(String(erro).includes('not-authorized') ) {
reply('D\'oh! Fui banido desse grupo. A culpa deve ser do Bart.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar, seu Zé Roela!')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('Já está ativado, seu bocó.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar imagens neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Ok, liberado mandar imagens. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antivideo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar, seu Zé Roela!')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('Já está ativado, seu bocó.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar vídeos neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Ok, liberado mandar vídeos. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antiaudio':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar, seu Zé Roela!')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('Já está ativado, seu bocó.')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar áudios neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Ok, liberado mandar áudios. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antisticker':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar, seu Zé Roela!')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('Já está ativado, seu bocó.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar figurinhas neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Ok, liberado mandar figurinhas. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('Já está ativado, seu bocó.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar documentos neste grupo!')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Ok, liberado mandar documentos. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antictt':
case 'anticontato':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('Já está ativado, seu bocó.')
dataGp[0].antictt = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar contatos neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antictt = false
setGp(dataGp)
reply('Ok, liberado mandar contatos. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antiloc':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
try {
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('Já está ativado, seu bocó.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar localização neste grupo!')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Ok, liberado mandar localização. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
} catch {
reply('D\'oh! Deu erro. A culpa é do Milhouse.')
}
break

case 'antinuke':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
try {
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(dataGp[0].antinuke) return reply('Já está ativado, seu bocó.')
dataGp[0].antinuke = true
setGp(dataGp)
reply('Woo hoo! Antinuke ativado! Sem mais explosões aqui!')
} else if(Number(args[0]) === 0) {
if(!dataGp[0].antinuke) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antinuke = false
setGp(dataGp)
reply('Ok, Antinuke desativado. Cuidado com as bombas.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}} catch {
reply('D\'oh! Deu erro. A culpa é do Milhouse.')
}
break

case 'antibot':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
try {
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(dataGp[0].antibot) return reply('Já está ativado, seu bocó.')
dataGp[0].antibot = true
setGp(dataGp)
reply('Woo hoo! Antibot ativado! Fora, latas velhas!')
} else if(Number(args[0]) === 0) {
if(!dataGp[0].antibot) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antibot = false
setGp(dataGp)
reply('Ok, Antibot desativado. Podem vir, robôs.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}} catch {
reply('D\'oh! Deu erro. A culpa é do Milhouse.')
}
break

case 'apresentar':
case 'ap': {//THE SIMPSONS BOT by Obrabo DEV
let endjhockes = "https://whatsapp.com/channel/0029VazmYZk72WTneBn3b91t";
let groupPP;
try {
groupPP = await client.profilePictureUrl(from, 'image');
} catch (err) {
groupPP = 'https://i.imgur.com/A04o2hW.jpeg';}
let toshiruz_dev = `  ~🏫~ *HORA DE SE APRESENTAR* ~🏫~

_"Atenção, alunos! Preencham corretamente para não irem para a detenção com o Bart."_

┌─📝 *FICHA DE APRESENTAÇÃO*
│
├ 📸 *• FOTO:*
├ 👻 *• NOME:*
├ 📌 *• CIDADE:*
├ 🗓️ *• IDADE:*
│
└───────────

 Woo hoo! by Obrabo DEV
> ${groupName}`;
await client.sendMessage(from, { image: { url: groupPP },
caption: toshiruz_dev});
}
break;

case 'antilinkgp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('Já está ativado, seu bocó.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar links de outros grupos aqui!')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Ok, liberado mandar links de grupo. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.");
if (!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?");
if (args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!');
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Já está ativado no modo mais severo, seu bocó.');
dataGp[0].antilinkhard = true;
setGp(dataGp);
reply('Woo hoo! Antilink ativado no modo HARDCORE! Nem tente, mané!');
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Já está desativado, seu Zé Roela.');
dataGp[0].antilinkhard = false;
setGp(dataGp);
reply('Ok, antilink hardcore desativado. Podem voltar a ser Zé Roelas.');
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!');
}
break;

case 'x9':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isx9) return reply('O modo fofoqueiro já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('Modo Milhouse (X9) ativado! Vou contar tudo que os admins fizerem!')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O modo fofoqueiro já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('Modo Milhouse (X9) desativado. Meus lábios estão selados.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'visualizarmsg':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Modo "Olho que tudo vê" do Mr. Burns ativado. Excellent...')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Modo "Olho que tudo vê" desativado. Smithers, dispense os cães!')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'x9visuunica':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('Já estou de olho nas mensagens secretas.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('Ay, caramba! Modo "dedo-duro" de visualização única ativado!')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O modo "dedo-duro" já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('Ok, não vou mais contar os segredos de ninguém. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'so_adm':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Já está ativo, seu bocó.')
dataGp[0].soadm = true
setGp(dataGp)
reply('Woo hoo! Agora só os admins mandam aqui, como o Diretor Skinner!')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].soadm = false
setGp(dataGp)
reply('Ok, agora qualquer Zé Roela pode usar comandos. A anarquia!')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'odelete':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('Já estou pronto para apagar as provas...')
nescessario.Odelete = true
setNes(nescessario)
reply('Smithers, ative o modo "apagar mensagens"! Excellent...')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('O modo "apagar mensagens" já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('Smithers, desative o modo "apagar mensagens".')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'antifake':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('Já estou de olho nos fakes, seu bocó.')
dataGp[0].antifake = true
setGp(dataGp)
reply('Woo hoo! Antifake ativado! Fora, estrangeiros!')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antifake = false
setGp(dataGp)
reply('Ok, Antifake desativado. Podem vir, fakes.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break;

case 'prefixos':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isMultiP) return reply(`D'oh! Ative o multiprefixo primeiro: ${prefix}multiprefixo 1`)
if(dataGp[0].prefixos.length < 1) return reply("Não tem nenhum prefixo extra aqui, seu bocó.")
reply(`Lista de prefixos do Kwik-E-Mart para o grupo *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`)
break

case 'add_prefixo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isMultiP) return reply(`D'oh! Ative o multiprefixo primeiro: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Ay, caramba! Sem emojis ou letras esquisitas!")
if(!q.trim()) return reply("D'oh! Precisa de um prefixo, né?")
if(q.trim() > 1) return reply(`Ay, caramba! Um de cada vez!`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já existe, seu Zé Roela!`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Woo hoo! Prefixo ${q.trim()} adicionado!`)
break

case 'tirar_prefixo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isMultiP) return reply(`D'oh! Ative o multiprefixo primeiro: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Ay, caramba! Sem emojis ou letras esquisitas!")
if(!q.trim()) return reply("D'oh! Qual prefixo eu tiro?")
if(q.trim() > 1) return reply(`Ay, caramba! Um de cada vez!`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não existe, seu Zé Roela!`)
if(dataGp[0].prefixos.length == 1) return reply("D'oh! Precisa ter pelo menos um outro prefixo para tirar este.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Woo hoo! Prefixo ${q.trim()} removido!`)
break

case 'multiprefixo': case 'multiprefix':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('Woo hoo! Agora aceito vários prefixos, como o Homer aceita rosquinhas!')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('Ok, agora só aceito um prefixo. Que chato.')
}
break

case 'ephemeral': case 'msgtemp':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if (!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
getInfoG = await client.groupMetadata(from);
if (getInfoG.ephemeralDuration == undefined) {
reply(`Woo hoo! Mensagens temporárias ativadas! Elas vão sumir mais rápido que uma rosquinha perto do Homer!`)
await client.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
reply(`Ok, mensagens temporárias desativadas. Que chato.`)
await client.sendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if (!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if (!q) return reply(`Vote! Vote em Quimby! Diga 'all' ou 'adms'.`)
if (args[0] === 'adms') {
reply(`🔐 Fechado! Agora só os admins podem mexer nas coisas.`)
await client.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Aberto! Agora todos podem mexer. Anarquia!`)
await client.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if (!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
reply(`Ay, caramba! Apaguei a foto do grupo!`)
await client.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já está ativo, seu bocó.')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar áudio de zap neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Ok, liberado mandar áudios de zap. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'anticatalogo':
case 'anticatalg':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Já está ativo, seu bocó.')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('Woo hoo! Proibido mandar catálogos neste grupo! O Kwik-E-Mart não tem concorrência!')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('Ok, liberado mandar catálogos. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Já está ativo, seu bocó.')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('Woo hoo! Bem-vindo ativado no estilo Ned Flanders!')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('Ok, bem-vindo desativado. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'bemvindo2':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(args.length < 1) return reply(`D'oh! Use: ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('Já está ativado, seu bocó.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('Woo hoo! Segundo bem-vindo ativado!')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('Ok, segundo bem-vindo desativado.')
} else {
reply(`D'oh! É 1 pra ligar e 0 pra desligar!`)
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Pior. Comando. De todos. Diga qual comando você quer saber!\nExemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("Pior. Explicação. De todas. Ainda não tenho info sobre isso.")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
const CMD_S = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
dirInfoCmd = "./settings/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`D'oh! Use: comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`D'oh! Use: comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("Pior. Comando. De todos. Já existe info para ele.")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Woo hoo! Informação para o comando ${y} adicionada!`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!") 
const CMD_D = JSON.parse(fs.readFileSync("./settings/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./settings/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`Woo hoo! Informação do comando ${q} foi para o lixo!`)
break

case 'legendabv':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! Escreva a mensagem de boas-vindas!')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('Woo hoo! Mensagem de boas-vindas definida!')
} else {
reply(`D'oh! Ative o ${prefix}bemvindo 1 primeiro!`)
}
break

case 'legendabv2':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! Escreva a mensagem de boas-vindas!')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('Woo hoo! Segunda mensagem de boas-vindas definida!')
} else {
reply(`D'oh! Ative o ${prefix}bemvindo2 1 primeiro!`)
}
break

case 'legendasaiu':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply("D'oh! Escreva a mensagem de saída ou use 0 para desativar.")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply('Ha-ha! Mensagem de saída definida!')
} else {
reply(`D'oh! Ative o ${prefix}bemvindo 1 primeiro!`)
}
break;

case 'legendasaiu2':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(q.length < 1) return reply('D\'oh! Escreva a mensagem de saída ou use 0 para desativar.')
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
setGp(dataGp)
reply('Ha-ha! Segunda mensagem de saída definida!')
} else {
reply(`D'oh! Ative o ${prefix}bemvindo2 1 primeiro!`)
}
break;

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! Escreva a mensagem de remoção!')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('Woo hoo! Mensagem de remoção de fakes definida!')
} else {
reply(`D'oh! Ative o ${prefix}antifake 1 primeiro!`)
}
break

case 'legenda_video': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! O que eu devo dizer quando alguém mandar um vídeo?')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('Woo hoo! Agora eu sei o que dizer quando mandarem vídeos!')
break

case 'legenda_imagem': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! O que eu devo dizer quando alguém mandar uma imagem?')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('Woo hoo! Agora eu sei o que dizer quando mandarem imagens!')
break

case 'legenda_documento': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! O que eu devo dizer quando alguém mandar um documento?')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('Woo hoo! Agora eu sei o que dizer quando mandarem documentos!')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!mrc_ou_numero) return reply("Ay, caramba! Marque o Zé Roela ou digite o número dele.")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('D\'oh! Esse Zé Roela já está na lista do Moe.')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`Woo hoo! Adicionado à lista negra. Ele não entra mais no Bar do Moe!`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!mrc_ou_numero) return reply("Ay, caramba! Marque o Zé Roela ou digite o número dele.")
if(listanegraG.includes(mrc_ou_numero)) return reply('D\'oh! Esse Zé Roela já está na lista do Mr. Burns.')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Excellent! Adicionado à lista negra global!`)
break

case 'tirardalistag':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!mrc_ou_numero) return reply("Ay, caramba! Marque o Zé Roela ou digite o número dele.")
if(!listanegraG.includes(mrc_ou_numero)) return reply('D\'oh! Esse cara nem estava na lista.')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Woo hoo! Perdoado. Pode voltar a frequentar a Usina Nuclear.`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins && !SoDono) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(!mrc_ou_numero) return reply("Ay, caramba! Marque o Zé Roela ou digite o número dele.")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('D\'oh! Esse cara nem estava na lista.')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`Woo hoo! Perdoado. Pode voltar a beber no Bar do Moe.`)
break

case 'listban':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(dataGp[0].listanegra.length < 1) return reply('A lista do Moe está vazia. Que milagre!')
teks = '~🍺~ *LISTA NEGRA DO MOE* ~🍺~\n\nEstes são os Zé Roelas que não podem mais entrar:\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '\n_Se tentar entrar, vai levar uma Duff na cabeça!_'
reply(teks)
break

case 'mute':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Ay, caramba! Marque quem você quer que cale a boca.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `Ay, caramba, *@${_.split('@')[0]}*! O Chefe Wiggum mandou você calar a boca! Ordem do(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n–\n• Se falar, vai pra detenção com o Bart!'
mentions(teks, [mentioned, sender], true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Ay, caramba, *@${_.split('@')[0]}*! O Chefe Wiggum mandou você calar a boca! Ordem do(a) adm: *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Se falar, vai pra detenção com o Bart!'
mentions(teks, [mentioned, sender], true)
}
break

case 'desmute':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Ay, caramba! Marque quem pode voltar a falar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Woo hoo, *@${_.split('@')[0]}*! Você foi liberado da detenção pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora pode voltar a falar, seu Zé Roela!'
mentions(teks, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Woo hoo, *@${_.split('@')[0]}*! Você foi liberado da detenção pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora pode voltar a falar, seu Zé Roela!'
mentions(teks, [mentioned, sender], true)
}
break

case 'roletarussa':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("D'oh! Só tem valentões aqui, não tem Zé Roelas para brincar.")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas ele escapou como o Bart da detenção...`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas ele escapou como o Bart da detenção...`, [C2], true)
reply(`Que o show do Comichão e Coçadinha comece! Um de vocês vai se dar mal...`)
setTimeout(() => { 
mentions(`Ha-ha! *@${C2.split('@')[0]}* dançou! Levou um tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true) 
}, 5000)  
setTimeout(() => {
client.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'imagine': 
try {
if (!q) return reply("O que você quer que eu desenhe, seu Zé Roela?")
audiomenu = await fs.readFileSync("./arquivos/audios/aguarde.mp3")
 await sleep(1000);
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})
data = await fetchJson(`https://vihangayt.me/tools/aiimg?q=${q}`)
client.sendMessage(from, {image: {url: data.data.aiImageData[0].images[0].url}}, {quoted: seloMeta}).catch(() => {
return reply("D'oh! Acabou a tinta amarela.")
})
} catch {
reply("D'oh! Acabou a tinta amarela.")
}
break

case 'photoleap': 
try {
if (!q) return reply("O que você quer que eu desenhe, seu Zé Roela?")
audiomenu = await fs.readFileSync("./arquivos/audios/aguarde.mp3")
 await sleep(1000);
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})
data = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${q}`)
client.sendMessage(from, {image: {url: data.data}}, {quoted: seloMeta}).catch(() => {
return reply("D'oh! Acabou a tinta amarela.")
})
} catch {
reply("D'oh! Acabou a tinta amarela.")
}
break

case 'dinextenso': // Invertexto-API com 3.000 requisições mensais, fique atento! [📍]
if(!q.includes(".")) return reply(`D'oh! Precisa de um ponto, como numa rosquinha!\nExemplo: *${prefix}dinextenso 500.00*`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(e) {
reply("D'oh! A conta é muito difícil.")
}
break;

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("Hmm, preciso de um CPF para verificar os impostos...")
if(q.length < 11) return reply("D'oh! Um CPF tem 11 números, seu Zé Roela!")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Hmm, parece que seus impostos estão em dia. Válido.")
if(data.valid == false) return reply("D'oh! Este número é mais falso que o cabelo do Krusty. Inválido.")
} catch(e) {
reply("D'oh! O sistema da receita caiu.")
}
} else if(command === "validarcnpj") {
if(!q) return reply("Hmm, preciso de um CNPJ para verificar a empresa do Mr. Burns...")
if(q.length < 14) return reply("D'oh! Um CNPJ tem 14 números, seu Zé Roela!")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Excellent! Válido.")
if(data.valid == false) return reply("D'oh! Este número é mais falso que o cabelo do Krusty. Inválido.")
} catch(e) {
reply("D'oh! O sistema da receita caiu.")
}
}
break;

case 'gpt': case 'chatgpt':
reagir(from, "⏳️")
if (!isregistrador) return reply(`D'oh! Você não está registrado! Use: ${prefix}registrar`)
var xapi = await fetchJson(`https://jeff-apis.shop/outros/chat/gemini?query=${q}&apikey=astroshop`)
client.sendMessage(from, {image: {url: "https://i.ibb.co/yQQCCQ7/images-1.jpg"}, caption: `${xapi.resultado}`}, {quoted: seloMeta})
break;

case 'gpt-4': case 'gpt4':
try {
if (!isregistrador) return reply(`D'oh! Você não está registrado! Use: ${prefix}registrar`)
if(!q) return reply("D'oh! O que você quer perguntar para a Lisa?")
let { key } = await client.sendMessage(from, {text: `Hmm, deixe-me pensar... O cérebro do Homer está a todo vapor!`}, {quoted: seloMeta})
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${q}`)
await client.sendMessage(from, {text: anu1.result, edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply("D'oh! A TV quebrou! A API está fora do ar.")
} else {
reply("D'oh! A TV quebrou! A API está fora do ar.")
}
}
break

case 'totext':
if (!isQuotedAudio) return reply("Ay, caramba! Mande um áudio para a Lisa transcrever!")
if(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply("D'oh! Esse áudio é mais longo que um discurso do Vovô. Mande um menor.")
try {
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let { key } = await client.sendMessage(from, {text: `A Lisa está pegando o caderno dela... Aguarde!`}, {quoted: seloMeta})
fs.writeFileSync(`./database/data/media/audios/totext/totext-${sender}.mp3`, getBufferAudio)
client = new AssemblyAI({apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a"})
data = await client.transcripts.create({audio_url: `./database/data//media/audios/totext/totext-${sender}.mp3`, language_code: "pt"})
if (data.status === 'error') return reply("D'oh! Não entendi nada do que foi dito.")
if (data.words.length == 0) return reply("D'oh! Não consegui transcrever. Falaram muito rápido!")
await client.sendMessage(from, {text: `• *Transcrição* - Palavras: *${data.words.length}*\n—\n• ${data.text}`, edit: key});
DLT_FL(`./database/data/media/audios/totext/totext-${sender}.mp3`)
} catch(e) {
reply("D'oh! O Homer comeu a fita.")
console.error(e)
}
break

case 'bard':
try {
if(!q) return reply("D'oh! O que você quer perguntar para a Lisa?")
let { key } = await client.sendMessage(from, {text: `Hmm, deixe-me pensar... O cérebro do Homer está a todo vapor!`}, {quoted: seloMeta})
r = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/ia/gbard?query=${q}&apikey=`+API_KEY_BRONXYS)
await client.sendMessage(from, {text: mess.respostaBard(r), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply("D'oh! A TV quebrou! A API está fora do ar.")
} else {
reply("D'oh! A TV quebrou! A API está fora do ar.")
}
}
break

case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`D'oh! O que você quer pesquisar?\nExemplo: ${prefix+command} Rosquinhas`)
audiomenu = await fs.readFileSync("./arquivos/audios/aguarde.mp3")
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('D\'oh! Não achei nada sobre isso nem na biblioteca de Springfield.')
} else {
reply('D\'oh! Não achei nada sobre isso nem na biblioteca de Springfield.')
}
}
break

case 'gptvoz':
if (!isregistrador) return reply(`D'oh! Você não está registrado! Use: ${prefix}registrar`)
if(!q) return reply("D'oh! O que você quer que eu fale?")
reply(`Hmm, Marge, onde eu anotei isso? Processando sua pergunta...`)
nznk = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/ia/gpt?query=${q}&apikey=`+API_KEY_BRONXYS)
const gpts = require('./arquivos/funcoes/gtts')('pt')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nznk.resultado}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
client.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: seloMeta})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break

case 'corretor':
if(!q) return reply(`Ay, caramba! Escreva a frase para a Lisa corrigir!\nExemplo:\n— ${prefix+command} `+"```Nóis fumo no mercado```")
try {
let { key } = await client.sendMessage(from, {text: `A Lisa está pegando o dicionário dela... Aguarde!`}, {quoted: seloMeta})
promptUser = `Corrija gramaticalmente uma frase para o português brasileiro tradicional: ${q}`
anu1 = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/ia/gpt?query=${promptUser}&apikey=`+API_KEY_BRONXYS)
await client.sendMessage(from, {text: mess.corretorOrtografico(anu1), edit: key});
} catch(e) {
return reply("D'oh! A Lisa não entendeu sua letra de Zé Roela.")
}
break

case 'summerize':
if(!q) return reply(`D'oh! O que você quer que a Lisa resuma?`)
try {
let { key } = await client.sendMessage(from, {text: `A Lisa está lendo tudo... Isso vai levar um tempinho...`}, {quoted: seloMeta})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/ia/gpt?query=${promptUser}&apikey=`+API_KEY_BRONXYS)
await client.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(e) {
return reply("D'oh! O texto é mais longo que a lista de queixas do Vovô.")
}
break

case 'nasa':
try {
if (!q) return reply(`D'oh! Diga a data!\n*Exemplo:* ${prefix}${command} 19-10-2007`)
dataSab = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/nasaphoto?data=${q}&apikey=`+API_KEY_BRONXYS)
resultExp = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info/translate?texto=${dataSab.nasa.explanation}&ling=pt&apikey=`+API_KEY_BRONXYS)
client.sendMessage(from, {image: {url: dataSab.nasa.hdurl }, caption: mess.result_APOD(dataSab, resultExp)})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("D'oh! O foguete explodiu no lançamento.");
}
break;

case 'book':
if (args.length == 0) return reply(`D'oh! Qual o nome do livro?\n*Exemplo:* ${prefix+command} O Guia do Mochileiro das Galáxias`)
try {
audiomenu = await fs.readFileSync("./arquivos/audios/aguarde.mp3")
 await sleep(1000);
client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg'})
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
client.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}).catch(e => {
reply("Pior. Livro. De todos. Não achei.")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Pior. Livro. De todos. Não achei.")
}
}
break

case 'cotacao': {
if (!isPremium) return reply(`~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!`);
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("D'oh! Que moeda é essa? Tente: dolar, euro, bitcoin, libra, ethereum")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
reply(mess.quoteCurrencies(resposta));
}).catch((response) => {
reply("D'oh! O Mr. Burns não quis me emprestar o dinheiro para a cotação.");
});
}
break;

case 'clima':
if (args.length == 0) return reply(`D'oh! Qual a cidade?\n*Exemplo:* ${prefix}Clima Springfield`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://i.ibb.co/PxgrgDn/pink-weather-app-icon.jpg`)
client.sendMessage(from, {image: wttrImage, caption: mess.clima(wttrin), quoted: seloMeta}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("D'oh! O Kent Brockman não sabe o clima dessa cidade.")
}
}
break

case 'ricky':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST', headers: {'content-type': "application/x-www-form-urlencoded"}, body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("D'oh! Não entendi o que você disse.")
}
break

case 'simih':
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isSimi) return reply('Já estou falando pelos cotovelos!')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Woo hoo! Modo Simi ativado! Agora vou falar mais que a Marge!')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já estou quieto, seu Zé Roela.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Ok, modo Simi desativado. Vou ficar quieto no meu canto.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar, seu Zé Roela!')
}
break

case 'simih2':
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('Já estou falando pelos cotovelos!')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Woo hoo! Modo Simi 2 ativado!')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já estou quieto, seu Zé Roela.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Ok, modo Simi 2 desativado.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar, seu Zé Roela!')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Já está ativado, seu bocó.')
dataGp[0].autosticker = true
setGp(dataGp)
reply('Woo hoo! Agora vou transformar tudo em figurinha!')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].autosticker = false
setGp(dataGp)
reply('Ok, chega de figurinhas automáticas. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'autorepo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Já está ativado, seu bocó.')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('Woo hoo! Agora vou responder a tudo!')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('Ok, vou ficar quieto. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isModobn) return reply('A hora da diversão já começou!')
dataGp[0].jogos = true
setGp(dataGp)
reply('Woo hoo! Modo Brincadeira ativado! Que os jogos comecem!')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].jogos = false
setGp(dataGp)
reply('Ok, fim da diversão. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'modoadulto':
case 'modo18':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isModo18) return reply('O modo "só para maiores" já está ativo.')
dataGp[0].adulto = true
setGp(dataGp)
reply('Woo hoo! Modo Adulto ativado! Escondam as crianças!')
} else if(Number(args[0]) === 0) {
if(!isModo18) return reply('O modo adulto já está desativado.')
dataGp[0].adulto = false
setGp(dataGp)
reply('Ok, modo adulto desativado. Podem trazer as crianças de volta.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'leveling':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(args.length < 1) return reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('O sistema de nível já está ativo.')
dataGp[0].level = true
setGp(dataGp)
reply("Woo hoo! Sistema de nível ativado! Vamos ver quem é o melhor!")
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`Já está desativado, seu Zé Roela.`)
dataGp[0].level = false
setGp(dataGp)
reply("Ok, sistema de nível desativado. Que chato.")
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está mais banido que o Milhouse do clube do Bart.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Ha-ha! Grupo banido!`)
} else {
if(!isBanchat) return reply(`Este grupo não está banido, seu Zé Roela.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Ok, grupo desbanido. Que chato.`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!")
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Ok, vou tirar uma soneca como o Homer... Bot OFF.')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Woo hoo! Acordei! Bot ON!`)
}
break

case 'antipalavrão':
case 'antipalavrao':
case 'antipalavra':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply(`D'oh! É 1 pra ligar e 0 pra desligar!`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Já está ativado, seu bocó.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('Modo Ned Flanders ativado! Sem palavrões, vizinho!')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Já está desativado, seu Zé Roela.')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('Ok, podem falar palavrões. Que chato.')
} else {
reply('D\'oh! É 1 pra ligar e 0 pra desligar!')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isPalavrao) return reply('Ora-bolas, o anti-palavrão está desativado, vizinho!')
if(args.length < 1) return reply( `D'oh! Use assim: ${prefix + command} [palavrão]`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Essa palavra já está na minha caderneta de anotações!')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Woo hoo! Palavra adicionada à lista de "não-pode-dizer" do Flanders!')
break

case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isPalavrao) return reply('Ora-bolas, o anti-palavrão está desativado, vizinho!')
if(args.length < 1) return reply(`D'oh! Use assim: ${prefix + command} [palavrão]`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('D\'oh! Essa palavra nem estava na lista, seu Zé Roela.')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Ok, palavra perdoada. Pode voltar a usar (mas o Flanders está de olho).')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Ora-bolas, o anti-palavrão está desativado, vizinho!')
let lbw = `~🙏~ *LISTA DE PALAVRAS PROIBIDAS DO FLANDERS* ~🙏~\n\nOra-bolas, aqui está o que não se deve dizer, vizinho:\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões podem usar isso.")
if(!isBotGroupAdmins) return reply("Preciso ser admin pra proibir as coisas, né?")
if(args.length < 1) return reply(`D'oh! Use ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`Atenção, alunos! O limite de caracteres já está ativo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`Limite de caracteres ativado! Sem redações gigantes, senão é detenção!`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('O limite de caracteres já está desativado, seu Zé Roela.')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('Ok, limite de caracteres desativado. Podem voltar a escrever testamentos.')
} else {
reply(`D'oh! É 1 para ativar e 0 para desativar!`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply("Só o Mr. Burns pode fazer isso!")
if(!isAntiFlood) return reply(`D'oh! Ative o limite primeiro com ${prefix}limiteflood 1`)
if(!q) return reply(`D'oh! Qual o limite? 5000? Como o número de rosquinhas que eu comi hoje.`)
if(isNaN(q) == true) return reply('Ay, caramba! Só números, seu Zé Roela!')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Woo hoo! Limite de caracteres do grupo alterado para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Woo hoo! Limite global de caracteres alterado para: ${q}`)
}
break

case 'status':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply("Ha-ha! Só os valentões podem usar isso.")
reply(mess.statusBot(isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reiniciar':
// A verificação de dono agora é mais dramática, no estilo Mr. Burns
if (!SoDono) return reply("Excellent... Só o Mr. Burns pode apertar o botão vermelho!");

const idChatReinicio = info.chat || info.key?.remoteJid || info.from;
if (!idChatReinicio) {
// Adicionando a clássica culpa no Milhouse
reply('D\'oh! Não sei pra onde voltar depois de reiniciar. A culpa é do Milhouse!');
}
fs.writeFileSync('./ultimoreinicio.json', JSON.stringify({ chatId: idChatReinicio }));

// A mensagem de reinício agora é mais temática e engraçada, no estilo Homer
await reply(`Woo hoo! O sistema precisa de uma soneca, que nem eu no sofá. Reiniciando... Volto em alguns segundos, vou só pegar uma rosquinha! 🍩`);

setTimeout(() => {
process.exit();
}, 2200);
break;

case 'novoqr':
if(!SoDono) return reply("Só o Mr. Burns pode fazer isso!");
reply("D'oh! Apagando o QR code. Fique de olho no terminal, como o Mr. Burns vigia os funcionários.");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
STICKERS */
case 'emoji': case 'semoji':
if(!q) return reply(`D'oh! Qual emoji você quer?\n*Exemplo:* ${prefix}emoji 🍩/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){ idemot = 0 }
else if(jemot == 'google'){ idemot = 1 }
else if(jemot == 'samsung'){ idemot = 2 }
else if(jemot == 'microsoft'){ idemot = 3 }
else if(jemot == 'whatsapp'){ idemot = 4 }
else if(jemot == 'twitter'){ idemot = 5 }
else if(jemot == 'facebook'){ idemot = 6 }
else if(jemot == 'joypixels'){ idemot = 7 }
else if(jemot == 'openmoji'){ idemot = 8 }
else if(jemot == 'emojidex'){ idemot = 9 }
else if(jemot == 'lg'){ idemot = 10 }
else if(jemot == 'htc'){ idemot = 11 }
else if(!jemot){ idemot = 4 }
else{
return reply(`D'oh! Use assim: ${prefix}emoji 🍩/whatsapp`)
}
reply("Woo hoo! Fazendo sua figurinha de emoji...")
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
sendStickerFromUrl(from, emoji.images[idemot].url)
}).catch(e => {
reply("D'oh! Não achei esse emoji nem na loja de quadrinhos do Comic Book Guy.")
})
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Ay, caramba! Precisa de um "+" pra misturar, como rosquinha e cobertura!\nExemplo: ${prefix+command} 🍩+🍺`)
try {
mention(`*@${sender.split("@")[0]}, o Professor Frink está misturando os emojis no laboratório...`)
sendStickerFromUrl(from, `https://api.bronxyshost.com.br/api-bronxys/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_BRONXYS)
} catch (e) {
if(String(e).includes(API_KEY_BRONXYS)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
} else {
reply('D\'oh! Essa mistura deu mais errado que as invenções do Professor Frink.')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply("Woo hoo! Fazendo sua figurinha...")
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${NomeDoBot}`
sd = `↳ [🍩] Feito por: ${pushname}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
client.sendMessage(from, {sticker: sti}, {quoted: seloMeta})
} else {
return reply(`D'oh! Só funciona com imagem, seu Zé Roela!`)
}
break

case 'rbale':
if(!isQuotedSticker) return reply('Ay, caramba! Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply("Woo hoo! Fazendo sua figurinha...")
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `↳ [🍩] Feito por: ${pushname}`, `${NomeDoBot}`)
var sti = new Buffer.from(mantap, 'base64');
client.sendMessage(from, {sticker: sti}, {quoted: seloMeta})
.catch((err) => {
reply("D'oh! Deu erro."); 
})
break

case 'roubar':
case 'rename':
case 'steal':
case 'take'://THE SIMPSONS BOT by Obrabo DEV
if (!x && info.message.extendedTextMessage === null) return await reply(`Ay, caramba! Marque a figurinha que você quer roubar, como o Bart rouba as rosquinhas!\nUse a legenda no formato:\n*${prefix}roubar Nome do Pacote/Autor*`);
await reply('Criando a figurinha... Não conte para o Chefe Wiggum!');
(async function () {
 const legenda = q ? q.split("/")[0] : `[🛹]⊰>Roubado por: ${pushname}`;
const autor = q ? q.split("/")[1] : `[🍩]⊰>Bot: ${NomeDoBot}`;
const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const stickerMsg = RSM?.stickerMessage;
if (!stickerMsg) return reply("D'oh! Precisa marcar uma figurinha, seu Zé Roela!");
const mimetype = stickerMsg.mimetype || "image/webp";
const rane = getRandom('.webp');
const buff = await getFileBuffer(stickerMsg, "sticker");
fs.writeFileSync(rane, buff);
const nomemeta = "temp.exif";
const rano = getRandom(".webp");
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
};
let exifAttr = Buffer.from([
0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00,
0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00,
0x00, 0x00, 0x16, 0x00, 0x00, 0x00
]);
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
let exif = Buffer.concat([exifAttr, jsonBuff]);
exif.writeUIntLE(jsonBuff.length, 14, 4);
fs.writeFileSync(`./${nomemeta}`, exif);
fs.renameSync(rane, rano);
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
fs.unlinkSync(nomemeta);
fs.unlinkSync(rano);
});
})().catch(e => {
console.log(e);
reply("D'oh! O Nelson me deu um cascudo e não consegui roubar. Ha-ha!");
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
} catch {}
});
break;

case 'sticker': case 'stick': case 's': case 'f': 
if(!x && info.message.extendedTextMessage === null) return await reply('D\'oh! Marque uma imagem ou um vídeo (curto, a atenção do Homer não dura muito!)')//THE SIMPSONS BOT by Obrabo DEV
await reply('Woo hoo! Fazendo sua figurinha...')
{
(async function () {
var legenda = q ? q?.split("/")[0] : `
[🍩]⊰>Grupo: ${groupName}`;
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `
[🛹]⊰>Pedido por: ${pushname}
[👑]⊰>Dono: ${NickDono}
[🤖]⊰>Bot: ${NomeDoBot}`
const RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
const boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;
if (boij || (boij2 && boij2?.seconds < 11)) {

const mediaType = boij ? 'image' : 'video'; 
const mediaObj = boij || boij2;
const rane = getRandom('.' + await getExtension(mediaObj.mimetype));
const buff = await getFileBuffer(mediaObj, mediaType);
fs.writeFileSync(rane, buff);
const rano = getRandom('.webp');
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
client.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
await reply(`Ay, caramba! Mande uma imagem ou vídeo com no máximo 10 segundos!`)
}
})().catch(e => {
console.log(e)
enviar("D'oh! Deu erro. A culpa é do Milhouse.")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break

case 'stickeria': // THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply(`D'oh! Diga o que você quer que eu desenhe!\nExemplo: ${prefix + command} Homer comendo uma rosquinha`);
reply('Procurando meu giz de cera... Não conte para a Marge!');
try {
const toshiruzUrl = `${DENNYS_API}/api/ai/imagem/imagemAi?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
const response = await axios.get(toshiruzUrl, { responseType: 'arraybuffer' });
const buffer = Buffer.from(response.data, 'binary');
const tempDir = './temp';
const tempInput = `${tempDir}/${q}.jpg`;
const tempOutput = `${tempDir}/${q}.webp`;
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
fs.writeFileSync(tempInput, buffer);
await sharp(tempInput)
.resize(512, 512, {
fit: 'inside',
withoutEnlargement: true })
.webp({
lossless: true,
quality: 80 })
.toFile(tempOutput);
await client.sendMessage(from, { sticker: fs.readFileSync(tempOutput) }, { quoted: seloMeta });
fs.unlinkSync(tempInput);
fs.unlinkSync(tempOutput);
} catch (e) {
console.error(e);
reply("D'oh! Acabou a tinta amarela. Tente outra coisa!");
}
break;

case 'figuemoji': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10, senão o Homer come todas!");}
async function toshiruz() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_emoji?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruz();
await sleep(680);}}
break;

case 'figuflork': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10, senão o Homer come todas!");}
async function toshiruzfigu() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_roblox?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfigu();
await sleep(680);}}
break;

case 'figumemes': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10, senão o Homer come todas!");}
async function toshiruzfig() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_memes2?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfig();
await sleep(680);}}
break;

case 'figubebe': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10, senão a Maggie chora!");}
async function toshiruzfi() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_bebe?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfi();
await sleep(680);}}
break;

case 'figucoreana': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10, senão o Homer come todas!");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_coreana?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figucoreana2': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10, senão o Homer come todas!");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_coreanas2?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figuanime': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Pior. Quantidade. De todas. No máximo 10!");}
async function toshiruzprasempre() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_anime2?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzprasempre();
await sleep(680);}}
break;

case 'figu18': {//THE SIMPSONS BOT by Obrabo DEV
if(!isModo18 && isGroup) return reply(`D'oh! O Ned Flanders não deixa usar isso aqui! Ative o modo adulto primeiro.`)
reagir(from, "😈")
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10!");}
async function toshiruzaniversario() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu+18?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversario();
await sleep(680);}}
break;

case 'figuanimais': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas de Ajudante de Papai Noel você quer!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10!");}
async function toshiruzaniversari() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_animais?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversari();
await sleep(680);}}
break;

case 'figudesenho': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas de Comichão e Coçadinha você quer!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10!");}
async function toshiruzaniversar() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_desenho?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversar();
await sleep(680);}}
break;

case 'figurinhas': {//THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga quantas figurinhas você quer, seu Zé Roela!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return reply("Ay, caramba! No máximo 10!");}
async function toshiruzaniversa() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}/sticker/figu_aleatori?apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversa();
await sleep(680);}}
break;

case 'figuaai': { // THE SIMPSONS BOT by Obrabo DEV
if (!q) return reply("D'oh! Diga o que você quer que eu desenhe!\nExemplo: figuaai Homer surfando numa rosquinha");
const partes = q.trim().split(" ");
let quantidade = 1;
let texto = q.trim();
if (!isNaN(partes[0])) {
quantidade = Number(partes[0]);
if (quantidade > 10) return reply("Ay, caramba! No máximo 10!");
texto = partes.slice(1).join(" ");
if (!texto) return reply("D'oh! Diga o que desenhar depois do número!");}
async function gerarStickerIA() {
await client.sendMessage(from, {
sticker: { url: `${DENNYS_API}api/ai/sticker/stickAi?query=${encodeURIComponent(texto)}&apikey=${DENNYS_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { await gerarStickerIA();
await sleep(680);
}}
break;

case 'togif':
if(!isQuotedSticker) return reply('Ay, caramba! Marque a figurinha animada!')
if(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage && info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated) {
let media = await downloadAndSaveMediaMessage(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
try {
const webp_mp4 = require("./arquivos/docs/webp_mp4.js");
reply('Convertendo... mais rápido que o Comichão fugindo do Coçadinha!')
a = await webp_mp4(media)
mp4 = await getBuffer(a.result)
client.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
} catch(e) {
console.log(e)
reply('D\'oh! Deu erro na conversão.')
}
await fs.unlinkSync(media)
} else {
reply('Ay, caramba! Isso não é uma figurinha animada!')
}
break

case 'toimg':
if(!isQuotedSticker) return reply('D\'oh! Marque uma figurinha para eu transformar em imagem, seu Zé Roela.')
try {
reply("Woo hoo! Transformando em imagem...")
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
client.sendMessage(from, {image: buff}, {quoted: seloMeta}).catch(e => {
console.log(e);
reply('D\'oh! Não consegui converter.')
})
} catch {
reply("D'oh! Deu erro.")
}
break

case 'br':
try {
ppimg = await client.profilePictureUrl(sender, 'image')} catch {ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'}
data = await getBuffer(`https://some-random-api.com/canvas/misc/youtube-comment?avatar=${ppimg}&comment=${comment}&username=${user}`)

break 
case 'dennys'://THE SIMPSONS BOT by Obrabo DEV
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if (!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const imgtoshiruz = 'https://files.catbox.moe/tgptau.jpg';
client.sendMessage(from, { text: `Analisando a admiração de @${sender_ou_n.split("@")[0]} pelo mestre...`, mentions: [sender_ou_n] }, { quoted: info });
setTimeout(async () => { 
const random = `${Math.floor(Math.random() * 110)}`;
client.sendMessage(from, { image: { url: imgtoshiruz },
caption: `Análise do Smithers para *@${sender_ou_n.split("@")[0]}*:\n• Nível de admiração pelo Toshiruz: *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]
}, { quoted: info });
}, 7000);
break;

case 'safada':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if (!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const imgsafada = 'https://files.catbox.moe/s2iuvm.jpg';
client.sendMessage(from, { text: `Analisando a safadeza de @${sender_ou_n.split("@")[0]}...`, mentions: [sender_ou_n] }, { quoted: info });
setTimeout(async () => { 
const random = `${Math.floor(Math.random() * 110)}`;
client.sendMessage(from, { image: { url: imgsafada },
caption: `Análise do Bar do Moe para *@${sender_ou_n.split("@")[0]}*:\n• A porcentagem de safadeza é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]
}, { quoted: info });
}, 7000);
break;

case 'safado':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if (!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const imgsafado = 'https://files.catbox.moe/yh5whg.jpg';
client.sendMessage(from, { text: `Analisando a safadeza de @${sender_ou_n.split("@")[0]}...`, mentions: [sender_ou_n] }, { quoted: info });
setTimeout(async () => { 
const random = `${Math.floor(Math.random() * 110)}`;
client.sendMessage(from, { image: { url: imgsafado },
caption: `Análise do Bar do Moe para *@${sender_ou_n.split("@")[0]}*:\n• A porcentagem de safadeza é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]
}, { quoted: info });
}, 7000);
break;

case 'morte': case 'death':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if (args.length == 0) return await reply(`D'oh! Diga o nome da pessoa!\nExemplo: ${prefix+command} Milhouse`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await reply(`D'oh! Nome inválido, seu Zé Roela!`);
death = `@${sender.split('@')[0]} — Segundo o Dr. Nick Riviera, pessoas com o nome “${predea.data.name}” costumam bater as botas aos ${predea.data.age} anos. Olá, pessoal!`;
client.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: seloMeta})
break;

case 'matar': case 'mata':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque quem vai virar presunto!')
client.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Comichão matou o Coçadinha! Digo, você matou o(a) @${menc_os2.split('@')[0]} 😈`, mentions: [menc_os2]}, {quoted: seloMeta})
break 

case 'beijo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque quem você quer beijar!')
client.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo no(a) @${menc_os2.split('@')[0]}! Mmmm... Beijo.` , mentions: [menc_os2]}, {quoted: seloMeta})
break

case 'vab':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
psycatgames().then(async (array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(client, from, "D'oh! Uma escolha difícil:", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
setTimeout(() => {reagir(from, "🍺")}, 100)
const pergunta_ = JSON.parse(fs.readFileSync('./arquivos/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(client, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'conselhobiblico':
case 'conselhosbiblico':
case 'conselhosb':
case 'conselhob':
reagir(from, "🙏")
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
client.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: seloMeta, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

case 'cantadas': case 'cantada':
reagir(from, "😎️")
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]
let cantadasText = `~🍺~ *Cantada do Moe* ~🍺~\n\n*${cantadasbb}*`
client.sendMessage(from, {text: cantadasText}, {quoted: seloMeta})
break

case 'fatos': case 'curiosidades':
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]
let fatosText = `~🧠~ *Fato da Lisa* ~🧠~\n\n*${fatoskk}*`
client.sendMessage(from, {text: fatosText}, {quoted: seloMeta})
break

case 'tapa':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque em quem você quer dar um tapa!')
client.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você deu um tapa na nuca do(a) *@${menc_os2.split('@')[0]}*. Ha-ha!`, mentions: [menc_os2]}, {quoted: seloMeta})
break

case 'bater':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque em quem você quer bater!')
client.sendMessage(from, {video: {url: batercmd}, gifPlayback: true, caption: `Você bateu em *@${menc_os2.split('@')[0]}*!`, mentions: [menc_os2]}, {quoted: info})
break

case 'brigar':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque com quem você quer brigar!')
client.sendMessage(from, {video: {url: brigacmd}, gifPlayback: true, caption: `Olha a briga! *@${menc_os2.split('@')[0]}* está apanhando! Ha-ha!`, mentions: [menc_os2]}, {quoted: info})
break

case 'soco':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque em quem você quer dar um soco!')
client.sendMessage(from, {video: {url: sococmd}, gifPlayback: true, caption: `Você deu um soco no(a) *@${menc_os2.split('@')[0]}*. Ha-ha!`, mentions: [menc_os2]}, {quoted: info})
break

case 'chute':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque em quem você quer dar um chute!')
client.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você deu um chute no traseiro de *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: info})
break

case 'dogolpe':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque o Zé Roela!')
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
client.sendMessage(from, {text: `~🕵️~ *Análise do Chefe Wiggum* ~🕵️~\n\n*@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: seloMeta})
break

case 'shipo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!menc_os2) return reply('Ay, caramba! Marque uma pessoa para eu shippar!')
mention(`Hmm, a Lisa acha que *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* têm uma chance de *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'casal': {
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if (!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!");
if (isAudioMenu) {
const audioPath = './arquivos/audios/casal.mp3';
try {
if (fs.existsSync(audioPath)) {
const audioData = fs.readFileSync(audioPath);
await client.sendMessage(from, {
audio: audioData, mimetype: 'audio/mpeg', ptt: true }, { quoted: info });
} else { console.warn("Áudio de casal não encontrado:", audioPath);
}} catch (err) { console.error("Erro ao enviar o áudio de casal:", err);
}}
const membro1 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
  let membro2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
while (membro1 === membro2) {
membro2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
}
const chance = Math.floor(Math.random() * 100) + "%";
mention(`~❤️~ *Casal do Dia* ~❤️~\n\nSinto uma química entre *@${membro1.split('@')[0]}* & *@${membro2.split('@')[0]}*! A chance de dar certo é de: *${chance}*!`);
}
break;

case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isLevelingOn) return reply(`D'oh! O sistema de level não está ativo. Peça para um admin ativar!`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `~🏆~ *RANK DE SPRINGFIELD* ~🏆~\n–`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Zé Roela 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Vizinho do Flanders 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Amigo do Milhouse 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Cliente do Kwik-E-Mart 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Aluno da Sra. Krabappel 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Freguês do Moe 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Funcionário da Usina Nuclear 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ajudante do Krusty 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Cidadão de Springfield 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Chefe de Polícia Wiggum 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Diretor Skinner 🌀"}; if(newlevel >= 1500 && newlevel < 5000000){var newpatente = "Homer Simpson 🍩"}; if(newlevel >= 5000000){var newpatente = "Mr. Burns 💰"}
tc += `\n*${i+1}°.* • *${rank[i].nick}*\n• Golds: *${rank[i].contador}*\n• Patente: *${newpatente}*\n————`
}
}
reply(tc)
} else { 
reply(`D'oh! Ainda não tem gente suficiente no rank.`)
}
break

case 'patente':
case 'level':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isLevelingOn) return reply(`D'oh! O sistema de level não está ativo. Peça para um admin ativar!`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100){var newpatente = "Zé Roela 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Vizinho do Flanders 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Amigo do Milhouse 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Cliente do Kwik-E-Mart 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Aluno da Sra. Krabappel 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Freguês do Moe 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Funcionário da Usina Nuclear 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ajudante do Krusty 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Cidadão de Springfield 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Chefe de Polícia Wiggum 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Diretor Skinner 🌀"}; if(newlevel >= 1500 && newlevel < 5000000){var newpatente = "Homer Simpson 🍩"}; if(newlevel >= 5000000){var newpatente = "Mr. Burns 💰"}
// ... (resto do seu código de barra de progresso)
leveltxt = `~🏆~ *SEU LEVEL EM SPRINGFIELD* ~🏆~\n• Usuário: *@${sender.split("@")[0]}*\n• Você está no level *${level2[levelstts].level}* e na patente *${newpatente}*\n• Seus golds: *${level2[levelstts].contador}* ${newlevel < 10000000 ? `para a próxima patente falta *${newcont}*.` : ``}\n\t🔋 ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `• Faltam apenas *${sabibis} golds* para você subir de nível.` : `Excellent! Você alcançou a patente máxima!`}`
mention(`${leveltxt}`)
} else {
reply(`D'oh! Você ainda não tem level. Fale mais no grupo!`)
}
break

case 'quizanimais':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!") 
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply("D'oh! Use 1 para ativar o quiz e 0 para desativar, seu Zé Roela!")
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./database/grupos/games/quiz-animais/${from}.json`))
imagemtexto = `~🐾~ *QUIZ DE ANIMAIS DO ZOOLÓGICO DE SPRINGFIELD* ~🐾~\n\n🤔 Qual é o animal na foto? Diga aí, seu Zé Roela!`
wew = await getBuffer(`${superrttrr.foto}`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
} else {
fs.writeFileSync(`./database/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto = `~🐾~ *QUIZ DE ANIMAIS DO ZOOLÓGICO DE SPRINGFIELD* ~🐾~\n\n🤔 Qual é o animal na foto? Diga aí, seu Zé Roela!`
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/quiz-animais/${from}.json`)) return reply('D\'oh! O jogo nem começou!')
fs.unlinkSync(`./database/grupos/games/quiz-animais/${from}.json`)
reply("Woo hoo! Jogo desativado. Hora de comer rosquinhas!")
}
break

case 'whatmusic':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!") 
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const whatMAle = Math.floor(Math.random() * whatMusicAr.length)
if(args.length == 0) return reply('D\'oh! Use 1 para ativar o jogo e 0 para desativar, seu Zé Roela!')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)) {
dataW = JSON.parse(fs.readFileSync(`./database/grupos/games/wmusic/${from}.json`))
reply(`D'oh! O jogo já começou!\n–\n${dataW.trechoMusic}\n–\n🤔😱 Qual música é essa?\n• *Dica do Dente Sangrento:* ${dataW.dica}`)} else {
fs.writeFileSync(`./database/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[whatMAle])}`)
textW = `~🎷~ *QUAL É A MÚSICA DA LISA?* ~🎷~\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música é essa?\n• *Dica do Dente Sangrento:* ${whatMusicAr[whatMAle].dica}`
client.sendMessage(from, {text: textW}, {quoted: seloMeta})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/wmusic/${from}.json`)) return reply('D\'oh! O jogo nem começou!')
fs.unlinkSync(`./database/grupos/games/wmusic/${from}.json`)
reply("Woo hoo! Jogo desativado. Hora de comer rosquinhas!")
}
break

case 'gartic':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!") 
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply('D\'oh! Use 1 para ativar o jogo e 0 para desativar, seu Zé Roela!')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
imagemtexto = `~🎨~ *GARTIC DO BART* ~🎨~\n\n👩🏼‍🏫 - O que eu pichei aqui?\n📜 - Começa com: "${dataGartic2.letra_inicial}"\n🤔 - Tem traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe?* Peça a um admin para usar *${prefix}revelargartic*`
wew = await getBuffer(`${dataGartic2.imagem}`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
} else {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
imagemtexto = `~🎨~ *GARTIC DO BART* ~🎨~\n\n👩🏼‍🏫 - O que eu pichei aqui?\n📜 - Começa com: "${garticArchives[garticquiz].letra_inicial}"\n🤔 - Tem traços? ${garticArchives[garticquiz].contem_traços}\n–\n❓️ - *Não sabe?* Peça a um admin para usar *${prefix}revelargartic*`
wew = await getBuffer(`${garticArchives[garticquiz].imagem}`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return reply('D\'oh! O jogo nem começou!')
fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)
reply("Woo hoo! Jogo desativado. Hora de comer rosquinhas!")
}
break

case 'enigma':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!") 
if (!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('D\'oh! Use 1 para ativar o jogo e 0 para desativar, seu Zé Roela!')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
imagemtexto = `~🧠~ *ENIGMA DA LISA* ~🧠~\n\n📜 - Resolva este enigma:\n\n${SAB_SAB_ENI.charada}\n\n❓️ - *Não sabe?* Peça a um admin para usar *${prefix}revelarenigma*`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
} else {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `~🧠~ *ENIGMA DA LISA* ~🧠~\n\n📜 - Resolva este enigma:\n\n${enigmaArchive[engimaSolu].charada}\n\n❓️ - *Não sabe?* Peça a um admin para usar *${prefix}revelarenigma*`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)   
await client.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: seloMeta})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return reply('D\'oh! O jogo nem começou!')
fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)
reply("Woo hoo! Jogo desativado. Hora de comer rosquinhas!")
}
break

case 'revelargartic':  
if (!isGroupAdmins) return reply('Ha-ha! Só os valentões (admins) podem colar!')
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return ("D'oh! Não tem nenhum jogo rolando.")
let dataAnagramaa = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
reply(`🤫 Psst, *${pushname}*, a resposta é: *${dataAnagramaa.resposta}*. Não conta pra ninguém!`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply('Ha-ha! Só os valentões (admins) podem colar!')
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return ("D'oh! Não tem nenhum jogo rolando.")
let eni1 = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
reply(`🤫 Psst, *${pushname}*, a resposta é: *${eni1.respostaEne}*. Não conta pra ninguém!`)
break

case 'icms':
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [result1, result2] = txt.split("|")
if(!q.includes("|")) return reply(mess.syntaxIcms(prefix))
await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=`+API_KEY_BRONXYS).then(data => {
client.sendMessage(from, {text: mess.icmsResult(data)}, {quoted: seloMeta})
}).catch(e => {
return reply("D'oh! A calculadora de impostos quebrou.")
})
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot': {
reagir(from, "🍩");
const soundft = await fetch(qviado).then(v => v.buffer());
const audiomenu = fs.readFileSync("./arquivos/audios/uwu.mp3");
await sleep(2000);
await client.sendMessage(from, { audio: audiomenu,
mimetype: 'audio/mpeg', ptt: true 
}, { quoted: seloMeta });
}
break;

//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply("Woo hoo! Deixando o vídeo maluco...")
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`D'oh! Deu erro: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um vídeo, seu Zé Roela!")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply("Deixando o vídeo mais lento que o Vovô Simpson...") 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`D'oh! Deu erro: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloMeta })
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um vídeo, seu Zé Roela!")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply("Deixando o vídeo mais rápido que o Comichão!")
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`D'oh! Deu erro: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloMeta })
DLT_FL(ran)
})  
} else {
reply("D'oh! Marque um vídeo, seu Zé Roela!")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply("Deixando o áudio com a voz do Homer...")
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('D\'oh! Não consegui engrossar a voz.')
hah = fs.readFileSync(ran)
client.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um áudio, seu Zé Roela!")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply("Deixando o áudio com a voz do Homer...")
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('D\'oh! Não consegui engrossar a voz.')
hah = fs.readFileSync(ran)
client.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um áudio, seu Zé Roela!")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply("Deixando o áudio com a voz do Bart...")
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('D\'oh! Não consegui afinar a voz.')
hah = fs.readFileSync(ran)
client.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um áudio, seu Zé Roela!")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply("Woo hoo! Transformando em áudio...")
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('D\'oh! Deu erro na conversão.')
buffer = fs.readFileSync(ran)
client.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um vídeo, seu Zé Roela!")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply("Aumentando o grave... Woo hoo!")
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('D\'oh! O som estourou.')
hah = fs.readFileSync(ran)
client.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um áudio, seu Zé Roela!")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply("Aumentando o grave... Woo hoo!")
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('D\'oh! O som estourou.')
hah = fs.readFileSync(ran)
client.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMeta})
DLT_FL(ran)
})
} else {
reply("D'oh! Marque um áudio, seu Zé Roela!")
}
break

case 'tirargolds':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode confiscar dinheiro!")
if(!q) return reply(`D'oh! Diga quantos golds quer tirar, seu Zé Roela!`)
if(!Number(args[0])) return reply(args[0] + " não é um número, seu bocó!")
if(Number(args[0]) < 1) return reply("Tem que tirar pelo menos 1 gold!")
if(q.includes(".")) return reply("Ay, caramba! Sem números quebrados!")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`Excellent! ${args[0]} gold${Number(args[0]) > 1 ? `s` : ``} confiscado${Number(args[0]) > 1 ? `s` : ``} deste Zé Roela...`)
break

case 'blocklevel':
if(!SoDono) return reply("Só o Diretor Skinner pode colocar de castigo!")
if(!menc_os2) return reply("Ay, caramba! Marque o aluno que vai para a detenção.")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("D'oh! Esse aluno nem está na minha lista.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return reply("Esse Zé Roela já está de castigo.")
level2[AB].block = true
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Ha-ha! Usuário bloqueado de ganhar level. Vai ficar na detenção com o Bart!")
break

case 'unblocklevel':
if(!SoDono) return reply("Só o Diretor Skinner pode liberar da detenção!")
if(!menc_os2) return reply("Ay, caramba! Marque o aluno que você vai perdoar.")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("D'oh! Esse aluno nem está na minha lista.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return reply("Esse Zé Roela nem estava de castigo.")
level2[AB].block = false
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Woo hoo! Usuário liberado da detenção. Pode voltar a upar.")
break

case 'blocklevel-list': case 'blocklevellist':
if(!SoDono) return reply("Só o Diretor Skinner pode ver a lista da detenção!")
txt = `~칠~ *LISTA DA DETENÇÃO DO SKINNER* ~칠~\n\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
  if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Zé Roelas na Detenção: *${blocklevellist}*`
if(blocklevellist > 0) {
mention(txt)
} else {
reply("A sala de detenção está vazia. O Bart deve estar doente.")
}
break

case 'rmlevel':
if(!SoDono) return reply("Só o Mr. Burns pode demitir!")
if(!q && !menc_os2) return reply("D'oh! Marque o Zé Roela que será demitido do sistema de level.")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return reply("D'oh! Esse Zé Roela nem trabalha aqui.")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply("Excellent! Usuário demitido do sistema de level. Smithers, solte os cães!")
break

case 'rankativos': 
case 'rankativo':   
    if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");

    var i3 = countMessage.map(i => i.groupId).indexOf(from);
    if (i3 === -1 || !countMessage[i3] || !countMessage[i3].numbers) {
        return reply("D'oh! Não tenho dados suficientes. Ninguém fala nada aqui?");
    }

    var blue = countMessage[i3].numbers.map(i => i);
    if (!Array.isArray(blue) || blue.length === 0) {
        return reply("D'oh! Ninguém ativo para o rank. Que grupo chato.");
    }

    blue.forEach(user => {
        if (user.figus === undefined) user.figus = 0;
    });

    blue.sort((a, b) => ((b.figus + b.messages + b.cmd_messages) - (a.figus + a.messages + a.cmd_messages)));

    let menc = [];
    let blad = `~🏆~ *RANK DOS MAIS TAGARELAS DO BAR DO MOE* ~🏆~\nGrupo: ${groupName}\n`;

    for (let i = 0; i < Math.min(blue.length, 5); i++) {
        let user = blue[i];
        blad += `\n*🏅 ${i + 1}º Lugar:* @${user.id.split('@')[0]}\n`;
        blad += `• Mensagens: *${user.messages}*\n`;
        blad += `• Comandos: *${user.cmd_messages}*\n`;
        blad += `• Figurinhas: *${user.figus}*\n`;
        menc.push(user.id);
    }
    mentions(blad, menc, true);
    break;


case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isGroupAdmins) return reply("Ha-ha! Só os valentões (admins) podem usar isso.")
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `~😴~ *RANK DOS DORMINHOCOS DO VOVÔ SIMPSON* ~😴~\nGrupo: ${groupName}\n-\n`
if(bule.length == 0)boardi += 'Woo hoo! Ninguém está dormindo no ponto!'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Mensagens: *${bule[i].messages}*\n• Comandos: *${bule[i].cmd_messages}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(groupIdscount.indexOf(from) < 0) return reply('D\'oh! Ainda não tenho dados sobre este grupo.')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Ay, caramba! Marque um Zé Roela para eu xeretar.')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`~📝~ *RELATÓRIO DA LISA* ~📝~\n\nAtividade de @${menc_os2.split('@')[0]}:\n–\n• Mensagens: *${RSM_CN.messages}*\n• Comandos: *${RSM_CN.cmd_messages}*\n• Aparelho: *${RSM_CN.aparelho}*\n• Figurinhas: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
mentions(`D'oh! Não tenho nenhuma informação sobre *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `~🏳️‍🌈~ *RANK GAY DE SPRINGFIELD* ~🏳️‍🌈~\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `~🐮~ *RANK DOS GADOS DE SPRINGFIELD* ~🐮~\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `~🤘~ *RANK DOS CORNOS DE SPRINGFIELD* ~🤘~\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'surubao': case 'suruba':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if (!q) return reply(`D'oh! Diga o número de pessoas para a festa do Homer!`)
if (Number(q) > 5) return reply("Ay, caramba! Menos de 5, senão a Marge descobre!")
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `~🔥~ *RANK DOS GOSTOSÕES DO DUFFMAN* ~🔥~\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `~🤓~ *RANK DOS OTAKUS DO COMIC BOOK GUY* ~🤓~\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
ABC = `~📏~ *RANK DO PAU MAIOR DO BARNEY* ~📏~\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return reply(`D'oh! Diga o que eu devo mencionar!\nExemplo: ${prefix}mencionar o Zé Roela`)
if (!isGroup) return reply(`D'oh! Só funciona em grupos, seu Zé Roela!`)
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
d = []
teks = `Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break;

case 'jogodavelha':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!menc_jid2) return reply("Ay, caramba! Marque quem você quer desafiar para o jogo da velha!")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `~🕹️~ *JOGO DA VELHA* ~🕹️~\n\nD'oh! Alguém já está jogando!\n\n• @${boardnow.X} VS @${boardnow.O}\n—\n• Sua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
client.sendMessage(from, {text: chatMove}, {quoted: seloMeta,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`Ay, caramba! Jogue com alguém!\nExemplo: ${prefix + command} @Milhouse`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `~🕹️~ *JOGO DA VELHA* ~🕹️~\n\n@${sender.replace("@s.whatsapp.net", "")} te desafiou, ${argss[1]}!\n\nUse *『S』* para aceitar ou *『N』* para ser um covarde como o Milhouse...`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`D'oh! Só quem começou o jogo ou um valentão (admin) pode resetar!`)
if(fs.existsSync("./arquivos/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/tictactoe/db/" + from + ".json");
reply(`Woo hoo! Jogo da velha resetado!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`D'oh! Não tem nenhum jogo rolando.`);
}
break

case "ppt":
if(args.length < 1) return reply(`D'oh! Use: ${prefix}ppt pedra, papel ou tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`D'oh! Use: ${prefix}ppt pedra, papel ou tesoura`)
}
if(vit == "vitoria") {
var tes = "Woo hoo! Você ganhou!"
}
if(vit == "derrota") {
var tes = "Ha-ha! Eu ganhei!"
}
if(vit == "empate") {
var tes = "D'oh! Empatamos."
}
reply(`Eu joguei: ${pptb}\nVocê jogou: ${args}\n–\n${tes}`)
break

case 'anagrama':
if (!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!") 
if (!isGroupAdmins) return reply('Ha-ha! Só os valentões (admins) podem usar isso.')
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply('D\'oh! Use 1 para ativar e 0 para desativar, seu Zé Roela!')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/grupos/games/anagrama/${from}.json`))
reply(`D'oh! O jogo já começou!\n• Anagrama: ${dataAnagrama2.embaralhada}\n• Dica: ${dataAnagrama2.dica}`)} else {
fs.writeFileSync(`./database/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
client.sendMessage(from, {text: `~🧠~ *ANAGRAMA DA LISA* ~🧠~\n\nDecifre a palavra embaralhada:\n• Anagrama: ${palavrasANA[anaaleatorio].embaralhada}\n• Dica: ${palavrasANA[anaaleatorio].dica}`}, {quoted: seloMeta})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/anagrama/${from}.json`)) return reply('D\'oh! O jogo nem começou!')
fs.unlinkSync(`./database/grupos/games/anagrama/${from}.json`)
reply("Woo hoo! Jogo desativado. Hora de comer rosquinhas!")
}
break

case 'minhacarteira':
case 'carteira':
case 'meubanco':
case 'saldo':
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo! Peça para um admin ativar.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
caixa = []
for(i = 0; i < sabrpg.length; i++){
caixa.push({idnmr: sabrpg[i].id, nmr: i+1})
}
enc = caixa.map(b => b.idnmr).indexOf(sender)
if(Number(caixa[enc].nmr) < 100) {
if(Number(caixa[enc].nmr) < 10) {
page = `00` + caixa[enc].nmr
} else {
page = `0` + caixa[enc].nmr
}
} else {
page = caixa[enc].nmr
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
txt = `~🍺~ *CARTEIRA DO BAR DO MOE* ~🍺~

Olá *${sabrpg[AB].nome}*, aqui está sua conta (espero que você pague!):
—
• [💵] *Informações Bancárias*
• Seu banco: *${sabrpg[AB].namebank}*
• Você tem *R$ ${bctxt}* para gastar em Duff e rosquinhas.
–
• [🧾] *Informações de Cidadão*
• Seu ID de Springfield: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*
• Registrou-se às *${sabrpg[AB].hrg}* do dia *${sabrpg[AB].drg}*.
–
• [📖] *Livro de Registros*
_Você está na página: *${page}*_`
reply(txt)
break

case 'ranksc':
case 'rankcity':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo! Peça para um admin ativar.`)
setTimeout(() => {reagir(from, "💰")}, 300)
matheuzinho = sabrpg.map(i => i)
rank = matheuzinho.sort((a, b) => (a.money < b.money) ? 0 : -1)
if(sabrpg.length > 5) {
var totalR = 5
} else {
var totalR = sabrpg.length
}
txt = `~💰~ *RANK DOS MILIONÁRIOS DE SPRINGFIELD (COMO O MR. BURNS)* ~💰~\n–\n`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
txt += `${i + 1}º Lugar - *${rank[i].nome}*
• Saldo: R$ ${Number(rank[i].money).toFixed(2)}\n–\n`
}
}
reply(txt)
break

case 'buscarsc':
case 'buscarsabcity':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode xeretar as contas!")
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`D'oh! Não achei esse Zé Roela.`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
bcid = sabrpg[AB].id.split('@')[0]
cort = bcid.slice(5)
reply(`~🕵️~ *RELATÓRIO DO SMITHERS* ~🕵️~\n\n• Nome: *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• Saldo: *R$ ${bctxt}*\n—–\n• ID: *R${bcid.split(cort)[0]}GP${cort}BC*\n• Registrou-se às *${sabrpg[AB].hrg}* do dia *${sabrpg[AB].drg}*.`)
break

case 'addpix':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode dar dinheiro!")
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`D'oh! Para quem é o dinheiro?`)
if(!pix) return reply(`D'oh! Quanto dinheiro?`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`D'oh! Não achei esse Zé Roela.`)
if(!Number(pix)) return reply(`${pix} não é um número, seu bocó!`)
MD = sabrpg[AB].money
addpix = Number(MD) + Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Excellent! R$ ${Number(pix).toFixed(2)} foram adicionados à conta de ${sabrpg[AB].nome}`)
break

case 'setpix':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode mexer no dinheiro!")
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`D'oh! Para quem é o dinheiro?`)
if(!pix) return reply(`D'oh! Quanto dinheiro?`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`D'oh! Não achei esse Zé Roela.`)
if(!Number(pix)) return reply(`${pix} não é um número, seu bocó!`)
sabrpg[AB].money = pix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Excellent! O saldo de ${sabrpg[AB].nome} foi definido para R$ ${Number(pix).toFixed(2)}`)
break

case 'delpix':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode tirar dinheiro!")
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`D'oh! De quem é o dinheiro?`)
if(!pix) return reply(`D'oh! Quanto dinheiro?`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`D'oh! Não achei esse Zé Roela.`)
if(!Number(pix)) return reply(`${pix} não é um número, seu bocó!`)
MD = sabrpg[AB].money
addpix = Number(MD) - Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Excellent! R$ ${Number(pix).toFixed(2)} foram retirados da conta de ${sabrpg[AB].nome}`)
break

case 'zerarsc':
if(!SoDono) return reply("Excellent... Mas só o Mr. Burns pode falir alguém!")
if(!q) return reply(`D'oh! Quem vai falir?`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`D'oh! Não achei esse Zé Roela.`)
if(!Number(q)) return reply(`${q} não é um número, seu bocó... oh espere.`)
sabrpg[AB].money = 0
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Ha-ha! A conta de ${sabrpg[AB].nome} foi zerada!`)
break

case 'gerargf':
if(!SoDono) return reply("Só o Krusty pode criar cupons!")
var [value, quant] = q.split('/')
if(!value) return reply(`D'oh! Qual o valor do cupom?`)
if(!quant) return reply(`D'oh! Quantos podem usar?`)
if(!Number(value)) return reply(`${value} não é um número, seu bocó!`)
if(!Number(quant)) return reply(`${quant} não é um número, seu bocó!`)
dategf = moment.tz('America/Sao_Paulo').format('DDMMYY')
horagf = moment.tz('America/Sao_Paulo').format('HHmmss')
codegf = `P${value}M${quant}BC${dategf+horagf}QC${Number(Number(Number(dategf)+Number(horagf))/Number(quant)).toFixed(0)}RPG`
coderpg.push({codeid: codegf, valor: value,quantmax: Number(quant).toFixed(0), usus: []})
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`Hey, hey! Cupom do Krusty de *R$ ${Number(value).toFixed(2)}* gerado para ${Number(quant) <= 1 ? `um Zé Roela` : `${quant} Zé Roelas`}!\n• Use: *${prefix}resgatargf*`)
setTimeout(() => {
client.sendMessage(from, {text: codegf})
}, 1000)
break

case 'delgf':
if(!SoDono) return reply("Só o Krusty pode cancelar os cupons!")
if(!q) return reply(`D'oh! Qual código você quer apagar?`)
AB = coderpg.map(i => i.codeid).indexOf(q)
if(AB < 0) return reply(`Pior. Código. De todos. Não achei!`)
coderpg.splice(AB, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`Ha-ha! O código *${q}* foi cancelado! Sem mais cupons para vocês!`)
break

case 'resgatargf':
case 'resgatar':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
AB = coderpg.map(i => i.codeid).indexOf(q)
BD = sabrpg.map(b => b.id).indexOf(sender)
if(!q) return reply(`D'oh! Cadê o código do cupom?`)
if(!JSON.stringify(coderpg).includes(q)) return reply(`D'oh! Código inválido!`)
if(JSON.stringify(coderpg[AB].usus).includes(sender)) return reply(`Ay, caramba! Você já usou esse cupom, seu espertinho!`)
if(Number(coderpg[AB].usus.length) < Number(coderpg[AB].quantmax)) {
coderpg[AB].usus.push({id: sender})
fs.writeFileSync("./database/usuarios/SystemRPG/coderpg.json", JSON.stringify(coderpg))
MD = sabrpg[BD].money
sabrpg[BD].money = Number(MD) + Number(coderpg[AB].valor)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Verificando o cupom do Krusty...`)
setTimeout(() => {
mention(`Woo hoo! *@${sender.split("@")[0]}*, você resgatou seu prêmio!\n• Foi adicionado *R$ ${Number(coderpg[AB].valor).toFixed(2)}* na sua carteira!`)
}, 3000)
} else {
reply(`D'oh! Esse cupom já esgotou! Ha-ha!`)
}
break

case 'codelist':
case 'listacodigo':
case 'listacodigos':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(coderpg.length < 0) return reply(`D'oh! O Krusty não liberou nenhum cupom hoje.`)
txt = `~🎟️~ *CUPONS DO KRUSTY* ~🎟️~\n\n[Total: *${coderpg.length}*]\n• Para resgatar, use: *${prefix}resgatargf <code>*`
for(i =0; i < coderpg.length; i++) {
txt += `\n—\n*[${i+1}]* » • Código: *${coderpg[i].codeid}*\n• Valor: *R$ ${Number(coderpg[i].valor).toFixed(2)}*\n• Restantes: *${Number(coderpg[i].quantmax) - Number(coderpg[i].usus.length)}*`
}
reply(txt)
break

case 'fazerpix': case 'transferir':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
datepix = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
dateid = moment.tz('America/Sao_Paulo').format('DDMMYY')
horaid = moment.tz('America/Sao_Paulo').format('HHmmss')
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`D'oh! Para quem é o PIX?`)
if(sender.includes(nmr)) return reply(`D'oh! Não pode fazer PIX para você mesmo, seu Zé Roela!`)
if(!pix) return reply(`D'oh! Qual o valor?\nExemplo: ${prefix+command} 5511.../100`)
if(Number(pix) < 0.01) return reply(`Ay, caramba! Menos de 1 centavo não dá!`)
if(!Number(pix)) return reply(`${pix} não é um número, seu bocó!`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`D'oh! Chave PIX não encontrada.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
BC = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(Number(pix) > Number(sabrpg[AB].money)) return reply(`D'oh! Você não tem dinheiro para isso! Vá trabalhar na Usina Nuclear!`)
if(sabrpg[AB].namebank == "Inter"){tpb = 0.1}
// ... (resto da sua lógica de taxas)
if(sabrpg[AB].namebank == sabrpg[BC].namebank) {
taxabanco = 0
} else {
taxabanco = tpb
}
taxageral = Number(pix)*Number(taxabanco)/100
addpix = Number(sabrpg[BC].money) + Number(Number(pix) - Number(taxageral))
delpix = Number(sabrpg[AB].money) - Number(pix)
sabrpg[BC].money = addpix
sabrpg[AB].money = delpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
myid = sabrpg[AB].id.split('@')[0].slice(5)
suid = sabrpg[BC].id.split('@')[0].slice(5)
imn = sabrpg[AB].nome.slice(1)
isn = sabrpg[BC].nome.slice(1)
mimn = sabrpg[AB].nome.split(imn)[0]
misn = sabrpg[BC].nome.split(isn)[0]
comprovante = `~🧾~ *COMPROVANTE DO KWIK-E-MART* ~🧾~\n—\n• Pix: *R$ ${Number(Number(pix) - Number(taxageral)).toFixed(2)}*\n• Código: *${mimn.toUpperCase()+myid+misn.toUpperCase()+suid}P${dateid}X${horaid}RPG*\n•️ Taxa do Apu: *${taxabanco}%*\n—–\n• *De:* *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n——\n• *Para:* *${sabrpg[BC].nome}*\n• Banco: *${sabrpg[BC].namebank}*`
if(JSON.stringify(sabrpg).includes(nmrdn)) {
setTimeout(() => {
BD = sabrpg.map(d => d.id).indexOf(nmrdn)
pixdono = sabrpg[BD].money
sabrpg[BD].money = Number(pixdono) + Number(taxageral)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}, 1000)
}
reply(comprovante)
break

case 'meupix':
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`Sua chave PIX é o seu número: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'sopk':
if (isGroup) return reply("Só caminha")
break 
case 'trocarbanco':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
if(!q) return reply(`D'oh! Escolha um banco, seu Zé Roela!\nEx: ${prefix+command} 2 (Custa R$ 2500.00)\n––\nBancos de Springfield:\n[1] Inter, [2] NuBank, [3] PagBank, [4] Bradesco, [5] Itaú, [6] Next, [7] Caixa, [8] Santander, [9] Banco do Brasil, [10] PicPay, [11] PayPal`)
if(Number(args[0]) === 1){ var bankDD = `Inter`}; if(Number(args[0]) === 2){ var bankDD = `NuBank`}; if(Number(args[0]) === 3){ var bankDD = `PagBank`}; if(Number(args[0]) === 4){ var bankDD = `Bradesco`}; if(Number(args[0]) === 5){ var bankDD = `Itaú`}; if(Number(args[0]) === 6){ var bankDD = `Next`}; if(Number(args[0]) === 7){ var bankDD = `Caixa`}; if(Number(args[0]) === 8){ var bankDD = `Santander️`}; if(Number(args[0]) === 9){ var bankDD = `Banco do Brasil`}; if(Number(args[0]) === 10){ var bankDD = `PicPay`}; if(Number(args[0]) === 11){ var bankDD = `PayPal️`}
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 2500) return reply(`D'oh! Você não tem R$ 2500.00 para a taxa do Mr. Burns!`)
MD = Number(sabrpg[AB].money) - Number(2500)
sabrpg[AB].money = MD
sabrpg[AB].namebank = bankDD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
client.sendMessage(from, {text: `Woo hoo, @${sender.split('@')[0]}! Seu banco agora é o ${bankDD}.`, mentions: [sender]})
break

case 'trocarnome':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
if(!q) return reply(`D'oh! Diga seu novo nome! Custa R$ 1200.00 para fugir do Fat Tony.\nEx: ${prefix+command} Max Power`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 1200) return reply(`D'oh! Você não tem R$ 1200.00 para a taxa!`)
MD = Number(sabrpg[AB].money) - Number(1200)
sabrpg[AB].money = MD
sabrpg[AB].nome = q
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
client.sendMessage(from, {text: `Woo hoo, @${sender.split('@')[0]}! Seu nome agora é ${q}.`, mentions: [sender]})
break

case 'trabalhar':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
horaT = moment.tz('America/Sao_Paulo').format('HH')
dataT = moment.tz('America/Sao_Paulo').format('DD')
data2T = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].limiteTh) === 0 && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].hrT) === Number(horaT)) return reply(`D'oh! Você já trabalhou demais por essa hora. Vá beber uma Duff!`)
//trabalho normal...
if(Number(sabrpg[AB].limiteTh) > 0 && Number(sabrpg[AB].hrT) === Number(horaT) && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) === Number(data2T)) {
TBALE = Math.floor(Math.random() * 50) + 40
TBLH = Number(sabrpg[AB].money) + Number(TBALE)
HT = sabrpg[AB].limiteTh - 1
TD = sabrpg[AB].limiteTd - 1
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].limiteTh = HT
sabrpg[AB].limiteTd = TD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Woo hoo, ${sabrpg[AB].nome}! Você trabalhou na Usina Nuclear e ganhou *R$ ${Number(TBALE).toFixed(2)}*! Cuidado para não brilhar no escuro!`)
}
HTR = sabrpg[AB].hrT + 1
//passar para a próxima hora...
if(Number(horaT) > Number(sabrpg[AB].hrT) && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].hrT = horaT
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Já descansou? Use o comando de novo para voltar ao trabalho!`)
}
if(Number(sabrpg[AB].limiteTd) < 1 && Number(sabrpg[AB].diaT) === Number(dataT)) return reply(`D'oh! Você já trabalhou demais por hoje. Vá para o Bar do Moe!`)
//passar para o outro dia...
if(Number(dataT) > Number(sabrpg[AB].diaT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Woo hoo! Um novo dia para trabalhar na Usina Nuclear!`)
}
//passar para o próximo mês...
if(Number(data2T) > Number(sabrpg[AB].mT)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
sabrpg[AB].mT = data2T
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Woo hoo! Um novo mês para trabalhar na Usina Nuclear!`)
}
break

case 'minado': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
if (isPlayMines) return reply('D\'oh! Alguém já está brincando de explodir coisas. Espere sua vez!')
if (args.length < 1) return reply('D\'oh! Diga a dificuldade: *easy, normal, hard*')
teks = args[0].toLowerCase()
if (teks == 'easy') q_mines = 5
else if (teks == 'normal') q_mines = 8 
else if (teks == 'hard') q_mines = 12 
else return reply('Dificuldade inválida, seu Zé Roela!')
p_mines = await getMinesPositions(minecor, q_mines)
atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
ctw = minecor.filter(function(el) {
return !p_mines.includes(el)
})
var minframes = JSON.parse(fs.readFileSync('./database/grupos/games/minesframe.json'))
mines.push({id: from, jogador: sender, pos_mines: p_mines, qnt_mines: q_mines, selected_cord: [], cord_to_win: ctw, attempts: atp, tips_d: 0, hits: 0, minesp: minframes})
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
client.sendMessage(from, {image: {url: minado_bomb}, caption: `~💣~ *CAMPO MINADO DO BART* ~💣~\n\n• Não sabe jogar? Use *${prefix}mineshelp*\n• Para resetar, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna B:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna C:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna D:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna E:* 🟦 🟦 🟦 🟦 🟦\n—\n• Bombas: *${q_mines}*\n• Dificuldade: *${teks}*\n• Tentativas: *${atp}*`})
break

case 'mina': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!isModobn) return reply("D'oh! Ative o modo brincadeira primeiro!")
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
if (!isPlayMines) return reply('D\'oh! Nenhum jogo iniciado!');
if (args.length < 1) return reply('D\'oh! Diga a coordenada, seu Zé Roela!')
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
teks = args[0].toLowerCase()
play_i = minesId.indexOf(from)
const RAN_VALOR = Math.floor(Math.random() * 10000)
for(let obj of args) {
teks = obj.toLowerCase()
if (!minecor.includes(teks)) return reply('D\'oh! Coordenada inválida!')
if (mines[play_i].selected_cord.includes(teks)) return reply('D\'oh! Já escolheu essa, seu Zé Roela!')
if (mines[play_i].pos_mines.includes(teks)) {
mines[play_i].minesp[teks] = '💣'; mines[play_i].attempts -= 1; mines[play_i].tips_d = 0
} else {
mines[play_i].minesp[teks] = '⭐'; mines[play_i].hits += 1; mines[play_i].tips_d += 1
} mines[play_i].selected_cord.push(teks)
}
e = mines[play_i].minesp
res_teks = `~💣~ *CAMPO MINADO DO BART* ~💣~\n\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}\n—\n• Bombas: *${mines[play_i].qnt_mines}*\n• Tentativas: *${mines[play_i].attempts}*\n• Acertos: *${mines[play_i].hits}*`
if (mines[play_i].attempts <= 0) {
res_teks += `\n——\nD'oh! Você explodiu! Perdeu a chance de ganhar *R$ ${Number(RAN_VALOR).toFixed(2)}*!`
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
client.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
if (mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {
containAll = mines[play_i].cord_to_win.every(e => {
return mines[play_i].selected_cord.includes(e)
})
if (containAll) {
res_teks += `\n——\nWoo hoo! Você venceu e ganhou *R$ ${Number(RAN_VALOR).toFixed(2)}*! Mais dinheiro pra Duff!`
USER = sabrpg.map(i => i.id).indexOf(sender)
MONEYATUAL = sabrpg[AB].money
sabrpg[USER].money = Number(MONEYATUAL) + Number(RAN_VALOR);
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
client.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
} else {
if (mines[play_i].tips_d >= 3) {
res_teks += `\n—\nVocê tem direito a *${parseInt(mines[play_i].tips_d/3)}* Dica(s) da Lisa.`
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
client.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
client.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
}
}
} else return reply("D'oh! Você não é o jogador. Espere sua vez, seu Zé Roela!")
break

case 'minareset': 
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!");
if(!JSON.stringify(mines).includes(from) && !SoDono) return reply("D'oh! Não tem nenhum jogo rolando.");
nosei = SoDono ? 0 : mines.map(i => i.id).indexOf(from)
if(mines[nosei].jogador == sender || isGroupAdmins || SoDono) {
mines.splice(nosei, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`Woo hoo! Campo minado resetado!`)
} else {
reply("Ha-ha! Só os valentões (admins) ou quem começou a bagunça podem resetar.")
}
break

case 'mineshelp': 
reply(MinesHelp(prefix))
break

case 'minatips': 
if (!isPlayMines) return reply('D\'oh! Nenhum jogo iniciado!');
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
play_i = minesId.indexOf(from)
if (mines[play_i].tips_d >= 3) {
is_columns = Math.random() < 0.5
if (!is_columns) {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
row = mines[play_i].pos_mines[m_sorted].charAt(0)
mines_row = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.startsWith(row)) mines_row += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`~🧠~ *DICA DA LISA* ~🧠~\nHá *${mines_row}* bomba(s) na fileira *${row}*`)
} else {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
column = mines[play_i].pos_mines[m_sorted].charAt(1)
mines_column = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.endsWith(column)) mines_column += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`~🧠~ *DICA DA LISA* ~🧠~\nHá *${mines_column}* bomba(s) na coluna *${column}*`)
}
} else return reply('D\'oh! Acerte 3 vezes para ganhar uma dica da Lisa!')
} else return reply("D'oh! Você não é o jogador. Espere sua vez, seu Zé Roela!")
break

case 'comprarvara':
if(!isGroup) return reply("D'oh! Só funciona em grupos, seu Zé Roela!")
if(!isSabCityOFF) return reply(`D'oh! O modo RPG não está ativo!`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`Woo hoo! Novo por aqui? Use *${prefix}rgcity* para se registrar em Springfield.`)
if(JSON.stringify(pescaria).includes(sender)) return reply(`D'oh! Você já tem uma vara de pescar! Não seja guloso como o Homer.`)
if(Number(sabrpg[AB].money) < Number(50)) return reply(`D'oh! Você não tem R$ 50,00 para comprar uma vara! Vá trabalhar na Usina Nuclear!`)
sabrpg[AB].money -= Number(50)
pescaria.push(sender)
fs.writeFileSync("./database/usuarios/SystemRPG/pescaria.json", JSON.stringify(pescaria))
reply("Woo hoo! Você comprou uma vara de pescar! Agora pode ir pescar com o Homer e o Bart.")
break

case 'minerar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na Rpg City.`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(minerar).includes(sender)) {
minerar.push({id: sender, minuto: minu})
fs.writeFileSync("./database/usuarios/SystemRPG/minerar.json", JSON.stringify(minerar))
}
AC = minerar.map(i => i.id).indexOf(sender)
if(Number(minerar[AC].minuto) !== Number(minu)) {
minerar[AC].minuto = minu
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MINERAR_G = Math.floor(Math.random() * 100)
reply(`- Iniciando mineração! Aguarde *5s* para obter o resultado...`)
if(Number(MINERAR_G) > 15) {
PD = ["nenhum mineral valioso", "nenhuma joia valiosa em sua busca", "nenhum diamante em sua caçada", "nenhum minério validoso", "nenhum cobre em sua caçada", "nada de redstone em sua caçada"]
txt = `😭 Em sua tentativa de mineração, não foi possível evidenciar ${PD[Math.floor(Math.random()*PD.length)]}...`
} else {
MT = Math.floor(Math.random() * 2000)
AB = sabrpg.map(i => i.id).indexOf(sender)
MA = sabrpg[AB].money
sabrpg[AB].money = Number(MA) + Number(MT);
mineMessage = [`Você estava minerando nas ilhas savitas e encontrou em seu caminho *R$ ${Number(MT).toFixed(2)}* em minerais preciosos! 💰`, `🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou *R$ ${Number(MT).toFixed(2)}* em troca de ouro!`, `💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à *R$ ${Number(MT).toFixed(2)}*.`, `⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou *R$ ${Number(MT).toFixed(2)}*!`, `🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em *R$ ${Number(MT).toFixed(2)}*.`, `😱🌟 Você invadiu a casa do vizinho e encontrou *R$ ${Number(MT).toFixed(2)}* escavando o quintal dele.`, `⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou *R$ ${Number(MT).toFixed(2)}*`, `🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à *R$ ${Number(MT).toFixed(2)}*.`, `🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*. 😸`, `Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*.`]
txt = mineMessage[Math.floor(Math.random() * mineMessage.length)]
}
setTimeout(() => {client.sendMessage(from, {text: txt}, {quoted: seloMeta})}, 5000)
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova mineração...`)
}
break;

case 'comprarseguranca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!q) return reply("Escolha na loja um segurança de 1-3 para proteger o seu dinheiro e evitar assaltos")
if(!JSON.stringify(roubosrpg).includes(sender)) {
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(Number(args[0]) > 0 && Number(args[0]) <= 3) {
value = Number(args[0]) * 20 + 20
BC = sabrpg.map(i => i.id).indexOf(sender)
AB = roubosrpg.map(i => i.id).indexOf(sender)
if(Number(Number(args[0]) * 600) > sabrpg[BC].money) return reply(`Você não tem dinheiro suficiente para comprar esse segurança...`)
if(roubosrpg[AB].segurança == value) return reply(`Você já possui esse segurança...`)
comp = value > roubosrpg[AB].segurança ? `diminuída em ${value - roubosrpg[AB].segurança}%` : `aumentada em ${value - roubosrpg[AB].segurança}%`
roubosrpg[AB].segurança = value
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
rmSaldo(sender, Number(args[0]) * 600)
reply(`Segurança Lv.${args[0]} comprado com sucesso 👨🏻‍✈️
Taxa de drop ${comp}`)
} else {
reply(`Escolha um número correspondente a um dos seguranças presentes na loja...`)
}
break

case 'treinar': case 'treino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
treinamento = ["Cê já treinou lek", "Hmm", "Tá bão", "Chega lek, cê já treinou", "Te acalma desgrama"]
if(JSON.stringify(roubosrpg).includes(sender)) return reply(`${treinamento[Math.floor(Math.random()*treinamento.length)]}`)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply("Treinamento efetuado com sucesso... Pronto para assaltar outros usuários")
break

case 'assaltar': case 'furtar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você precisa treinar primeiro... Use ${prefix}treinar`)
if(!menc_os2) return reply("Marque a pessoa quem você quer assaltar...")
if(sender.includes(menc_os2)) return reply(`Não é possível assaltar você mesmo...`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return reply(`ID do usuário não encontrado ou inexistente...`)
matheuzinho = Math.floor(Math.random()*100)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(roubosrpg[AD].preso == true) return reply("Você está preso, portanto, não é possível roubar...")
if(Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) < 10) return reply("Esse ser não tem nem onde cair morto, pobre desgramado... Vai assaltar alguém mais rico 🤡")
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].hora) === Number(hora3) && Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Hmm... Agora não ${sabrpg[AB].nome}, aguarde ${Number(Number(Number(hora3) + 1) * 60) - Number(Number(roubosrpg[AD].hora) * 60 + Number(minuto3))} minutos para fazer o próximo assalto 🥷🏻`)
if(roubosrpg[AD].limite <= 0 && Number(hora3) > Number(roubosrpg[AD].hora) && Number(roubosrpg[AD].dia) === Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].dia) !== Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  roubosrpg[AD].dia = data3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite > 0 && roubosrpg[AD].preso == false) {
  roubosrpg[AD].limite -= 1
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
  if(matheuzinho > 5) {
    matheuzinho2 = Math.floor(Math.random()*100)
    lvx = Number(Math.floor(Math.random()*39)+1)
    totalM = lvx * 100
    totalU = sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money - 1
    ganho = totalM > Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) ? Math.floor(Math.random()*totalU) + 1 : Math.floor(Math.random()*100) * lvx
    algo = JSON.stringify(roubosrpg).includes(menc_os2) ? roubosrpg[roubosrpg.map(b => b.id).indexOf(menc_os2)].segurança : 20
    if(matheuzinho2 > algo) {
      sabrpg[AB].money += ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money -= ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Assalto efetuado com sucesso ${sabrpg[AB].nome}, você roubou R$ ${Number(ganho).toFixed(2)} da conta ${sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].nome}`)
    } else {
      perda1 = Number(ganho) / 2
      perda2 = perda1 >= sabrpg[AB].money ? sabrpg[AB].money : perda1
      sabrpg[AB].money -= perda2
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`🚓 Ops, você foi pego pela polícia e pagou ${perda1 >= sabrpg[AB].money ? `todo o seu dinheiro` : `R$ ${Number(perda2).toFixed(2)}`} para sair da cadeia... Kkkk sinto muito 😔🤙🏽`)
    }
  } else {
    matheuzinho3 = Math.floor(Math.random()*100)
    if(matheuzinho3 > 10) {
      roubosrpg[AD].dinheiro += sabrpg[AB].money
      roubosrpg[AD].preso = true
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Putz, cê deu muito azar... Seu caso foi passado para o governo federal, e toda a sua grana foi apreendida 😮‍💨\nFelizmente, cê pode pegar o dinheiro de volta amanhã usando ${prefix}retirar`)
    } else {
      if(JSON.stringify(cavalosrpg).includes(sender)) {
        R1 = cavalosrpg.map(i => i.id).indexOf(sender)
        cavalosrpg.splice(R1, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
      }
      if(JSON.stringify(galosrpg).includes(sender)) {
        R2 = galosrpg.map(i => i.id).indexOf(sender)
        galosrpg.splice(R2, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
      }
      roubosrpg[AD].preso = false
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Vix mlk, deu ruim demais... Seu assalto virou caso da INTERPOL, e ela confiscou todos os seu bens junto com seu dinheiro 👨🏻‍✈️`)
    }
  }
}
break

case 'soltar':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!q && !menc_os2) return
usu = menc_os2 ? menc_os2 : q + `@s.whatsapp.net`
if(!JSON.stringify(roubosrpg).includes(usu)) return reply(`❌ ID não encontrado ou inexistente!`)
AD = roubosrpg.map(i => i.id).indexOf(menc_os2)
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply(`Usuário solto.`)
break

case 'revogar': case 'reivindicar': case 'retirar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você não foi preso lek, aquieta o facho 😂`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
data3 = moment.tz('America/Sao_Paulo').format('DD')
if(roubosrpg[AD].dinheiro <= 0) return reply(`Não há dinheiro apreendido...`)
if(Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Você só pode retirar o dinheiro apreendido amanhã...`)
reply(`Pronto, aqui estão os R$ ${Number(roubosrpg[AD].dinheiro).toFixed(2)} que foram apreendidos pela polícia... Vê se anda na linha mlk 👨🏻‍✈️`)
sabrpg[AB].money += roubosrpg[AD].dinheiro
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
break

case 'comprarestabulo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você já tem um estábulo em seu nome ${sabrpg[AB].nome}... 🐎`)
if(Number(sabrpg[AB].money) < 500) return reply(`Você não saldo suficiente para efetuar essa compra...`)
cavH = moment.tz('America/Sao_Paulo').format('HH')
cavD = moment.tz('America/Sao_Paulo').format('DD')
cavM = moment.tz('America/Sao_Paulo').format('MM')
cavalosrpg.push({id: sender,
level: 1,
quant_cavalos: 0,
setcav: `nenhum`,
countVc: 0,
capitalVc: 0,
countDc: 0,
capitalDc: 0,
corridaL: 10,
corridaH: cavH,
corridaD: cavD,
corridaM: cavM,
cavalos: []
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do estábulo... Agora você pode comprar cavalos para correr com eles 🐴`)
break

case 'venderestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(TT4)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu estábulo ficou avaliado em R$ ${Number(TT4).toFixed(2)}
📈 Parabéns pela venda...`)
break

case 'avaliarestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
txt = `ㅤㅤㅤ〘 *AVALIANDO* 〙
🐴 *Preço Por Cavalos:* R$ ${Number(TT1).toFixed(2)}
📈 *Preço Por Upgrade:* R$ ${Number(TT2).toFixed(2)}
🏆 *Preço Por Vitórias:* R$ ${Number(TT3).toFixed(2)}

🤑 *Total:* R$ ${Number(TT4).toFixed(2)}

-> Use ${prefix}venderestabulo caso queira se desfazer do mesmo.`
reply(txt)
break

case 'estabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) {
countcav = `\n『 Você não possui cavalos... 』\n`
} else {
countcav = `\n🐎 *Cavalos ↴*`
for(c = 0; c < cavalosrpg[AC].cavalos.length; c++) {
if(cavalosrpg[AC].cavalos[c].sela == true){
selasasah = `✅`
} else { selasasah = `❌` }
if(cavalosrpg[AC].cavalos[c].dor == true){
dorsasah = `✅`
} else { dorsasah = `❌` }
if(cavalosrpg[AC].cavalos[c].fratura == true){
fratsasah = `✅`
} else { fratsasah = `❌` }
TTCV = Number(cavalosrpg[AC].cavalos[c].viccav)/Number(Number(cavalosrpg[AC].cavalos[c].viccav)+Number(cavalosrpg[AC].cavalos[c].dercav))*100
if(Number(TTCV) > 0) {
PVCV = TTCV
} else {
PVCV = 0
}
countcav += `\n» ${Number(c)+1} « Nome Do Cavalo: *${cavalosrpg[AC].cavalos[c].nomedocavalo}*\n• Velocidade: *${Number(cavalosrpg[AC].cavalos[c].tipo)+1}x*\n• Sela: *${selasasah}*\n• Doente *${dorsasah}*\n• Fraturado: *${fratsasah}*\n• Vitórias: *${cavalosrpg[AC].cavalos[c].viccav}*\n• Percentual de Ganhos: *${Number(PVCV).toFixed(1)}%*\n• Apostas: *R$ ${Number(cavalosrpg[AC].cavalos[c].contdin).toFixed(2)}*\n• Ganhos: *R$ ${Number(cavalosrpg[AC].cavalos[c].lucdin).toFixed(2)}*\n`
}
}
txt = `👤 Nome: *${sabrpg[AB].nome}*\n💯 Level do Estábulo: *${cavalosrpg[AC].level}*\n📐 Tamanho Do Estábulo: ${Number(cavalosrpg[AC].level)*5} m²*\n🧮 Quantidade De Cavalos: *${cavalosrpg[AC].cavalos.length}*\n🔔 Cavalo Selecionado: *${cavalosrpg[AC].setcav}*\n${countcav}`
client.sendMessage(from, {image: {url: ftmenu.logo}, caption: txt}, {quoted: seloMeta})
break

case 'setcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(!q) return reply(`Diga o nome de um dos cavalos presentes no seu estábulo...
Ex: ${prefix+command} Patolino`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(q.toLowerCase())) return reply(`Este cavalo não consta eu seus registros... Use o comando ${prefix}estabulo, e verifique quais cavalos você tem 🐴`)
cavalosrpg[AC].setcav = q.toLowerCase()
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Cavalo definido com sucesso...`)
break

case 'upcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
AT = Number(cavalosrpg[AC].level) * 200
if(Number(sabrpg[AB].money) < Number(AT)) return reply(`Você não saldo suficiente para upar seu estábulo...`)
LC = cavalosrpg[AC].level
cavalosrpg[AC].level = Number(LC) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(AT)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(` Agrademos a confiança na *Black Construction...* R$ ${Number(AT).toFixed(2)} foram investidos, e seu estábulo está no level ${cavalosrpg[AC].level} 🐴`)
} else { reply(`Seu estábulo já alcançou o tamanho máximo...`) }
break

case 'comprarcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
var [cavnmr, cavnome] = q.split(`/`)
if(!cavnmr) return reply(`Escolha um cavalo...`)
if(!cavnome) return reply(`Agora dê um nome para seu cavalo... Ex: ${prefix+command} ${q}/Michael`)
if(Number(cavnome.length) > 20) return reply(`Este nome é muito grande...`)
if(Number(cavnmr) === 1 || Number(cavnmr) === 2 || Number(cavnmr) === 3 || Number(cavnmr) === 4) {
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
MCV1 = Number(cavnmr) - 1
MCV2 = Number(MCV1) * 500
MCV3 = Number(MCV2) + 500
if(Number(sabrpg[AB].money) < Number(MCV3)) return reply(`Você não saldo suficiente para comprar este cavalo...`)
if(JSON.stringify(cavalosrpg[AC].cavalos).includes(cavnome)) return reply(`Você já tem um cavalo com esse nome... Pfvr, escolha outro nome 🐴`)
if(Number(cavalosrpg[AC].cavalos.length) == Number(cavalosrpg[AC].level)) return reply(`Você atingiu o número máximo de cavalos no estábulo... Caso queira aumentar o tamanho do estábulo, use ${prefix}upcavalo`)
cavalosrpg[AC].cavalos.push({nomedocavalo: cavnome.toLowerCase(),
tipo: Number(cavnmr)-1,
sela: false,
dor: false,
fratura: false,
viccav: 0,
dercav: 0,
contdin: 0,
lucdin: 0
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
sabrpg[AB].money -= Number(MCV3)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do cavalo... Espero que faça bom proveito com ele 🐴`)
} else {
reply(`Esse cavalo não está disponível para compra...`)
}
break

case 'vendercavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá vender... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) {
HCS = 100
} else {
HCS = 0
}
if(cavalosrpg[AC].cavalos[AD].dor == true) {
HCD = 50
} else {
HCD = 0
}
if(cavalosrpg[AC].cavalos[AD].fratura == true) {
HCF = 125
} else {
HCF = 0
}
HCV = Number(Number(Number(cavalosrpg[AC].cavalos[AD].tipo)+1)*250) + Number(HCS) - Number(HCD) - Number(HCF) + Number(cavalosrpg[AC].cavalos[AD].viccav)
MB = sabrpg[AB].money
sabrpg[AB].money = Number(MB) + Number(HCV)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
cavalosrpg[AC].cavalos.splice(AD, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo ficou avaliado em R$ ${Number(HCV).toFixed(2)} 🐴📈 - Parabéns pela venda...`)
break

case 'comprarsela':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um cavalo!🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) return reply(`Você já possui uma sela neste cavalo...`)
if(Number(sabrpg[AB].money) < 200) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].sela = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 200
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Uma sela foi comprada para o seu alazão com sucesso... 🐴`)
break

case 'cdcv3':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].dor == false) return reply(`Seu cavalo não está doente...`)
if(Number(sabrpg[AB].money) < 100) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].dor = false
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu cavalo recebeu uma injeção poderosa, e está pronto para correr dnv... 🐴`)
break

case 'atadura':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].fratura == false) return reply(`Seu cavalo não está fraturado...`)
if(Number(sabrpg[AB].money) < 250) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].fratura = false
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 250
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Atadura colocada com sucesso... Agora deixe seu bichinho descansar 🐴`)
break

case 'cavalo':
case 'cavalos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
horacav = moment.tz('America/Sao_Paulo').format('HH')
diacav = moment.tz('America/Sao_Paulo').format('DD')
mmcav = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == false) return reply(`Você precisa comprar uma sela para seu alazão...`)
if(cavalosrpg[AC].cavalos[AD].dor == true) return reply(`Seu cavalo está doente... Compre uma _"cdcv3"_ na loja de CAVALOS para ele voltar a correr 💉`)
if(cavalosrpg[AC].cavalos[AD].fratura == true) return reply(`Seu cavalo está com a pata torcida... Vá comprar uma atadura para tratar isso 🐴`)
//passar eo limite por hora...
if(Number(cavalosrpg[AC].corridaL) === 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) return reply(`Seu cavalo parece cansado... Pfvr, volte mais tarde 🐴`)
//passar de uma hora pra outra...
if(Number(horacav) > Number(cavalosrpg[AC].corridaH) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo parece ótimo... Você já pode correr dnv 🐴`)
}
//passar de um dia pro outro...
if(Number(diacav) > Number(cavalosrpg[AC].corridaD) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu cavalo está pronto para correr ?`)
}
//passar de um mês pro outro...
if(Number(mmcav) > Number(cavalosrpg[AC].corridaM)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Um novo mês de vitórias se inicia...`)
}
//aposta liberada...
if(Number(cavalosrpg[AC].corridaL) > 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav)) {
if(!q) return reply(`A corrida já vai começar... Faça logo a sua aposta`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 100) return reply(`Nossas apostas são de alto nível aqui... Você não pode apostar menos de R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossas apostas são de alto nível aqui... Mas você não pode apostar mais do que R$ 10000.00`)
MT = Math.floor(Math.random()*40)
if(Number(MT) === 0) {
GB = cavalosrpg.map(m => m.id).indexOf(sender)
GF = cavalosrpg[GB].cavalos.map(n => n.nomedocavalo).indexOf(cavalosrpg[GB].setcav)
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
cavalosrpg[GB].cavalos.splice(GF, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
acidente = [`Seu cavalo se acidentou na pista e morreu... Meus sentimentos ao alazão 🖤`, `Seu cavalo adoeceu gravemente antes da corrida, e morreu... Meus pêsames pelo seu amigo 🖤`]
reply(acidente[Math.floor(Math.random()*acidente.length)])
}
if(Number(MT) === 1) {
cavalosrpg[AC].cavalos[AD].dor = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo adoeceu, mas felizmente, essa doença não é para a morte... Vá comprar a _"cdcv3",_ uma vacina poderosa que vai levantar o seu alazão na hora 💉`)
}
if(Number(MT) === 2) {
cavalosrpg[AC].cavalos[AD].fratura = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🥹 Seu alazão fraturou a patinha enquanto corria... Vá comprar uma atadura na ${prefix}lojadecavalos`)
}
if(Number(MT) > 2) {
cavt1 = SoDono ? 1 : Math.floor(Math.random()*19)+1
cavt2 = Number(cavt1) - Number(cavalosrpg[AC].cavalos[AD].tipo)
if(Number(cavt2) < 1){
var cav = 1
} else {
var cav = cavt2
}
//primeiro lugar...
if(Number(cav) === 1){
cav2 = Number(args[0]) + Number(args[0]) / 2
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L1 = 1
} else {
L1 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC1 = 1
} else {
LC1 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L1)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC1)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//segundo lugar...
if(Number(cav) === 2){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = args[0]
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L2 = 1
} else {
L2 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC2 = 1
} else {
LC2 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L2)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC2)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//terceiro lugar...
if(Number(cav) === 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = Number(args[0]) / 2
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L3 = 1
} else {
L3 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC3 = 1
} else {
LC3 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L3)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC3)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//outros lugares...
if(Number(cav) > 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
LM = cavalosrpg[AC].corridaL
CCD = cavalosrpg[AC].countDc
CDC = cavalosrpg[AC].capitalDc
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countDc = Number(CCD) + 1
cavalosrpg[AC].capitalDc = Number(CDC) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS)+1
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você perdeu R$ ${Number(args[0]).toFixed(2)}`)
}
}
}
break

case '1xbets':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!q) return reply(`🛒 *rpg City Bets* é o novo sistema de apostas... Invista uma quantia entre R$ 100.00 e R$ 10000.00, e veja seu dinheiro rodar.`)
if(!Number(args[0])) return reply(`${args[0]} não é número... 😿`)
AB = sabrpg.map(i => i.id).indexOf(sender)
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui dinheiro suficiente para investir`)
if(Number(args[0]) < 100) return reply(`Você deve investir no mínimo R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossa plataforma não paga mais que R$ 10000.00`)
if(!JSON.stringify(bcbet).includes(sender)) {
bcbet.push({id: sender, minuto: minuto3})
fs.writeFileSync("./database/usuarios/SystemRPG/1xbcbet.json", JSON.stringify(bcbet))
}
AC = bcbet.map(i => i.id).indexOf(sender)
if(Number(bcbet[AC].minuto) !== Number(minuto3)) {
bcbet[AC].minuto = minuto3
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MN = Math.floor(Math.random()*100)
reply(`📊 Analisando os gráficos...`)
if(Number(MN) > 15) {
PG = ["na construção de um estádio de futebol, mas a construção desabou...", "na bolsa de valores, mas a Bovespa caiu drasticamente...", "num leilão de carros, mas os carros não foram leiloados...", "num leilão de carros, mas você sofreu um golpe...", "no seu time de futebol, mas o seu time perdeu o jogo...", "numa corrida, mas o carro bateu...", "em uma luta de UFC, e seu lutador sofreu um nocaute..."]
txt = `${II}Sab Black's Bet${II} > A sua casa de apostas online!\n—\n[🔴] - As estatísticas não são muito favoráveis! Você investiu ${PG[Math.floor(Math.random()*PG.length)]}\n• Você perdeu, então sofreu uma perda de *R$ ${Number(args[0]).toFixed(2)}* em dinheiro.`
img = `https://telegra.ph/file/747133ed87f267ca8d35f.jpg`
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
GG = ["na construção de um estádio de futebol, e a construção foi bem sucedida...", "na bolsa de valores, e a Bovespa subiu exponencialmente...", "num leilão de carros, e obteve grande lucro na venda dos mesmos...", "no seu time de futebol, e o seu time venceu o jogo...", "numa corrida, e o seu carro chegou em primeiro lugar...", "em uma luta de UFC, e seu lutador derrubou o oponente facilmente..."]
VL1 = Math.floor(Math.random()*9)+1
VL2 = Number(args[0]) * Number(VL1)
txt = `${II}Sab Black's Bet${II} > A sua casa de apostas online!\n—\n[🟢] - As estatísticas são positivas e muito boas por sinal! Você investiu ${GG[Math.floor(Math.random()*GG.length)]}\n• Você ganhou e recebeu como saldo: *R$ ${Number(VL2).toFixed(2)}*`
img = `https://telegra.ph/file/f600b52a9963c58900e5b.jpg`
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(VL2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
setTimeout(() => {
client.sendMessage(from, {image: {url: img}, caption: txt}, {quoted: seloMeta})
}, 2000)
} else {
reply(`Aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))} seg.* para fazer novas apostas novamente.`)
}
break

case 'resetscbet':
if(!SoDono) return reply(enviar.msg.donosmt)
for(i = 0; i < sabrpg.length; i++) {
sabrpg[i].bcbet = true
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
reply(`Gráficos restaurados para todos os ${sabrpg.length} usuários do RPG`)
break

case 'comprargalinheiro':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(JSON.stringify(galosrpg).includes(sender)) return reply(`Você já possui um galinheiro... Consulte a ${prefix}lojadegalos para comprar galos e brigar com eles 🐔`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 500) return reply(`Vc não possui dinheiro suficiente para efetuar essa compra...`)
gaH = moment.tz('America/Sao_Paulo').format('HH')
gaD = moment.tz('America/Sao_Paulo').format('DD')
gaM = moment.tz('America/Sao_Paulo').format('MM')
galosrpg.push({id: sender,level: 1,galinhas: 0,durabilidade: 5,ovos: 0,countVg: 0,countDg: 0,dinVg: 0,luckVg: 0,brigaL: 15,brigaH: gaH,brigaD: gaD,brigaM: gaM,galos: []})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`🐔 Galinheiro comprado com sucesso... Consulte ${prefix}galinheiro`)
break

case 'comprargalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja comprar...`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) === 1 || Number(args[0]) === 6 || Number(args[0]) === 12) {
if(Number(Number(galosrpg[AD].galos.length) + Number(args[0])) > Number(Number(galosrpg[AD].level)*5)) return reply(`Não é possível comprar +${args[0]} ${Number(args[0]) < 2 ? 'galo' : 'galos'}, pois excede o limite de ${Number(galosrpg[AD].level)*5} galos...\n• Caso queira aumentar o tamanho do galinheiro, use ${prefix}upgalo`)
if(Number(args[0]) === 1) {
if(Number(sabrpg[AB].money) < 100) return reply(`Vc não possui saldo suficiente para efetuar essa compra!`)
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`1 galo comprado com sucesso!`)
}
if(Number(args[0]) === 6) {
if(Number(sabrpg[AB].money) < 550) return reply(`Vc não possui saldo suficiente para efetuar essa compra...`)
for(i = 0; i < 6; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 550
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`6 galos comprado com sucesso.`)
}
if(Number(args[0]) === 12) {
if(Number(sabrpg[AB].money) < 1000) return reply("Vc não possui saldo suficiente para efetuar essa compra...")
for(i = 0; i < 12; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`12 galos comprado com sucesso`)
}
} else {
reply(`Não é possível comprar essa quantidade de galos...`)
}
break

case 'vendergalo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que um galo...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galos.length)) return reply(`Não é possível vender um número maior do que a quantidade de galos em seu galinheiro...`)
if(Number(galosrpg[AD].galos.length) === 0) return reply(`Você precisa comprar um galo antes...`)
for(i = 0; i < Number(args[0]); i++) {
galosrpg[AD].galos.splice(i, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galo${Number(args[0]) > 1 ? 's' : ''} vendido${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliado${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'comprargalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(!q) return reply("Coloque a quantidade de galinhas que deseja comprar...")
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível comprar menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
if(Number(args[0]) > Number(Number(galosrpg[AD].level) * 2)) return reply(`Não é possível comprar +${args[0]} galinhas, pois excede o limite de ${Number(galosrpg[AD].level) * 2} galinhas em seu galinheiro...\nCaso queira aumentar o tamanho do seu galinheiro, use o comando ${prefix}upgalo`)
if(Number(sabrpg[AB].money) < Number(Number(args[0]) * 100)) return reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} ${Number(args[0]) > 1 ? "irão" : "irá"} custar R$ ${Number(Number(args[0]) * 100).toFixed(2)}, e este valor excede o saldo monetário em sua conta...`)
GG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(GG) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(Number(args[0]) * 100)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} comprada${Number(args[0]) > 1 ? 's' : ''} com sucesso...`)
break

case 'vendergalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar uma galinha antes...`)
if(!q) return reply(`Defina a quantidade de galinhas que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galinhas)) return reply(`Não é possível vender um número maior do que a quantidade de galinhas em seu galinheiro...`)
if(Number(galosrpg[AD].galinhas) === 0) return reply(`Você precisa comprar uma galinha antes...`)
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} vendida${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliada${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'cruzargg':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].galos.length) === 0) return reply("Você não possui galos...🐓 É necessário ao menos 1 galo para cruzar.")
if(Number(galosrpg[AD].galinhas) === 0) return reply("Você não possui galinhas...🐔 É necessário ao menos 1 galinha para cruzar.")
if(Number(galosrpg[AD].ovos) < Number(Number(galosrpg[AD].level * 2))) {
alecruz = Math.floor(Math.random() * 100)
if(alecruz > 50) {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
galosrpg[AD].durabilidade = Number(QD) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = "Não houve sucesso no cruzamento das aves"
} else {
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sua galinha não estava pronta para o cruzamento, e acabou morrendo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} galinha${Number(galosrpg[AD].galinhas) > 1 ? `s` : ``} 🐔` : ``}`
}
} else {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
QO = galosrpg[AD].ovos
galosrpg[AD].durabilidade = Number(QD) - 1
galosrpg[AD].ovos = Number(QO) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo...
Use ${prefix}chocarovo para tentar a sorte`
} else {
QG = galosrpg[AD].galinhas
QO = galosrpg[AD].ovos
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].ovos = Number(QO) + 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo, mas a sua galinha morreu no processo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} ${Number(galosrpg[AD].galinhas) > 1 ? `${galosrpg[AD].galinhas} galinhas` : `1 galinha`}` : ``}`
}
}
reply(`${resp}`)
} else {
reply(`Você atingiu a quantidade máxima de ovos em seu galinheiro... Use ${prefix}chocarovo para choca-los`)
}
break

case 'chocarovo': case 'chocar': case 'ovo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].ovos) <= 0) return reply("Você não possui ovos para chocar...")
if(Number(galosrpg[AD].galos.length) >= Number(Number(galosrpg[AD].level) * 5)) return reply("Todos os seus slots já estão na quantidade máxima..")
aleovo = Math.floor(Math.random() * 100)
if(aleovo > 40) {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sem sucesso ao tentar chocar o ovo!😿")
} else {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sucesso, ovo chocado deu origem a +1 galo para o seu galinheiro 😸☝🏽")
}
break

case 'galinheiro':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
setTimeout(() => {reagir(from, "🐔")}, 300)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
totalG = galosrpg[AD].galos
let medvida = 0
let medvic = 0
let medder = 0
for(i = 0; i < totalG.length; i++) {medvida += totalG[i].vida
if(Number(totalG[i].vigalo) > 0) {medvic += totalG[i].vigalo}
if(Number(totalG[i].degalo) > 0) {medder += totalG[i].degalo}
}
if(Number(galosrpg[AD].galos.length) > 0) {
TT1 = `${Number(Number(`${medvida}`) / Number(galosrpg[AD].galos.length)).toFixed(0)}`
TT2 = `${Number(Number(`${medvic}`) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}/${Number(Number(Number(`${medvic}`) + Number(`${medder}`)) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}`
TT3 = `${Number(Number(`${medvic}`) / Number(Number(`${medvic}`) + Number(`${medder}`)) * 100).toFixed(1)}%`
} else {
TT1 = `0`
TT2 = `0/0`
TT3 = `0.0%`
}
txt = `Olá *${sender.split("@")[0]}*, aqui está as informações sobre seu galinheiro!\n• Seu galinheiro está atualmente no level: *${galosrpg[AD].level}*\n——\n• [🚧] Área total do Galinheiro: *${Number(galosrpg[AD].level) * Number(galosrpg[AD].level)}m²*\n——\n• [🏡] *Habitantes do seu Galinheiro:*\n• Quantidade de Galo(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galos.length}/${Number(galosrpg[AD].level) * 5}*\n• Quantidade de Galinha(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galinhas}/${Number(galosrpg[AD].level) * 2}*\n• Quantidade de Ovo(s) que as suas galinhas colocaram: *${galosrpg[AD].ovos}/${Number(galosrpg[AD].level) * 2}*\n• Expectativa média de vida de seus bichinhos: *${TT1}*\n——\n• [🏆] *Médias e Porcentagens:*\n• Sua média de vitórias conquistadas por seu(s) bichinho(s): *${TT2}*\n• Sua média percentual atualmente em seu galinheiro: *${TT3}*`
mention(txt);
break

case 'upgalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(Number(galosrpg[AD].level) * 100)) return reply(`Você não possui saldo suficiente para efetuar essa compra...`)
if(Number(galosrpg[AD].level) < 6) {
quant = galosrpg[AD].level
galosrpg[AD].level = Number(quant) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu galinheiro foi upado para o level ${galosrpg[AD].level} com sucesso...`)
} else {
reply(`Seu galinheiro está no level máximo!😿 Não é possível aumentar!`)
}
break

case 'galo':
case 'galos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes!`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
galosH = moment.tz('America/Sao_Paulo').format('HH')
galosD = moment.tz('America/Sao_Paulo').format('DD')
galosM = moment.tz('America/Sao_Paulo').format('MM')
if(Number(galosrpg[AD].galos.length) > 0) {
if(!q) return reply(`Vix lek, cê caiu em uma briga ilegal de galos...🐔 Faça logo a sua aposta, e venha dançar!`)
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa aposta...`)
if(Number(args[0]) > 100) return reply("Não é possível apostar mais que R$ 100.00 em uma briga ilegal e clandestina...")
if(Number(args[0]) < 1) return reply("Deixa de ser pobre lek")
if(Number(galosrpg[AD].brigaL) <= 0) return reply("Chega de brigas por agora... Volte mais tarde")
if(Number(galosH) > Number(galosrpg[AD].brigaH) && Number(galosrpg[AD].brigaD) === Number(galosD) && Number(galosrpg[AD].brigaM) === Number(galosM) && Number(galosrpg[AD].brigaL) <= 0) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Bem vindo (a) de volta, hora de brigar...")
}
if(Number(galosD) > Number(galosrpg[AD].brigaD) && Number(galosrpg[AD].brigaM) === Number(galosM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar ?`)
}
if(Number(galosM) > Number(galosrpg[AD].brigaM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
galosrpg[AD].brigaM = galosM
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar?`)
}
if(Number(galosrpg[AD].brigaD) == Number(galosD) && Number(galosrpg[AD].brigaM) == Number(galosM) && Number(galosrpg[AD].brigaL) > 0) {
galosgeral = galosrpg[AD].galos
alegalo = galosgeral[Math.floor(Math.random()*galosgeral.length)]
matheuzinho = Math.floor(Math.random()*100)
if(Number(matheuzinho) > 30) {
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CD = alegalo.degalo
alegalo.vida = Number(VD) - 1
alegalo.degalo = Number(CD) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `Seu galo perdeu a briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)}`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `O galo inimigo matou o seu galo na briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)} ${Number(galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length) > 1 ? `\nFelizmente, você ainda possui ${galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length}` : ``}`
}
JH = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg
JH2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
JH3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg = Number(JH) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(JH2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(JH3) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigatxt)
//ganhar
} else {
//vida > 0
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CV = alegalo.vigalo
alegalo.vida = Number(VD) - 1
alegalo.vigalo = Number(CV) + 1
if(Number(alegalo.degalo) > 0) {
NN = alegalo.degalo
alegalo.degalo = Number(NN) + 1
}
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = `Seu galo venceu a briga!🐓 Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = ` Seu galo venceu a briga!🐓 Mas foi sequestrado e morto no caminho... Felizmente, você levou o dinheiro.\n• Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
}
KL = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg
KL2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
KL3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg
KL4 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg = Number(KL) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(KL2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg = Number(KL3) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(KL4) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigawin)
}
}
} else {
reply(`Você não possui galos! 🐓😿`)
}
break

case 'cassino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
horacass = moment.tz('America/Sao_Paulo').format('HH')
diacass = moment.tz('America/Sao_Paulo').format('DD')
mmcass = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(sabrpg[AB].limiteC) === 0 && Number(sabrpg[AB].horaC) === Number(horacass)) return reply(`*Você já apostou muito hoje...* Suas chances estão esgotadas! Por favor, volte mais tarde! 😔😭`)
HC = Number(sabrpg[AB].horaC) + 1
//acabou o limite...
if(Number(horacass) > Number(sabrpg[AB].horaC) && Number(sabrpg[AB].diaC) === Number(diacass) && Number(sabrpg[AB].mC) === Number(mmcass)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`😝🤪 Mas já mlk? Bora apostar então, eu ainda vou sugar muito teu dinheiro!`)
}
//passar do dia pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(diacass) > Number(sabrpg[AB].diaC)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`💰🌟 ${tempo} caro jogador, como está a sua sorte hj?`)
}
//passar do mês pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(mmcass) > Number(sabrpg[AB].mC)) {
sabrpg[AB].limiteC = 30
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
sabrpg[AB].mC = mmcass
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`📆🗣 Primeira aposta do mês? Eu ainda vou sugar muito teu dinheiro todo...`)
}
if(Number(sabrpg[AB].limiteC) > 0) {
if(!q) {
return reply(`Você deve escolher uma quantia para apostar... Ex: ${prefix+command} 100 _(você estará apostando R$ 100.00)_`)
}
if(Number(args[0]) < 10) return reply(`Não é possível apostar menos que R$ 10.00`)
if(Number(args[0]) > 20000) return reply(`Não é possível apostar mais que R$ 20000.00! 😿`)
if(!Number(args[0])) return reply(`*${args[0]}* não é número! 😿`)
frutasC = JSON.parse(fs.readFileSync("./arquivos/json/slots.json"));
resulC = `${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]}`
if(resulC == `🦴 : 🦴 : 🦴`) {
CC = Number(sabrpg[AB].limiteC) - 1
sabrpg[AB].money = 50
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`• *[${resulC}]* - Óia a bruxa passando... Todo o dinheiro da sua conta agora é dela!`)
}
if(resulC == `🍫 : 🍫 : 🍫`){cmrpg = 1000};
if(resulC == `🍔 : 🍔 : 🍔`){cmrpg = 600};
if(resulC == `🥩 : 🥩 : 🥩`){cmrpg = 400};
if(resulC == `🍕 : 🍕 : 🍕`){cmrpg = 250};
if(resulC == `🌶️ : 🌶️ : 🌶️`){cmrpg = 200};
if(resulC == `🍪 : 🍪 : 🍪`){cmrpg = 100};
if(resulC == `🍗 : 🍗 : 🍗`){cmrpg = 80};
if(resulC == `🌭 : 🌭 : 🌭`){cmrpg = 70};
if(resulC == `🥞 : 🥞 : 🥞`){cmrpg = 60};
if(resulC == `🥓 : 🥓 : 🥓`){cmrpg = 50};
if((resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`)){cmrpg = 40};
if((resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)){cmrpg = 30}
if((resulC == `🍫 : 🍫 : 🍫`) || (resulC == `🍔 : 🍔 : 🍔`) || (resulC == `🥩 : 🥩 : 🥩`) || (resulC == `🍕 : 🍕 : 🍕`) || (resulC == `🌶️ : 🌶️ : 🌶️`) || (resulC == `🍪 : 🍪 : 🍪`) || (resulC == `🍗 : 🍗 : 🍗`) || (resulC == `🌭 : 🌭 : 🌭`) || (resulC == `🥞 : 🥞 : 🥞`) || (resulC == `🥓 : 🥓 : 🥓`) || (resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`) || (resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)) {
var Vitória = "Você acaba de ganhar"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var TT = Number(args[0]) * Number(cmrpg)
var TC = Number(TT) + Number(args[0])
var VT = Number(MR) + Number(TC) * 5
var Ctxt = `R$ ${Number(TC).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
var Vitória = "Você perdeu! Como punição, você perderá"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var VT = Number(MR) - Number(args[0])
var Ctxt = `R$ ${Number(args[0]).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
const cassino = `• *[${resulC}]* - ${Vitória} ${Ctxt}` 
reply(cassino)
}
break

case 'dadoapostado':
setTimeout(() => {reagir(from, "🎲")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
var [d1, d2] = q.split('/')
if(!d1) return reply(`Digite o valor do dado que você acha que irá cair... Após isso, coloque uma (/) ao lado e coloque uma quantia a ser apostada.\n–\nEx: ${prefix+command} 5/25 _(você estará apostando R$ 25.00 no dado 5)_`)
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d1)) return reply(`${d1} não é número!`)
if(!Number(d2)) return reply(`${d2} não é número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
if(Number(d1) < 1 || Number(d1) > 6) return reply(`Este número no dado não existe...`)
reply(`Sorteando dado(s)!`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/data/media/sticker/dados/${dadoale}.webp`)
if(Number(dadoale) === Number(d1)) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a previsão do dado.`)
}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a previsão do dado.`)
}, 5000)
}
break

case 'caracoroa': //by vitinho
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na rpg City.`)
var [d1, d2] = q.split('/')
if(Number(d2) > 1000) return reply("Tbm não pode passar de 1000 né meu camarada kkk")
if(d1.length == 0) return reply(`Digite o lado que a moeda que você acha que irá cair, ou seja, cara ou coroa... Após isso, coloque uma (/) ao lado e coloque a quantia que você deseja apostar, por exemplo: 1.\n–\n• Ex: ${prefix+command} cara/25 _(você estará apostando R$25.00 na posição do lado da cara da moeda)_`);
if(d1.toLowerCase() != "cara" && d1.toLowerCase() != "coroa") return reply("Só pode cara ou coroa.")
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d2)) return reply(`${d2} não é um número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
reply(`Sorteando... Aguarde, daqui a pouco o resultado sai!`)
ladosDaMoeda = ["coroa", "cara"];
pegarInfo = ladosDaMoeda[Math.floor(Math.random() * ladosDaMoeda.length)];
enviarfigu(`./database/data/media/sticker/caracoroa/${pegarInfo}.webp`)
if(pegarInfo === d1) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
}
break

case 'lojas_sc':
case 'lojas':
mention(`${tempo} *@${sender.split("@")[0]}*, bem vindo a minha loja de RPG!\n—–\n❱❱ Lojas de Cavalos: *${prefix}lojadecavalos*\n❱❱ Lojas de Galos: *${prefix}lojadegalos*\n—–\n🛍️ *Produtos:*\n*1.* Comprar Segurança *[R$ 600.00]*\n❑→ ${prefix}comprarsegurança 1 | Você consegue *40% de proteção*!\n*2.* Comprar Segurança *[R$ 1200.00]*\n❑→ ${prefix}comprarsegurança 2 | Você consegue *60% de proteção*!\n*3.* Comprar Segurança *[R$ 1800.00]*\n❑→ ${prefix}comprarsegurança 3 | Você consegue *80% de proteção*!`)
break

case 'lojadecavalos':
setTimeout(() => {reagir(from, "🐎")}, 300)
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
uparcavalo = `R$ ${Number(Number(cavalosrpg[AC].level)*200).toFixed(2)}`
} else {
uparcavalo = `Lv. Máx`
}
} else {
uparcavalo = `R$ 200.00`
}
txt = `${tempo} *@${sender.split("@")[0]}*, Seja bem vindo(a) à loja de cavalos:\n—\n❱❱ ${prefix}comprarestabulo *[R$ 500.00]* - De início é necessário você comprar.\n❱❱ ${prefix}upcavalo - Faça um upload em seu(s) cavalo(s). *[${uparcavalo}]*\n—\n🐎 *Comprar Cavalos:*\n❱❱ ${prefix}comprarcavalo 1 *[R$ 500.00]*\n❱❱ ${prefix}comprarcavalo 2 *[R$ 1000.00]*\n❱❱ ${prefix}comprarcavalo 3 *[R$ 1500.00]*\n❱❱ ${prefix}comprarcavalo 4 *[R$ 2000.00]*\n—\n🌾 *Equipamentos:*\n❱❱ ${prefix}comprarsela *[R$ 200.00]* - Compre uma sela para o seu cavalo.\n❱❱ ${prefix}cdcv3 *[R$ 200.00]* - Verifique o status atual de seu alazão.\n❱❱ ${prefix}atadura *[R$ 250.00]* - Caso tenha alguma fratura em alazão.\n—\n🏪 *Vendas:*\n❱❱ Para vender seu alazão, use o comando ao lado: *${prefix}vendercavalo*\n❱❱ Para vender seu estábulo, use o comando ao lado: *${prefix}venderestabulo*`
mention(txt)
break

case 'lojadegalos':
setTimeout(() => {reagir(from, "🐔")}, 300)
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].level) < 6) {
LV = `R$ ${Number(galosrpg[AD].level) * 100}.00`
} else {
LV = `Lv. Máx`
}
PC = LV
} else {
PC = `R$ 100.00`
}
txt = `*${tempo}* @${sender.split('@')[0]}, Seja bem vindo(a) à loja de galos:\n🐓🏷 *Loja de Galos:*\n❱❱ ${prefix}comprargalinheiro *[R$ 500.00]*\n❱❱ ${prefix}comprargalo 1 *[R$ 100.00]*\n❱❱ ${prefix}comprargalo 6 *[R$ 550.00]*\n❱❱ ${prefix}comprargalo 12 *R$ 1000.00]*\n❱❱ ${prefix}comprargalinha *[R$ 100.00]*\n❱❱ ${prefix}upgalo *[${PC}]*\n––\n🐓🏷 *Vendas:*\n❱❱ Venda de Galos: *${prefix}vendergalo (quantidade)*\n❱❱ Venda de Galinhas: *${prefix}vendergalinha (quantidade)*`
mention(txt)
break




















/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FIM-EFEITOS-MARCAR*/
default:

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return client.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: seloMeta})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
client.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
client.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆ THE SIMPSONS BOT ☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
INICIO DE COMANDOS SEM PREFIXO*/
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
client.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
client.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
client.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./arquivos/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
client.sendMessage(from, {audio: buffer, ptt:true}, {quoted: seloMeta})
DLT_FL(rano)
})
})
}}}

if(JSON.stringify(music).includes(from)) {
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
BC = music[AB].usus.map(i => i.id).indexOf(sender)
if(budy2.toLowerCase().replace("á", "a") === `audio` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#SabrinaKey#", API_KEY_BRONXYS)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
client.sendMessage(from, {audio: {url: link}, mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {reply(mess.error())})
} catch (e) {
reply(mess.error())
}
}
if(budy2.toLowerCase().replace("í", "i") === `video` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlVideo.replace("#Ricky#", API_KEY_BRONXYS)
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
client.sendMessage(from, {video: {url: link}, mimetype: "video/mp4"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}
if(budy2.toLowerCase() === `doc` && isGroup) {
reagir(from, "✅️")
link = music[AB].usus[BC].urlAudio.replace("#SabrinaKey#", API_KEY_BRONXYS)
nome = music[AB].usus[BC].title
music[AB].usus.splice(BC, 1)
fs.writeFileSync("./database/data/music.json", JSON.stringify(music, null, 2))
try {
client.sendMessage(from, {document: {url: link}, fileName: nome+'.mp3', mimetype: "audio/mpeg"}, {contextInfo: {participant: sender, remoteJid: from}}).catch(e => {
reply(mess.error())})
} catch (e) {
reply(mess.error())
}}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isAutorepo) {
if (budy2.includes("bot")) {
 const audioPath = './arquivos/audios/bot.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if(budy2.includes("prefixo")) {
reply(`~🍩~ *Meu prefixo é [ ${prefix} ]* ~🍩~\n_Use ${prefix}menu para não ser um Zé Roela!_`)
}
 
if (budy2.includes("aniversario")) {
 const audioPath = './arquivos/audios/aniversrio.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}
 
 if (budy2.includes("gado")) {
 const audioPath = './arquivos/audios/ban1.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("amor")) {
 const audioPath = './arquivos/audios/teamo.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("ruim")) {
 const audioPath = './arquivos/audios/rui.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("marcar")) {
 const audioPath = './arquivos/audios/marcar.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}


if (budy2.includes("gata")) {
 const audioPath = './arquivos/audios/ban1.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("menu")) {
 const audioPath = './arquivos/audios/menu.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("bugada")) {
 const audioPath = './arquivos/audios/bug2.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("casada")) {
 const audioPath = './arquivos/audios/casal.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("bot")) {
 const audioPath = './arquivos/audios/bot.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("premium")) {
 const audioPath = './arquivos/audios/cmdpremium.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("triste")) {
 const audioPath = './arquivos/audios/TRISTE.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Por que você é tão cruel comigo?")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
client.sendMessage(from, {text: adivinha}, {quoted: seloMeta})
}

if (budy2.includes("boa noite")) {
 const audioPath = './arquivos/audios/Boanoite.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("boa tarde")) {
 const audioPath = './arquivos/audios/Boatarde.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("bom dia")) {
 const audioPath = './arquivos/audios/Bomdia.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("bot")) {
 const audioPath = './arquivos/audios/bot.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}



if (budy2.includes("corno")) {
 const audioPath = './arquivos/audios/gay.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("tudo bem")) {
 const audioPath = './arquivos/audios/Exatamente.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if (budy2.includes("sexta feira")) {
 const audioPath = './arquivos/audios/Exatamente.mp3';
 if (fs.existsSync(audioPath)) { 
 const audioBuffer = fs.readFileSync(audioPath); 
 await client.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
}
}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text; 
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}
}
if (((body || "").toLowerCase()) === 'simpsons' || ((body || "").toLowerCase()) === 'prefixo') {
const menuSemPrefixo = `  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~
     *THE SIMPSONS BOT*
  ~🛋️~🛋️~🛋️~🛋️~🛋️~🛋️~

_Ei, você! Saia do meu sofá e use um comando!_

🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩
  *COMANDOS SEM PREFIXO*
🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩

👾 *simpsons bot* [sua pergunta]
    ↳ _Conversa com a IA._

🖼️ *simpsons baixar imagem* [nome]
    ↳ _Baixa uma imagem._

🎵 *simpsons tocar* [nome]
    ↳ _Toca uma música._

🎬 *simpsons reproduzir* [nome]
    ↳ _Reproduz um vídeo._

🎨 *simpsons fazer figurinha* [descrição]
    ↳ _Cria uma figurinha com IA._

⚙️ *simpsons criar case*
    ↳ _(Comando do Dono)_

-------------------------
👉 Para a lista completa, digite:
       *${prefix}menu*

 Woo hoo! by Obrabo DEV`;
const imagemMenu = './menu/menu.jpeg'; 
await client.sendMessage(from, { image: { url: imagemMenu },
caption: menuSemPrefixo });
}

if (body.startsWith('simpsons criar case ')) { // OBrabo DEV
const nome = body.slice(10).trim().toLowerCase();
if (!nome) return reply("D'oh! Precisa de um nome para o case, seu Zé Ruela!");
const estrutura = `
// D'oh! Um novo case criado pelo Chefe!
case '${nome}': { // OBrabo DEV
if (!isGroup) return client.sendMessage(from, { text: 'Este comando só funciona em grupos, seu bocó!' });
 const resposta = \`  ~🍩~ *${nome.toUpperCase()}* ~🍩~\\n│ Olá, \${pushname}!\\n│ Você usou o comando *${nome}*\\n  ~🍩~🍩~🍩~🍩~🍩~🍩~\`;
client.sendMessage(from, { text: resposta });
}
break;`.trim();

 return reply('```js\n' + estrutura + '\n```');
}

if (((body || "").toLowerCase()).startsWith('simpsons bot')) { // Comando de IA - Premium Only
const q = body.slice('simpsons bot'.length).trim(); 
const pushname = info?.pushName || sender?.split('@')[0];

// Verificação de usuário premium
if (!isPremium && !SoDono && !info.key.fromMe) {
return reply(`  ~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!\n\nPara virar premium, fale com o Dono:\nwa.me/${numerodono}`);
}

if (!q) {
return reply(`  ~🧠~ *LISA IA* ~🧠~\n\nOlá, ${pushname}! ${tempo}\n\n_O que sua mente brilhante deseja saber?_\n\n*Exemplos:*\n> simpsons bot qual a capital de Nevada?\n> simpsons bot me conte uma piada sem graça`);
}

// Mensagem de carregamento simples
reply(`_Hmm, deixe-me pensar..._ 思考\n\n*Sua pergunta:* ${q}`);

try {
// Primeira tentativa: API Gemini oficial
const { GEMINI_API_KEY, GEMINI_API_URL } = require("./settings/config.json");
const requestBody = {
contents: [{
parts: [{
text: q
}]
}]
};

let resposta = null;
let fonte = "LISA IA PRO";

try {
const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(requestBody)
});

if (response.ok) {
const data = await response.json();
if (data && data.candidates && data.candidates[0]) {
resposta = data.candidates[0].content.parts[0].text;
}
}
} catch (geminiError) {
console.log('Gemini API indisponível, tentando fallback...');
}

// Fallback para API DENNYS se Gemini falhar
if (!resposta) {
const query = encodeURIComponent(q);
let url = `${DENNYS_API}/api/ai/texto/gemini?query=${query}&apikey=${DENNYS_KEY}`;
let res = await fetch(url);
let data = await res.json();

// Se falhar, tentar ChatGPT
if (!data || !data.status || (!data.resposta && !data.resultado)) {
url = `${DENNYS_API}/api/ai/texto/chatgpt?query=${query}&apikey=${DENNYS_KEY}`;
res = await fetch(url);
data = await res.json();
fonte = "Professor Frink AI";
}

resposta = data?.resposta || data?.resultado || data?.response;
}

// Verificar se obteve resposta válida
if (!resposta) {
return reply("D'oh! A TV quebrou! A IA está temporariamente indisponível. Tente mais tarde, seu Zé Ruela!");
}

// Resposta bem formatada
const respostaFormatada = `  ~🧠~ *LISA IA* ~🧠~\n\n*Sua Pergunta:* ${q}\n\n*Resposta:* ${resposta}\n\n_Elementar, meu caro ${pushname}!_\n⚡ *Powered by:* ${fonte}`;

return reply(respostaFormatada);

} catch (error) { 
console.error('Erro no comando simpsons bot:', error);
return reply("D'oh! Parece que o Homer comeu o fio da internet. Tente de novo!");
}
}

if (body?.toLowerCase().startsWith('simpsons baixar imagem')) {
const q = body.substring('simpsons baixar imagem'.length).trim();
const pushname = info?.pushName || sender?.split('@')[0];
if (!q) return reply(`  ~🖼️~ *ARQUIVO-X DO BART* ~🖼️~\n\n_Ay, caramba!_ Diga o que você quer que eu desenhe!\n\n*Exemplo de uso:*\n> Simpsons baixar imagem rosquinha rosa`);

// Mensagem de carregamento
const canvas = 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const loadingMsg = await client.sendMessage(from, {
text: `  ~🖼️~ *DESENHANDO...* ~🖼️~\n\n*Artista:* ${pushname}\n*Pedido:* ${q}\n\n_Procurando meu giz de cera..._`,
contextInfo: {
externalAdReply: {
title: "🖼️ ARQUIVO-X DO BART",
body: `Procurando: ${q}`,
thumbnailUrl: canvas,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}
}, { quoted: seloMeta });

try {
await client.sendMessage(from, { 
image: { url: `https://api.nexfuture.com.br/api/pesquisas/pinterest?query=${encodeURIComponent(q)}` },
caption: `  ~🖼️~ *IMAGEM PRONTA* ~🖼️~\n\n*Busca:* ${q}\n*Artista:* ${pushname}\n\n_Não conte para o Diretor Skinner!_`,
contextInfo: {
externalAdReply: {
title: `🖼️ Resultado: ${q}`,
body: `Encontrado por: ${pushname}`,
thumbnailUrl: canvas,
mediaType: 1,
showAdAttribution: false
}}
}, { quoted: seloMeta });

} catch (error) { 
console.error('Erro ao buscar imagem:', error);
reply("D'oh! Minha mão está doendo de tanto desenhar. Tente outra coisa!");
}
return;
}

// Comando: Simpsons analisar imagem (Premium)
if (((body || "").toLowerCase()).startsWith('simpsons analisar') || ((body || "").toLowerCase()).startsWith('Simpsons descrever')) {
   const pushname = info?.pushName || sender?.split('@')[0];
   
   // Verificação de usuário premium
   if (!isPremium && !SoDono && !info.key.fromMe) {
       return reply(`  ~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!\n\nPara virar premium, fale com o Dono:\nwa.me/${numerodono}`);
   }

   if (type !== 'imageMessage') {
       return reply(`  ~🔬~ *OLHO CLÍNICO DA LISA* ~🔬~\n\n_Ay, caramba!_ Envie uma imagem com o comando para eu analisar!\n\n*Exemplo:*\n> Simpsons analisar [sua imagem]`);
   }

   try {
       // Mensagem de carregamento
       reply(`  ~🔬~ *ANALISANDO...* ~🔬~\n\n_Hmm, fascinante... Deixe-me pegar meu microscópio..._`);

       // Download da imagem
       const media = await downloadMediaMessage(info);
       const base64Image = media.toString('base64');

       // Usar Gemini 2.5 Pro para análise de imagem
       const { GEMINI_API_KEY } = require("./settings/config.json");
       const response = await axios.post(
           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${GEMINI_API_KEY}`,
           {
               contents: [{
                   parts: [
                       {
                           text: "Analise esta imagem detalhadamente em português brasileiro. Descreva tudo que você vê: objetos, pessoas, cores, ambiente, emoções, ações, detalhes importantes. Seja descritivo e completo, mas organize a resposta de forma clara e estruturada."
                       },
                       {
                           inline_data: {
                               mime_type: "image/jpeg",
                               data: base64Image
                           }
                       }
                   ]
               }]
           }
       );

       const analysis = response.data.candidates[0].content.parts[0].text;
       
       reply(`  ~🔬~ *ANÁLISE COMPLETA* ~🔬~\n\n${analysis}\n\n*Analisado por:* ${pushname}\n_Elementar, meu caro!_`);

   } catch (error) {
       console.log("Erro análise de imagem:", error.response?.data || error.message);
       reply(`D'oh! Esta imagem é mais confusa que um episódio de Itchy & Scratchy. Tente outra!`);
   }
}

// Comando: Simpsons criar imagem (Premium) - API Externa
if (((body || "").toLowerCase()).startsWith('simpsons criar imagem ')) {
   const prompt = body.slice(17); // Remove "Simpsons criar imagem "
   const pushname = info?.pushName || sender?.split('@')[0];
   
   // Verificação de usuário premium
   if (!isPremium && !SoDono && !info.key.fromMe) {
       return reply(`  ~💰~ *COMANDO PREMIUM* ~💰~\n\n_Excellent..._ Este comando é só para quem tem grana!\n\nPara virar premium, fale com o Dono:\nwa.me/${numerodono}`);
   }

   if (!prompt) {
       return reply(`  ~🎨~ *ARTE DO BART* ~🎨~\n\n_Ay, caramba!_ Diga o que você quer que eu piche na parede!\n\n*Exemplo:*\n> Simpsons criar imagem Homer comendo uma rosquinha`);
   }

   try {
       // Mensagem de carregamento
       reply(`  ~🎨~ *PINTANDO...* ~🎨~\n\n*Artista:* ${pushname}\n*Obra:* ${prompt}\n\n_Não conte para a Marge..._`);

       // Usar API externa para geração de imagem
       const response = await axios.get(`https://tohka.tech/api/ai/text2img?q=${encodeURIComponent(prompt)}`);
       
       if (response.data && response.data.result) {
           return client.sendMessage(from, {
               image: { url: response.data.result },
               caption: `  ~🎨~ *OBRA DE ARTE PRONTA!* ~🎨~\n\n*Pedido:* ${prompt}\n*Artista:* ${pushname}\n\n_Ficou legal, né? Woo hoo!_`,
               contextInfo: {
                   externalAdReply: {
                       title: "🎨 ARTE DO BART",
                       body: `Obra: ${prompt}`,
                       thumbnailUrl: response.data.result,
                       mediaType: 1,
                       showAdAttribution: false,
                       renderLargerThumbnail: true
                   }
               }
           }, { quoted: seloMeta });
       } else {
           reply(`D'oh! Acabou a tinta amarela. Tente descrever outra coisa.`);
       }

   } catch (error) {
       console.log("Erro geração de imagem:", error.message);
       reply(`D'oh! Minha mão está doendo de tanto desenhar. Tente outra coisa!`);
   }
}

if (body?.toLowerCase().startsWith('simpsons tocar')) {
const q = body.substring('simpsons tocar'.length).trim();
const pushname = info?.pushName || sender?.split('@')[0];
if (!q) return reply(`  ~🎷~ *JAZZ DA LISA* ~🎷~\n\n_Até que enfim algo com classe..._ Qual música você quer ouvir?\n\n*Exemplo de uso:*\n> simpsons tocar blues do dente sangrando`); 

// Mensagem de carregamento com canvas
const canvas = 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const loadingMsg = await client.sendMessage(from, {
text: `  ~🎷~ *AFINANDO O SAXOFONE...* ~🎷~\n\n*Público:* ${pushname}\n*Música:* ${q}\n\n_Um momento, por favor..._`,
contextInfo: {
externalAdReply: {
title: "🎵 JAZZ DA LISA",
body: `Buscando: ${q}`,
thumbnailUrl: canvas,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}
}, { quoted: seloMeta });

try {
// Tentativa principal com DENNYS API
const data = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
const video = data?.resultado?.resultado?.[0]; 

if (!video) {
// Fallback com yt-search
const searchResults = await yts(q);
if (!searchResults.videos || searchResults.videos.length === 0) {
return reply("D'oh! Não achei essa música nem na loja de discos do Comic Book Guy.");
}

const ytVideo = searchResults.videos[0];
const videoTitle = ytVideo.title || 'Título desconhecido';
const videoImage = ytVideo.thumbnail || 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const videoDuration = ytVideo.timestamp || 'Duração desconhecida';
const videoUrl = ytVideo.url || '';

await client.sendMessage(from, { 
audio: { url: `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(videoUrl)}&apikey=${DENNYS_KEY}` },
fileName: `${videoTitle}.mp3`,
mimetype: "audio/mpeg",
contextInfo: {
externalAdReply: {
title: `🎵 ${videoTitle}`,
body: `⏱️ ${videoDuration} | 👤 ${pushname}`,
thumbnail: await safeGetBuffer(videoImage),
mediaType: 2,
mediaUrl: videoUrl,
sourceUrl: videoUrl
}}
}, { quoted: seloMeta });

} else {
// Usando resultado da DENNYS API
const videoTitle = video.title || 'Título desconhecido';
const videoImage = video.image || 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const videoDuration = video.timestamp || 'Duração desconhecida';
const videoUrl = video.url || '';

await client.sendMessage(from, { 
audio: { url: `${DENNYS_API}/api/download/play?nome=${encodeURIComponent(videoUrl)}&apikey=${DENNYS_KEY}` },
fileName: `${videoTitle}.mp3`,
mimetype: "audio/mpeg",
contextInfo: {
externalAdReply: {
title: `🎵 ${videoTitle}`,
body: `⏱️ ${videoDuration} | 👤 ${pushname}`,
thumbnail: await safeGetBuffer(videoImage),
mediaType: 2,
mediaUrl: videoUrl,
sourceUrl: videoUrl
}}
}, { quoted: seloMeta });
}

} catch (e) { 
console.error("Erro no comando simpsons tocar:", e);
reply("D'oh! O Homer usou o CD para apoiar a cerveja. Tente de novo!");
}
return;
}

if (body?.toLowerCase().startsWith('simpsons reproduzir')) {
const q = body.substring('simpsons reproduzir'.length).trim();
const pushname = info?.pushName || sender?.split('@')[0];
if (!q) return reply(`  ~📺~ *CANAL 6* ~📺~\n\n_Beeem, o que vamos assistir hoje?_\n\n*Exemplo de uso:*\n> Simpsons reproduzir show do Krusty`);

// Mensagem de carregamento
const loadingMsg = await client.sendMessage(from, {
text: `  ~📺~ *SINTONIZANDO...* ~📺~\n\n*Espectador:* ${pushname}\n*Programa:* ${q}\n\n_Não mude de canal!_`,
contextInfo: {
externalAdReply: {
title: "🎬 CANAL 6",
body: `Buscando: ${q}`,
thumbnailUrl: 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg',
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}
}, { quoted: seloMeta });

try {
// Tentativa principal com DENNYS API
const data = await fetchJson(`${DENNYS_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`);
const video = data?.resultado?.resultado?.[0]; 

if (!video) {
// Fallback com yt-search
const searchResults = await yts(q);
if (!searchResults.videos || searchResults.videos.length === 0) {
return reply("D'oh! Não achei esse vídeo nem nas fitas velhas do Vovô.");
}

const ytVideo = searchResults.videos[0];
const videoTitle = ytVideo.title || 'Título desconhecido';
const videoImage = ytVideo.thumbnail || 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const videoDuration = ytVideo.timestamp || 'Duração desconhecida';
const videoUrl = ytVideo.url || '';

await client.sendMessage(from, {
video: { url: `${DENNYS_API}/api/download/playvd?nome=${encodeURIComponent(videoUrl)}&apikey=${DENNYS_KEY}` },
fileName: `${videoTitle}.mp4`,
mimetype: "video/mp4",
caption: `🎬 *${videoTitle}*\n⏱️ *Duração:* ${videoDuration}\n👤 *Pedido por:* ${pushname}\n\n_Woo hoo! Pipoca!_`,
contextInfo: {
externalAdReply: {
title: `🎬 ${videoTitle}`,
body: `⏱️ ${videoDuration} | 👤 ${pushname}`,
thumbnail: await safeGetBuffer(videoImage),
mediaType: 2,
mediaUrl: videoUrl,
sourceUrl: videoUrl
}}
}, { quoted: seloMeta });

} else {
// Usando resultado da DENNYS API
const videoTitle = video.title || 'Título desconhecido';
const videoImage = video.image || 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const videoDuration = video.timestamp || 'Duração desconhecida';
const videoUrl = video.url || '';

await client.sendMessage(from, {
video: { url: `${DENNYS_API}/api/download/playvd?nome=${encodeURIComponent(videoUrl)}&apikey=${DENNYS_KEY}` },
fileName: `${videoTitle}.mp4`,
mimetype: "video/mp4",
caption: `🎬 *${videoTitle}*\n⏱️ *Duração:* ${videoDuration}\n👤 *Pedido por:* ${pushname}\n\n_Woo hoo! Pipoca!_`,
contextInfo: {
externalAdReply: {
title: `🎬 ${videoTitle}`,
body: `⏱️ ${videoDuration} | 👤 ${pushname}`,
thumbnail: await safeGetBuffer(videoImage),
mediaType: 2,
mediaUrl: videoUrl,
sourceUrl: videoUrl
}}
}, { quoted: seloMeta });
}

} catch (e) { 
console.error("Erro no comando simpsons reproduzir:", e);
reply("D'oh! A antena caiu. Tente sintonizar outro vídeo!");
}
return;
}

if (((body || "").toLowerCase()).startsWith('simpsons fazer figurinha ')) {
let q = body.slice('simpsons fazer figurinha '.length).trim(); 
const pushname = info?.pushName || sender?.split('@')[0];
if (!q) return reply(`  ~🎨~ *ARTE DO BART* ~🎨~\n\n_Ay, caramba!_ Diga o que você quer que eu piche na parede!\n\n*Exemplo de uso:*\n> Simpsons fazer figurinha de gato rosa`);

// Mensagem de carregamento com canvas
const canvas = 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg';
const loadingMsg = await client.sendMessage(from, {
text: `  ~🎨~ *PINTANDO...* ~🎨~\n\n*Artista:* ${pushname}\n*Obra:* ${q}\n\n_Não conte para a Marge..._`,
contextInfo: {
externalAdReply: {
title: "🎨 ARTE DO BART",
body: `Criando: ${q}`,
thumbnailUrl: canvas,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}
}, { quoted: seloMeta });

try {
const toshiruzUrl = `${DENNYS_API}/api/ai/imagem/imagemAi?query=${encodeURIComponent(q)}&apikey=${DENNYS_KEY}`;
const response = await axios.get(toshiruzUrl, { responseType: 'arraybuffer' });
const buffer = Buffer.from(response.data, 'binary');

// Criar diretório temp se não existir
const tempDir = './temp';
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

const timestamp = Date.now();
const tempInput = `${tempDir}/img_${timestamp}.jpg`;
const tempOutput = `${tempDir}/img_${timestamp}.webp`;

fs.writeFileSync(tempInput, buffer);

// Converter para figurinha com qualidade otimizada
await sharp(tempInput)
.resize(512, 512, {
fit: 'inside',
withoutEnlargement: true 
})
.webp({ quality: 85, effort: 6 })
.toFile(tempOutput);

// Enviar figurinha
await client.sendMessage(from, { 
sticker: fs.readFileSync(tempOutput),
contextInfo: {
externalAdReply: {
title: `🎨 Figurinha: ${q}`,
body: `Criado por: ${pushname}`,
thumbnailUrl: canvas,
mediaType: 1,
showAdAttribution: false
}}
}, { quoted: seloMeta });

// Limpar arquivos temporários
fs.unlinkSync(tempInput);
fs.unlinkSync(tempOutput);

} catch (e) {
console.error("Erro no comando simpsons fazer figurinha:", e);
reply("D'oh! Acabou a tinta amarela. Tente descrever outra coisa.");
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
ANTI PALAVRÃO */
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
client.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
client.sendMessage(from, {text: mess.permissionDenied_rUser()})
}
}

if (((body || "").toLowerCase()) === 'simpsons' || ((body || "").toLowerCase()) === 'prefixo') {
const menuSemPrefixo = `  ~🍩~🍩~🍩~🍩~🍩~🍩~
    *QUAL É O PREFIXO?*
  ~🍩~🍩~🍩~🍩~🍩~🍩~

_D'oh! Esqueceu de novo, seu Zé Roela?_

Meu prefixo para comandos é:

       *${prefix}*

👉 Para ver a lista de comandos,
     use: *${prefix}menu*

 Woo hoo! by Obrabo DEV`;
const imagemMenu = 'https://i.postimg.cc/bv9D4BNY/The-Simpson.jpg'; 
await client.sendMessage(from, { image: { url: imagemMenu },
caption: menuSemPrefixo });
}

if (((body || "").toLowerCase()).startsWith('oracao')) {
const tema = body.slice(7).trim();
if (!tema) return reply(`🙏 Digite o tema da oração.\nExemplo: oracao fé`);
try {
const respostaIA = await fetchJson(`${DENNYS_API}/api/ai/texto/gemini?query=Escreva uma oração sobre ${encodeURIComponent(tema)}&apikey=${DENNYS_KEY}`);
const oracao = respostaIA?.resposta || "🙏 Senhor, abençoe nossa caminhada com paz, fé e proteção divina.";
const imagem = `${DENNYS_API}/api/pesquisa/pinterest?apikey=${DENNYS_KEY}&query=${encodeURIComponent("oração " + tema)}`;
await client.sendMessage(from, { image: { url: imagem },
caption: `🙏 *Oração sobre ${tema}*\n\n${oracao}`
}, { quoted: info });
} catch (e) { console.error("ERRO NO COMANDO ORAÇÃO:", e);
await reply("Não consegui gerar a oração agora. Tente novamente mais tarde.");
}
return;
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
SIMIH-1*/
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
if(!muehe) return
console.log(muehe)
reply(muehe)
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
 SIMIH2 */
msg_q = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation?.toLowerCase() || "";
msg_m = info?.message?.extendedTextMessage?.text || "";
sm_j = SIMI_OFC?.map(i => i?.MSG)
sm_r = SIMI_OFC[SIMI_OFC?.map(i => i?.MSG)?.indexOf(msg_q)]?.RSP

var RN_ = SIMI_OFC[SIMI_OFC?.map(i => i?.MSG)?.indexOf(budy.toLowerCase())]?.RSP

var RND_ = RN_ ? RN_[Math.floor(Math.random() * RN_?.length)] : false

let VR_NMEX;
try {
VR_NMEX = await client?.onWhatsApp(msg_m || msg_q)
} catch (e){
VR_NMEX = false
}

let VR_NMEX2;
try {
VR_NMEX2 = await client?.onWhatsApp(RND_)
} catch (e){
VR_NMEX2 = false
}

if(!isCmd && !VR_NMEX && isGroup && budy.length < 1000 && !isUrl(budy.toLowerCase() || msg_m || msg_q) && menc_jid2?.length == 0 && msg_q != "" && msg_m != "" && !groupMembers.some(i => msg_m.includes(i.id.split("@")[0])) && !groupMembers.some(i => msg_q.includes(i.id.split("@")[0]))){
msg_m && !sm_j?.includes(msg_q) && !sm_r?.includes(msg_m) ? SIMI_OFC.push({MSG: msg_q, RSP: [msg_m]}) : msg_m && sm_j?.includes(msg_q) && !sm_r?.includes(msg_m) ? sm_r.push(msg_m) : "©"
fs.writeFileSync("./database/grupos/simi.json", JSON.stringify(SIMI_OFC, null, 2))
}

if(isSimi2 && !isCmd && !isUrl(budy) && !VR_NMEX2 && RND_ != false && RND_[0] != prefix && isGroup && SIMI_OFC?.map(i => i?.MSG).includes(budy.toLowerCase()) && RN_.length >= 1) {
reply(`​${RND_}`)
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
NÃO EXISTE */
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
if (isCmd) {
if (isAudioMenu) {
try {
const audioPath = './arquivos/audios/iscmd.mp3';
if (fs.existsSync(audioPath)) { const audioErro = fs.readFileSync(audioPath);
await client.sendMessage(from, { audio: audioErro,
mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} else {
console.warn("Arquivo de áudio não encontrado:", audioPath);
}
} catch (error) { console.error("Erro ao carregar áudio de comando inexistente:", error);
}}
try {
const videoPath = './menu/vídeomenu.mp4'; 
if (fs.existsSync(videoPath)) {
const legenda = `  ~🍩~🍩~🍩~🍩~🍩~🍩~
        *D'OH!*
  ~🍩~🍩~🍩~🍩~🍩~🍩~

┌─⚠️ *ALGO DEU ERRADO*
│
├ 👋 *Olá:* ${pushname}
├ ❌ *Erro:* COMANDO NÃO EXISTE!
├ 👉 *Tente:* Use o *${prefix}menu*
├ 🤖 *Prefixo:* ${prefix}
├ ⏰ *Hora:* ${hora2}
│
└───────────

 Woo hoo! by Obrabo DEV`;
await client.sendMessage(from, { video: fs.readFileSync(videoPath), mimetype: 'video/mp4',caption: legenda, gifPlayback: true }, { quoted: info });
} else { console.warn("Arquivo de vídeo não encontrado:", videoPath);
}} catch (err) { console.error("Erro ao enviar vídeo de comando inexistente:", err);
}
}
}
}
}

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

async function vipFunctionTempo() {
if(premium.length > 0) {
for (y of premium) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
if(y.infinito == false) {
if(y.dias > 1) {y.dias -= 1
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
} else {
client.sendMessage(y.id, {text: `⚠️ *ATENÇÃO!* Seus dias como usuário premium acabam de terminar, para realizar a renovação entre em contato com o número abaixo:\n• Contato: *http://wa.me/${numerodono}*\n––\n• Desde já muito obrigado pela atenção, desculpe-me o incômodo.\n• *Essa mensagem é automática*, caso seja um engano entre em contato com número acima e saiba mais!`})
AB = premium.map(b => b.id).indexOf(y.id)
premium.splice(AB, 1)
fs.writeFileSync("./database/usuarios/premium.json", JSON.stringify(premium))
}}}}}}

async function tmpCardAluguelFunction() {
if(aluguel.length > 0) {
for(x of aluguel) {if(x.save != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.cortesia == false) {
if(x.tempo > 1) {
if(Number(x.tempo) === 8 || Number(x.tempo) === 4 || Number(x.tempo) === 3 || Number(x.tempo) === 2) {
client.sendMessage(x.cliente, {text: `😿⚠️ Olá, acabo de verificar que nosso contrato no grupo *${aluguel[aluguel.map(m => m.id).indexOf(x.id)].nome}* termina em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}...\n• Não deixe de fechar contrato novamente com nossa equipe! *Qualquer dúvida, entre em contato com meu proprietário.*`})
}
x.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
x.tempo -= 1
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
client.sendMessage(x.id, {text: `*O tempo limite deste grupo acabou!😿💔* Para a renovação do contrato entre em contato com o meu dono: *wa.me/${nmrdn.split('@')[0]}*`})
client.sendMessage(nmrdn, {text: `🤓🗑️ Só passando pra avisar que o tempo limite do grupo *${x.nome}* expirou agora... Visto que o(a) *@${x.cliente.split('@')[0]}* não renovou o contrato, eu saí do grupo dele(a) e apaguei os registros! 🌟`, mentions: [x.cliente]})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
RT = aluguel.map(i => i.id).indexOf(x.id)
grupo = x.id
aluguel.splice(RT, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
client.groupLeave(grupo)
}}}}}

async function tmpCardCortesiaAluguel() {
if(aluguel.length > 0) {
for( x of aluguel ) {
if(x.save != Number(moment.tz('America/Sao_Paulo').format('HH')) && x.cortesia == true) {
if(x.tempo > 0) {
x.save = Number(moment.tz('America/Sao_Paulo').format('HH'))
x.tempo -= 1
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
client.sendMessage(x.id, {text: `🌟💳 *O cartão cortesia 24h deste grupo expirou!* Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono: *wa.me/${numerodono.split('@')[0]}*`})
client.sendMessage(numerodono, {text: `🤓🗑️Só passando pra avisar que o cartão cortesia do grupo *${x.nome}* expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados! 🌟`})
GP = grupos.map(i => i.id).indexOf(x.id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(aluguel.map(i => i.id).indexOf(x.id), 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
await sleep(4000)
client.groupLeave(x.id)
}}}}}

async function FunctionEnvMsg() {
client.sendMessage(nmrdn, {text: `O que é buceta, que tu me chama?`})
}

vipFunctionTempo(); // Executar a função do premium temporário, quando os dias zerar.
tmpCardAluguelFunction(); // Quando o aluguel oficial do grupo (assinado), sem ser o teste.
tmpCardCortesiaAluguel(); // Quando o cartão cortesia do grupo acabar, ele irá notificar.

msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(DENNYS_KEY)) {
return console.log("A api caiu ou não foi possivel executar esta ação.")
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./connect.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
INÍCIO - ÁREA DE ATUALIZAÇÕES*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[file]
require(file)
})
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆Obrabo DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
FIM - ÁREA DE ATUALIZAÇÕES*/
iniciarClient().catch(async(e) => {return console.log(colors.red(`• ERROR: `+e))})