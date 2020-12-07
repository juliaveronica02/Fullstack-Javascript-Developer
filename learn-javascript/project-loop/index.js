//create factorial using loop: if variable num =4, then your program(4*3*2*1)=24 in new variable.
const nomor = integer => { // get integer.
    let factorial = 1; // start count from number 1.

    for (let i = 1; i <= integer; i++) { // i++: 1+2+3+4 because number = 4.
        factorial *= i;
    }

    return factorial; // result.
}
console.log(nomor(4));

//create reverse string: name = julia, then your program should return ailuj in new variable.
function reverseString(string) {
    return string.split('').reverse().join(''); //split = "desprate", reverse="terbalikkan",join="gabung balek kata2nya"
}
reverseString("julia"); //hasil: ailuj

//create reverse array: if your name=['apple','melon','mango'], then should return ['mango','melon','apple'] in new variabel.
let buah = ['mango', 'melon', 'apple'];

for (var i = buah.length - 1; i >= 0; i--) {
    console.log('hasil' + buah[i]);
}
//assign grade using for: when grade 50 return 'D, 70 return 'C'.
let inputNilai = 55
function data(nilai) {
    if ( nilai <=100 && nilai >=90) {
        return "A";
    } 
    else if (nilai <90 && nilai >=75) {
        return "B";
    } 
    else if (nilai >=60 && nilai <75 ) {
        return "C";
    } 
    else if (nilai > 50 && nilai <60) {
        return "D";
    } 
    else {
        return "penilaian tidak sesuai";
    }
    
}
for (let i = inputNilai; i <= inputNilai; i++) {
console.log('nilai : ' + i + ' adalah ' + data(i));   //console.log(nilai);
}


//multiplier for: number=9 and index <=2 result 9x0, 9x1, 9x2.
var multiplier = 9;
for (var i = 0; i <= 2; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}