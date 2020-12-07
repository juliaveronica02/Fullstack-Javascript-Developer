function reverseString(str) {
    // Use the split() method to return a new array.
    var splitString = str.split(""); // var splitString = "phobia".split("");
    // ["p", "h", "o", "b", "i", "a"].
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["p", "h", "o", "b", "i", "a"].reverse();
    // ["a", "i", "b", "o", "h", "p"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["a", "i", "b", "o", "h", "p"].join("");
    // "aibohp"
    
    //Step 4. Return the reversed string
    return joinArray; // "aibohp"
}
 
console.log(reverseString("phobia"));