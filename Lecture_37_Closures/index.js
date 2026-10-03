// function outer() {
//     const a = 5;
//     function inner() {
//         console.log(a); // gives reference error coz TDZ(temporal dead zone)
//         const a = 7;   
//     }
//     inner();
// }
// outer();


// function outer() {
//     let a = 5;
//     function inner() {
//         console.log(a); // gives reference error coz TDZ(temporal dead zone)
//         let a = 7;   
//     }
//     inner();
// }
// outer();

// function outer() {
//     let a = 5;
//     function inner() {
//         console.log(a); // only this will give undefind value coz hoisting !
//         var a = 7;
//     }
//     inner();
// }
// outer();

// All the upper 3 example are same just variable are different

console.log("----------------------------------------------------------------------------");
console.log("Now we'll learn the code with modifing the before code :");


// function outer() {
//     let a = 5;
//     function inner() {
//         console.log(a); // inner() accesses 'a' from its outer/lexical scope
//     }
//     return inner; // Return the inner function itself (not its execution).// The returned function reference will be received by the variable// that called outer(), i.e. response.
// }
// const response = outer();// Call outer(). outer() returns the inner function,// so 'response' now stores a reference to that inner function.// inner() is NOT executed here.
// console.log(response);// Prints the function itself, because response contains the inner function.// It does NOT print 5 because inner() has not been called yet.
// console.log(response());// Now we actually call the inner function stored inside response.// inner() executes and prints 5.

console.log("----------------------------------------------------------------------------");
console.log("Let's Learn what is closure : ");
// this is the basic example of closure.
// function  outer() {
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// const result = outer();
// result();
// console.log(result);



console.log("Another example of closure : ");

function outer() {
    let count = 0;
    function counter() {
        count = count + 1;
        console.log(count);
    }
    return counter;
}

const counter = outer();
const counter2 = outer();
counter();
counter();
counter();


counter2();