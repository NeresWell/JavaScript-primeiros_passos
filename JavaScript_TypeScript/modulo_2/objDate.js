// const data = new Date(0); // 01/01/1970 Timestamp unix

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds);
// console.log('Dia semana', data.getDay());
// console.log('', data)
// console.log('', data)

// console.log(data.toDateString());
// console.log(Date.now())


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);