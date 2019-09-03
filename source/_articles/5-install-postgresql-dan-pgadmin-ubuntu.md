---
extends: _layouts.post
section: content
title: Install PostgreSQL dan pgAdmin Ubuntu
date: 2019-01-01
description: .
---

Beberapa pekan terakhir ini teman saya di [KadangKoding](https://kadangkoding.com) sedang mengerjakan proyek SIAKAD salah satu perguruan tinggi swasta di daerah Jawa Timur. Dalam implementasinya, database yang digunakan adalah PostgreSQL.

Iseng-iseng ingin melihat hasil aplikasinya, maka saya perlu menginstall Postgre di ubuntu yang saya gunakan. Setelah browsing dan mencoba-coba, berikut langkah-langkah installasinya.

#### 0. Persiapan
```bash
sudo apt-get update
```

#### 1. Install PostgreSQL
Untuk menginstall postgre, lakukan command berikut :

```bash
sudo apt-get install postgresql
```
Setelah proses instalasi selesai, coba masuk ke postgre dengan command :

```bash
sudo -u postgres psql
```
Untuk melakukan set / mengubah password gunakan langkah berikut ini :

```bash
ALTER USER postgres PASSWORD 'newpassword';
```
Setelah password kita set, dan kita ingin masuk ke postgre lakukan :

```bash
psql -u postgres -h localhost
```

#### 2. Install pgAdmin
Karena saya perlu melakukan import database, maka aplikasi yang mungkin paling simple untuk memanage database postgre adalah pgAdmin. Aplikasi ini mirip phpMyAdmin. Atau lebih gampangnya, pgAdmin adalah phpMyadmin untuk postgreSQL.

Dari website [PostgreSQL](https://postgresql.org/) versi terbaru adalah pgAdmin4.

Berikut langkah-langkah installasinya.

##### Import the repository key
```bash
sudo apt-get install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```
##### Add source code repository
```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```
##### Installation
```bash
sudo apt-get update
sudo apt-get install pgadmin4
```
Setelah proses selesai, tinggal masuk ke menu kemudian cari dan jalankan pgAdmin4. Atau dari terminal tinggal ketik pgadmin4

___
#### Reference
1. http://www.indjango.com/ubuntu-install-postgresql-and-pgadmin/
2. https://wiki.postgresql.org/wiki/Apt
