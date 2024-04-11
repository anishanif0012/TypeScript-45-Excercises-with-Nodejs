let userNames = ["Anis", "Hamza", "Wahid", "Osama", "Admin"];

if (userNames.length === 0){
    console.log("We need to find some users"); 

} else{
    userNames.forEach(users => {
        if(users === "Admin"){
           console.log(`Hello ${users}, would you like to see a status`);
           }else{
            console.log(`Hello ${users}, thank you for loggin in again`)

           }

    })
}
    
