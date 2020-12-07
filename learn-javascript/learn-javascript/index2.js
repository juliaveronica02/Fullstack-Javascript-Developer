// NaN is not a number.
// NaN example.
const nanValue = 5 * 'a';
console.log(`NaN value is "${nanValue}"`);
// isNaN example.
const ifNaN = isNaN(nanValue) ? 'NaN value' : 'not NaN value'
console.log("if NaN", ifNaN);

// undefined means not input or no value(score).
// undefined example.
let undefinedNumber;
console.log(`value from this variable is ${undefinedNumber}`);

// nukk means declaration.
// null example.
let valueNull = null
console.log(`value from variable valueNull is ${valueNull}`);

// parseInt example.
let nilaiKecepatan = "200 km";
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

// parseInt example.
let nilaiNominalDidepan = "km 20";
let nilainyaAja2 = parseInt(nilaiNominalDidepan);
console.log(nilainyaAja2);

// example parseFloat.
let celcius ="34.5 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

// example parseFloat2.
let celcius2 ="34.5 derajat celcius";
let angkaCelcius2 = parseInt(celcius2);
console.log(angkaCelcius2);

// example parseFloat3.
let celcius3 =" derajat 34.5 derajat celcius";
let angkaCelcius3 = parseFloat(celcius3);
console.log(angkaCelcius3);

//decode uri for backend.
const alamatWebsite = "https:www.google.com?query=belajar html";
console.log(`encode uri ${encodeURI(alamatWebsite)}`);

//decode uri for backend2.
const alamatWebsite2 = "https:www.google.com?query=belajar html&";
console.log(`encode uri ${encodeURI(alamatWebsite2)}`);
const alamatWebsite3 = 'http://127.0.0.1:5500/julia%20veronica';
console.log(`decode uri ${decodeURI(alamatWebsite3)}`);

// string object.
const nama = "julia";
console.log(nama)
console.log(`panjang variable nama adalah ${nama.length}`)

//access karakter.
const nama2 = "julia";
console.log(nama2)
console.log(`panjang variable nama adalah ${nama2.length}`)
console.log(`karakter ke dua adalah ${nama2.charAt(1)}`)
console.log(`fungsi chartAt dengan -1 mengahasilkan ${nama2.charAt(-1)}`);
console.log(`fungsi chartAt dengan parameter 10 mengahasilkan ${nama2.charAt(10)}`);

let namaPanjang = nama+' Veronica';
console.log(namaPanjang)
console.log(namaPanjang.toUpperCase());
console.log(namaPanjang.toLocaleLowerCase());

// example searching for a substring.
const kalimat = "saya ingin belajar coding supaya bisa diterima di perusahaan google";
const kataPencarian = "diterima ";
console.log(kalimat)
const kataDidapat = kalimat.indexOf(kataPencarian);
if(kataDidapat >0){
    console.log(`kata ${kataPencarian}ditemukan di index ${kataDidapat}`);
}
else{
    console.log(`kata ${kataPencarian}tidak ditemukan`)
}

//contoh include.
const kalimat2 = "saya ingin belajar coding supaya bisa diterima di perusahaan google";
const kataPencarian2 = "diterima ";
console.log(kalimat2)
const kataDidapat2 = kalimat2.indexOf(kataPencarian2);
if(kalimat2.includes(kataPencarian2)){
    console.log(`kata ${kataPencarian2} ditemukan`);
}
else{
    console.log(`kata ${kataPencarian}tidak ditemukan`)
}

//contoh special character usually prefix with "\".
console.log('newline\nsecond newline')
console.log('newline \n \n\n\nsecond newline')
console.log('dia berkata "ya itu benar"');
console.log('dia berkata "ya itu benar" yang lain i can\'t do it');


// learn number.
const num = 3.14;
console.log(num.toFixed(1));

// learn array.
const namaSiswaImpactByte = ['sony', 'frederick', 'ozy', 'indra', 'julia'];
const arrayKosong = [];
namaSiswaImpactByte.push('evan'); //nambah item di aray terakhir
console.log(namaSiswaImpactByte)
namaSiswaImpactByte.pop()
console.log(namaSiswaImpactByte);

// example for in 1.
// for(let siswa in namaSiswaImpactByte){
//     console.log(namaSiswaImpactByte);
// }

// array for in.
for( let index in namaSiswaImpactByte){
    console.log(namaSiswaImpactByte[index]);
}

// learn array method.
const namaSiswaUIB = ['agnes', 'bill', 'river', 'oriq', 'vincent']
const namaSiswaGlints = namaSiswaImpactByte.concat(namaSiswaUIB) ; //concat .. gabung array
console.log(namaSiswaGlints);
console.log(namaSiswaImpactByte);

//learn array sorting.
// namaSiswaGlints.sort((a,b)=> a-b).
namaSiswaGlints.sort(function(a, b){
    console.log(a,b);
    return a-b;
})

//learn array sorting2.
// namaSiswaGlints.sort((a,b)=> a-b).
const namaSiswaSort = namaSiswaGlints.sort(function(a, b){
    // console.log(a,b);.
    return a-b;
})
console.log(namaSiswaSort.sort());

const numbers = [3,6, 1, 0, 8, 11, 9];
console.log(numbers.sort());

//learn array join 1.
console.log(namaSiswaGlints.join(''));

// learn array join 2.
console.log(namaSiswaGlints.join(', '));

//learn array forEach.
namaSiswaGlints.forEach(item =>{
    console.log(item)
})

// learn array forEach2.
namaSiswaGlints.forEach(function(value,index, array) {
    console.log(value, index, array);
})

// learn array forEach3.
namaSiswaGlints.forEach((item, index, array) => {
    console.log(`nama siswa : ${item}`)
})

//learn array 4 jarang dipakai karena akan membingungkan untuk programmer yang lain.
namaSiswaGlints.forEach((a,b,c) =>{
    console.log(a, b, c);
})

// learn map.
const namaSiswaDgnAsal = namaSiswaGlints.map((item, index) =>{
    const kota = ["Batam", "Medan", "Malang"];
    return {
        id: index + 1,
        name: item,
        asal: kota[index % 3]
    }
});

const newSiswa = {
    id: 10,
    name: 'Budi',
    asal: 'Medan'
}

namaSiswaDgnAsal.push(newSiswa)
console.log(namaSiswaDgnAsal);

// array find example.
const ditemukan = namaSiswaDgnAsal.find((item, index, array) => {
    if (item.asal == "Batam")
        return true;
    return false;
});
console.log(ditemukan);

// property value shorthand.
const name = "Babe";
const lastName = "Gokil";
const kelasnya = "businessman"
// the old way syntax.
// const person = {
//     name: name,
//     lastName: lastName,
//     kelas: kelasnya
// }

// new way syntax.
const person = {
    name,
    lastName,
    kelas: kelasnya
}
console.log(person.name);
console.log(person.lastName);

// assign object.
const bodyMeasure = {
    height: '170 cm',
    weight: '80 kg',
    kelas: 'pekerja'
}

const databaru = {
    tanggalLahir: '1 oktober'
}

const personWithMeasure = Object.assign({}, person, bodyMeasure, databaru);
console.log(person);
console.log(personWithMeasure);