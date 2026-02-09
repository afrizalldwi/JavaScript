function cekLogin(user) {
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      resolve("Berhasil Login!");
    } else {
      reject("Gagal Login");
    }
  });
}

cekLogin("anas")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
