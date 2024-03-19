class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Pedro'
const sobrenome = 'Rossetto'

module.exports = {
    nome, sobrenome, Pessoa
}

exports.outraCoisa = 'Outra coisa'