// laços de repetição

var numero = ""
// for(let i = 0; i < 10; i++) {
//     numero += i;
//     if(i!=9) {
//         numero+='-';
//     }
// }
// console.log(numero)

var i = 0
// while(i<10) {
//     numero += i
    
//     if(i!=9) {
//         numero+='-'
//     }
//     i++
// }
// console.log(numero)

do {
    numero += i
    
    if(i!=9) {
        numero+='-'
    }
    i++
} while(i<10);
console.log(numero)

let pessoa = {
    nome: 'hugo',
    idade: 19,
    cidade: 'New York'
}

for(key in pessoa) {
    console.log(pessoa[key])
    console.log(pessoa['nome'])
    console.log(pessoa.idade)
}
