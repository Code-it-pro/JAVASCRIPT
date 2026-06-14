// make pure

// let cartTotal = 100;
// function addTax() {
//     cartTotal = cartTotal + (cartTotal * 0.18);
// }


let cartTotal = 100;
function addTax() {
    return cartTotal + (cartTotal * 0.18);
}

const newTotal = addTax(cartTotal)
console.log(newTotal)