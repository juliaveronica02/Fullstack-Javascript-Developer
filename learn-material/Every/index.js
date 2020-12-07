// every to check whether every element in an array meets a condition.
const numbers = [1, 30, 39, 29, 10, 13];
const isBelowThresold = (num) => num <40;
console.log("every", numbers.every(isBelowThresold));
