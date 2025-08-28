// script.js
// Name: Josiah Barringer
// Task8 - Shopping List Operations

// create an array called shoppingList with three items
let shoppingList = ["eggs", "butter", "flour"];

// make a fat arrow function that has two parameters: list and newItem
const modifyItem = (list, newItem) => {
    // add newItem to the end of the array using .push
    list.push(newItem);

    // print the updated list
    console.log("Updated shopping list:", list);
};

// ask the user to enter a new item and store as const userItem
const userItem = prompt("Enter a new item to add to the shopping list:");

// check that the user actually entered something
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // call the modifyItem function with shoppingList, userItem as arguments
    modifyItem(shoppingList, userItem);
}