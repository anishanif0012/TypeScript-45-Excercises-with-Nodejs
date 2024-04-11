// Define variables
let mango = "mango"
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Mango", "Banana"];

// test for equality and inequality with strings
console.log("Is mango equal to mango");
console.log(mango == mango);


console.log("\nIs mango not equal to mango");
console.log(mango != mango);

// test using lower case function
console.log("\nIs MANGO is equal to mango after converting to lower case");
console.log(uppercaseMango.toLowerCase() == mango);

console.log("\nIs MANGO is not equal to mango after converting to lower case");
console.log(uppercaseMango.toLowerCase() != mango);

//Numerical Tests
// equal to
console.log("\nIs ten is equal to twenty");
console.log(ten == twenty);

//not equal to
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);

//greater than
console.log("\nIs ten is greater than 0");
console.log(ten > 0);

//smaller than
console.log("\nIs ten is smaller than 5");
console.log(ten < 5);

//greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);

//less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10);

// tests using "and" & "or" operators
//using && (and)
console.log("\ntwenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("\ntwenty is not equal to ten and twenty is greater than thirty");
console.log(twenty != ten && twenty > 30);

//using || (or)
console.log("\ntwenty is greater than 50 or twenty is equal to 20");
console.log(twenty > 50 || 20 == 20);

console.log("\ntwenty is greater than 50 or 20 is not equal to 20");
console.log(twenty > 50 || 20 != 20);

//test whether an item is include in array
console.log("n\Is banana include in my fruits array");
console.log(fruits.includes("banana"));

console.log("n\Is banana not include in my fruits array");
console.log(!fruits.includes("banana"));












