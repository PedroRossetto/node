const Animal = require('./mod');
const n = require('./mod');

const n1 = new Animal('Dog')

n1.latir()
console.log(n1);


const path = require('path');
console.log(path.resolve(__dirname, '..', '..'));