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
