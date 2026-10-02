// fun(); // gives error =>  fun is not a function
// var fun = function(){
//     console.log("Ki haal chal soniyo");
// }


// fun2(); // gives error => ReferenceError: Cannot access 'fun2' before initialization 
// const fun2 = function(){
//     console.log("Namste sada vatsle matrubhui");
// }


// var a = 5;
// let b = 10;
// console.log(a+b);

// function fun1(){
//     let num1 = 10;
//     let num2 = 20;
//     return num1 + num2;

// }

// const result = fun1();
// console.log(result);

console.log(("---------------------------------------------------------------"));


function outer() {
    let num1 = 50;
    let num2 = 60;

    function inner() {
        let num1 = 10;
        let num2 = 20;
        return num1+num2;
    }
    const result =  num1 + num2 + inner();
    return result;
}

const result = outer()
console.log(result);


console.log(("---------------------------------------------------------------"));



let a = 140;
function gun() {
    console.log(a);  // it will give you error coz we are printing/accessing a before initilizing 
    let a = 20; // error type : ReferenceError: Cannot access 'a' before initialization
}

gun()   