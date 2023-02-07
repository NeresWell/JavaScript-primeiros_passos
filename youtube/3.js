let age = 18;

if(age >18) {
    console.log('ele é maior de idade')
} else if(age == 18) {
    console.log('ele tem exatamente a idade')
} else {
    console.log('ele é menor de idade')
}

(age >= 18)?console.log('ele tem exatamente a idade'):console.log('ele é menor de idade');

let year = 2;

switch(year) {
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    default:
        console.log("mês inválido!")
        break;
}