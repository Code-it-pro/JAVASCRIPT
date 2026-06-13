for (let i = 1 ; i <= 50 ; i++){
    if ((i%4==0) && (i%6==0)){
        console.log("FizzBuzz" + i)
    }else if (i%4==0){
        console.log("Fizz" + i)
    }
    else if (i%6==0){
        console.log("Buzz" + i)
    }
    else {
        console.log(i)
    }
}