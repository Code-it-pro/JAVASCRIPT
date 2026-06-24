function compose(double , addFive) {
    return (x) => {
        let result = double(addFive(x))
        return result
    }
}

const double = x => x * 2;
const addFive = x => x + 5;
const doubleThenAddFive = compose(addFive, double);
console.log(doubleThenAddFive(10))