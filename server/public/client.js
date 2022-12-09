//global variables
let operation; //store userInput operator here

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
    let operation = '+';
    console.log(operation);
}

function handleDataSubmit(){
    console.log('submit data!');
}

//clears input fields upon button click
function handleClearInputs(){
    // console.log('clear!');
    $('#numberOne').val('');
    $('#numberTwo').val('');
}