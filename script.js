// ====================
// Part 1: Variables & Conditionals
// ====================

let age = 18;
let resultText;

if (age >= 18) {
    resultText = "You are eligible to vote.";
} else {
    resultText = "You are not eligible to vote.";
}

document.getElementById('conditionalResult').textContent = resultText;

// ====================
// Part 2: Functions
// ====================

// Function to calculate the square of a number
function square(num) {
    return num * num;
}

// Function to greet a user
function greet(name) {
    return `Hello, ${name}! Welcome to JS Fundamentals.`;
}

// Display results
document.getElementById('functionResult').textContent = 
    `${greet("Alice")} Your lucky number squared is ${square(5)}.`;

// ====================
// Part 3: Loops
// ====================

let loopList = document.getElementById('loopList');
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement('li');
    li.textContent = fruits[i];
    loopList.appendChild(li);
}

// Using forEach loop (another example)
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ====================
// Part 4: DOM Manipulation
// ====================

// 1. Change text content on button click
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicContent').textContent = "Text changed dynamically!";
});

// 2. Toggle a CSS class
document.getElementById('toggleClassBtn').addEventListener('click', function() {
    document.getElementById('dynamicContent').classList.toggle('highlight');
});

// 3. Create a new element dynamically
let newDiv = document.createElement('div');
newDiv.textContent = "This div was created dynamically with JavaScript!";
document.getElementById('dynamicContent').appendChild(newDiv);
