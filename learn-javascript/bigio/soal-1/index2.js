function reverseString(str) {
  let reversedArray = str.split("").reverse();
  reversedArray.shift();
  return str + reversedArray.join("");
}
console.log(reverseString("phobia"));