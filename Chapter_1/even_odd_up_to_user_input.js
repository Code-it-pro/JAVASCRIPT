// ask the user for a number and print all even and odd numbers up to that number
let num = prompt("Enter a Number:");

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
