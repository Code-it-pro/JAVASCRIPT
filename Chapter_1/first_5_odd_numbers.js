// print first 5 odd numbers and break
let counter = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0) {
        counter++;
        console.log(i);
        if (counter === 5) {
            break;
        }
    }
}
