// Contoh default parameter menggunakan if
// function greet(nama) {
//   if (nama === undefined) {
//     nama = "guest";
//   }
//   console.log(`Halo, ${nama}`);
// }

// greet();
// greet("Anas");

// Contoh default parameter tanpa if
// function greet(nama = "guest") {
//   console.log(`Halo, ${nama}`);
// }

// greet();
// greet("Anas");

// Contoh lain
// function hitungLuas(panjang = 1, lebar = 1) {
//   return panjang * lebar;
// }

// console.log(hitungLuas());
// console.log(hitungLuas(2));
// console.log(hitungLuas(4, 4));

// Default Parameter dengan Expression
// function tambah(a, b = a) {
//   return a + b;
// }

// console.log(tambah(2));
// console.log(tambah(4, 6));
