// script.js
// Name: Josiah Barringer
// Lab2 - Simple Interest Calculator

// calculateSimpleInterest that has/uses three parameters: principal, rate, time
function calculateSimpleInterest(principal, rate, time) {
    // returns simple interest calculation using all three parameters
    return (principal * rate * time) / 100;
}

// initialize const principle as prompt method that asks user to enter their principle
const principal = Number(prompt("Enter the principal amount:"));

// initialize const rate as prompt method that asks user to enter their rate
const rate = Number(prompt("Enter the rate of interest:"));

// initialize const time as prompt method that asks user to enter their time
const time = Number(prompt("Enter the time in years:"));

// call calculateSimpleInterest that takes in the three parameters as previously entered by the user
const interest = calculateSimpleInterest(principal, rate, time);

// print out message and previously calculated interest const
console.log("Your simple interest is:", interest);