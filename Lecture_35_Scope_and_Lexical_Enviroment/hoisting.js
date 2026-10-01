// //console.log(a,b,c);
// // let a = 10; // gives error cannot access before initilizing the variable
// // var b = 10; // gives undefined 
// // const c = 10; // gives error cannot access before initilizing the variable 


// console.log("---------------------------------------------------------------");
// console.log("Lets see function hoisting :");

// addNum() // we can call the function before initlizing : 
// function addNum (){
//     let a = 10;
//     let b = 30;
//     console.log(a+b);
// }

// console.log("---------------------------------------------------------------");

// console.log(addTwoNum); // it will return us undefined 
// addTwoNum(); // we coundent call the function before initilization.
// var addTwoNum = function(){  // if we stored the function into the variable and call the function before initilization then it'll give us error 
//     let c = 40;
//     let d = 30;
//     console.log(c+d);
// }

console.log("---------------------------------------------------------------");
// var a = 5;
// let b = 7;
// function addNum(){
//     let a = 6;
//     console.log(a);
// }

// addNum(); 


console.log("---------------------------------------------------------------");

// let g =7;
// function random(){
//     console.log(g);
//     var g = 10;
// }
// random();

console.log("---------------------------------------------------------------");

let city = "delhi";

function printCity() {
    console.log(city);
}

function random(fn) {
    city = "Varanasi";
    fn()
}

random(printCity);


console.log("---------------------------------------------------------------");


function outer() {

    userName = "dnyanesh";

    function inner() {
        console.log(userName);
    }

    return inner();
}

console.log(outer());

console.log("---------------------------------------------------------------");

// Lexical chaining means: when a function needs a variable, JavaScript searches for it in the current scope first, then moves outward through its parent scopes until it finds it.
console.log("Let's see how the lexical chaining works :");

function fun1() {
    let usernaav = "Dnyanesh";
    function fun2() {
        function fun3() {
            function fun4() {
                console.log(usernaav);
            }
            fun4()
        }
        fun3()
    }
    fun2()
}
fun1();