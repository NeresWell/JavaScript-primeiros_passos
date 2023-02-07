// selecionar elementos DOM
(function readyJS(win, doc){
    "use strict";

    /* pegando o elemento do DOM e alterando comportamento
    let teste = doc.getElementById('teste');
    teste.className = 'New Class'
    teste.style.color = 'red';
    console.log(teste)
    */

    /*
    let myClass = doc.getElementsByClassName('btn')
    console.log(myClass)
    console.log(myClass[0].innerHTML)
    */

    /*
    let byName = doc.getElementsByName('img')
    console.log(byName)
    */

    /*
    let byTag = doc.getElementsByTagName('h1')
    console.log(byTag)
    */

    /*
    let byQuery = doc.querySelector(".divClass") // ("#teste") = id ("[tittle/alt='Testando']")
    
    let byQuery = doc.querySelector(".btn")
    byQuery.addEventListener('click', function(){
        alert('Oi')
    })
    console.log(byQuery)
    */

    /*
    let byQueryAll = doc.querySelectorAll('.btn');
    for(let i = 0; i < byQueryAll.length; i++) {
        byQueryAll[i].addEventListener('click', function(){
            // alert('Click button: ' + this.innerHTML) retorna o conteúdo da tag
            doc.querySelector("body").style.backgroundColor = this.getAttribute('data-color')
        })
    }
    */

})(window, document);