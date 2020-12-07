// Statement of grouping values of 0 or more.
// javascript block.

// with let.
let a = 1;
{
    let a = 2
}
console.log("a", a);

// with const.
const l = 1
{
    const l = 2
}
console.log("l", l);

// with var.
var y = 1
{
    var y =2
}
console.log("y", y);

// javascript if else condition.
let grade = 92
if(grade >= 90) {
    console.log("A");
} else if(grade >= 80) {
    console.log("B");
} else if(graade >= 70) {
    console.log("C");
} else if(grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// switch.
var example = "Papayas"
switch (example){
    case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
    case "Mangoes":
        case "Papayas":
            console.log("Mangoes and papayas are $2.79 a pound.");
            // result: "Mangoes and papayas are $2.79 a pound."
            break;
            default:
                console.log("Sorry, we are out of" + example + ".");
}

// for.
var angka = ""
for (var i = 0; i < 9; i++){
    angka = angka + i
}
console.log("angka", angka);

// for in.
var person = {first_name: "Julia", last_name:"Veronica", age: 20}
var text = ""
for(var x in person) {
    text += person[x] + " "
}
console.log("text", text);

// while.
var n = 0
while (n < 3) {
    n++
}
console.log("n", n);

// do while.
var result = " "
var i = 0
do{
    i = i + 1
    result = result + i
} while (i < 5)
console.log('result', result);

// filter.
const words = [
    "spray",
    "limit",
    "elite",
    "present",
    "exuberant"
]
let longWords = words.filter(word => word.length > 6)

var array1 = [1, 4, 9, 16]
// pass a function to map.
const map1 = array1.map(x => x *2)

// find.
var array1 = [5, 12, 8, 130, 44]
var found  = array1.find(function(element){
    return element > 40
})
console.log("found", found);

var array2 = ["a", "b", "c"]
array1.forEach(function(element){
    console.log("element", element);
})