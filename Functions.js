// call back function

//higher order function
function greet(name, callback) {
    console.log(`hello ${name}`);
    callback() // invoking call back function
    
}

//callback function
function sayGoodbye() {
    console.log('Goodbye..!');
}

greet('Alice', sayGoodbye)