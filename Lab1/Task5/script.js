// script.js
// Name: Josiah Barringer
// Task5 - Temperature Classifier

// create function that takes in parameter, Celsius, and calculates Fahrenheit based on conversion formula
function classifyTemperature(celsius) {
    // Step 2: Convert Celsius into Fahrenheit
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // if else that determines how the temp will be classified
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// prompt user to input a temp in Celsius and store as const input
const input = prompt("Enter temperature in Celsius:");

// convert user input from a String to a number type
const celsius = Number(input);

// ensure that user entry was a valid number and return error if it was not
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // call classifyTemperature that takes user input, Celsius, as an argument and stores as const classification
    const classification = classifyTemperature(celsius);

    // print out a message allow with the determined temp classification
    console.log("The temperature is:", classification);
}