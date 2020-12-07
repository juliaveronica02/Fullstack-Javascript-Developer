//primitive values.
let a = 5;
let grt_str = "Hello World";
let bool_val = 0;

// Non Primitive Values.
let fox_arr = ["JS", "Python", "PHP"];
let fox_obj = {
    'name': 'FoxBits',
    'type': 'web',
    'age' : 2
};

//this array has 3 primitive and 2 non primitive values.
let mixed_array = [a, grt_str, bool_val, fox_arr, fox_obj]

console.log("mixed array",mixed_array);