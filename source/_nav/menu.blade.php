<nav class="hidden lg:flex items-center justify-end text-lg">
    <a title="{{ $page->siteName }} Blog" href="/articles"
        class="ml-6 text-gray-800 hover:text-primary {{ $page->isActive('/articles') ? 'active text-primary' : '' }}">
        Articles
    </a>

    <a title="{{ $page->siteName }} Journal" href="/journal"
        class="ml-6 text-gray-800 hover:text-primary {{ $page->isActive('/journal') ? 'active text-primary' : '' }}">
        Journal
    </a>

    <a title="{{ $page->siteName }} Recommendation" href="/recommendation"
        class="ml-6 text-gray-800 hover:text-primary {{ $page->isActive('/recommendation') ? 'active text-primary' : '' }}">
        Recommendation
    </a>

    <a title="{{ $page->siteName }} About" href="/about"
        class="ml-6 text-gray-800 hover:text-primary {{ $page->isActive('/about') ? 'active text-primary' : '' }}">
        About
    </a>
</nav>
