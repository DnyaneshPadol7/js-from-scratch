// "use strict"

// // let student = {
// //     name : "Dnyanesh",
// //     printName : function () {
// //         console.log("hii ",this.name);
// //     }
// // }
// // student.printName();

// // let result = student.printName;


// // result();

// // console.log(this);  // this will give me a empty object 

// // function fun() {
// //     console.log(this);  // but this will give mi lot's of code as follows :  
// //     <ref *1> Object [global] {
// //   global: [Circular *1],
// //   clearImmediate: [Function: clearImmediate],
// //   setImmediate: [Function: setImmediate] {
// //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //   },
// //   clearInterval: [Function: clearInterval],
// //   clearTimeout: [Function: clearTimeout],
// //   setInterval: [Function: setInterval],
// //   setTimeout: [Function: setTimeout] {
// //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //   },
// //   queueMicrotask: [Function: queueMicrotask],
// //   structuredClone: [Getter/Setter],
// //   atob: [Getter/Setter],
// //   btoa: [Getter/Setter],
// //   performance: [Getter/Setter],
// //   fetch: [Function: fetch],
// //   navigator: [Getter],
// //   crypto: [Getter]
// // }
// // }

// // fun()

// // console.log(global === globalThis);
// // console.log(global);


// // name1 = "Dnyanesh";
// // console.log(name1);

// // function fun1() {
// //      console.log(this);
// // }
// // fun1();

// console.log("-----------------------------------------------------------");
// const user = {
//     name : "Dnyanesh",
//     greet(){
//         console.log(this.name);
//     }
// }

// user.greet();
// console.log(user.name);

// let result = user.greet();
// console.log(result);
// // result();

// console.log("-----------------------------------------------------------");

// let name = "Danny bhay"
// let product = {
//     name : "iphone",
//     PrintName : () =>{
//         console.log(this.name); // “Arrow functions do not have their own this keyword; instead, they inherit this from their surrounding (lexical) scope.” 
//     }
// }

// product.PrintName()

// console.log("-----------------------------------------------------------");

// let student = {
//     name: "amn",
//     PrintName: function () {
//         console.log("hii", this.name);
//     }
// }
// student.PrintName()

// let student2 = {
//     name: "Pritam",
//     PrintName: student.PrintName
// }

// student2.PrintName()


console.log("-----------------------------------------------------------");
// this reacts differently in arrow function :

// let name = "Dnyanesh";
// let product = {
//     name : "iphone",
//     PrintName : function () {
//         const print = () => {
//             console.log(this.name);
//         }
//         print()
//     }
// }

// product.PrintName();

console.log("-----------------------------------------------------------");
// now will see different outputs from same code 
// like vs code's terminal wiil give us different output and browsers will give different output :

// let name =  "something";
// let product = {
//     name : "iphone",
//     PrintName : () => {
//         console.log(this.name);
//     }
// }

// product.PrintName();
// vs code gives undefined while browsers give something 


console.log("-----------------------------------------------------------");


function fun2() {
    let name = "something";
    let product = {
        name: "iphone",
        PrintName: () => {
            console.log(this.name);
        }
    }
    product.PrintName();
}

fun2()

console.log("-----------------------------------------------------------");

// get explain this code from chat gpt once
let nestedFucntion = {
    name: "something",
    fun: function () {
        let name = "something";
        let product = {
            name: "iphone",
            PrintName: function () {
                const print = () => {
                    console.log(this.name);
                }
                print()
            }
        }
        product.PrintName();
    }
}

nestedFucntion.fun();

console.log("-----------------------------------------------------------");

// Also get explanation of this code....
let nestedFucntion1 = {
    name: "something",
    fun: function () {
        let product = {
            PrintName: function () {
                const print = () => {
                    console.log(this.name);
                }
                print()
            }
        }
        product.PrintName();
    }
}

nestedFucntion1.fun();