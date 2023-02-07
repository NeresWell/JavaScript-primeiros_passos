/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados
const a = 'A'
const b = a

Referência (mutável) - array, object, function - Passados por referência
let a = [1,2,3]
let b = a // let b =[...a] spred {...a} // b não é mais refência, pega o valor de a fica idenpendente no b
console.log(a,b);
a.push(4)
console.log(a,b)
*/