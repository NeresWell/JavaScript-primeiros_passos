// hoisting: trata primeiro as variáveis e funções litereais no topo do escopo
function hoisting(){

    let a = 2;
    let b = 3;

    inside();

    function inside(){
        console.log('isso é um exemplo')
    }

    return a * b
}

console.log(hoisting())