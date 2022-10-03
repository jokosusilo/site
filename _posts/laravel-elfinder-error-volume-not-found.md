---
title: Laravel Elfinder Error Volume Not Found
date: '2019-09-10'
excerpt: Laravel elfinder error volume not found
---

Beberapa kali saya menggunakan [CKEditor](https://ckeditor.com/) yang digabungkan dengan [Laravel Elfinder](https://github.com/barryvdh/laravel-elfinder) untuk mengisi konten database. Misal untuk halaman deskripsi di post, atau page.

Namun dalam implementasinya, saya menemui masalah. Padahal saat saya coba di local, aman-aman saja. Masalah tersebut tertulis `Invalid backend configuration. Readable volumes not available`. Setelah browsing sana sini akhirnya ketemu [solusinya](https://laracasts.com/discuss/channels/general-discussion/laravel-elfinder-does-not-work-after-renaming-public-folder-to-public-html-on-the-server).

Tambahkan potongan code berikut ini di file `index.php` yang terletak di root directory aplikasi.

```php
<?php

//index.php
$app->bind('path.public', function() {
    return __DIR__;
});
```