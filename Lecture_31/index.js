//Let's Learn Loops // 
// For Loop
console.log("For Loop");
for (let i = 1; i<10; i++){
    console.log(i);
}
console.log(" ");

// While loop
console.log("While Loop");
console.log(" ");
let y = 0;
while (y<=5) {
    console.log("Hello Jarvis");
    y++;
}

//Do while loop
console.log("do while Loop");
console.log(" ");

let l = 0;
do{
    console.log("Oo Hello Boss");
    l++
} while(l <10 );

console.log(" ");
//Loops with continue keyword //

console.log(" ");
for(let b = 5; b <= 50; b++){
    if(b % 5 !== 0){
        continue;   
    }
    console.log(b);
}

console.log("");
for(let t = 1; t<=10; t++){
    console.log(5*t);
}