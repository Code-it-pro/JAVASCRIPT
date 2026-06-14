let calculator = function (a, b, opertation){

    switch(opertation){
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return "Error something went wrong"
            break;
    }
}

let a = 10
let b = 2
let operator = '*'

console.log(calculator(a, b, operator))