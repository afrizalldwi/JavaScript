const janji = new Promise((resolve, reject) => {
  let sukses = true;

  if (sukses) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

janji
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((error) => {
    console.log(error);
  });
