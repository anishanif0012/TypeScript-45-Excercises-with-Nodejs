function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Anis", "Waqas", "Ahmed"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
