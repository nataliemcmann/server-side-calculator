//global variables
let operation = ''; //store userInput operator here
let numOne = ''; //store userInput for id="numberOne"
let numTwo = ''; //store userInput for id="numberOne"

// //make string to put in inputfield
// function makeInputString() {
//     return numOne + ' ' + operation + ' ' + numTwo
// }

//import necessary function
import handleStringPrint from './client-modules/numberFunctions.js';

//jquery ready
$(document).ready(onReady);

//code to run when DOM is initially rendered
function onReady(){
    console.log('jQuery is ready');
    //click handlers for numbers
    $('#calculatorDisplay').on('click', 'button', handleStringPrint);
    // $('#dot').on('click', printDecimal);
    // $('#zero').on('click', printZero);
    // $('#one').on('click', printOne);
    // $('#two').on('click', printTwo);
    // $('#three').on('click', printThree);
    // $('#four').on('click', printFour);
    // $('#five').on('click', printFive);
    // $('#six').on('click', printSix);
    // $('#seven').on('click', printSeven);
    // $('#eight').on('click', printEight);
    // $('#nine').on('click', printNine);
    //click handlers for operations
    // $('#addition').on('click', handleAdd);
    // $('#subtraction').on('click', handleSubtract);
    // $('#multiplication').on('click', handleMultiply);
    // $('#division').on('click', handleDivide);
    //data submit click handler
    $('#equal').on('click', handleDataSubmit);
    //clear input handler
    $('#clearInputs').on('click', handleClearInputs);
}

//upon button click, turns userInputs into an object
//posts object to server and renders the DOM
function handleDataSubmit(){
    // console.log('submit data!');
    let inputToSplit = $('#inputField').val();
    let inputArray = inputToSplit.split(' ')
    // console.log(inputArray);
    let valOne = inputArray[0];
    let valTwo = inputArray[2];
    let calculation = {
        valOne,
        valTwo,
        operator: inputArray[1]
    };
    // console.log(calculation);
    postCalculation(calculation);
    renderResults();
}

//clears input fields upon button click
function handleClearInputs(){
    // console.log('clear!');
    $('#inputField').val('');
    numOne = '';
    numTwo = '';
    operation = '';
}

//post function
function postCalculation(calculation) {
    $.ajax({
    url: '/newArithmetic',
    method: 'post', // send the data to the server
    data: calculation
    }).then((res) => { //puts the server message in the browers console
    console.log(res);
    })
}

//gets the new calc results and calc history
function renderResults(){
    $.ajax({
        url: '/arithmeticResults',
        method: 'GET'
    }).then((res) => {
        //empty result section
        $('#calculatorResult').empty();
        //render current calc result to DOM
        $('#calculatorResult').append(`
        <h2> Answer: ${res[res.length-1].result}</h2>
        `);
        //empty history section
        $('#calculatorHistory').empty();
        //render history to the DOM
        for (let prop of res) {
        $('#calculatorHistory').append(`
        <li>
        ${prop.valOne} ${prop.operator} ${prop.valTwo} = ${prop.result}
        </li>
        `)
        }
        // console.log(res);
    })
}  
