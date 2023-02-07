/* this: se relaciona ao objeto window no escopo global ou dentro de func
console.log(this)
function teste() {
    console.log(this)
}
teste()
*/

// this. escopo de obj
let obj = {
    nome: 'Hugo',
    func: function() {
        return this.nome
    }
}
console.log(obj.func())

// use strict: bloqueia pequenos erros tipo variavel não declarada x = 10
// usar palavra reservado, ou usar o this indevidamente
'use strict';
let x = 10
console.log(x)

// immediately-invoked function expression (IIFE)
// evitar problemas de poluição de escopo global, this não se referencia a obj global, tem acesso a win e doc
(function(win, doc){
    'use strict';
    let x = 20;
    console.log(x)
    console.log(win)
    console.log(doc)
    console.log(this)
}(window, document))