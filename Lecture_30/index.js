// // let num = 2;
// // let num2 = 4;

// // console.log(num + num2);
// // console.log(num - num2);
// // console.log(num * num2);
// // console.log(num / num2);
// // console.log(num % num2);
// // console.log(num ** num2);

// // case sensitive 
// let NAME = "DNYANESH";
// console.log(NAME);

// let Name = "Dnyanesh";
// console.log(Name);

// let name = "dnyanesh";
// console.log(name);


// // increment operator
// let num = 45;
// num++;
// console.log(num);

console.log("------------------------------------line break------------------------------------------");


let num = 2;
num += 5;
console.log(num);

num -= 5;
console.log(num);


num *= 5;
console.log(num);

num /= 5;
console.log(num);


num %= 5;
console.log(num);

num **= 5;
console.log(num);

console.log(" ");
console.log("Comparison Operators : ");

console.log("------------------------------------line break------------------------------------------");


// comparison operator 

// > = greater than

// < = less than 

// >= = greter than or equal

// <= = less than or equal

// == = loose equality

// === = strict equality

// != = not equals to 

console.log("------------------------------------line break------------------------------------------");


const num1 = 3;
const num2 = 6;

console.log(3 > 6);
console.log(3 < 6);
console.log(3 >= 6);
console.log(3 <= 6);
console.log(3 == 6);
console.log(3 != 6);

console.log("");


console.log("Loose equality ");
console.log("5" == 5);

console.log("Strict equality");
console.log("5" === 5);

console.log("");
console.log("Logical Oprator");

console.log(true && true);

console.log(true || false);

console.log(!false);

console.log(!0);

console.log(typeof NaN);
console.log(" ");


// Conditionals 
console.log("Let's Learn Conditionals :");
console.log(" ");


// const isLoggedIn = true
// if (isLoggedIn) {
//     console.log("You can like , comment , share");
// } else {
//     console.log("Please login first");

// }

console.log("------------------------------------line break------------------------------------------");


//Let's Learn Loops
console.log("Let's Learn Loops");
console.log(" ");

let day = "wed"
if (day === "mon") {
    console.log("1st day of the week");

} else if (day === "tue") {
    console.log("2nd day of the week");

} else if (day === "thu") {
    console.log("3rd day of the week");

} else if (day === "wed") {
    console.log("4th day of the week");

} else if (day === "fri") {
    console.log("5th day of the week");

} else if (day === "sat") {
    console.log("6th day of the week");

} else if (day === "sun") {
    console.log("7th day of the week");

} else {
    console.log("Wrong Day");
}


console.log("------------------------------------line break------------------------------------------");

console.log("Nested if else");

const isLoggedIn = true;
const isSubcribed = false;
if (isLoggedIn) {
    if(isSubcribed){
        console.log("you can access premium content ");
    } else {
        console.log("Dont have any valid plan");
    }
} else {
    console.log("please login");
}



// Switch case : 

console.log("------------------------------------line break------------------------------------------");

console.log("Switch case : ");

const days = "tue";

switch (days) {
    case "mon":
        console.log("1st day of week");
        break;
    case "tue":
        console.log("2nd day of week");
    case "wed":
        console.log("3rdnd day of week");
    case "thus":
        console.log("4th day of week");
    case "fri":
        console.log("5th day of week");
    case "sat":
        console.log("6th day of week");
    case "sun":
        console.log("7th day of week");
    default:
        console.log("wrong day");
        break;
}

