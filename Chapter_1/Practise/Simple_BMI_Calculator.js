function BMI(weight, height) {
    let BMI = weight / (height * height);
    return BMI;
}

console.log("BMI : " + BMI(75, 1.6).toFixed(2))