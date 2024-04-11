function makeSandwiche(...items: string[]){
console.log("\nMaking a sandwiches with the following items: "); 

items.forEach(singleItem => console.log(singleItem));
console.log("\nNow Enjoy Sandwich");

}

makeSandwiche("Chiken", "Cheese", "Mayo", "Egg");

makeSandwiche("Bread", "Butter");

makeSandwiche("Chiken", "Cheese", "Mayo", "Egg", "Bread", "Butter", "Lettuce", "Tomatto");
