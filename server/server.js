//server boiler plate
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//start the server listening
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})

//array to store math operations and solutions
let arithmeticResults = [];


//POST route
app.post('/newArithmetic', (req, res) => {
    console.log('post/newArithmetic');
    arithmeticResults.push(req.body);
    runOperation(arithmeticResults);
    console.log(arithmeticResults);
    res.sendStatus(201); //tells client the object was pushed to the array
})

//GET route
app.get('/arithmeticResults', (req, res) => {
    console.log('get/arithmeticResults');
    res.send(arithmeticResults); //send array
})

// function to determine what type of arithmetic to perform
function runOperation(arithmeticResults){
    let currentCalc = arithmeticResults[arithmeticResults.length-1];
    if (currentCalc.operator === '+'){
        currentCalc.result = addNumbers(currentCalc);
        console.log(currentCalc);
    }
}

// function to do addition
function addNumbers(lastCalcInArray){
    return Number(lastCalcInArray.valOne) + Number(lastCalcInArray.valTwo);
}