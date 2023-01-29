let arr1 = [1,2,3,4,5]
let arr2 = ['s','t', 's']

// concatenação: juntar dados
let arrFinal = arr1.concat(arr2)
console.log(arrFinal)

// every: buscar informação por tipo
let everyX = arrFinal.every(
    function verificaElements(elem, ind, obj) {
        return (typeof elem == 'number')
    }
)
console.log(everyX)

// filter: filtrar informação
let filterX = arrFinal.filter(
    function verificaElements(elem, indx, obj) {
        // return (elem > 3)
        return (typeof elem == 'string')
    }
)
console.log(filterX)

// forEach: percorrer e filtrar
let data = "";
let forEach = arrFinal.forEach(
    function verifyElements(elem, ind, obj) {
        if(ind > 3) {
            data += "indice " + ind + " : " + elem + '\n'
        } 
    }
)
console.log(data)

// indexOf: posição do elemento no array
let indexOfX = arrFinal.indexOf("s")
if(indexOfX == -1){
    alert("esse dado não existe")
}
console.log(indexOfX)

// LastIndexOf: ultima valor(duplicado ou não) posição do elemento no array
let lastIndexOfX = arrFinal.lastIndexOf("s")
if(indexOfX == -1){
    alert("esse dado não existe")
}
console.log(lastIndexOfX)

// join: transforma tudo na string
let joinX = arrFinal.join("-")
console.log(joinX)

// Map
let mapFinal = []
let mapX = arrFinal.map(
    function verifyElements(elem, ind, obj) {
        if(typeof elem == 'number') {
            mapFinal.push(elem * 2)
        } else{
            // adiciona elemento no fim do array
            mapFinal.push(elem)
        }
    }
)
console.log(mapFinal)
    
// pop: remove elemento no fim do array
mapFinal.pop()
console.log(mapFinal)

// some: percorre todo array e tenta encontrar a condição estabelecida
let someX = arrFinal.some(
    function verificaElements(elem, ind, obj) {
        return (typeof elem == 'number')
    }
)
console.log(someX)

// reverse: reverte a ordem dos elementos do array
// let reverseX = arrFinal.reverse()
// console.log(reverseX)

// reduce, reduceRight: soma os elementos só muda a ordem 
let reduceX = arrFinal.reduce(
    function verificaElements(v1,v2,ind,arr){
        return v1+v2
    }
)
console.log(reduceX)

// shift: remove o primeiro elemento array
// let shiftX = arrFinal.shift()
// console.log(shiftX)

// slice: pega index do array
let sliceX = arrFinal.slice(3,7)
console.log(sliceX)

// sort: number e string ordenados
let sortX = arrFinal.sort()
console.log(sortX)

// splice: remove (posição, quantidade) adiciona (posição, quantidade, valor, valor)
let spliceX = arrFinal.splice(3,3,'y','w', 0)
console.log(spliceX)

// unshift: adiciona e dar a quantidade lenght
let unshiftX = arrFinal.unshift(-1,-2,-3)
console.log(unshiftX)

// toString: converte todos os valores para string
let toStringX = arrFinal.toString()
console.log(toStringX)