// Making a Closer Counter

function Counter(value){
    let counter = 0
    return function (){
        counter++;
        return counter
    }
}

let count = Counter()
let till = 100

for (i = 1 ; i <= till; i++){
    console.log("Counter : "+count())
}