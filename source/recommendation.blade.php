---
title: Recommendation
---

@extends('_layouts.master')

@push('meta')
    <meta property="og:title" content="Recommendation"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="Collection of link, video or other resource to level up your skills."/>
@endpush

@section('body')
    <h1 class="inline-block text-3xl md:text-4xl mb-0 md:mb-1">
        Recommendation
    </h1>
    <p class="m-0 text-sm md:text-base">Collection of link, video or other resource to level up your skills.</p>

    <h4 class="mb-1">Article</h4>
    @foreach ($recommendationArticle as $item)
        <div class="flex items-baseline md:items-center mb-1">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
                {{-- <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path> --}}
                {{-- <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> --}}
            </svg>
            <a
                href="{{ $item->link }}"
                title="Read more - {{ $item->title }}"
                class="link text-black font-normal text-lg mt-0"
                target="_blank"
            >
                {{ $item->title }}
            </a>
        </div>
    @endforeach

    <h4 class="mb-1">Video</h4>
    @foreach ($recommendationVideo as $item)
        <div class="flex items-baseline md:items-center mb-1">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
            <a
                href="{{ $item->link }}"
                title="Watch - {{ $item->title }}"
                class="link text-black font-normal text-lg mt-0"
                target="_blank"
            >
                {{ $item->title }}
            </a>
        </div>
    @endforeach
@stop
