// script.js
// Name: Josiah
// Task3 - Favorite Color Selector

// initialize an array, colors that has three items
let colors = ["red", "blue", "green"];

// makes a function, addColor that takes in one parameter, colorArray, that will enable user to add a color to the colors array
function addColor(colorArray) {
    // prompt user for a color to add using the prompt method and then stores it as a const newColor
    const newColor = prompt("Enter a color to add:");

    // adds user's added color, newColor to the front of the array using .unshift() and the colorArray parameter
    colorArray.unshift(newColor);

    // prints out the updated array
    console.log("Updated colors:", colorArray);
}

// calls addColor function with the colors array as the parameter
addColor(colors);