---
title: Membuat Simple Preview Image Upload
date: 2015-12-06
description: Membuat simpe preview image upload menggunakan javascript
---

Terkadang saat kita membuat fitur upload image, kita ingin mempermudah user dengan cara memberikan image preview terlebih dahulu sebelum file disubmit. Selain mengurangi kemungkinan user salah memilih gambar, juga bisa untuk memperkeren tampilan.

Berikut fungsinya

```javascript
function imagePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // $('#preview-image') adalah tag img untuk menampilkan preview image
            $('#preview-image').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
```
Dengan Jquery, kita bisa memanggil fungsi dengan event onChange pada input type file seperti berikut,

```javascript
$('#photo').change(function(event) {
    imagePreview(this);
});
```