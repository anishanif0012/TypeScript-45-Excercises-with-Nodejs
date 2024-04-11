// making a array of countries and prints its original order 
let countriesToVisit: string[] = ["America", "Pakistan", "Japan", "Africa"];
console.log("original order:", countriesToVisit);
// print the array in alphabetical order
console.log("Alphabetical  Order:", [...countriesToVisit].sort());
// show that array still in original order
console.log("Still In Original Order:", countriesToVisit);
// print the array in original order
console.log("Reverse Order:", [...countriesToVisit].reverse());
// again still in original order
console.log("Still In Original Order:", countriesToVisit);
// original array order reverse
console.log("Original Array Reverse:", countriesToVisit.reverse());
// print the array to show that array back in original order
console.log("Back To Original Order:", countriesToVisit.reverse());
// print array in sorted alphabetical order
console.log("Sorted In Alphabetical Order:", countriesToVisit.sort());
// reverse again original array
console.log("Original Array Reverse Again:", countriesToVisit.reverse());




