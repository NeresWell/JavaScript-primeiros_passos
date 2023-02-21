// var = condição ? true : false

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "usuário VIP" : "usuário comum";

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);