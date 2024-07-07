// highorder function and call backs

// problem -01

function calculator(callback, a, b) {
    return callback(a , b)
}

function sum(a,b) {
    return a + b;
    
}
function multiply(a,b) {
    return a * b;
    
}
function sub(a,b) {
    return a - b;
    
}

console.log(calculator(sum, 20, 30));

// problem - 2

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => {
    console.log(num);
    console.log(` iteration ${num * 2}, `);
    return num * 2;
})
console.log(doubled);
console.log(numbers);


// problem - 03
const fruits = ['apple', 'orange', 'mango', 'kiwi']

const indexOf = fruits.map((str, index) => {
   return `index of ${str} is ${index}`;
})

console.log(indexOf);

// problem - 04
const temperaturesC = [0, 10, 20, 30, 40]

const temperaturesF = temperaturesC.map(celsiusToFahrenheit)

function celsiusToFahrenheit( n) {
    return (n * 9 / 5) + 32;
}
console.log(temperaturesF);
