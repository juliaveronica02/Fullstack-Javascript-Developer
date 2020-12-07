// learn function.
const logMessage = function(pesan, param2) {
    console.log("logMessage", pesan);
}
// bonus internet 44.31GB, midnight quota 44.98 GB
const logMessage2 = (pesan) => {
    console.log(pesan)
}

const logMessage3 = (pesan, jumlah) => {
    console.log(`${pesan} dgn jumlah ${jumlah}`)
    window.alert(`${pesan} dgn jumlah ${jumlah}`)
}

const logMessage4 = pesan => console.log(pesan)

// using return in function example.
const multiple = function(number){
    return number * number;
}
//debugger;
const nilai = multiple(5);
console.log(`nilai multiple dari 5 adalah ${nilai}`);


const multiple2 = number => number * number ;

const nilai2 = multiple2(6);
console.log(`nilai multiple2 dari 6 adalah ${nilai2}`);


const inputProduct = (productName = "", number = 1) => {
    console.log(`product name ${productName}, with ${number} pieces`)
}

const isLulus = (nilai = 0) => {
    console.log(nilai)
    if (nilai >= 80)
        return true;
    else {
        return false;
    }
}

const nilaiSaya = 100;
let lulus = isLulus(nilaiSaya);
console.log(`dengan nilai saya ${nilaiSaya}, apakah saya lulus?`);
let kelulusan = ( lulus ? 'lulus': 'ngulang' );
console.log(kelulusan);

// callback function example.
const doWork = () => {
    console.log('bathing');
    console.log('clothing');
    console.log('to office');
}

const doSleep = () => {
    console.log('bathing');
    console.log('eating');
    console.log('go to kasur');
}

const ask = (message, doIt, somethingElse) => {
    const isSetuju = window.confirm(message);
    if (isSetuju){
        doIt();
    }else {
        somethingElse();
    }
}
//  type on chrome console: ask("do you work?", doWork, doSleep);