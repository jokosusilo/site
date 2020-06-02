<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        @stack('meta')

        <title>{{ $page->siteName }}{{ $page->title ? ' | ' . $page->title : '' }}</title>

        <link rel="home" href="{{ $page->baseUrl }}">
        <link rel="icon" href="/favicon.ico">
        <link href="/articles/feed.atom" type="application/atom+xml" rel="alternate" title="{{ $page->siteName }} Atom Feed">

        @if ($page->production)
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-99055996-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-99055996-1');
            </script>
        @endif

        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>

    <body class="flex flex-col justify-between min-h-screen font-sans text-base leading-normal text-gray-800">
        <header class="flex items-center py-4 border-t-8 shadow border-primary md:h-24 md:shadow-none" role="banner">
            <div class="container flex items-center max-w-3xl px-4 mx-auto">
                <div class="flex items-center">
                    <a href="/" title="{{ $page->siteName }}" class="inline-flex items-center">
                        <img class="h-8 mr-3 md:h-10" src="/assets/img/logo.svg" alt="{{ $page->siteName }} logo" />
                    </a>
                </div>

                <div class="flex items-center justify-end flex-1">
                    @include('_nav.menu')

                    @include('_nav.menu-toggle')
                </div>
            </div>
        </header>

        @include('_nav.menu-responsive')

        <main role="main" class="container flex flex-col flex-1 w-full max-w-3xl px-4 py-8 mx-auto md:py-4 lg:py-16">
            @yield('body')
        </main>

        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>

        @stack('scripts')
    </body>
</html>
