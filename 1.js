// aparece fora das function, if, for, while. Foje do escopo
// ECMAScript é a padronização do javaScript
var nome = 'hugo'

// var consigo declarar e redeclarar, com let não

// let e const não tem problemo de escopo
const sobrenome = 'neres'
let ultimo = 'santos'
console.log(nome)
console.log(sobrenome)
console.log(ultimo)

/* 
    tipos de dados primitivos
        String
        number
        undefined (não aponta para nenhum local automaticamente let nomeAluno;)
        null (eu não quero que aponte nenhum local)
        boolean

    tipos de dados
        inteiros 1,2,3...
    
        decimais 3.4 , 2.634

        boolean true/false

        string "texto"/'texto'/`texto`

        array(conjunto de dados) let array = ["item","item"]

        objeto(propriedades métodos) let obj = {
            prop1: "nome",
            array: [1,2,'a'],
            func myName()
        }
*/