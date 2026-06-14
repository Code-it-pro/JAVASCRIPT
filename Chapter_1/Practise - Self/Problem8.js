function createBankAccount(initialBalance){
    let balance = initialBalance;
    return{
        deposit(amount){
            if(amount <= 0){
                console.log("Amount must be Positive")
            }
            else{
                balance += amount
                console.log(balance)
            }
        },

        withdraw(amount){
            if(amount <= 0){
                console.log("Amount must be Positive")
            }else if(amount > balance){
                console.log("Insufficient Balance")
            }
            else{
                balance -= amount
                console.log(balance)
            }
        },

        getBalance(){
            console.log("Balance:",balance)
        }
    }
}

const Gagan = createBankAccount(10000)
Gagan.deposit(50000)
Gagan.withdraw(1000)
Gagan.getBalance()

const Shona = createBankAccount(10000000)
Shona.deposit(78400)
Shona.withdraw(10000)
Shona.getBalance()