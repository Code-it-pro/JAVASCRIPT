function findSecondLargest(arr){
    if (arr.length < 0) return console.log("arr is empty");
    if (arr.length === 1) return console.log("arr needs atleast 2 elements");
    let max = -Infinity;
    let secondMax = -Infinity;
    let Newmax = -Infinity
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > Newmax){
            Newmax = arr[i]
            if( Newmax === max ){
                Newmax = 0;
            }else {
                secondMax = arr[i]
            }
        }
    }
    return secondMax
}

let arr = [10, 5, 20, 8, 20, 12]
let secondlargestnum = findSecondLargest(arr)
console.log(secondlargestnum)