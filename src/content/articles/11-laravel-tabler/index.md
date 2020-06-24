---
title: Laravel Tabler
date: 2020-05-18
description: A Laravel front-end scaffolding using Tabler - A premium and open source dashboard template with a responsive and high-quality UI.
---

> A Laravel front-end scaffolding using [Tabler](https://github.com/tabler/tabler) - A premium and open source dashboard template with a responsive and high-quality UI.

Adalah sebuah package laravel yang beberapa waktu yang lalu saya buat dan upload ke github.
Template ini sudah sering saya gunakan, seperti di project [Darussaadah](https://ernadwisusanti.com/darussaadah) dan [KgNatural](https://kgnatural.com). Saya suka dengan desainnya yang oke dibanding default bootstrap, alhasil saya buat packagenya.

Dengan adanya package ini, tinggal *composer require* dan *npm install* maka template akan bisa langsung digunakan.
Langkah set-up template saat pertama kali membuat project baru akan bisa dipercepat.

Silahkan menuju [repository](https://github.com/jokosusilo/laravel-tabler) untuk melihat code-nya.

## Installasi
```bash
composer require jokosusilo/laravel-tabler
php artisan ui tabler
npm install
npm run dev
```
Ada tersedia 2 template yang tersedia yaitu vertical dan horizontal. Vertical dengan sidebar menu di sebelah kiri dan horizontal dengan menu di atas.

## Screenshots
<figure>
    <img src="https://raw.githubusercontent.com/jokosusilo/laravel-tabler/master/screenshots/homepage.png" alt="Laravel Tabler Homepage View">
    <figcaption class="-mt-4">Homepage View</figcaption>
</figure>

<figure>
    <img src="https://raw.githubusercontent.com/jokosusilo/laravel-tabler/master/screenshots/login.png" alt="Laravel Tabler Login View">
    <figcaption class="-mt-4">Login View</figcaption>
</figure>

## Bug
- View yang jadi baru homepage, register, login dan reset password
- Installasi ( *npm install* ) terkadang gagal karena [Tabler](https://github.com/tabler/tabler) masih dalam tahap *alpha*.
