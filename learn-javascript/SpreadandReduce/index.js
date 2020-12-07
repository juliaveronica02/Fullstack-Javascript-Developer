var numbers = ["1", "2", "3", "4", "5"];
let reversedArray = numbers.reduce((accl, value)=>{
    return [value,...accl]
},[])
console.log("reversedArray",reversedArray);