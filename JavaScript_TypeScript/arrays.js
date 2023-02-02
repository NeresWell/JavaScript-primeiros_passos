//            0123456789
// const nome = 'Hugo Neres'
// console.log(nome[2])

//               0        1      2
const nomes = ['Luíz', 'Hugo', 'Ana']



// pare ver o tipo formal e literal
// console.log(typeof nomes);
// console.log(nomes instanceof Array)

// acessar índice a índice
// console.log(nomes.slice(0, -2))

// índice não existe retorna undefined, mas tentar acessar um elemento dentro indice não existe ERRO
// console.log(nomes[50]);

// remove elemente e mantém o índice
// delete nomes[1]
// console.log(nomes[1])

// remove do final .pop remove do fim .shift remove do começo
// nomes.pop();
// console.log(nomes)

// adiciona no começo
// nomes.unshift('Luiza')

// adiciona no fim
// nomes.push('Fabio');

// adiciona elemento ao final do array
// nomes[nomes.length] = 'Luiza'
// nomes[nomes.length] = 'Fábio'

// nomes[0] = 'Andressa'; // alterar por índice
// nomes[3] = 'Marco' // índice que não existe cria um novo valor no array

// acessando valor por índice
// console.log(nomes)
// console.log(nomes[1])