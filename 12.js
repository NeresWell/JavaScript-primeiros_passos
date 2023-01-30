
(function readyJS(win,doc) {
    "use strict";
    
    /* typeof: verificar tipo de dado
    let type = 10
    console.log(typeof(type))

    let arr = [0,1,'Hugo', {'Idade': 18}, null]
    let obj = {"Nome":"Hugo","Cidade":"DF"}

    for (let index = 0; index < arr.length; index++) {
        if(typeof arr[i] === "object"){
            console.log(arr[i])
        }
    }
    console.log(typeof obj)
    console.log(Array.isArray(obj))
    */

    // troca e armazenamento de informações XML > json (semelhante a obj JS)
    let data = {
        car: {
            // nome:valor
            ano: 2018,
            cor: 'preto',
            arr: [0,1,2]
        }
    }
    let data2 = '{"nome": "hugo", "idade":"33"}'
    console.log(JSON.stringify(data))
    console.log(JSON.parse(data2))
}(window, document))