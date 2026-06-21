function createCounter(step){
    let counter = 0
    return{
        next(){
            counter = counter + step;
            return counter;
        },
        reset(){
            counter = 0
        }
    }
}

const Count = createCounter(4);

console.log(Count.next())
console.log(Count.next())
console.log(Count.next())
Count.reset()
console.log(Count.next())
console.log(Count.next())
console.log(Count.next())
console.log(Count.next())
console.log(Count.next())
