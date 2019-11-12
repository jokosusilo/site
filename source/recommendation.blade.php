@extends('_layouts.master')

@push('meta')
    <meta property="og:title" content="{{ $page->siteName }} Reading Recommendation"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="The reading recommendation from {{ $page->siteName }}"/>
@endpush

@section('body')
    <h1 class="mb-2">Reading Recommendation</h1>
    <p class="m-0">Sometimes I found a lot of good article to read, so here I create a list about that.</p>

    <hr class="border-b my-6">

    @foreach ($recommendationList as $recommendation)
        <div class="flex items-center mb-1">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
                {{-- <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path> --}}
                {{-- <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> --}}
            </svg>
            <a
                href="{{ $recommendation->link }}"
                title="Read more - {{ $recommendation->title }}"
                class="text-gray-700 hover:text-blue-600 font-normal text-lg mt-0"
                target="_blank"
            >
                {{ $recommendation->title }}
            </a>
        </div>
    @endforeach
@stop
