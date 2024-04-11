let guestlist = ["Hamza", "Waqas", "Osama", "Ahmed",];
let dontcome = guestlist[0];
console.log(dontcome, "nai a skta");
 guestlist.splice(0, 1, "Sheryar");
 guestlist.forEach(guest => console.log(`Hello, ${guest}, would you like to come dinner today?`));

