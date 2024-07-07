// first class functions

// 1 Assigning function to a variable
const greet = function (name) {
    console.log(`Good Morning... ${name}!`);
}

greet('Alice')

// 2 . passing function as an argument
function calculator(sum, multiply, x, y ) {
    const res1 = sum(x, y);
    const res2 = multiply(x , y)
    return [res1 , res2];
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculator(sum, multiply, 10, 20));


// 3 returing function from function
function createGreet(greeting) {
    return function (name) {
      return console.log(`${greeting}.... ${name}`);
    }
}

const greetMorning = createGreet('Good Morning.. How rae you ');
greetMorning('Bob');
console.log(greetMorning);
