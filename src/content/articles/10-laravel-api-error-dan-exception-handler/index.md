---
title: Laravel API Error dan Exception handler
date: 2020-05-14
description: Response json dari web service / API ketika error terkadang perlu disesuaikan. Hal ini dilakukan agar proses parsing data bisa konsisten.
---

Bulan Maret kemarin, [@mafmudin](https://twitter.com/mafmudin) dan saya mendapat tawaran proyek aplikasi android.
Dia mengerjakan aplikasinya, sedangkan saya mengerjakan web servicenya.

Proyek ini sebenarnya pengembangan dari proyek yang beberapa bulan lalu sudah saya kerjakan.
Mirip seperti forum pengaduan dimana user yang telah login bisa membuat pengaduan, kemudian admin akan memberi feedback.

Web service kali ini saya menggunakan laravel dan jwt untuk proses autentikasi.
Dalam perjalannya, saya harus menyesuaikan format response json agar proses parsing data bisa konsisten.
Terutama bila response yang keluar adalah response error.
Response ini meliputi, **AuthenticationException**, **AuthorizationException**, **ModelNotFoundException**, dan **ValidationException**.

Setelah menyepakati format json yang diinginkan, kemudian saya melakukan beberapa penyesuaian pada file *app/Exceptions/Handler.php*

```php
<?php

// Handler.php
public function render($request, Throwable $exception)
{
    return parent::render($request, $exception);
}
```

Karena yang ingin disesuaikan formatnya adalah ketika route diakses sebagai web service / API maka kita tambahkan *if($request->wantsJson())*. Dan tinggal disesuaikan pada masing-masing block *exception*.

```php
<?php

// Handler.php
public function render($request, Throwable $exception)
{
    if($request->wantsJson()){
        if ($exception instanceof AuthenticationException) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthenticated',
                'errors' => [
                    'Unauthenticated'
                ]
            ], 401);
        }

        if($exception instanceof AuthorizationException){
            return response()->json([
                'status' => 'error',
                'message' => 'This action is unauthorized.',
                'errors' => [
                    'This action is unauthorized.'
                ]
            ], 403);
        }

        if ($exception instanceof ModelNotFoundException) {
            return response()->json([
                'status' => 'error',
                'message' => 'Entry for '.str_replace('App\\Model\\', '', $exception->getModel()).' not found',
                'errors' => [
                    'Entry for ' . str_replace('App\\Model\\', '', $exception->getModel()) . ' not found'
                ]
            ], 404);
        }

        if ($exception instanceof ValidationException) {
            return response()->json([
                'status' => 'error',
                'message' => 'The given data was invalid.',
                'errors' => collect($exception->errors())->flatten()
            ], 422);
        }

    }

    return parent::render($request, $exception);
}
```

Yep, ini adalah catatan pengingat.
Bila di kemudian hari saya mendapat proyek android lagi, saya tinggal menyesuaikan format json menggunakan *snippet* diatas.