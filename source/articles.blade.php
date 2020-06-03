---
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
    @foreach ($articles as $article)
        @include('_components.article-preview-inline')
    @endforeach
@stop
