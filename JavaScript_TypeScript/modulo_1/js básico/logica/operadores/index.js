/*
Operadores de comparação

> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ********
=== igualdade estrita (valor e tipo)
!= diferente (valor) *******
!== diferente estrito (valor e tipo)
*/

const num1 = 10;
const num2 = '10';
const comp = num1 === num2;
console.log(comp)

/*
Operadores lógicos
&& -> And -> E -> Todas as expressções precisam ser verdadeiras
|| -> OR -> OU -> Uma das expressões precisa ser verdadeira
!  -> NOT -> NÃO
*/
console.log(true && true)
console.log(true || true)
console.log(!true)

/*
FALSY
false
'' " " ` `
null / undefined
NaN
*/

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi())