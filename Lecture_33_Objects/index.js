
let product1 = [56835,4.5,10,"iphone"]

let product = {
    productName :"Vivo x400 pro",
    productPrice :"1,00,000",
    avgRating : 4.5,
    totalReviews : "1,00,000",
    discount : "10,000",
    'first-name':"Dnyanesh",

    printProductName : function() {
        console.log(this.productName);   
    }
}

product.printProductName();
console.log(Object.keys(product)); // we can see the keys through this method 
console.log(Object.values(product)); // as like keys this returs/gives values of the keys
console.log(Object.entries(product)); // its returns keys and it's values accordingly 

// console.log(product);

// console.log(product.productName);

// product1[0]
// console.log(product["first-name"]); 
// product.'first-name';

// product.printProductName();

console.log("---------------------------------------------------------");
console.log("Let's see where we can use key, value and entry methods :");
console.log(" ");

for (value of product1) {  // this is working 
    console.log(value);
}
console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0=0=0=0=0=0=0=0=0=0=");
for (let key of Object.keys(product)) {  // this is not working why ?
    console.log(key);
}

console.log("------------------------------------------------------------");
console.log("Let's see what is callback function");
function b(fun) {
    console.log("b");
    console.log(fun);
}

function a(){
    console.log("a");
}

b(a)

console.log("------------------------------------------------------------");
console.log("Let's see what is for in loop");

console.log("Forin loop for objects");
for(value in product){
    console.log(value);  // it should apply for objects and it will return keys of the objects
    // If we applied forIn loop on the array then it return indexing
}

console.log("Forin loop for array");
for(value in product1){
    console.log(product1[value]);  // now this will gives the actual values of the array 
}

console.log("-------------------------------------------------------");
console.log("Let's Learn about destructuring");

console.log("Syntax of Destructuring for array");
const [price,rating,stars,Name] = product1;
console.log(price,rating,stars,Name);


console.log("-------------------------------------------------------");
console.log("Syntax of Destructuring for array");

const {productName,productPrice,avgRating,totalReviews,discount,printProductName} = product;
console.log(productName,productPrice,avgRating,totalReviews,discount);
console.log();

console.log("-------------------------------------------------------");
console.log("let's print objects keys and values using destructuring");
console.log();
for([key,value] of Object.entries(product)){
    console.log(key,value);
}

console.log();

console.log("-------------------------------------------------------");
console.log("let's learn about rest and spread opearators");

let arr = [78,67,234,23,5434,53,55,32,56,75,43,64,67,34,89];
console.log("We are printing this array without spread syntax :");
console.log(arr);

console.log("We are printing this array with spread syntax :");
console.log(...arr);

console.log("-------------------------------------------------------");
console.log("Also we can concatenate two array usgin spread oprators");

let x = [2,7,5]
let z = [7,1,3]

let c = [...x, ...z];
console.log(c);

console.log();

console.log("-------------------------------------------------------");
console.log("let's learn about rest Syntax");
console.log("It's like reverse oprations of spread means means spreds does array free and rest make it bound ");

const [h,p, ...hello] = ["iphone",78,3.5,89,99,90,9.05,89.89]
console.log(hello);

console.log();

console.log("-------------------------------------------------------");
console.log("Let's do addiition using spread oprators");
function add(...numbers){
    let total = 0;
    for(varlue of numbers){
        total += value
    }
    return total; 
}
console.log(add(4,6,87,56,32,89));



console.log();
console.log("-------------------------------------------------------");
console.log("Let's do something using spread oprators");

let {Price,ProductName, ...privateDetails} = product;
console.log(Price, ProductName, privateDetails);

console.log("==================================================================");
// more practice of same 



// console.log("Object Destructuring :");
// let student = {
//     name : "Dnyanesh",
//     rollNo : 7,
//     subject : ["math","English","Marathi"]
// }

// let {name,rollNo} = student
// console.log(subject);
// console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
// let {...bhavi} = student
// console.log(bhavi);
// console.log("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");

// console.log("for doing rename in the object");
// // how to rename key
// let {subject:language, ...variable} = student
// // console.log(...subject);
// console.log(...language);


let mt15 = {
    price : 2002000,
    model : 2027,
    color : "zBlack",
    printColor : function () {
        //console.log(this.color);
    }
    
}

// aaray of mt16
let mt16 = [
    ["price", 2002000],
    ["model", 2027],
    ["color", "zBlack"]
];

mt16.forEach(function(value,index){
    console.log(value,index);
})
console.log("------------------------------");
// we can fethc all the entries by for in loop usign this syntax !
console.log("for in loop :");
for(let key in mt15){
    console.log(key,mt15[key]);
}
console.log("------------------------------");


// for of loop works only for arrays it will not works on objects  
// for (value of mt15){
//     console.log(value);
// }

// if you want to fetch the data from objects through the for of loop you have to do some changes in for of loop as well

for(let data of Object.entries(mt15)){
    console.log(...data);
}

// mt15.printColor();
// console.log(Object.entries(mt15));


// console.log("-------------------------------------------------");
// for (let [key,value]of Object.entries(mt15)){
//     console.log(key,value);
// }