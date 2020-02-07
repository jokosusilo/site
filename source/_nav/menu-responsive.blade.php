<nav id="js-nav-menu" class="nav-menu hidden lg:hidden">
    <ul class="list-none p-0 m-0">
        <li class="pl-4">
            <a
                title="Articles"
                href="/articles"
                class="nav-menu__item hover:text-blue-500 {{ $page->isActive('/articles') ? 'active text-blue-600' : '' }}"
            >Articles</a>
        </li>
        <li class="pl-4">
            <a
                title="Journal"
                href="/journal"
                class="nav-menu__item hover:text-blue-500 {{ $page->isActive('/journal') ? 'active text-blue-600' : '' }}"
            >Journal</a>
        </li>
        <li class="pl-4">
            <a
                title="Recommendation"
                href="/recommendation"
                class="nav-menu__item hover:text-blue-500 {{ $page->isActive('/recommendation') ? 'active text-blue-600' : '' }}"
            >Recommendation</a>
        </li>
        <li class="pl-4">
            <a
                title="About Me"
                href="/about"
                class="nav-menu__item hover:text-blue-500 {{ $page->isActive('/about') ? 'active text-blue-600' : '' }}"
            >About</a>
        </li>
    </ul>
</nav>
