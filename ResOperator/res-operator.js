// 1. Menangkap banyak argumen dalam function
// function tambahkan(...angka) {
//   let total = 0;
//   for (let nilai of angka) {
//     total += nilai;
//   }
//   return total;
// }

// console.log(tambahkan(1, 2, 3));
// console.log(tambahkan(1, 2, 3, 4, 5));

// 2. Res Parameter harus di Akhir
// function cekData(nama, ...hobi) {
//   console.log("Nama: ", nama);
//   console.log("Hobi: ", hobi);
// }

// cekData("Budi", "Mancing", "Nonton Film", "Ngoding");

// 3. Res Parameter pada Destructuring
// ====== ARRAY DESTRUCTURING ====== //
// const angka = [1, 2, 3, 4, 5];

// const [pertama, kedua, ...sisanya] = angka;

// console.log(pertama);
// console.log(kedua);
// console.log(sisanya);

// ====== OBJECT DESTRUCTURING ====== //
// const data = {
//   nama: "Jawir",
//   kelas: 12,
//   umur: 18,
//   jurusan: "Informatika",
// };

// const { nama, kelas, ...infoLain } = data;

// console.log(nama);
// console.log(kelas);
// console.log(infoLain);
