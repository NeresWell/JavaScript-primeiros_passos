const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }
// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
// const pessoa2 = criaPessoa('Maria', 'Miranda', 35)
// const pessoa3 = criaPessoa('João', 'Oliveira', 32)
// console.log(pessoa1.nome, pessoa2.nome)

// // [] = array {} obj
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// }
// console.log(pessoa.nome)

// const array = [1,2,3]
// array.push(4);
// array[0] = 'Luiz';
// array = 'Luiz'; // não funciona
// console.log(array)