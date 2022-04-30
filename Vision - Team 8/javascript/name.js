// prompt command for asking user to input the username
let roll = prompt('Enter university Roll number: ');

// getting the html element as h 
let h = document.getElementById('helloname');

// if user doesn't enters the roll number then the variable will set as "anonymus"
if (!roll) {
    roll = "anonymus"
}

// updating the name in html
h.innerText = '(' + roll + ')';

// printing custom message with roll number in console
console.log(`The roll number of the user is ${roll}`)