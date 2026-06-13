// Types of functions

// Normal functions
// Normal 
function Normal() {
    console.log("Im a normal Function")
}

Normal();

// Arrow funcitons

let ArrowFunc = () => {
    console.log("Im an arrow function")
}

// Expression Functions

let ExpressionFunction = function () {
    console.log("Im an expression function")
}

ExpressionFunction();

// Immediately Invoked Function Expression (IIFE)

(function () {
    console.log("Im am an Immediately Invoked Function Expression (IIFE)")
})()

// Pure functions and impure function

// Pure function

function pure(a, b) {
    return a + b;
}

pure(2, 3)

// Impure function

let impure = 0

function impurefunction() {
    impure += 1;
}

impurefunction();
console.log(impure)


// Closure function

function Closure() {
    let closure = 1;
    function inner() {
        return closure + 1
    }
    return inner();
}
console.log(Closure());

// Higher order Functions

let x = 2
let somefunction = (z) => {
    return console.log("Im an function argument", z)
}

function HigherOrder(func, a) {
    return func()
}

HigherOrder(somefunction, 3);