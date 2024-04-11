// creating a guest list Array
let guestlist = ["Hamza", "Ahmed", "Bilal", "Osama",];
// making variable for those who cant come 
let dontcome = guestlist[0];
// printing the name of those who cant come
console.log(dontcome, `nai ahh skta`);
// add and remove value from guest list Array
guestlist.splice(0, 1, "Yasir");
// printing message for bigger table
console.log("Good News ! we have found a bigger table for dinner.");
// adding a new guest at starting index of Array
guestlist.unshift("Qasim");
// adding a new guest at ending index of Array
guestlist.push("Ibrahim");
// get a middle index of our guest list
let middleguest: number = Math.floor(guestlist.length / 2);
// adding a new guest at a middle index of Array
guestlist.splice(middleguest, 0, "Asad");
// printng updated list of guests
console.log("Updated list of our guests:");
// sending invitation message to our guests one by one
guestlist.forEach(guest => console.log(`Hello, ${guest}, would you like to come dinner with me?`));




