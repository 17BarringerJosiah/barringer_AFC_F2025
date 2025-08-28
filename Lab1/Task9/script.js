// script.js
// Name: Josiah Barringer
// Task9 - Weekday Detector

// create fat arrow function call getWeekday that doesn't take any parameters
const getWeekday = () => {
    // use the built-in date object for today's date
    const today = new Date();

    // set the days of the week as a number using the .getDay method and store as const dayNumber
    const dayNumber = today.getDay();

    // make an array called days with all of the days of the week in it
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // return the day using the days array and pulling an index based on the dayNumber method
    return days[dayNumber];
};

// call the getWeekday method and print it out with a message
console.log("Today is:", getWeekday());