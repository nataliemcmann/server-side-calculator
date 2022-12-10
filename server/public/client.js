//global variables
let operation; //store userInput operator here
let calcsToPerform = []; //dummy array 

//jquery ready
$(document).ready(onReady);

//code to run when DOM is initially rendered
function onReady(){
    console.log('jQuery is ready');
    $('#addition').on('click', handleAdd);
    $('#subtraction').on('click', handleSubtract);
    $('#multiplication').on('click', handleMultiply);
    $('#division').on('click', handleDivide);
    $('#equal').on('click', handleDataSubmit);
    $('#clearInputs').on('click', handleClearInputs);
}

//upon button click, turns userInputs into an object
//posts object to server and renders the DOM
function handleDataSubmit(){
    console.log('submit data!');
    let valOne = $('#numberOne').val();
    let valTwo = $('#numberTwo').val();
    let calculation = {
        valOne,
        valTwo,
        operator: operation
    };
    console.log(calculation.valOne);
    console.log(calculation.valTwo);
    console.log(calculation.operator);
    postCalculation(calculation);
    renderResults();
}

//clears input fields upon button click
function handleClearInputs(){
    // console.log('clear!');
    $('#numberOne').val('');
    $('#numberTwo').val('');
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
        <h2>${res[res.length-1].result}</h2>
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

//BELOW ARE ALL OPERATOR FUNCTIONS
//assigns the variable operation to addition operator value as a string
function handleAdd(){
    console.log('addition!');
    operation = '+';
    console.log(operation);
}

//assigns operation to subtract operator
function handleSubtract(){
    console.log('subtract!');
    operation = '-';
    console.log(operation);
}

//assigns operation to multiply operator
function handleMultiply(){
    console.log('multiply!');
    operation = '*';
    console.log(operation);
}

//assigns operation to division operator
function handleDivide(){
    console.log('divide!');
    operation = '/';
    console.log(operation);
}
