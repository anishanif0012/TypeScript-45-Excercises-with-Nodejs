function makeSandwiche() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwiches with the following items: ");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
makeSandwiche("Chiken", "Cheese", "Mayo", "Egg");
makeSandwiche("Bread", "Butter");
makeSandwiche("Chiken", "Cheese", "Mayo", "Egg", "Bread", "Butter", "Lettuce", "Tomatto");
