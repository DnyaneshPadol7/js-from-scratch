// ============================================================
// JAVASCRIPT TYPE COERCION
// ============================================================

// Type coercion means converting a value from one data type
// to another.
//
// There are two types of type conversion:
//
// 1. Implicit Conversion
//    JavaScript automatically converts the data type.
//
// 2. Explicit Conversion
//    The developer manually converts the data type.
// ============================================================


// ============================================================
// 1. IMPLICIT TYPE CONVERSION
// ============================================================

// String + Number
// If one operand is a string, + performs string concatenation.

console.log("5" + 4);
// Output: "54"

console.log("hello" + "Bhay");
// Output: "helloBhay"


// Multiple operands with +
// Evaluation happens from left to right.

console.log("55" + 55 + 15);
// "55" + 55  → "5555"
// "5555" + 15 → "555515"


// ============================================================
// 2. SUBTRACTION, MULTIPLICATION AND DIVISION
// ============================================================

// Unlike +, these operators convert operands to numbers
// when possible.

console.log("2" * 5);
// Output: 10

console.log(5 - "10");
// Output: -5

console.log("10" / 2);
// Output: 5


// ============================================================
// 3. BOOLEAN TO NUMBER CONVERSION
// ============================================================

// true  → 1
// false → 0

console.log(true + 1);
// Output: 2

console.log(false + 1);
// Output: 1

console.log(true - true);
// Output: 0


// ============================================================
// 4. NaN — NOT A NUMBER
// ============================================================

// If JavaScript cannot convert a value into a valid number,
// the result becomes NaN.

console.log("hello" - 6);
// Output: NaN


// NaN is not equal to itself.

console.log(NaN == NaN);
// Output: false

console.log(NaN === NaN);
// Output: false


// Check whether a value is actually NaN.

let result = "hello" - 7;

console.log(result);
// Output: NaN

console.log(Number.isNaN(result));
// Output: true


// ============================================================
// 5. SPECIAL CASES
// ============================================================

// Arrays and objects are also converted when used with +.

console.log([] + []);
// Output: ""

console.log([] + {});
// Output: "[object Object]"


// ============================================================
// 6. BOOLEAN COERCION
// ============================================================

// The ! operator converts a value to Boolean
// and then reverses the result.

console.log(!"");
// Output: true

console.log(!!"");
// Output: false

console.log(!!"Hello");
// Output: true


// Falsy values:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Everything else is generally truthy.


// ============================================================
// 7. EXPLICIT TYPE CONVERSION
// ============================================================

// Explicit conversion means that the developer manually
// converts a value into another data type.


// Number()

console.log(Number("5"));
// Output: 5

console.log(Number("100"));
// Output: 100

console.log(Number("hello"));
// Output: NaN


// String()

console.log(String(100));
// Output: "100"

console.log(String(true));
// Output: "true"


// Boolean()

console.log(Boolean(1));
// Output: true

console.log(Boolean(0));
// Output: false

console.log(Boolean("hello"));
// Output: true

console.log(Boolean(""));
// Output: false


// ============================================================
// 8. PRACTICAL EXAMPLE
// ============================================================

// Without explicit conversion:

console.log("It will print = " + "5" + 4);
// Output: "It will print = 54"


// With explicit conversion:

console.log("It will print = " + (Number("5") + 4));
// Output: "It will print = 9"


// Number("5") converts "5" from a string to a number.
//
// Number("5") + 4
// 5 + 4
// 9


// ============================================================
// QUICK SUMMARY
// ============================================================

// Implicit Conversion:
// JavaScript automatically converts the data type.
//
// Explicit Conversion:
// The developer manually converts the data type.
//
// Examples:
//
// "5" + 4       → "54"
// "5" - 4       → 1
// "5" * 4       → 20
// "20" / 4      → 5
// true + 1      → 2
// "hello" - 5   → NaN
//
// Number("5")   → 5
// String(5)     → "5"
// Boolean(1)    → true