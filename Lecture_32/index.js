// custom implementation 
function convertToPositve(num) {
    return num * -1;
}

let positiveNum = convertToPositve(-10)
console.log(positiveNum);

console.log("---------------------------------------------------------");


// built in implementation (abs stands for absolute)
// using abs funstion
let positiveNum2 =Math.abs(-30)
console.log(positiveNum2);
console.log("---------------------------------------------------------");



// predefined function of javaScript  
console.log(Math.round(1.6));
console.log(Math.round(4.3));
console.log(Math.round(5.1));
console.log(Math.round(2.68934784));
console.log(Math.round(8.9));

console.log(Math.ceil( 8.1)); // its increase the value by one no matter which value after the decimal point
console.log(Math.floor(7.9)); // its decrease the value by one no matter which value after the decimal point

console.log("---------------------------------------------------------");

// let's try to build a dyce 

let max = 6;
let min = 1;

let result = Math.floor(Math.random()*(max-min+1))+min

console.log(result);
console.log("---------------------------------------------------------");

// Number object/function
console.log("Learn Number Function : ");
console.log("Is number.isFinite(777) ?");
console.log("The Ans = "+Number.isFinite(777));
console.log();  
console.log("---------------------------------------------------------");

console.log("This is char value but using parsInt Function we can convert it into interger value :");
console.log(Number.parseInt("56"));
console.log("---------------------------------------------------------");

console.log();
console.log("Let's learn about to fix funtion ? it will removes the value after decimal");
let num = 404.432323
console.log(num.toFixed(8)); // we can give the refer value for how much decimal value we need.
console.log("---------------------------------------------------------");

console.log();
console.log("There's also a similar function like toFixed which is toPricision");
console.log(num.toPrecision(5));

console.log();
console.log("---------------------------------------------------------");
console.log("Let's Learn String Function :");
console.log("---------------------------------------------------------");


console.log();
let str = "Hello Boss";
let email = "abc@gmail.com";
console.log("this is sample text from this text we can search any thing with the help of .includes function = "+str+" "+email);
console.log(email.includes("gmail"));


console.log();
console.log("---------------------------------------------------------");
console.log("Let's learn about endsWith Function");
let filename = "image.pdf";
console.log("It increase the security of function or do checks for us "+filename);
console.log(filename.endsWith(".pdf") || filename.endsWith(".jpg"));
console.log();

console.log("---------------------------------------------------------");
console.log("There are plenty of functions you can go out and check it out : ");
console.log("---------------------------------------------------------");


console.log("---------------------------------------------------------");
console.log("Now let's learn Date and Time Stamps :");
console.log("---------------------------------------------------------");

let date = new Date();
console.log(date);

console.log(Date.now()); // to get current unix timestamp

console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString()); 
console.log(date.toDateString());