const fs = require('fs').promises

//Lê arquivo
module.exports = (caminho) => fs.readFile(caminho, 'utf-8')