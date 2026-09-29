let originalPrice = [260,340,780,961,]

let desicountPrice = []

// its very long Or lenghy code that's why we are going to use map
// this is very un
console.log("Calculating the discount price using for of Loop");
for (value of originalPrice) {
    desicountPrice.push(value * 0.9) // 10% discount
}
console.log(originalPrice);
console.log(desicountPrice);

console.log("-----------------------------------------------------------------------");
console.log("Calculating the discount price using the map() method");
const desicountPrice2 = originalPrice.map((value) =>{
    return value * 0.9
})

console.log(desicountPrice2);
console.log("-----------------------------------------------------------------------");
