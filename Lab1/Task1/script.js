// script.js
// Name: Josiah Barringer
// Lab1 - Dynamic Age Calculator

// initialize function named calculateAge that has one parameter: year
function calculateAge(year) {
    //  uses currentYear object and Date to get current year
    const currentYear = new Date().getFullYear();

    // Then subtract parameter year to get user's age
    return currentYear - year;
}

// initialize const input as prompt method that asks user to enter their birthyear
const input = prompt("Enter your birth year (e.g., 2004):");

// initialize const birthYear that converts input from a String to a number type
const birthYear = Number(input);

// if statement to make sure user input is not null or invalid
if (input === null || Number.isNaN(birthYear)) {
    //print out an error message if invalid input occurs
    console.log("No valid year provided.");
} else {
    // if input is valid, calculate the age by taking in birthyear into the calculateAge function
    const age = calculateAge(birthYear);

    // print out message and previously calculated age
    console.log("Your age is:", age);
}