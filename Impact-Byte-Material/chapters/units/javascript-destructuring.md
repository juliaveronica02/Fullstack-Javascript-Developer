# Sesi 10 Bagian 5: Destrukturisasi

Pada sesi kali ini, kita akan mempelajari carnaya membuat destrukturisasi pada Objek maupun pada array.

Destrukturisasi adalah cara untuk menyimpan semua nilai pada suatu objek ataupun array ke dalam variabel.

Yuk kita bahas lebih lanjut!

## Destrukturisasi Array

Pada Javascript ES5, cara menyimpan nilai dari sebuah array di dalam variabel adalah sebagai berikut:

```javascript
let buah = ['mangga', 'pisang', 'anggur'];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); // output: 'mangga'
console.log(buah2); // output: 'pisang'
console.log(buah3); // output: 'anggur'
```

Bayangkan kalau elemen pada array ada ratusan, atau ribuan, capek kan tuh?

Makanya, pakai destrukturisasi!

Syntax yang digunakan seperti ini:

```javascript
let [elemen1, elemen2] = namaArray;
```

Contoh:

```javascript
let buah = ['mangga', 'pisang', 'anggur'];

let [buah1, buah2, buah3] = buah;

console.log(buah1); // output: 'mangga'
console.log(buah2); // ouput: 'pisang'
console.log(buah3); // output: 'anggur'
```

Coba di [sini](https://repl.it/@sarahgushef/Destrukturisasi-Array)

Dan kalian juga bisa memilih elemen mana saja yang ingin disimpan di dalam variabel, dengan menggunakan 'koma kosong' atau tidak usah disebutkan element tersebut saat distrukturisasi (jika elemen tersebut terdapat di paling terakhir dari array)

contoh:

```javascript
let [namaDepan, , pangkat] = ['andi', 'harahap', 'jendral', 'angkatan udara'];

console.log(namaDepan); // output: 'andi'
console.log(pangkat); // output: 'jendral'
```

Coba di [sini](https://repl.it/@sarahgushef/Memilih-Elemen-Array-pada-Destrukturisasi)

Destrukturisasi bisa juga digunakan untuk memberikan properti dan nilai pada object yang nilainya didapatkan dari elemen pada array.

contoh:

```javascript
let user = {};
[user.namaDepan, user.namaBelakang] = 'andi harahap'.split(' ');

console.log(user); // output: { namaDepan: 'andi', namaBelakang: 'harap' }
console.log(user.namaDepan); // output: 'andi'
console.log(user.namaBelakang); // output: 'harahap'
```

Coba di [sini](https://repl.it/@sarahgushef/Destrukturisasi-Array-untuk-Properti-dan-Nilai-Objek)

## Destrukturisasi Data String

Kerennya lagi, destrukturisasi bisa digunakan pada data string.

contoh:

```javascript
let [a, b, c] = 'xyz';

console.log(a); // output: 'x'
console.log(b); // output: 'y'
console.log(c); // output: 'z'
```

Coba di [sini](https://repl.it/@sarahgushef/Destrukturisasi-Data-String)

Atau bisa juga digunakan pada data string yang dikombinasikan dengan <u>method yang dapat mengubah string menjadi array</u>, contohnya `split()`.

contoh:

```javascript
let [namaDepan, namaBelakang] = 'andi harahap'.split(' ');

console.log(namaDepan); // output: 'andi'
console.log(namaBelakang); // output: 'harahap'
```

Coba di [sini](https://repl.it/@sarahgushef/Kombinasi-Destrukturisasi-Data-String-dengan-Method)

## Destrukturisasi Objek

Pada Javascript ES5, cara menyimpan nilai dari sebuah objek di dalam variabel adalah sebagai berikut:

```javascript
let orang = {
  nama: 'andi',
  umur: 22,
  sudahMenikah: false
};

let nama = orang.nama;
let umur = orang.umur;
let sudahMenikah = orang.sudahMenikah;

console.log(nama); // output: 'andi'
console.log(umur); // output: 22
console.log(sudahMenikah); // output: false
```

Pada Javascript ES6, caranya lebih singkat dong, yaitu dengan destrukturisasi.

syntax destrukturisasi adalah seperti ini:

```javascript
let { namaProperti1, namaProperti2, namaProperti3 } = namaObjek;
```

Nama variabel baru untuk destrukturisasi harus sama dengan nama properti pada objek yang akan didestrukturisasi.

contoh:

```javascript
let orang = {
  nama: 'andi',
  umur: 22,
  sudahMenikah: false
};

// Destrukturisasi Objek
let { nama, umur, sudahMenikah } = orang;

console.log(nama); //output: 'andi'
console.log(umur); //output: 22
console.log(sudahMenikah); //output: false
```

Coba di [sini](https://repl.it/@sarahgushef/Destrukturisasi-Objek)

Namun, jika nama variabel yang baru ingin diubah sehingga tidak sama dengan nama properti, maka syntax destrukturasi yang digunakan adalah sebagai berikut:

```javascript
let {
  namaProperti1: namaVariabel1,
  namaProperti2: namaVariabel2,
  namaProperti3: namaVariabel3
} = namaObjek;
```

Contoh:

```javascript
let orang = {
  nama: 'andi',
  umur: 22,
  sudahMenikah: false
};

let { nama: namaOrang, umur: umurOrang, sudahMenikah: status } = orang;

console.log(namaOrang); // output: 'andi'
console.log(umurOrang); // output: 22
console.log(status); // output: false
```

Coba di [sini](https://repl.it/@sarahgushef/Mengubah-Nama-Variabel-Baru-pada-Destrukturisasi-Objek)

Lalu, apakah bisa menggunakan destrukturisasi jika objeknya bertingkat?

Bisa dong!

Contohnya seperti ini:

```javascript
let murid = {
  kelas: '12a',
  nama: ['ani', 'yahya', 'sinto'],
  prestasi: {
    olahraga: 'juara 1',
    akademik: 'juara 2'
  }
};

let {
  kelas,
  nama: [murid1, murid2, murid3],
  prestasi: { olahraga, akademik }
} = murid;

console.log(kelas); // output: '12a'
console.log(murid1); // output: 'ani'
console.log(murid2); // output: 'yahya'
console.log(murid3); // output: 'sinto'
console.log(olahraga); // output: 'juara 1'
console.log(akademik); // output: 'juara 2'
```

Coba di [sini](https://repl.it/@sarahgushef/Destrukturisasi-Objek-Bertingkat)

Tapi, kalau objek sudah sangat kompleks, maka ambil saja properti yang kita butuhkan, jangan menyusahkan diri sendiri ya!

Contoh:

```javascript
let murid = {
  kelas: '12a',
  nama: ['ani', 'yahya', 'sinto'],
  prestasi: {
    olahraga: 'juara 1',
    akademik: 'juara 2'
  }
};

let { nama } = murid;

console.log(nama); // output: ['ani', 'yahya', 'sinto']
```

Coba di [sini](https://repl.it/@sarahgushef/Destrukturisasi-Objek-dengan-Memilih-Properti-Tertentu)

---

🤔 **Tes Pemahaman**

1. Manakah destrukturisasi yang benar untuk objek di bawah ini?

   ```js
   let human = {
     name: 'Sarah',
     age: 24,
     address: 'Jakarta'
   };
   ```

   - [ ] let name, age, address = human
   - [ ] let {human} = name, age, address
   - [x] let {name, age, address} = human

---

📖 **Referensi:**

1. Destrukturisasi Array & Objek
   - [javascript.info](https://javascript.info/destructuring-assignment)
   - [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
