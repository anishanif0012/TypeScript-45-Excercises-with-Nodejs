// let current_users = ["Anis", "Hamza", "Wahid", "Osama", "Iqram"];
// let new_users = ["Waqas", "Sheryar", "Hamza", "Asad", "Iqram"];
// new_users.forEach(new_one_user => {
//     if(current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())){
// console.log(`Sorry ${new_one_user} is already taken`);
//     }else{
//         console.log(`This username ${new_one_user} is available`);
//     }
// })
var current_users = ["Anis", "hamza", "Wahid", "Osama", "Iqram"];
var new_users = ["Waqas", "Sheryar", "hamza", "Asad", "Iqram"];
current_users.forEach(function (already_user) {
    if (new_users.some(function (again_user) { return again_user === already_user; })) {
        console.log("this user ".concat(already_user, " already taken"));
    }
    else {
        console.log("this name ".concat(already_user, " is available"));
    }
});
