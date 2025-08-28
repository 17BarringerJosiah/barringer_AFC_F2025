// script.js
// Name: Josiah Barringer
// Task7 - Grade Classification

// initialize a fat arrow function and take in grade as a parameter
const classifyGrade = (grade) =>
    // Classify grades using ternary operators
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// ask the user to enter a grade and store as const input
const input = prompt("Enter a grade (0-100):");

// convert input from String to a number type
const grade = Number(input);

// display error if the user input is not a valid number
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // call classifyGrade and take in grade as an argument and then print out
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}