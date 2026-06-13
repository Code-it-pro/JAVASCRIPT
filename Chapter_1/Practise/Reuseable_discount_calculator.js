// write a function to create Reuseable Calculator (HOF)

function CalculatorDiscount(value , discount){
    let discounted =  value * discount /100
    return value - discounted
}

let price = 11320;
let dis = 10
console.log("Discounted Price: " + CalculatorDiscount(price , dis))