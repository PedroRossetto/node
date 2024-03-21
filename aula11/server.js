const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
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


//Definindo a view e a view engine
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// Definindo rotas 
app.use(routes);

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});



