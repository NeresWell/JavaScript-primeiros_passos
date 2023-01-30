// delegação de eventos

(function readyJS(win, doc){
    'use strict';

    let btn = doc.querySelector("#btn");
    let main = doc.querySelector(".main");

    function createElement(event){
        const newButton = doc.createElement("button");
        newButton.id = "newButton";
        newButton.innerHTML='New Button';
        main.appendChild(newButton);
    }

    function alertar() {
            alert("New button");
    }

    function optEvents(event) {
        if(event.target.id === 'newButton'){
            alertar();
        } else if (event.target.id === 'btn') {
            createElement();
        }
    }

    main.addEventListener("click", optEvents,false)

})(window,document)