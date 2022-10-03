---
title: Suke Pangon - Farm
date: '2020-08-11'
excerpt: Sebulan menjelang Idul Adha kemarin, banyak yang lagi nyari kambing untuk dijadikan hewan qurban. Karena kebetulan kakak saya punya peternakan kambing, akhirnya saya coba membuat galery agar memudahkan calon pembeli memilih kambing di https://farm.sukepangon.com
---

Sebulan menjelang Idul Adha kemarin, banyak yang lagi nyari kambing untuk dijadikan hewan qurban. Karena kebetulan kakak saya punya peternakan kambing, akhirnya saya coba membuat galery agar memudahkan calon pembeli memilih kambing di [https://farm.sukepangon.com](https://farm.sukepangon.com).

Ide web ini sangat simpel, ada daftar foto kambing yang dijual beserta dengan harganya. Dan ada tombol / link yang ketika di klik akan otomatis masuk ke whatsapp beserta kambing yang dipilih. Ya sesederhana itu, tanpa ada checkout macam ecommerce.

### Stack
Karena saya cuma mau bikin static website pilihannya ada 2, react dengan gatsby atau vue dengan gridsome. Setelah mencoba react untuk membuat blog saya [ini](https://jokosusilo.web.id), saya putuskan untuk menggunakan gridsome. Sedangkan untuk stylingnya, paling mudah ya pakai tailwind CSS dengan default style yang udah bagus.

Saya coba membuat MVP di sore hari dengan foto-foto kambing seadanya. Malamnya saya coba kasih display ke kakak saya sebagai pemilik kambingnya (saya disini hanya figuran haha) dan ternyata cocok. Oke, besoknya kebetulan jadwal memandikan kambing menjelang hari raya idul adha. Alhasil data foto yang dibutuhkan langsung tersedia.

### Iterasi
Website ini hanya memiliki 2 halaman yaitu halaman utama dan tentang kami.

Halaman utama berisi daftar kambing yang bisa diurutkan berdasarkan filter `default (urutan di kandang)`, `harga paling rendah`, `harga paling tinggi`. Halaman tentang kami menjelaskan fasilitas yang didapat serta lokasi peternakan kami berada.

Dalam perjalanannya, saya melakukan beberapa perbaikan pada halaman utama. Mulai dari warna tombol pesan, muncul text `sold` bila kambing sudah terjual, state hover untuk link pemesanan dan beberapa hal lainnya. Sedangkan pada halaman tentang kami, ada sedikit perbaikan text dan posisi ketika website dibuka melalui handphone.

### Next?
Karena gallery ini dirasa memberi manfaat, kemungkinan besar kami akan menambah beberapa halaman / fitur seperti tabungan qurban,  display produk lain seperti pakan ternak, tetes tebu, dan lainnya.

Let see in another days!