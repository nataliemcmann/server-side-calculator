//global variables
let operation = ''; //store userInput operator here
let numOne = ''; //store userInput for id="numberOne"
let numTwo = ''; //store userInput for id="numberOne"

//make string to put in inputfield
function makeInputString() {
    return numOne + ' ' + operation + ' ' + numTwo
}

//function to clear string once made
function resetString(){
    numOne = '';
    numTwo = '';
    operation = '';
}

//BELOW ARE ALL PRINT NUMBER FUNCTIONS
//decimal
function printDecimal(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '.';
        } else {
            numOne += '.';
        }
}

//zero
function printZero(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '0';
        } else {
            numOne += '0';
        }
}

//one
function printOne(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '1';
        } else {
            numOne += '1';
        }
}

//two
function printTwo(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '2';
        } else {
            numOne += '2';
        }
}

//three
function printThree(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '3';
        } else {
            numOne += '3';
        }
}

//four
function printFour(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '4';
        } else {
            numOne += '4';
        }
}

//five
function printFive(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '5';
        } else {
            numOne += '5';
        }
}

//six
function printSix(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '6';
        } else {
            numOne += '6';
        }
}

//seven
function printSeven(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '7';
        } else {
            numOne += '7';
        }
}

//seven
function printEight(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '8';
        } else {
            numOne += '8';
        }
}

//nine
function printNine(){
    let text = $('#inputField').val();
    if (text.includes('+') ||
        text.includes('-') ||
        text.includes('*') ||
        text.includes('/')){
            numTwo += '9';
        } else {
            numOne += '9';
        }
}

//BELOW ARE ALL OPERATOR FUNCTIONS
//assigns the variable operation to addition operator value as a string
function handleAdd(){
    // console.log('addition!');
    operation = '+';
    $('#chosenOperator').val(operation);
    // console.log(operation);
}

//assigns operation to subtract operator
function handleSubtract(){
    // console.log('subtract!');
    operation = '-';
    $('#chosenOperator').val(operation);
    // console.log(operation);
}

//assigns operation to multiply operator
function handleMultiply(){
    // console.log('multiply!');
    operation = '*';
    $('#chosenOperator').val(operation);
    // console.log(operation);
}

//assigns operation to division operator
function handleDivide(){
    // console.log('divide!');
    operation = '/';
    $('#chosenOperator').val(operation);
    // console.log(operation);
}

//clears input fields upon button click
function handleClearInputs(){
    // console.log('clear!');
    resetString();
    $('#inputField').val('');
}

//function to concatenate string
export default function handleStringPrint(){
    let buttonPressed = $(this).attr('id');
    // console.log(buttonPressed);
    if (buttonPressed === 'one'){
        printOne();
    } else if (buttonPressed === 'two'){
        printTwo();
    } else if (buttonPressed === 'three'){
        printThree();
    } else if (buttonPressed === 'four'){
        printFour();
    } else if (buttonPressed === 'five'){
        printFive();
    } else if (buttonPressed === 'six'){
        printSix();
    } else if (buttonPressed === 'seven'){
        printSeven();
    } else if (buttonPressed === 'eight'){
        printEight();
    } else if (buttonPressed === 'nine'){
        printNine();
    } else if (buttonPressed === 'zero'){
        printZero();
    } else if (buttonPressed === 'dot'){
        printDecimal();
    } else if (buttonPressed === 'addition'){
        handleAdd();
    } else if (buttonPressed === 'subtraction'){
        handleSubtract();
    } else if (buttonPressed === 'multiplication'){
        handleMultiply();
    } else if (buttonPressed === 'division'){
        handleDivide();
    }
    let inputString = makeInputString();
    $('#inputField').val(inputString);
    if (buttonPressed === 'clearInputs'){
        handleClearInputs();
    }
}