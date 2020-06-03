---
title: Work Journal
---
@extends('_layouts.master')

@include('_components.meta', [
    'title' => 'Work Journal',
    'url' => $page->getUrl(),
    'description' => "The list work journal from {$page->siteName}"
])

@section('body')
    <h1 class="inline-block text-3xl font-semibold md:text-4xl">
        Work Journal
    </h1>

    @foreach ($journals as $article)
        @include('_components.article-preview-inline')
    @endforeach
@stop
