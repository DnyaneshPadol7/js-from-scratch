let proName = "t-shirt"
let proPrice = 550;

let proName2 = "Lower"
let proPrice2 = 650;

let proName3 = "Cap"
let proPrice3 = 300;

let product = [["t-shirt",550],["Lower",600],["Cap",300],["shoes",1000]]
console.log(product[product.length-1]);

console.log("--------------------------------");

let products = [proName,proName2,proName3];
console.log(products);

console.log("--------------------------------");

console.log(product.at(-1));// prints the values from end of array 

console.log("--------------------------------");

// printing whole array using for loop
console.log("printing whole array using for loop :");

for (let i = 0; i < product.length; i++) {
    console.log(product[i]);
}

console.log("--------------------------------");
console.log("Let's see nested array in JS");

for(let i = 0; i<product.length; i++){
    console.log(product[i][0],product[i][1]);
}