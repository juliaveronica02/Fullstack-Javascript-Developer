const array = [1,2,3,4,5,5,1]
const uniqueArray=[...new Set(array)]
console.log("array",uniqueArray);
// run: node index.js
// output: array [ 1, 2, 3, 4, 5 ].