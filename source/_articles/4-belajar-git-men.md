---
extends: _layouts.post
section: content
title: Belajar Git Men!
date: 2015-12-9
description: Dasar dasar belajar git
---

> Git adalah salah satu tools yang berfungsi sebagai Version Control System (VCS), sederhananya adalah alat untuk memanajemen perubahan dalam perangkat lunak.

Git sangat bermanfaat jika digunakan dalam kerja team. Biasanya kalau cara manual dengan kita membuat wifi lalu mengedit di satu tempat, ini akan membingungkan ketika mengedit file yang sama dan tidak akan bisa ditrack siapa yang mengubah file dan perubahan filenya tidak akan kelihatan. Dengan git, permasalahan tersebut dapat teratasi karena semua perubahan file mulai dari bagian mana yang berubah sampai siapa yang merubah akan kelihatan di repository. Keren Men!

Awalnya saya bingung belajar git yang cepet itu dari mana, karena setelah baca-baca dokumentasi dan beberapa tutorial ternyata tetep belum paham. Kemudian saya coba cari video di youtube dan akhirnya ketemu tutorial keren. Cuma 4 part aja langsung paham gimana penggunaan GIT untuk personal dan team.

Ini linknya siapa tahu berguna [Git and GitHub Version Control Tutorial](https://www.youtube.com/watch?v=mYjZtU1-u9Y) – [308tube](https://www.youtube.com/watch?v=mYjZtU1-u9Y) .

Penggunaan GIT untuk personal jauh lebih mudah dibanding dengan team. kalau personal tinggal tiap kali ada pembaharuan yang cukup banyak tinggal commit dan push ke server dan gak akan bentrok dengan code sebelumnya. karena yang ngedit cuman kita sendiri. Sedangkan dalam team, saat melakukan push ke server, mungkin akan ada beberapa penyesuaian terkait merge conflicts.

Karena saya baru belajar GIT, jadi yang saya mau share kali ini adalah penggunaan secara personal.

Secara umum, urutan untuk local repo adalah `inisiasi` – `add to staging area` – `commit`. Nah, kalau ingin di taruh juga di server semisal bitbucket atau github, maka urutannya berubah menjadi `inisiasi` – `add remote` – `add to staging area` – `commit` – `push to remote`. Penjelasan command lebih detail sebagai berikut.

#### Pertama dan utama
Pastikan git sudah terinstall di komputermu. Kalau belum kunjungi website git download dan install git di komputermu. Kalau sudah, buka application git bash. Kemudian masuk ke directory yang akan digunakan. Misal project saya ada di `C://xampp/htdocs/project` maka,

```bash
cd /c/xampp/htdocs/project
```

```bash
# Inisiasi
git init
# Gunanya untuk inisiasi git repositoy
```

#### Add Remote (Optional)
Jika hanya ingin sebagai local repository (tidak di upload ke bitbucket atau github) lewati command ini. Jika akan di push ke server, wajib dilakukan

```bash
git remote add <remote-name, biasanya origin> <url-remote>
# Misalkan,
git remote add origin https://github.com/jokosusilo/jokosusilo.git
Add to Staging Area
git add .
add all files to staging area
```

#### Commit
```bash
git commit -m "message"
# Misalkan
git commit -m "First Commit"
git commit -m "Fixing error in Controller bla bla bla"
```

#### Push ke server (Optional)
```bash
git push <remote-name, biasanya origin> <branch>
# Misalkan
git push origin master
```

### Keterangan
Sesuaikan remote-name dengan remote-name disaat add remote (atau langkah kedua)

Beberapa command yang bermanfaat dalam GIT
```bash
git status         # Untuk melihat status
git log            # melihat commit history
git diff           # view difference
git diff --cached  # view difference in staging area
```