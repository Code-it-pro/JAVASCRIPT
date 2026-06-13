function factorial(n){
    fact = 1;
    check = ""
    for(let i = 1 ; i<=n ; i++){
        fact *= i;
        // let loop = `${factorial} + ${i}`;
    }
    return fact;
}

number = 4

console.log("Factorial: ", factorial(number))