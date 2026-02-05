## Cara Menjalankan JavaScript

- Langsung dari Browser :
  Semua browser modern sudah menyediakan JavaScript Engine yang memungkinkan kita menjalankan JavaScript langsung.
- Menggunakan Node.js :
  Node.js adalah runtime JavaScript di luar browser. Dengan Node.js kita bisa menjalankan JavaScript dari terminal/command prompt(cmd).

## Menjalankan JavaScript di Browser

Untuk menjalankan JavaScript di browser ada 2 cara, yaitu :

- Cara 1 Melalui Developer Tools (Console) :
  Buka browser seperti Chrome atau Firefox. Tekan `Ctrl + Shift + I` atau klik kanan -> "inspect" -> pilih tab Console. Ketik kode JavaScript langsung di console, misalnya.

```js
console.log("Hello, World!");
```

- Cara 2 Menjalankan File `.html` di Browser :
  Kita bisa menulis JavaScript di dalam file HTML. Buat file bernama `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Belajar JavaScript</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>

    <script>
      console.log("Hello dari file HTML!");
    </script>
  </body>
</html>
```

Simpan file tersebut, kemudian buka file `index.html` di browser. Setelah itu buka console untuk melihat output `Hello dari file HTML!`.

## Menjalankan JavaScript dengan Node.js

Node.js memungkinkan kita menjalankan JavaScript di luar browser, lewat terminal atau command prompt(cmd).

- Cara Install Node.js
  Silahkan download dan install Node.js dari situs resminya di [Node.js](https://nodejs.org/en/download/current), dan pastikan pilih versi LTS (Long Term Support).
- Cek Hasil Installasi
  Setelah berhasil melakukan installasi, kita bisa memastikannya dengan cara mengetikkan perintah berikut ini di dalam terminal/CMD.

```
node --version
npm --version
```

Jika berhasil maka akan keluar versi Node.js dan NPM yang sudah terinstall.

- Menjalankan JavaScript Dengan Node.js
  Sebagai contoh disini saya ada file bernama `hello.js`, yang dimana didalam file tersebut sudah terdapat kode berikut.

```js
console.log("Hello dari Node.js!");
```

Dan untuk menjalankannya kita bisa ketikkan seperti berikut ini di dalam terminal/CMD.

```
// node [nama file yang ada]
node hello.js
```

Jika berhasil maka akan muncul tulisan `Hello dari Node.js!`.
