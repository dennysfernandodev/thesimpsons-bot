const fs = require('fs');

function lerArquivo(caminho) {
  if (!fs.existsSync(caminho)) fs.writeFileSync(caminho, JSON.stringify({}));
  return JSON.parse(fs.readFileSync(caminho));
}

function salvarArquivo(caminho, dados) {
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}

module.exports = { lerArquivo, salvarArquivo };
