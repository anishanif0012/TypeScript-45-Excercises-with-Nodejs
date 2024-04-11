var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and prints its original order 
var countriesToVisit = ["America", "Pakistan", "Japan", "Africa"];
console.log("original order", countriesToVisit);
// print the array in alphabetical order
console.log("Alphabetical  Order", __spreadArray([], countriesToVisit, true).sort());
// show that array still in original order
console.log("Still In Original Order", countriesToVisit);
// print the array in original order
console.log("Reverse Order", __spreadArray([], countriesToVisit, true).reverse());
// again still in original order
console.log("Still In Original Order", countriesToVisit);
// original array order reverse
console.log("Original Array Reverse", countriesToVisit.reverse());
// print the array to show that array back in original order
console.log("Back To Original Order", countriesToVisit.reverse());
// print array in sorted alphabetical order
console.log("Sorted In Alphabetical Order", countriesToVisit.sort());
// reverse again original array
console.log("Original Array Reverse Again", countriesToVisit.reverse());
