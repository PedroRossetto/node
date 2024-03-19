const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever')
const ler = require("./modules/ler")

const pessoas = [
    {nome: 'Joao'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Bruno'},
    {nome: 'Bruno 2'}
]

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json)

//Lê o arquivo 
async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}


//Transforma os dados de JSON para javascript
function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val))
}
// const dadosArquivos = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));

lerArquivo(caminhoArquivo);