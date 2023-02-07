// IIFE: função auto-invocada
// .form seleciona a classe css
// # seleciona o ID
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });

        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
    }
    
    // pegar o valor do input nome.value
    // criar um obj e colocar dentro do array
    // criar um paragrafo com o array como resultado da div
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

// form.onsubmit = function (evento) {
//     evento.preventDefault();
//     alert(1);
//     console.log('Foi enviado.');
// };