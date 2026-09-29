let student = {
    name: "dnyanesh",
    class: "MCA",
    rollNo: 77,
    subject: ["math", "Endglish", "hindi"]
}

let { name: vishay, ...hello } = student; // it will grab entire objects 
console.log(vishay);
console.log("-----------------------------------------------------------");
console.log(hello);

console.log("-----------------------------------------------------------");
console.log("Another declaring a new rest operator :");
// you can declare multiple rest variable in separate destructuring statements.
let { ...langda } = student

console.log(langda);
console.log("-----------------------------------------------------------");

console.log("-----------------------------------------------------------");
console.log("Let's learn how to merge to objects :");
// merging two objects together 

let obj1 = {
    name: "Dnyanesh",
    age: 22,
};

let obj2 = {
    subject: "javaScript",
    course: "MCA"
};

let combined = {
    ...obj1,
    ...obj2
}


console.log(combined);
console.log("-----------------------------------------------------------");


console.log("-----------------------------------------------------------");
console.log("Let's how see how to update the array :");
// how to update array :

const arr1 = [1, 3, 4, 7, 9];
arr1[1] = "updated";
console.log(arr1);


console.log("-----------------------------------------------------------");
console.log("Let's how see how to update the objects :");
// how to update objects :

const obj = {
    name: "Danny",
    address: "Jalna",
    space: null
}
console.log(obj.address);

//  syntax of updating values of objects :
obj["address"] = "Banglore";
console.log(obj.address);

// another syntax of updating values of objects : 
obj.address = "Haidrabad"
console.log(obj.address);


console.log("-----------------------------------------------------------");
console.log("Let's see how to delete the values of the objects :");
// deleting the values of the objects
delete obj.status;
console.log(obj);
console.log();

console.log("-----------------------------------------------------------");
console.log("Let's see what is optional chainig and how it works :");
// deleting the values of the objects
console.log(obj.space?.street);  // when we are not sure about the output of the object's value then use question mark right after the key
console.log();
console.log("-----------------------------------------------------------");
console.log("Let's see how the splice, slice, find, indexOf, flat works :");
console.log("-----------------------------------------------------------");

console.log("Let's see how the splice works :");
console.log("its for delete purpose");
// let's come up with a use case of array 
// its for delete purpose
let arr = [1, 2, 3, 4, 5, 6, 7, 8.9]

arr.splice(0, 3) // .splice(start, deleteCount) first argument refers to index of array and second argument tell how much value should be delete  
console.log(arr);

console.log("-----------------------------------------------------------");
console.log("now let's see for adding with splice");
// now let's see for adding with splice 
let arr2 = [1, 2, 3, 6, 7, 8, 9]
arr2.splice(3, 0, 4, 5) // arr3 = (startIndex, deleteCount, item1,item2,...)
console.log(arr2);

console.log("-----------------------------------------------------------");
console.log("now let's see for replace of splice");
// now let's see for replace of splice 
let arr3 = [1, 2, 3, 6, 7]
arr3.splice(3, 2, [4, 5]) // arr3 = (startIndex, deleteCount, [item1,item2]=> items which we want to replace,...)
console.log(arr3);





console.log("-----------------------------------------------------------");
console.log("now let's see for Slice :");
// now let's see for Slice 
let arr4 = [1, 2, 3, 6, 7]
let result = arr4.slice(1, 4) // arr4 = (startIndex, endIndex)
console.log(result);

console.log("-----------------------------------------------------------");
console.log("now let's see for indexOf :");
// indexOf is also a array method which is simply return a index of give value, but if value is not present in the array it will return you -1
let arr5 = [1,2,3,4,5,6,7];
console.log(arr5.indexOf(7)); // output will be 6
console.log(arr5.indexOf(89)); // output will be -1


console.log("-----------------------------------------------------------");
console.log("now let's see for Find :");

let arr6 = [3,5,4,8,9,18,20]
let res = arr6.find((value) =>{
    return value === 18
})
console.log(res);
console.log("Anther way to find the value from an array");
// this is another way to find value from an array 
let re = arr6.find(num => num > 10);
console.log(re);



console.log("-----------------------------------------------------------");
console.log("now let's see for FindIndex :");

// it retuns us the index of the value 
let resIndex = arr6.findIndex((value =>value === 18))
console.log(resIndex);

console.log("-----------------------------------------------------------");
console.log("now let's see for Flat() :");
// flat is an array method that converts a nested array into a single-level-array.
let arr7 = [89,80,90,[89,56,["kapil","samay",[99.9,88.8,77.7,66.6,55.5],"girdhar"],56]]
console.log(arr7.flat(Infinity)); //
