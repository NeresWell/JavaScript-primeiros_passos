// obj window e seus métodos como alert, etc...
// console.log(window.alert("Oi!"))
// console.log(window.AbstractRange)

// obj personalizados (propriedades e métodos)
let pessoa = new Object()
pessoa.nome = 'matheus'
console.log(pessoa)

// ou obj literal
let pessoa1 = {
    nome: 'lucas'
}

let pessoa2 = {
    nome: 'hugo',
    idade: 25,
    status: false,
    array: ['profissional', 'design', 'website'],
    work: function() {
        alert("work")
    },
    support: pessoa1,
    useThis: function() {
        return this.idade
    }
}

console.log(pessoa2.array[0])
console.log(pessoa2.support.nome)
console.log(pessoa2.useThis())