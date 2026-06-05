// let a = 1

// for (i = a ; i<11; i++){
//     console.log(i)  
// } 

// let a = 10

// while (a>0){
//     console.log(a)
//     a--
// }

// print even numbers from 0 to 20
// for (let i = 0; i < 21; i++){
//     if(i%2==0){
//         console.log(i,"is even")
//     }
// }

//print odd numbers from 0 to 15
// let a = 1
// while (a<16){
//     if(a%2!=0){
//         console.log(a,"is odd")
//     }    
//     a++
// }

//print the multiplication table of 5
// for (let i = 1; i<11; i++){
//     console.log("5 X "+i+" =",5*i)
// }

//print the sum of numbers from 1 to 100

// let sum = 0;
// for (let i=1; i<101;i++){
//     sum = sum + i;
    // console.log("Counting:", i);
// }
// console.log("The sum of numbers from 1 to 100 is",sum)

//print all the numbers divisible by 3 from 1 to 50
// let i=1;
// while(i<51){
//     if(i%3==0){
//         console.log(`${i} is divisible by 3`)
//     }
//     i++;
// }

//ask the user for a number and print all even and odd numbers up to that number

// let num = prompt("Enter a Number:")

// for (let i=1; i<=num; i++){
//     if(i%2==0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

//count how numbers are divisible by 3 and 5 from 1 to 100

// for(let i = 1; i<101; i++){
//     if(i%3===0 && i%5===0){
//         console.log(`${i} is divisible by both 3 and 5`)
//     }
// }

//print all and Stop at first multiple of 7
// let i = 1;
// while(i!=0){
//     console.log(i)
//     if(i%7===0){
//         break;
//     }
//     i++;
// }

// for(let i =1 ; i< 21 ; i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i)
// }

let counter = 0;
for(let i = 1; i< 101; i++){
    if(i%2!==0){
        counter++;
        console.log(i)
        if(counter===5){
            break;
        }
    }
}