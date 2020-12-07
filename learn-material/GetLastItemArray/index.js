// The array method slice() can take negative integers, and
// if provided it will take values from the end of the array 
// rather than the beginning.

const array =[1,2,3,4,5,6,7,8,9];
console.log("-1",array.slice(-1));
console.log("-2",array.slice(-2));
console.log("-3",array.slice(-3));
// run: node index.js.