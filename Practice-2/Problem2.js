function findSecondLargest(arr){
    if (arr.length < 0) return console.log("arr is empty");
    if (arr.length == 1) return arr[0]
    let max = 0;
    let index;
    let sub = [arr[0]]
    for(let i = 0; i< arr.length; i++){
        for( let j = 0; j< sub.length; j++){
            if( sub[j] === arr[i]){
                break;
            }
            sub.push(arr[i])
        }
    }
    console.log(sub)

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
            index = i
        }
    }
    max = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            if( i === index) continue;
            max = arr[i];
            secondMax = i;
        }
    }
    return arr[secondMax]
}

let arr = [10, 5, 20, 8, 20, 12]
let secondlargestnum = findSecondLargest(arr)
console.log(secondlargestnum)

console.log("Here")