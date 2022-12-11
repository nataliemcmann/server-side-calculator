//FUNCTIONS THAT PERFORM THE ARITHMETIC
//does addition
function addNumbers(lastCalcInArray){
    return Number(lastCalcInArray.valOne) + Number(lastCalcInArray.valTwo);
}

//does subtraction
function subtractNumbers(lastCalcInArray){
    return Number(lastCalcInArray.valOne) - Number(lastCalcInArray.valTwo);
}

//does multiplication
function multiplyNumbers(lastCalcInArray){
    return Number(lastCalcInArray.valOne) * Number(lastCalcInArray.valTwo);
}

//does division
function divideNumbers(lastCalcInArray){
    return Number(lastCalcInArray.valOne) / Number(lastCalcInArray.valTwo);
}


// function to determine what type of arithmetic to perform
function runOperation(arithmeticResults){
    let currentCalc = arithmeticResults[arithmeticResults.length-1];
    if (currentCalc.operator === '+'){
        currentCalc.result = addNumbers(currentCalc);
        // console.log(currentCalc);
    } else if (currentCalc.operator === '-') {
        currentCalc.result = subtractNumbers(currentCalc);
    } else if (currentCalc.operator === '*') {
        currentCalc.result = multiplyNumbers(currentCalc);
    } else {
        currentCalc.result = divideNumbers(currentCalc);
    }
}    


//export 
module.exports = runOperation;