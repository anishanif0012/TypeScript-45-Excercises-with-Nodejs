let userNames = ["Anis", "Hamza", "Wahid", "Osama", "Admin"];

userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
console.log(`Hello ${oneuser}, would you like to see a status report`);

    }else{
        console.log(`Hello ${oneuser}, thank you for loggin in again`);
    }
})

