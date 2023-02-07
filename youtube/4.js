// function nomeFuncao (argumentos, parametros) {
//     corpo da funcao
//     return ou nao
// }

// função em variável
let nomeFuncao = function(x,y) {
    let result = x * y
    return result
}

// função obj
let objMult = {
    func: function(x,y) {
        let result = x * y
        return result
    }
}
console.log(objMult.func(4,2))

// chamar a funcao
console.log(nomeFuncao(3,2))

// função aninhada
function myName(val) {
    let nome;
    function setNome() {
        if(val == 1) {
            nome = 'hugo'
        } else if(val == 2) {
            nome = 'neres'
        } else {
            nome = 'nenhum dado'
        }
        return nome
    }
    return setNome()
}
console.log(myName(2))

// arrow functions
let sum = (x,y) => {
    return x + y
}
console.log(sum(3,4))