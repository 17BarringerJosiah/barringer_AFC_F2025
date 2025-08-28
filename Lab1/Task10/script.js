// script.js
// Name: Josiah Barringer
// Task10 - How Long Until Graduation

// make fat arrow function to return today;s date
const getToday = () => {
    return new Date();
};

// call the above function and store it as const today
const today = getToday();

// create array with days of the week as items and store as days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// format the date in the desired structure and then use .gets to get year, month, and date
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// create function to add a suffix on the backend of the date
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// print weekday and the formatted date
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// calc the days until graduation
const graduationDate = new Date("2025-11-13");

const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// print the number of days until graduation
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");