const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET     PUT     DELETE 
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

// http://facebook.com/profiles/12423324234 <- url params
// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila <- query strings

// Transforma o corpo da requisição em objeto
app.use(express.urlencoded({ extended: true }));

//Controller GET
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});

//Controller GET com alguns parametros opcionais
//idUsuarios pega o valor da url e ? deixa opcional esse valor
app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios)
})

//Controller POST
//req.body.nome -> nome vem do name="nome" no formulario
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi : ${req.body.nome}`)
})

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});



