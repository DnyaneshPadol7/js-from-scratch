```javascript
// =========================================================
// Custom Implementation
// =========================================================

function convertToPositive(num) {
    return num * -1;
}

let positiveNum = convertToPositive(-10);
console.log(positiveNum);

console.log("---------------------------------------------------------");


// =========================================================
// Built-in Implementation
// Math.abs() returns the absolute (positive) value
// =========================================================

let positiveNum2 = Math.abs(-30);
console.log(positiveNum2);

console.log("---------------------------------------------------------");


// =========================================================
// Predefined Math Functions in JavaScript
// =========================================================

// Math.round() -> rounds the number to the nearest integer
console.log(Math.round(1.6));       // 2
console.log(Math.round(4.3));       // 4
console.log(Math.round(5.1));       // 5
console.log(Math.round(2.68934784)); // 3
console.log(Math.round(8.9));       // 9

// Math.ceil() -> always rounds UP
console.log(Math.ceil(8.1));        // 9

// Math.floor() -> always rounds DOWN
console.log(Math.floor(7.9));       // 7

console.log("---------------------------------------------------------");


// =========================================================
// Let's Try to Build a Dice
// =========================================================

let max = 6;
let min = 1;

let result = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Dice Result = " + result);

console.log("---------------------------------------------------------");


// =========================================================
// Number Object / Functions
// =========================================================

console.log("Learn Number Functions:");

console.log("Is Number.isFinite(777)?");
console.log("The Answer = " + Number.isFinite(777));

console.log("---------------------------------------------------------");


// =========================================================
// Number.parseInt()
// Converts a string into an integer
// =========================================================

console.log("Using parseInt(), we can convert a string into an integer:");

console.log(Number.parseInt("56"));

console.log("---------------------------------------------------------");


// =========================================================
// toFixed()
// Controls how many digits we want after the decimal point
// =========================================================

console.log("Let's learn about toFixed():");

let num = 404.432323;

console.log(num.toFixed(8));

console.log("---------------------------------------------------------");


// =========================================================
// toPrecision()
// Controls the total number of significant digits
// =========================================================

console.log("Let's learn about toPrecision():");

console.log(num.toPrecision(5));

console.log("---------------------------------------------------------");


// =========================================================
// String Functions
// =========================================================

console.log("Let's Learn String Functions:");

console.log("---------------------------------------------------------");

let str = "Hello Boss";
let email = "abc@gmail.com";

console.log(
    "This is sample text. We can search something using the .includes() function:"
);

console.log(str + " " + email);

console.log(email.includes("gmail"));

console.log("---------------------------------------------------------");


// =========================================================
// endsWith()
// Checks whether a string ends with a particular value
// =========================================================

console.log("Let's learn about endsWith():");

let filename = "image.pdf";

console.log("File name = " + filename);

console.log(
    "Checking whether the file is PDF or JPG:"
);

console.log(filename.endsWith(".pdf") || filename.endsWith(".jpg"));

console.log("---------------------------------------------------------");


// =========================================================
// There are plenty of JavaScript functions.
// Go ahead and explore them!
// =========================================================

console.log("There are plenty of JavaScript functions.");
console.log("Go ahead and check them out!");

console.log("---------------------------------------------------------");


// =========================================================
// Date and Time
// =========================================================

console.log("Let's Learn Date and Time Stamps:");

console.log("---------------------------------------------------------");

let date = new Date();

// Current date and time
console.log(date);

// Current Unix Timestamp
console.log(Date.now());

// Day of the week
console.log(date.getDay());

// Month
console.log(date.getMonth());

// Full year
console.log(date.getFullYear());

// Date in local format
console.log(date.toLocaleDateString());

// Time in local format
console.log(date.toLocaleTimeString());

// Date in readable format
console.log(date.toDateString());

console.log("---------------------------------------------------------");
```
