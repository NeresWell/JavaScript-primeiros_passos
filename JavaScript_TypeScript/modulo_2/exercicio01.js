function max(x, y) {
    if (x > y) {
        return x;
    }
    return y;

    // return x > y ? x : y;
}

const max2 = (x, y) => x > y ? x : y;

function ePaisagem(largura, altura) {
    return largura > altura; 
}

function FizzBuzz(x) {
    if (typeof(x) !== 'number') return x;
    if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz";
    if (x % 3 === 0) return "Fizz";
    if (x % 5 === 0) return "Buzz";
    return x;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}

console.log("Maior:", max(4,6));
console.log("é paisagem?",ePaisagem(1920,1080))