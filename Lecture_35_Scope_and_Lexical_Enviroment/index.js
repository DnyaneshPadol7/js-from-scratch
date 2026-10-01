// let name = "Dnyanesh"; // global scoped

// {
//     let city = "Jalna" // block scoped
//     console.log(city); // accessible 
//     var country = "India"
// }

// //console.log(city); // not accessible, will give error 

// hello();
// function hello() {
//     let state = "Maharashtra" // function scope
//     console.log(state); // accessible
// }
// //console.log(state); // not accessible outside the function


// console.log("-------------------------------------------------------------");


// {
//     var country = "India"
// }
// console.log(country);// accessible outside the block bit it's not function scope

// function namste() {
//     var greet = "ki haal chal aa"; // its only fuction scope
// }
// console.log(greet); // its not accessible outside the function 













let count = 0; // if the variable is outside the function then it can store the value 

function counter() {
    //  let count = 0; but if your variable is inside the function it will loose the value because it start from reasigning 
    count = count + 1;
    console.log(count);
}

counter()
counter()
console.log("-------------------------------------------------------------");


console.log("-------------------------------------------------------------");
console.log("Let's learn hoisting : ");