/*╓┰*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*
│┃֪࣪╭★∻∹⋰⋰ ☆∻∹⋰⋰ ★∻∹⋰⋰
║┃֪࣪├ׁ̟̇❮☆ *BLACKOUT 5*
║┃֪࣪├ׁ̟̇❮☆ •bot particular nao copie e nem venda
║┃֪࣪├ׁ̟̇❮☆ •todos direitos reservados ao Tosh blackout 
┗:*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-
*/

const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./exports.js');

const { menu, menudown,anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache,insert, response } = require('./exports.js');

const { dennys_oficial } = require('./arquivos/dennys/dennys_oficial');

const { notificarReinicio } = require('./arquivos/banco_dados/aviso');

const { NomeDoBot, NickDono, prefix } = require("./settings/config.json");

var { fundo1, fundo2 } = require("./settings/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("sim");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciarSabrina() {
var folderUserAuth = "./database/qr-code";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { version, isLatest } = await fetchLatestBaileysVersion();

const client = makeWASocket({
  version,
  auth: state,
  syncFullHistory: true,
  printQRInTerminal: pairingCode,
  qrTimeout: 180000,
  logger: P({ level: 'silent' }),
  browser: ["Chrome (Linux)", "", ""],
  msgRetryCounterCache,
  connectTimeoutMs: 60000,
  defaultQueryTimeoutMs: 0,
  keepAliveIntervalMs: 10000,
  emitOwnEvents: true,
  fireInitQueries: true,
  generateHighQualityLinkPreview: true,
  syncFullHistory: true,
  markOnlineOnConnect: true,
  patchMessageBeforeSending: (message) => {
  const requiresPatch = !!(message.buttonsMessage || message.listMessage);
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
         message: {messageContextInfo: {
          deviceListMetadataVersion: 2,
          deviceListMetadata: 
          {},
       }, 
       ...message}}}}
   return message;
}
});

const PhoneNumber = require('awesome-phonenumber')

if (!pairingCode && !client.authState.creds.registered) {
try {
let number = await question(`${colors.gray("Exemplo do número para realizar a conexão do bot: +55 82 9999-9999. (Coloque do jeito que está no WhatsApp)")}${colors.cyan("\n• Insira no parâmetro o número de telefone que você deseja conectar o bot: ")}`);
number = number.replace(/[^0-9]/g, "");
let code = await client.requestPairingCode(number);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.cyan("• Código para conectar o bot e desfrutar de suas imensas funcionalidades: ")}` + colors.white(code));
rl.close();
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
}
}

client.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var sab2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${sab2.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${sab2.id}.json`));

if(sab2.participants[0].startsWith(client.user.id.split(':')[0])) return;

try { var grpmdt = await client.groupMetadata(sab2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await client.groupMetadata(sab2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(sab2.action == 'add'){
num = sab2.participants[0];
if(nescessario.listanegraG.includes(num)){
await client.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban...'});
client.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
return;
}}
if(sab2.action == 'remove'){
num = sab2.participants[0];
}
if(sab2.action == 'add' && jsonGp[0].listanegra.includes(sab2.participants[0])){
await client.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço...'});
client.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && sab2.action === 'add' && !sab2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await client.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
client.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}, 1000);
}
/*╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     ☆DENNYS DEV☆
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
BEM VINDO*/
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await client.groupMetadata(sab2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !sab2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){

/////////Push descrição do grupo 
try {
ppimg = await client.profilePictureUrl(sab2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await client.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if (sab2.action === 'add') {
let pushname = '@' + sab2.participants[0].split('@')[0];
if (isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', pushname)
.replace('#numerobot#', client.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
    } else {
teks = welcome(pushname, mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
let ranBV = [
        `ao grupo ${encodeURI(mdata_2.subject)}`,
        `O membro ${pushname} chegou quem faltava...`,
        `Leia as regras xuxu.`,
        `E lá vamos nós!.`,
        `Aqui é um Hospício kkk!`,
        `Aqui ninguém é normal kkk`,
        `Gostou de mim me aluga bb`,
        `Não contavam com minha astúcia!`];
client.sendMessage(mdata_2.id, { image: { url: `https://api.popcat.xyz/welcomecard?background=${fundo1}&text1=${pushname}&text2=BEM%20VINDO(A)&text3=${encodeURI(ranBV[Math.floor(Math.random() * ranBV.length)])} &avatar=${shortpc.data}` },
caption: teks,
mentions: sab2.participants });
DLT_FL(ran);
} else if (sab2.action === 'remove') {
let mem = sab2.participants[0];
let pushname = '@' + mem.split('@')[0];
try {
ppimg = await client.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
    } catch (e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'; }
if (isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', pushname)
.replace('#numerobot#', client.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
    } else {
teks = bye(pushname); }
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
fs.writeFileSync(ran, buff);
const ranSI = [
        `ao grupo ${encodeURI(mdata_2.subject)}`,
        `O membro ${pushname} saiu nem pagou a coca..`,
        `nao interagiu e quer ter razão.`,
        `menos um gado `,
        `saiu nem faz falta`,
        `segurança tira ele daqui!`,
        `calma chocolate branco `,
        `o povo quer gozar ` ];
client.sendMessage(mdata_2.id, { image: { url: `https://api.popcat.xyz/welcomecard?background=${fundo2}&text1=${pushname}&text2=ADEUS&text3=${encodeURI(ranSI[Math.floor(Math.random() * ranSI.length)])}&avatar=${shortpc.data}` },
caption: teks, mentions: sab2.participants });
DLT_FL(ran);
}
}

if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(sab2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sab2.participants[0].split('@')[0])
.replace('#numerobot#', client.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(sab2.participants[0].split('@')[0], mdata_2.subject)
}
client.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
} else if(sab2.action === 'remove') {
var mem = sab2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', client.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
client.sendMessage(mdata_2.id, {
image: { url: ppimg }, // Usando a foto do perfil
caption: teks,
mentions: sab2.participants });
DLT_FL(ran)
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, client)
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
  console.log(colors.green("Você precisará de um 2° celular, para tirar foto do qr-code, para depois escanear a foto que tirou.."))
}  

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if (shouldReconnect) {
    if (shouldReconnect == 428) {
        console.log(colors.magenta("[Erro: 428] - Conexão caiu, tentando reconectar. Se o problema persistir, pode ser que sua internet esteja instável."));
    } else if (shouldReconnect == 401) {
        exec("cd database && rm -rf qr-code");
        console.log(colors.white("A autenticação com WhatsApp Web falhou! Reinicie o bot e realize a autenticação novamente."));
    } else if (shouldReconnect == 515) {
        console.log(colors.magenta("Autenticação bem-sucedida! Reinício necessário para estabilizar a conexão."));
    } else if (shouldReconnect == 440) {
        console.log(colors.white("Conflito detectado. Se isso ocorrer mais de 4 vezes, pode haver outra sessão aberta ou o bot ligado em outro local. Caso contrário, ignore."));
    } else if (shouldReconnect == 503) {
        console.log(colors.magenta("[Erro: 503] - Ocorreu um erro desconhecido ao reiniciar o bot ou durante a inicialização."));
    } else if (shouldReconnect == 502) {
        console.log(colors.white("[Erro: 502] - Parece que a conexão com a internet está instável..."));
    } else if (shouldReconnect == 408) {
        console.log(colors.magenta("[Erro: 408] - Conexão com a internet fraca no momento..."));
    } else {
        console.log(colors.white(`Conexão com o WhatsApp foi encerrada. Motivo: ${lastDisconnect?.error}`));
    }
    iniciarSabrina();
}

break;

case 'connecting':
console.log(colors.magenta(`THE SIMPSONS Reconectando / Iniciando - ${date} ${time}`));
    break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(`THE SIMPSONS BOT CONECTADO COM SUCESSO... 〕`))
await dennys_oficial(client);
await notificarReinicio(client);
await client.sendPresenceUpdate("available")
await client.updateProfileStatus(`Obrabo DEV Alugel do BOT: 61994333182`)
break;

default:
break
}}

if(events["creds.update"]) {await saveCreds()};
require("./index.js")(client, folderUserAuth);
})}

iniciarSabrina().catch(async(e) => {console.log(colors.red("• ERROR: "+e))})