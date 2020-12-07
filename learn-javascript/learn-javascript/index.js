// contoh NaN.
const nilaiNaN = 5 * 'a';
console.log(`nilaiNaN adalah ${nilaiNaN}`);
//NaN adalah not a number.
//contoh isNaN.
const apakahNaN = isNaN(nilaiNaN)?'nilainya NaN':'nilainya bukan NaN';
console.log(apakahNaN);


//contoh underfined.
let nilaiUndefined;
console.log(`nilai dari variable ini adalah ${nilaiUndefined}`);
//undefined artinya nilai yang belum diberikan atau diisi.
const siswa = {}

//contoh null.
let nilaiNull = null;
console.log(`nilai dari variable nilaiNull adalah ${nilaiNull}`);
const guru = {
    nama:""
}
//null artinya deklarasi.

//contoh parseInt.
let nilaiKecepatan = "200 km";
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

//contoh ke dua parseInt.
let nilaiNomonalDepan = "km 20";
let nilainyaAja2 = parseInt(nilaiNomonalDepan)
console.log(nilainyaAja2);

//contoh parseFloat.
let celcius ="34.5 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

//contoh parseFloat2.
let celcius2 ="34.5 derajat celcius";
let angkaCelcius2 = parseInt(celcius2);
console.log(angkaCelcius2);

//contoh parseFloat3.
let celcius3 =" derajat 34.5 derajat celcius";
let angkaCelcius3 = parseFloat(celcius3);
console.log(angkaCelcius3);

//decode uri untuk backend.
const alamatWebsite = "https:www.google.com?query=belajar html";
console.log(`encode uri ${encodeURI(alamatWebsite)}`);

//decode uri untuk backend2.
const alamatWebsite2 = "https:www.google.com?query=belajar html&";
console.log(`encode uri ${encodeURI(alamatWebsite2)}`);
const alamatWebsite3 = 'http://127.0.0.1:5500/julia%20veronica';
console.log(`decode uri ${decodeURI(alamatWebsite3)}`);

//string object.
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

//contoh searching for a substring.
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

//contoh .
const num = 3.14;
console.log(num.toFixed(1));

//contoh array.
const namaSiswaImpactByte = ['sony', 'frederick', 'ozy', 'indra', 'julia'];
namaSiswaImpactByte.push('evan'); //nambah item di array terakhir.
console.log(namaSiswaImpactByte)
namaSiswaImpactByte.pop();
console.log(namaSiswaImpactByte);

// //contoh for in 1.
// for(let siswa in namaSiswaImpactByte){
//     console.log(namaSiswaImpactByte);
// }

//contoh for in 2.
for(let index in namaSiswaImpactByte){
    console.log(namaSiswaImpactByte[index]);
}

//contoh penggabungan array (method).
const namaSiswaUIB = ['agnes', 'bill', 'river', 'vincent']
const namaSiswaGlints =namaSiswaImpactByte.concat(namaSiswaUIB);//concat ... gabung array
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

const numbers = [3,6,1,0,8,11,9]
console.log(numbers.sort());

//learn array join 1.
console.log(namaSiswaGlints.join(''));

//learn array join 2.
console.log(namaSiswaGlints.join(', '));

//learn array forEach.
namaSiswaGlints.forEach(item =>{
    console.log(item)
})

//learn array 2.
namaSiswaGlints.forEach( siswa =>{
    console.log(`nama siswa : ${siswa}`)
})

//learn array 3.
namaSiswaGlints.forEach((item,index,array) =>{
    console.log(item, index, array);
})

//learn array 4 jarang dipakai karena akan membingungkan untuk programmer yang lain.
namaSiswaGlints.forEach((a,b,c) =>{
    console.log(a, b, c);
})

//learn map.
const namaSiswaDenganAsal = namaSiswaGlints.map((item, index, array)=>{
    return{
        noId: index +1,
        nama: item,
        asal: 'Batam'
    }
})
console.log(namaSiswaDenganAsal);

//learn map 2.
const namaSiswaDenganAsal2 = namaSiswaGlints.map((item, index)=>{
    return{
        noId: index +1,
        nama: item,
        asal: 'Batam'
    }
});
console.log(namaSiswaDenganAsal2);

const newSiswa = {
    id: 10,
    name:'julia',
    asal: 'Tanjung Pinang'
}
namaSiswaDenganAsal2.push(newSiswa)
console.log(namaSiswaDenganAsal2);

//contoh array find hanya menemukan 1 dan tidak akan lanjut loop.
const ditemukan = namaSiswaDenganAsal2.find((item, index, array) => {
    if(item.asal == "Batam")
        return true;
        return false;
});
console.log(ditemukan);

//contoh array filter cari semua dan hanya yang batam karena sama saat dikondisi.
const ditemukan2 = namaSiswaDenganAsal2.filter((item, index, array) => {
    if(item.asal == "Batam")
        return true;
        return false;
});
console.log(ditemukan2);

//foreach.
namaSiswaGlints.forEach(function(value, index, array){
    console.log(value, index, array);
})

//property value shorthand cara lama.
const name = "Julia";
const lastName = "Veronica";
const person = {
    name : name,
    lastName: lastName
}
console.log(person.name);
console.log(person.lastName);

//property value shorthand 2 cara baru.
const name1 = "Julia";
const lastName1 = "Veronica";
const kelasnya = "bisnis";
const person2 = {
    name,
    lastName,
    kelas: kelasnya
}
console.log(person2.name);
console.log(person2.lastName);

//object assign
const name3 = "Julia";
const lastName3 = "Veronica";
const person3 = {
    name : name,
    lastName: lastName
}
const bodyMeasure = {
    height: '170 cm',
    weight: '50 kg',
    kelas: 'pekerja'
}
const personWithMeasure = Object.assign({}, person3, bodyMeasure);
console.log(person3);
console.log(personWithMeasure);

//object assign 2
const name4 = "Julia";
const lastName4 = "Veronica";
const person4 = {
    name : name,
    lastName: lastName
}
const databaru = {
    tanggalLahir: '2 juni'
}
const bodyMeasure2 = {
    height: '170 cm',
    weight: '50 kg',
    kelas: 'pekerja'
}
const personWithMeasure1 = Object.assign(person4, bodyMeasure2, databaru);
console.log(person4);
console.log(personWithMeasure1);