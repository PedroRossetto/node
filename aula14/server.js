require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('Pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET     PUT     DELETE 
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

// http://facebook.com/profiles/12423324234 <- url params
// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila <- query strings

// Transforma o corpo da requisição em objeto
app.use(express.urlencoded({ extended: true }));

// Definindo conteudos estaticos
app.use(express.static('./public'));
app.use(meuMiddleware);


//Definindo a view e a view engine
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// Definindo rotas 
app.use(routes);
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000');
    });
})
//Inicia o servidor na porta 3000




