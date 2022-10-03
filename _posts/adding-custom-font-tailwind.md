---
title: Adding Custom Font Tailwind CSS
date: '2020-05-10'
excerpt: This is the way I add custom font into tailwind css.
---

Akhir-akhir ini baru tahu kalau ada font sans bagus bernama `Inter`. Kemudian iseng ingin mencoba menggunakannya di blog ini.
Setelah browsing sana sini untuk mencari tahu cara menambahkan custom font pada tailwind css, akhirnya saya berhasil melakukannya.

Berikut adalah langkah simpel yang saya lakukan.

## Load font
Ambil font dari google font, dan pilih beberapa style yang dibutuhkan, saya biasa menggunakan 400 dan 700.
Kemudian tambahkan script untuk meload google font ke dalam tag head layout.
```html
<head>
    ...
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    ...
</head>
```

## Update tailwind config
Hal ini dibutuhkan agar saat proses compile, tailwind menambahkan `Inter` kedalam font-family dari class `font-sans`.
```js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
}
```
Selain menambahkan font `Inter`, saya juga (tetap) menambahkan default `font-sans` di belakangnya. Default `font-sans` pada tailwind menggunakan [system font](https://css-tricks.com/snippets/css/system-font-stack/).

## Compile
Untuk melihat perubahan, tinggal menjalankan perintah:
```js
npm run dev/watch
// or
yarn run dev/watch
```

Hasil akhir jika dilihat di *inspect element* akan seperti ini.

```css
.font-sans{
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
}
```