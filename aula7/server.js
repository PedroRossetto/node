const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET     PUT     DELETE 
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});



