let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

let removeAllButFirstInitial = function(a) {
    return a.slice(0,1)
}
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(removeAllButFirstInitial);

console.log(firstInitials);
