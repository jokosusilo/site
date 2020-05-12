---
title: Recommendation
---

@extends('_layouts.master')

@include('_components.meta', [
    'title' => 'Recommendation',
    'url' => $page->getUrl(),
    'description' => 'Collection of link, video or other resource to level up your skills.'
])

@section('body')
    <h1 class="inline-block mb-0 text-3xl md:text-4xl md:mb-1">
        Recommendation
    </h1>
    <p class="m-0 text-sm md:text-base">Collection of link, video or other resource to level up your skills.</p>

    <h2 class="mb-1 text-xl">Article</h4>
    @foreach ($recommendationArticle as $item)
        <div class="flex items-baseline mb-1 md:items-center">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
                {{-- <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path> --}}
                {{-- <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> --}}
            </svg>
            <a
                href="{{ $item->link }}"
                title="Read more - {{ $item->title }}"
                class="mt-0 text-black link"
                target="_blank"
            >
                {{ $item->title }}
            </a>
        </div>
    @endforeach

    <h2 class="mb-1 text-xl">Video</h2>
    @foreach ($recommendationVideo as $item)
        <div class="flex items-baseline mb-1 md:items-center">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
            <a
                href="{{ $item->link }}"
                title="Watch - {{ $item->title }}"
                class="mt-0 text-black link"
                target="_blank"
            >
                {{ $item->title }}
            </a>
        </div>
    @endforeach
@stop
