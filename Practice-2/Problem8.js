function memoize(fn){
    const cache = {}

    return function (n){
    if(n in cache){
        console.log("Stored answers")
        return cache[n]
    }
        console.log("Calculating........")
        let result = fn(n)

        cache[n] = result
    
        return result
    }
}

const square = (n) => {
    return n * n;
}

const SavingFunc = memoize(square)

console.log(SavingFunc(5))
console.log(SavingFunc(15))
console.log(SavingFunc(5))
console.log(SavingFunc(15))