
//logic to verify age, phone, and more info fields are proper inputs
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();

        //logic to log all form data to the console after the user hits the submit button
        const formData = new FormData(this);

        const formValues = {};
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }

        console.log("Form Data:", formValues);

        let isValid = true;

        // Age verification
        const ageInput = document.getElementById('age');
        const ageError = document.getElementById('ageError');
        const age = parseInt(ageInput.value);
        if (isNaN(age) || age < 21 || age > 99) {
            ageError.textContent = 'Please enter a valid age (21-99).';
            isValid = false;
            console.log("Please enter a valid age (21-99).")
        } else {
            ageError.textContent = '';
        }

        // Phone format verification
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Please enter phone number in format 123-456-7890.';
            isValid = false;
            console.log("Please enter phone in format 123-456-7890.")
        } else {
            phoneError.textContent = '';
        }

        // More Info verification
        const moreInfoInput = document.getElementById('moreInfo');
        const moreInfoError = document.getElementById('moreInfoError');

        if (moreInfoInput.value.length > 30) {
            moreInfoError.textContent = 'More Info cannot exceed 30 characters.';
            isValid = false;
            console.log("More Info cannot exceed 30 characters.")
        } else {
            moreInfoError.textContent = '';
        }

        if (!isValid) {

        }


    });
});

//Array for all menu items
const menuItems = [
    {
        name: "Bethel's Bean Bowl",
        description: "Big ol' bowl of beans",
        price: 19.00,
        image: "images/beanbowl.png"
    },
    {
        name: "Josiah's Jumping Jambalaya",
        description: "Big ol' bowl of jumping beans",
        price: 23.00,
        image: "images/Jambalaya.png"
    },
    {
        name: "Blasted Bean Curds",
        description: "Cheese curds, but with bean filling",
        price: 9.00,
        image: "images/curds.png"
    },
    {
        name: "The Great Bean Soup",
        description: "Liquified beans. Yum! Extra Fiber!",
        price: 9.00,
        image: "images/beansoup.png"
    },
    {
        name: "Bean Mash",
        description: "Liquified, but thicker",
        price: 18.00,
        image: "images/beanmash.png"
    }
];

//logic to enable user to click on next/prev buttons to cycle through menu items
let currentIndex = 0;

function displayMenuItem(index) {
    const item = menuItems[index];

    document.getElementById("itemName").textContent = item.name;
    document.getElementById("itemDescription").textContent = item.description;

    document.getElementById("itemPrice").textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(item.price);

    const img = document.getElementById("itemImage");
    img.src = item.image;
    img.alt = item.name;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    displayMenuItem(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    displayMenuItem(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("prevBtn").addEventListener("click", prevImage);
    document.getElementById("nextBtn").addEventListener("click", nextImage);

    displayMenuItem(currentIndex);
});
