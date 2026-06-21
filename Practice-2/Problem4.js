const CalculatorModule = (function(){
    let operationCount = 0
    return{
        add(a , b){
            operationCount++;
            return a + b;
        },
        substract(a , b){
            operationCount++;
            return a - b;
        },
        getOperationCount(){
            return operationCount
        }
    }
})();

console.log(CalculatorModule.add(10 , 5))