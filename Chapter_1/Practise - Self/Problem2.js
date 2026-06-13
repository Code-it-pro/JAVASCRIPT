function isPrime(num){
    check = 0;
    for(let i = 1 ; i<=num; i++){
        if(num%i==0){
            check++;
        }
    }
    if(check == 2){
        return true;
    }else{
        return false;
    }
}

for (let i =1 ; i<=30 ; i++){
    if(isPrime(i)){
        console.log(i + " is a Prime number")
    }
}