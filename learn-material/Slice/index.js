//  Slice method returns a portion of an array into a new array. 
// Which portion it returns is decided by two optional parameters begin and end.
// arr.slice([begin[, end]])

let fruits = ["apple", "mango", "banana", "grapes", "blueberry", "kiwi", "papaya"];
let my_fav_fruits = fruits.slice(2,4);

console.log("favority fruit",my_fav_fruits);
// output -> [ 'banana', 'grapes' ] 

console.log("all fruits",fruits);
// output -> [ 'apple', 'mango', 'banana', 'grapes', 'blueberry', 'kiwi', 'papaya' ] 