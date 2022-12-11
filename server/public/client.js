//import necessary functions
import handleStringPrint from './client-modules/numberFunctions.js';

//jquery ready
$(document).ready(onReady);

//code to run when DOM is initially rendered
function onReady(){
    console.log('jQuery is ready');
    //click handlers for numbers
    $('#calculatorDisplay').on('click', '.string', handleStringPrint);
    //data submit click handler
    $('#equal').on('click', handleDataSubmit);

}

//upon button click, turns userInputs into an object
//posts object to server and renders the DOM
function handleDataSubmit(){
    // console.log('is button working');
    validateInput();
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

//checks if input includes and operator and a second number
function validateInput(){
    //grab input field value
    let inputToSplit = $('#inputField').val();
    let inputArray = inputToSplit.split(' ');
    inputArray = inputArray.filter(Boolean);
    //loop to check if operator is included in input
    let operatorTrue = false;
    let indexOfOperator = 0;
    if (inputArray.includes('+') ||
        inputArray.includes('-') ||
        inputArray.includes('*') ||
        inputArray.includes('/') ) {
        operatorTrue = true;
        for (let i = 0; i < inputArray.length; i++){
            if (inputArray[i] === '+' ||
                inputArray[i] === '-' ||
                inputArray[i] === '*' ||
                inputArray[i] === '/') {
                indexOfOperator = i;
            }
        } 
    } else {
        console.log('missing operator');
        $('#calculatorResult').empty();
        //render error message to DOM
        $('#calculatorResult').append(`
        <h2> Missing Operator </h2>
        `);
    }
    //conditional to check if input is complete
    if (indexOfOperator === inputArray.length - 1) {
        console.log('all nums not included');
        $('#calculatorResult').empty();
        //render error message to DOM
        $('#calculatorResult').append(`
        <h2> Missing Operator or Second Number </h2>
        `);
    } else {
        console.log('good to go')
        let valOne = inputArray[0];
        let valTwo = inputArray[2];
        let calculation = {
            valOne,
            valTwo,
            operator: inputArray[1]
        };
        postCalculation(calculation);
        renderResults();
    }
}  
