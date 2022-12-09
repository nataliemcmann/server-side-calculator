//global variables
let operation; //store userInput operator here
let calcsToPerform = []; //dummy array 

//jquery ready
$(document).ready(onReady);

//code to run when DOM is initially rendered
function onReady(){
    console.log('jQuery is ready');
    $('#addition').on('click', handleAddition);
    $('#equal').on('click', handleDataSubmit);
    $('#clearInputs').on('click', handleClearInputs);
}

//assigns the variable operation to addition operator value as a string
function handleAddition(){
    console.log('addition!');
    operation = '+';
    console.log(operation);
}

function handleDataSubmit(){
    console.log('submit data!');
    let valOne = $('#numberOne').val();
    let valTwo = $('#numberTwo').val();
    let calculation = {
        valOne,
        valTwo,
        operator: operation
    };
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

function renderResults(){
    $.ajax({
        url: '/arithmeticResults',
        method: 'GET'
    }).then((res) => {
        console.log(res);
    })
}  