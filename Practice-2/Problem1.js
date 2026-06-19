// Fibonacci Sequence Generatot

function generateFibonacci(n){
    let fib = 0
    a = []
    if( n <= 0){
        return []
    }
    if(n == 1){
        return [1]
    }
    for (let j = 0 ; j >=n;j++){
        for (let i = j ;i < j-2 ; i--){
            fib = fib + i
        }
        a[i] = fib
    }
    return a
}

num = 5
fib = []
for(let i = 0 ;i <= num-1 ; i++){
    fib[i] = generateFibonacci(num)
}

console.log()