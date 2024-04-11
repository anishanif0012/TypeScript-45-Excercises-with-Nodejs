var guestlist = ["Hamza", "Ahmed", "Bilal", "Waqas"];
guestlist.forEach(function (guests) { return console.log("Hello, ".concat(guests, ", would you like to dinner with me")); });
var lengthGuests = guestlist.length;
console.log("We are inviting total ".concat(lengthGuests, " guests"));
