---
extends: _layouts.post
section: content
title: Setting Virtual Host di Windows
date: 2015-12-05
description: Cara melakukan setting virtual host di os windows
---

Pada kali ini saya mau share pengalaman saya dalam melakukan setting virtual host di windows. Setting virtual host ini biasanya saya gunakan untuk develop web app di local. Misalkan saya set url localnya adalah yii.dev atau kalau sedang develop blog, bisa blog.dev atau semacamnya.

Virtual host ini sangat berguna bila digunakan untuk develop web app yang endpointnya diletakkan di folder tertentu. Misalkan di YII ada folder web kalau di laravel ada folder public.

Langsung saja, ada 2 file yang kita akan diedit.

## Pertama
Edit file di `C:\Windows\System32\drivers\etc\hosts` dan tambahkan code seperti berikut ini. blog.dev adalah url yang kamu inginkan, bisa diedit sesuka hati.

```bash
127.0.0.1 blog.dev
```
## Kedua
Edit file di `C:\xampp\apache\conf\extra\httpd-vhosts.conf` dan tambahkan code berikut .

```bash
<VirtualHost blog.dev>
    ServerName blog.dev
    ServerAlias blog.dev
    DocumentRoot "path/to/project"
    <Directory "path/to/project">
        DirectoryIndex index.php
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```
### Keterangan
1. URL di dalam ServerName dan ServerAlias harus disesuaikan dengan url di file `C:\Windows\System32\drivers\etc\hosts`
2. path/to/project diisi dengan full path project kita berada, misal untuk yii adalah `C:/xampp/htdocs/yii/web/` dan laravel `C:/xampp/htdocs/laravel/public/`

Restart apache dan coba buka blog.dev di browsermu 😀