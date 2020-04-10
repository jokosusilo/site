@extends('_layouts.master')

@push('meta')
    <meta property="og:title" content="{{ $page->title }}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="{{ $page->description }}" />
@endpush

@section('body')
    @if ($page->cover_image)
        <img src="{{ $page->cover_image }}" alt="{{ $page->title }} cover image" class="mb-2">
    @endif

    <h1 class="mb-0 text-3xl md:text-4xl">{{ $page->title }}</h1>

    <span class="block text-gray-600 text-sm md:text-base mt-0 md:mt-1">{{ date('F j, Y', $page->date) }}</span>

    {{-- @if ($page->categories)
        @foreach ($page->categories as $i => $category)
            <a
                href="{{ '/blog/categories/' . $category }}"
                title="View posts in {{ $category }}"
                class="inline-block bg-gray-300 hover:bg-blue-200 leading-loose tracking-wide text-gray-800 uppercase text-xs font-semibold rounded mr-4 px-3 pt-px"
            >{{ $category }}</a>
        @endforeach
    @endif --}}

    <div class="article border-b">
        @yield('content')
    </div>

    <nav class="flex flex-col md:flex-row justify-between text-sm md:text-base">
        <div class="my-1 md:my-0">
            @if ($next = $page->getNext())
                <a href="{{ $next->getUrl() }}" title="Older Post: {{ $next->title }}" class="link border-transparent block text-left">
                    &LeftArrow; {{ $next->title }}
                </a>
            @endif
        </div>

        <div class="my-1 md:my-0">
            @if ($previous = $page->getPrevious())
                <a href="{{ $previous->getUrl() }}" title="Newer Post: {{ $previous->title }}" class="link border-transparent block text-right">
                    {{ $previous->title }} &RightArrow;
                </a>
            @endif
        </div>
    </nav>
@endsection
