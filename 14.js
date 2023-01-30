// eventos com os elementos do DOM

(function readyJS(win, doc){
    "use strict";

    let btn = doc.querySelector("#btn");
    let sel = doc.querySelector("#select")

    function alertar(event){
        // event.preventDefault();
        // console.log('Form not send')
        // console.log(event.target.id); // .innerHTML
        alert('Alert"')
    }

    // 3 parametros 1° evento que eu quero 2° manipulador de evento(função) 3° bubbling capturing
    sel.addEventListener('change', alertar, false);
    btn.addEventListener("click", alertar, false);

})(window, document);