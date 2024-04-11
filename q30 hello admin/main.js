var userNames = ["Anis", "Hamza", "Wahid", "Osama", "Admin"];
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for loggin in again"));
    }
});
