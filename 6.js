let pessoa = {
    nome: 'hugo',
    idade: 25,
    cc: 123
}

let operacao = {
    sacar: function(saldo, valor) {
        return saldo -= valor;
    },
    depositar: function(saldo, valor) {
        return saldo+=valor
    }
}

let bank = {
    pessoa: pessoa,
    operacao: operacao,
    saldo: 50
}

let valor = 40

console.log(bank.pessoa.nome + " portador da conta " + bank.pessoa.cc + " realizou um saque no valor de " + valor + " ficando com " + bank.operacao.sacar(bank
    .saldo,valor))

console.log(bank.pessoa.nome + " portador da conta " + bank.pessoa.cc + " realizou um deposito no valor de " + valor + " ficando com " + bank.operacao.depositar(bank
    .saldo,valor))