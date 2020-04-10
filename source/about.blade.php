---
title: About Me
---

@extends('_layouts.master')

@push('meta')
    <meta property="og:title" content="About Me" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="A little bit about me"/>
@endpush

@section('body')
    <h1 class="inline-block text-3xl md:text-4xl">
        About
    </h1>

    <div class="article">
        {{--     <img src="/assets/img/logo.svg"
                alt="About image"
                class="flex rounded-full h-64 w-64 bg-contain mx-auto md:float-right my-6 md:ml-10">
         --}}
            <p>Hi!. Welcome to my site.</p>

            <p>
                I'm a web developer. Currently working at <a href="https://kadangkoding.com" class="link">Kadang Koding Indonesia</a>.
            </p>
    </div>
@endsection
