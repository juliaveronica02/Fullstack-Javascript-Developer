// if want to remove values from the end of an array desctructiveky, there's are
// faster alternatives than using splice().
const array = [0,1,2,3,4,5,6,7,8,9];
array.length = 4;
array.slice(0,4);
console.log("array",array);
// run: node index.js.
// result: array [ 0, 1, 2, 3 ].