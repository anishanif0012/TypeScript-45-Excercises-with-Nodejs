var guestlist = ["Hamza", "Waqas", "Osama", "Ahmed",];
var dontcome = guestlist[0];
console.log(dontcome);
guestlist.splice(0, 1, "Sheryar");
guestlist.forEach(function (guest) { return console.log("Hello, ".concat(guest, ", would you like to come dinner today?")); });
