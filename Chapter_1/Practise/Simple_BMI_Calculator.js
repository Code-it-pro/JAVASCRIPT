function BMI(weight, height) {
    let BMI = weight / (height * height);
    return BMI;
}

console.log("BMI : " + Math.round(BMI(75, 5.60)))