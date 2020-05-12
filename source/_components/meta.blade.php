@push('meta')
    <meta name="description" content="{{ $description }}">

    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="{{ $page->baseUrl }}/assets/img/logo.svg" />
    <meta property="og:url" content="{{ $url }}"/>
    <meta property="og:description" content="{{ $description }}" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{{ $title }}" />
    <meta name="twitter:description" content="{{ $description }}" />
    <meta name="twitter:image" content="{{ $page->baseUrl }}/assets/img/logo.svg" />
@endpush