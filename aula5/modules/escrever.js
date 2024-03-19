const fs = require('fs').promises;

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8'})
}



//Escreve arquivo           Conteudo    Sobreescreve se existir, Encode(Pode alterar)
// fs.writeFile(caminhoArquivo, 'Frase 1 ', { flag: 'w', encoding: 'utf-8'})


// flag 'a' faz um append e junta || w deleta e escreve