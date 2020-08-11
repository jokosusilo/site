---
title: Moving to Gatsby
date: 2020-07-16
description: Berpindah dari jigsaw ke gatsby. Dari static site generator based on PHP ke javascript. Apa yang dicari?
draft: false
---

Setelah cukup lama menggunakan [jigsaw](https://jigsaw.tighten.co/) sebagai dasar pembuatan website / blog saya ini, beberapa waktu yang lalu saya mencoba untuk pindah ke [gatsby](https://www.gatsbyjs.org/). Lalu, apa sebenarnya yang saya cari? **Pengalaman!**

Ya emang pengalaman yang saya cari. Di pekerjaan sehari-hari saya lebih sering koding di Laravel. Dulu sempat explore vue untuk membuat Sistem POS (Point of Sales). Tapi ya itu dulu, akhir-akhir ini jarang banget koding javascript. Dan untuk lebih menguasai javascript akhirnya saya memutuskan untuk mencoba membuat website menggunakan javascript.

Karena belajar tanpa menerapkannya dalam real case bakalan terasa berbeda. Bukan begitu?

**Sedikit flashback**. Awalnya saya ingin menggunakan gridsome sih gara-gara lebih familiar dengan vue dibanding react. Eh ternyata setelah melihat masing-masing dokumentasi, plugin / library gatsby jauh lebih mature. Ya sudah gatsby pilihannya. Sekalian biar tahu react juga.

**Is there something new?** No! Template blog masih sama dengan yang sebelumnya, hanya beberapa bagian saya tambah dan kurangi. Background content sekarang menggunakan warna abu-abu 100 dari [tailwind](https://tailwindcss.com/). Kala secara menyeluruh, mungkin warna jadi kelihatan lebih minimalist, karena hanya memakai warna putih, hitam dan abu-abu.

Bagian yang paling saya sukai dari static site generator adalah image loading yang cepat. Gatsby akan melakukan optimasi image. Jadi image awal yang ditampilkan adalah image berukuran kecil yang sudah melewati proses optimasi. Kemudian terjadi proses download image original di background. Barulah kalau sudah selesai proses download, image kecil akan direplace oleh image original. Gampangnya gitu, kalo mau lebih jelas bisa baca [dokumentasinya]((https://www.gatsbyjs.org/docs/working-with-images/#optimizing-images-with-gatsby-image)).

Selain itu, kemudahan dalam proses deployment menggunakan service gratisan macam netlify atau vercel adalah sesuatu yang patut untuk disukai dan disyukuri. Karena tinggal push ke repo, website udah otomatis update. Kemarin sebenarnya juga bisa sih jigsaw di deploy ke vercel atau netlify, tapi ya rasanya kurang afdol aja kalo gak pakai framework yang based on javascript.

Udah itu aja. Mau pakai framework apa aja kalau blog gak diisi juga akhirnya sama aja kan? Ya semoga dengan pembaharuan ini saya jadi lebih rajin untuk posting apapun di blog ini.