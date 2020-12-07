function createHourGlass (rows) {
    // i = 0; 1 < 2; always +1.
    for (let i = 1; i < rows; i++){
        // make variable number for space.
        let num = " ";
        for (let spasi = 1; spasi < i; spasi ++) num += " ";
        // y variable is 2; 2 >= 1.
        for (let y = rows; y >= i; y--) num += " *";
        console.log("1", num);
    }
    for (let i = 0; i < rows; i ++) {
        let output = " "; // space.
        for (let j = 0; j < rows - i; j++) output += " "; // make a space.
        for (let k = 0; k <= i; k++) output += "* "; // print out as star.
        console.log("2", output)
    }
}
// call function to add rows number.
createHourGlass(3)