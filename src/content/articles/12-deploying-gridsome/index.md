---
title: Deploying gridsome
date: 2020-06-05
description: Mencoba membandingkan 2 layanan yaitu netlify dan vercel dalam proses deployment website berbasis gridsome.
draft: true
---

Baru-baru ini saya membuat sebuah website menggunakan [gridsome](https://gridsome.org) dan mencoba untuk melakukan *deployment*.
Saya mencoba dua layanan yaitu [netlify](https://netlify.com) dan [vercel](https://vercel.com) untuk mengetahui perbedaan dari keduanya.

2 Hal yang menurut saya cukup penting dalam proses deployment website statis adalah pretty URL dan penanganan error 404.

Pretty URL penting karena bisa mencegah duplikat konten terjadi dalam website kita. Bila ada duplikat konten, SEO akan menjadi jelek, dan  bila SEO jelek, maka website akan susah terindeks oleh search engine.

Sedangkan untuk penanganan error 404, siapa sih yang gak mau kalau website yang dimiliki punya tampilan bagus sampai ke halaman 404?
Bukankah banyak orang yang iseng membuka url acak semacam `/asd`?

## Netlify
Deploying website statis menggunakan netlify caranya sangat mudah, tinggal mengikuti link [berikut](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/), dijamin anda tidak akan tersesat.

#### Pretty URL
Netlify punya pengaturan pretty url yang bisa diakses di setting > deploy > Post processing > Asset optimization.

Dengan diaktifkannya pengaturan ini, maka url `/about/index.html` akan otomatis menjadi `/about/`.
Dan kerennya lagi, juga melakukan redirect dari `/about` menjadi `/about/`.
Jadi tidak akan ada duplikat konten dari 2 url.

#### Handling 404
Seperti pretty url, netlify akan menghandle error 404 secara otomatis.
Jadi misalkan kita mencoba membuka url `/asd` tapi halaman tersebut tidak ada, maka netlify akan menampilkan page `404` dengan tetap berada di url `/asd`.

<!-- Dengan catatan project memiliki page `404.vue` di directory `src/pages`.
Bila file tersebut tidak ada, maka yang ditampilkan berupa text '404 - not found'. -->

## Vercel
Vercel memberikan anda 2 pilihan untuk melakukan deployment. Bisa melalui [git](https://vercel.com/docs/v2/introduction) seperti netlify atau lewat [vercel CLI](https://vercel.com/download).

#### Pretty URL

#### Handling 404

## Closing
Dari kedua layanan diatas tadi, kemudahan dalam deployment dan