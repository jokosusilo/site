---
pagination:
    collection: articles
    perPage: 0
title: Articles
---
@extends('_layouts.master')

@include('_components.meta', [
    'title' => 'Articles',
    'url' => $page->getUrl(),
    'description' => "The list articles from {$page->siteName}"
])

@section('body')
    <h1 class="inline-block text-3xl font-semibold md:text-4xl">
        Articles
    </h1>

    @foreach ($pagination->items as $article)
        @include('_components.article-preview-inline')
    @endforeach

    @if ($pagination->pages->count() > 1)
        <nav class="flex my-8">
            @if ($previous = $pagination->previous)
                <a
                    href="{{ $previous }}"
                    title="Previous Page"
                    class="px-5 py-3 mr-3 bg-gray-200 rounded hover:bg-gray-400"
                >&LeftArrow;</a>
            @endif

            @foreach ($pagination->pages as $pageNumber => $path)
                <a
                    href="{{ $path }}"
                    title="Go to Page {{ $pageNumber }}"
                    class="bg-gray-200 hover:bg-gray-400 text-blue-700 rounded mr-3 px-5 py-3 {{ $pagination->currentPage == $pageNumber ? 'text-blue-600' : '' }}"
                >{{ $pageNumber }}</a>
            @endforeach

            @if ($next = $pagination->next)
                <a
                    href="{{ $next }}"
                    title="Next Page"
                    class="px-5 py-3 mr-3 bg-gray-200 rounded hover:bg-gray-400"
                >&RightArrow;</a>
            @endif
        </nav>
    @endif
@stop
