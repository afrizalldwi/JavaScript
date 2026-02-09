// Cara menggunakan Array
// 1. Menggunakan tanda kurung siku []
// let buah = ["jambu", "pisang", "jeruk"];

// console.log(buah);

// 2. Menggunakan new Array()
// let angka = new Array(1, 2, 3, 4, 5);

// console.log(angka);

// Mengakses data Array

// let hewan = ["sapi", "kambing", "kucing"];

// console.log(hewan[0]);
// console.log(hewan[1]);
// console.log(hewan[2]);

// Mengubah data Array
// let kewan = ["sapi", "wedus", "kucing"];
// kewan[2] = "macan";

// console.log(kewan);

// PROPERTY PENTING BANGET COYY
// 1. Property length
// let buah = ["jeruk", "pisang", "mangga"];

// console.log(buah.length);

// 2. Property push()
// buah.push("apel");

// console.log(buah);

// 3. Property pop()
// buah.pop();

// console.log(buah);

// 4. Property shift()
// buah.shift();

// console.log(buah);

// 5. Property unshift()
// buah.unshift("nanas");

// console.log(buah);

// 6. Property forEach()
// buah.forEach(function (item, index) {
//   console.log(`${index}: ${item}`);
// });

// Pakai arrow function
// buah.forEach((item, index) => console.log(index, item));

// 7. Property map()
// let angka = [1, 2, 3, 4, 5];

// let angkaBaru = angka.map(function (x) {
//   return x * 2;
// });

// console.log(angkaBaru);

// 8. Property filter()
// let angkaGanjil = angka.filter(function (x) {
//   return x % 2 !== 0;
// });

// console.log(angkaGanjil);

// Contoh kasus kecil
// let siswa = ["Ali", "Budi", "Citra", "Dina"];

// Menambahkan siswa baru
// siswa.push("Eka");

// Menghapus siswa terakhir
// siswa.pop();

// Menampilkan semua siswa
// siswa.forEach(function (nama) {
//   console.log(nama);
// });
