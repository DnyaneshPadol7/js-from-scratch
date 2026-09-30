// ============================================================================
// Example 1: Calculating Discounted Prices
// ============================================================================

let originalPrice = [260, 340, 780, 961,]

let desicountPrice = []

// Using a for...of loop to calculate the discounted price
// 10% discount means multiplying the original price by 0.9
console.log("Calculating the discount price using for of Loop");

for (value of originalPrice) {
    desicountPrice.push(value * 0.9) // 10% discount
}

console.log(originalPrice);
console.log(desicountPrice);

console.log("-----------------------------------------------------------------------");


// ============================================================================
// Example 2: Calculating Discounted Prices using map()
// ============================================================================

// Instead of writing a longer for...of loop,
// we can use the map() method to create a new array
// with the calculated discount prices.

console.log("Calculating the discount price using the map() method");

const desicountPrice2 = originalPrice.map((value) => value * 0.9)

console.log(desicountPrice2);

console.log("-----------------------------------------------------------------------");


// ============================================================================
// Example 3: Working with an Array of Objects
// ============================================================================

console.log("Now we'll see how the array of objects works ");


let student = [
    {
        name: "Dnyanehs",
        marks: 97,
    },
    {
        name: "Piyush",
        marks: 90,
    },
    {
        name: "sohel",
        marks: 90,
    },
    {
        name: "kalyan",
        marks: 63,
    },
    {
        name: "tejas",
        marks: 30,
    },
    {
        name: "sohel",
        marks: 25,
    },
    {
        name: "salman",
        marks: 20,
    },
]


// ============================================================================
// Example 4: Getting Student Names using forEach()
// ============================================================================

let studentName = []

console.log("Printing names using for each loop");

// forEach() is used to iterate over every student object
// and push the student's name into the studentName array.

student.forEach((value) => {
    studentName.push(value.name)
})

console.log(studentName);

console.log("-----------------------------------------------------------------------");


// ============================================================================
// Example 5: Getting Student Names using map()
// ============================================================================

// map() can directly create a new array containing
// only the names of the students.

const studentName2 = student.map((student) => student.name)

console.log(studentName2);


// ============================================================================
// Example 6: Increasing Student Marks
// ============================================================================

// map() is used here to create a new array of student objects.
// The spread operator (...) copies the existing student object,
// and marks are increased by 10.

let boostMarks = student.map(student => ({ ...student, marks: student.marks + 10 } ))

console.log(boostMarks);


// ============================================================================
// Example 7: Creating a New Array with the Same Student Objects
// ============================================================================

// map() is used here to return each student object as it is.
// The new array will contain the same student objects.

let studentNameMarks = student.map((student) => student)

console.log(studentNameMarks);

console.log("-----------------------------------------------------------------------");



// ============================================================================
// Example 8: Let's Learn abut Filters 
// ============================================================================

// If we use the condition on the loop and need the output according to use then we have to follow this syntax :
console.log("Used for each loop to get failed students name and marks :");
let failedStudent = []

student.forEach((student) =>{
    if(student.marks < 35){
        failedStudent.push(student)
    }
})

console.log(failedStudent);

console.log("-----------------------------------------------------------------------");

console.log("Now let's see how we could use the filter for the same output :");

const failedStudent2 = student.filter((student) => student.marks <= 30).map ((student) => student.name) // We can use method chaining with the dot (.) operator to perform multiple operations and apply the conditions we need.

console.log(failedStudent2);


console.log("-----------------------------------------------------------------------");

console.log("Demonstrating the JavaScript reduce() Method");

// First, let's calculate the sum of an array using forEach()
const num = [10, 20, 30, 40];
let totalNum = 0;

console.log("Calculating the Sum Using forEach():");

num.forEach((num) => 
    totalNum += num
);

console.log("Result:", totalNum);

console.log("-----------------------------------------------------------------------");


// Now, let's achieve the same result using reduce()
console.log("Calculating the Sum Using reduce():");

const total = num.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Result:", total);

// reduce() processes each element of an array and returns a single value.
// The returned value can be a number, boolean, string, object, array, or any other data type,
// depending on what is returned from the callback function.



console.log("-----------------------------------------------------------------------");
// lets see a another example of reduce 

const quotation = [78000,4500,7800,3200,1600,1200];

const onRoadPrce = quotation.reduce((totalPrice, quotation) => totalPrice += quotation ,0) // this is more shorter syntax than before 
console.log("The on road price of iqube is : ", onRoadPrce);


console.log("-----------------------------------------------------------------------");
// lets see a another example of reduce 

const attendence = ["present","present","absent","absent","absent","absent","present","present",]

// First, let's calculate the present and absent studnet using forEach()
let obj = {}

attendence.forEach((value) => {
    if(obj[value]){
        obj[value] = obj[value] +1
    } else {
        obj[value] = 1
    }
})
console.log(obj);


console.log("-----------------------------------------------------------------------");

// Now, let's achieve the same result using reduce()

const obj1 = attendence.reduce((acc, value) => {
    // if(acc[value]){
    //     acc[value] = acc[value] +1
    // } else {
    //     acc[value] = 1
    // }   // this is very lengthy code
    acc[value] = (acc[value] || 0) + 1; // it will give a same output 
    return acc;
},{})

console.log(obj1); // acc(value) = (acc[value] || 0) + 1;