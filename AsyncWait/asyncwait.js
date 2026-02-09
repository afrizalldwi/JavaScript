// async function hello() {
//   return "Hello World!";
// }

// hello().then((hasil) => console.log(hasil));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Selesai setelah delay");
//     }, ms);
//   });
// }

// async function proses() {
//   console.log("Mulai...");
//   let hasil = await delay(3000);
//   console.log(hasil);
//   console.log("Selesai");
// }

// proses();

// function login(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user === "admin") {
//         resolve("Berhasil Login!");
//       } else {
//         reject("Gagal Login!");
//       }
//     }, 3000);
//   });
// }

// async function prosesLogin() {
//   try {
//     let hasil = await login("anas");
//     console.log(hasil);
//   } catch (error) {
//     console.log(error);
//   }
// }

// prosesLogin();

async function ambilData() {
  let [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/2"),
  ]);

  console.log(await data1.json());
  console.log(await data2.json());
}

ambilData();
