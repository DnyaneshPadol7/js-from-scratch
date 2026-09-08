let dani = 89 + 98 + 85 + 90;
let soni = 78 + 56 + 45 + 75;
let moni = 68 + 56 + 35 + 85;
let sona = 63 + 67 + 75 + 65;

// function totalMarks(studentName, mathmarks, sciMarks, javaMarks, phpmarks) {
//     console.log(`${studentName}  Total Marks : `, mathmarks + sciMarks + javaMarks + phpmarks);
// }

// totalMarks("dani", 89, 98, 85, 90)
// totalMarks("soni", 78, 56, 45, 75)
// totalMarks("moni", 68, 56, 35, 85)
// totalMarks("sona", 63, 67, 75, 65)

console.log("---------------------------------------------");

// Greeting Message using function :
function greetingMsg(userName, greeting) {
    console.log(`${greeting},${userName}`);
}

greetingMsg("Dnyanesh", "Hello Boss")

console.log("---------------------------------------------");
// creating a calculator using function :
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
            break;

        case "-":
            console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
            break;

        case "*":
            console.log(`${num1} ${operator} ${num2} =`, num1*num2);
            break;

        case "/":
            console.log(`${num1} ${operator} ${num2} =`, num1/num2);
            break;
        default:
            break;
    }
}

calculator(4, 8 , "+")

console.log("---------------------------------------------");
// default parameters
function greetMsg(userNAME = "Guest", greet = "Hey Buddy") {
    console.log(`${greet},${userNAME}`);
}

greetMsg()
greetMsg("The VIKI", "How are you")
greetMsg("Namaste")
greetMsg("Karn")

console.log("---------------------------------------------");
//  lets learn how return work and one function can call another function 
function totalMarks( mathmarks, sciMarks, javaMarks, phpmarks) {
    return mathmarks + sciMarks + javaMarks + phpmarks;
}

function calPercentage(studentName,mathmarks,sciMarks,javaMarks,phpmarks) {
    let total = totalMarks(mathmarks,sciMarks,javaMarks,phpmarks);
    let percentage = (total/400)*100
    console.log(`${studentName} percentage : `, percentage);
}

calPercentage("Dnyanesh",90,89,85,93)

console.log("---------------------------------------------");
// difference between function declaration and function expression 

// declaration
console.log("We can call the declaration function before declaration");
declaration(10,20)

function declaration(param1, param2) {
    console.log(`${"The ouput is = "}`, param1+param2);
}



console.log("We cannot call the function expression before declaration :");
const greet = function () {
    console.log("Hello buddy its Function Expression :");
}

greet();

console.log("---------------------------------------------");
console.log("----------------Arrow Function--------------");
console.log("The arrow function is kinda similar as function expression :");

// Arrow function 
// there is 3 syntax of arrow function declaration :

//syntax 1:
// let added = num5 => num1 +4;

//syntax 2:
// let added = (num5 , num3) => num1 +num3;

// //syntax 3:
let added = (num5, num3) => {
    //something more code
    //something more code
    //something more code

    return num5 + num3;
}

console.log(added(5,2));