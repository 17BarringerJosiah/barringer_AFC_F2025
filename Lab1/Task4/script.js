// script.js
// Name: Josiah Barringer
// Task4 - Event Countdown with Date Object

// initialize function with one parameter to calc days until an event occurs
function calculateDaysUntil(eventDate) {
    // get today's date by creating data object
    const today = new Date();

    // use eventDate parameter and convert it into a data object
    const event = new Date(eventDate);

    // calc diff (in milliseconds) by initializing const diff (event - today)
    const diff = event - today;

    // convert milliseconds into days and store as const days
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // return total days until event occurs from today
    return days;
}

// prompt user to enter date in desired format and stored as let eventDate
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// validate that entered date is indeed in the desired format by first initializing const dateFormat and then entering while loop to validate
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// call function calculateDaysUntil and pass in validated eventDate as argument and initialize as const daysRemaining
const daysRemaining = calculateDaysUntil(eventDate);

// print out message and daysRemaining
console.log("Days until the event:", daysRemaining);