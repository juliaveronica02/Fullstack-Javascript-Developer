// Question 1 Mumbling:
/* Create a function called mumbling with string parameter then return like this example below:

     mumbling("abcd") -> "A-Bb-Ccc-Dddd"
     mumbling("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
     mumbling("cwAt") -> "C-Ww-Aaa-Tttt" */

function mumbling(s) {
  let string = [];
  let text = s.toLowerCase();
      
  for (let i = 0; i < s.length; i++) {
        
    for(let x = 0; x <= i; x++) {
      x == 0 ? string.push(text[i].toUpperCase()) : string.push(text[i])
          
      if (i == x && i !== s.length - 1) { string.push('-') }
    }
  }
  return string.join('');
}

// Question 2 Square Every Digit:
/* You are asked to create a function that square every digit of a number and concatenate them */

// 1
function squareDigits(num){
  let arr = [], digits = num.toString().split('');
  digits.map(digit => {
    arr.push(Math.pow(parseInt(digit), 2))
  });
  return parseInt(arr.join(''))
}

// 2
function squareDigits(num){
  return parseInt(num.toString().split('').map(digit => { return Math.pow(digit, 2); }).join(''));
}

// Question 3 Running out of space:
/* Write a function that removes the spaces from the values and 
   returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] 
   would produce ['i','ihave','ihaveno','ihavenospace']. */

function spacey(array){
  let i = 0, temp = [], word = '';
  do {
    temp.push(word += array[i]);
    i++
  }
  while (i < array.length);
    
  return temp;
}

// Question 4 Sum of two lowest positive integers:
/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
   No floats or non-positive integers will be passed.
   
   For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
   [10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {  
  let sort = numbers.sort((a,b) => b - a);
  return sort[sort.length - 1] + sort[sort.length - 2];
}