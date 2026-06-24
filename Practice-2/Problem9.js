function customMap(arr , fn){
    let Newarr = [];
    

        for (let i = 0 ; i < arr.length ; i++){
            Newarr.push(fn(arr[i]))
        }

        return Newarr
    
}

const square = (n) => {
    return n * n
}

let arr = [2 , 3 , 2 ,3]

console.log( customMap(arr , square))



function customReduce(arr2, callback, initialValue){
    for (let i = 0 ; i < arr2.length ; i++){

        initialValue = callback( initialValue , arr2[i] )
        
    }

    return initialValue
}

let arr2 = [2, 1]
let value = 0
const callback = (a , b) => {
    return n = a + b
}

console.log( customReduce(arr2 , callback, value))