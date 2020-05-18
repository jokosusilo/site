---
title: About Me
---

@extends('_layouts.master')

@include('_components.meta', [
    'title' => 'About Me',
    'url' => $page->getUrl(),
    'description' => 'A little bit about me'
])

@section('body')
    <h1 class="inline-block text-3xl font-semibold md:text-4xl">
        About
    </h1>

    <article>
        {{--     <img src="/assets/img/logo.svg"
                alt="About image"
                class="flex w-64 h-64 mx-auto my-6 bg-contain rounded-full md:float-right md:ml-10">
         --}}
            <p>Hi!. Welcome to my site.</p>
            <p>
                I'm a web developer. Currently working at <a href="https://kadangkoding.com" class="link">Kadang Koding Indonesia</a>.
            </p>
    </article>
@endsection
