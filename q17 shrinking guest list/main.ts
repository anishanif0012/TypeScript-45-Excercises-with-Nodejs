// creating a guest list array
let guestlist = ["Anis", "Sheryar", "Habib", "Osama", "Yasir", "Waqas",];
// making variable for those guests who cant come
let dontcome = guestlist[0];
// printing the names of those who cant come
console.log(dontcome, "Nai a skta");
// add or remove guest from the list of array
guestlist.splice(0, 1, "Zahir");
// printing message for bigger table
console.log("Good news ! we have a bigger table for dinner");
// add a new guest at starting list of array
guestlist.unshift("Asad");
// add new guest at ending list of array
guestlist.push("Iqbal");
// making a variable to storing a middleguest of our list of array
let middleguest: number = Math.floor(guestlist.length / 2);
// add a new guest at middle list of array
guestlist.splice(middleguest, 0, "Bilal");
// printing updated list of our guests
console.log("Updated list of our guests");
// sending invitation message to our guest one by one with their names
guestlist.forEach(guests => console.log(`Hello, ${guests} would you like to come dinner with me`));
// printng message that only two guests are invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// using while-loop to remove guests from the array until last two names remain
while(guestlist.length > 2) {
let removedguest = guestlist.pop();
console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}
// printing invitation message to ladt two guests
console.log("Invitation to the last two guest");
//sending and printing invitation message to last two guests
guestlist.forEach(lasttwoguests => console.log(`Luckly, ${lasttwoguests} you are still invited to dinner`));
// remove last two guests from list
guestlist.pop();
guestlist.pop();
// printing all guests remove from list
console.log("Empty List:", guestlist);




