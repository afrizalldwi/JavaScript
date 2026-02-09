function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Berhasil");
    }, ms);
  });
}

delay(5000).then((hasil) => {
  console.log(hasil);
});
