@extends('_layouts.master')

@include('_components.meta', [
    'title' => $page->title,
    'url' => $page->getUrl(),
    'description' => $page->description
])

@section('body')
    @if ($page->cover_image)
        <img src="{{ $page->cover_image }}" alt="{{ $page->title }} cover image" class="mb-2">
    @endif

    <h1 class="mb-0 text-3xl md:text-4xl">{{ $page->title }}</h1>
    <span class="block mt-0 text-sm text-gray-600 md:text-base md:mt-1">{{ date('F j, Y', $page->date) }}</span>

    <div class="border-b article">
        @yield('content')
    </div>

    <nav class="flex flex-col justify-between text-sm md:flex-row md:text-base">
        <div class="my-1 md:my-0">
            @if ($next = $page->getNext())
                <a href="{{ $next->getUrl() }}" title="Older Post: {{ $next->title }}" class="block text-left border-transparent link">
                    &LeftArrow; {{ $next->title }}
                </a>
            @endif
        </div>

        <div class="my-1 md:my-0">
            @if ($previous = $page->getPrevious())
                <a href="{{ $previous->getUrl() }}" title="Newer Post: {{ $previous->title }}" class="block text-right border-transparent link">
                    {{ $previous->title }} &RightArrow;
                </a>
            @endif
        </div>
    </nav>
@endsection
