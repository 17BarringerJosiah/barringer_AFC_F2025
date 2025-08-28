// script.js
// Name: Josiah Barringer
// Task6 - Student Array Operations

// create an array of students with properties: name and age
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// create function that updates user's input to lower case and find the name in the array
const updateStudentAge = (array) => {
    // prompt user to input name
    let studentName = prompt("Enter the student's name to update:");

    // find the name in the array and change the name to lower case
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // print error message if the studentName is not found
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // prompt user to input an age and store as newAge
    let newAge = Number(prompt("Enter the new age:"));

    // ensure that input is actually a number
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // change/update the student age as the newAge input
    student.age = newAge;

    // print out the updated array for students
    console.log("Updated students:", array);
};

// Call updateStudentAge and pass in students as an argument
updateStudentAge(students);