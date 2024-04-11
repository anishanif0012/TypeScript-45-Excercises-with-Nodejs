let current_users = ["Anis", "Hamza", "Wahid", "Osama", "Iqram"];

let new_users = ["Waqas", "Sheryar", "Hamza", "Asad", "Iqram"];

new_users.forEach(new_one_user => {
    if(current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())){
console.log(`Sorry ${new_one_user} is already taken`);

    }else{
        console.log(`This username ${new_one_user} is available`);
        
    }
})

 
    





 
    


