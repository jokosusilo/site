<nav id="js-nav-menu" class="nav-menu hidden lg:hidden">
    <ul class="list-none p-0 m-0">
        <li class="pl-4">
            <a
                title="Articles"
                href="/articles"
                class="nav-menu__item hover:text-primary {{ $page->isActive('/articles') ? 'active text-primary' : '' }}"
            >Articles</a>
        </li>
        <li class="pl-4">
            <a
                title="Journal"
                href="/journal"
                class="nav-menu__item hover:text-primary {{ $page->isActive('/journal') ? 'active text-primary' : '' }}"
            >Journal</a>
        </li>
        <li class="pl-4">
            <a
                title="Recommendation"
                href="/recommendation"
                class="nav-menu__item hover:text-primary {{ $page->isActive('/recommendation') ? 'active text-primary' : '' }}"
            >Recommendation</a>
        </li>
        <li class="pl-4">
            <a
                title="About Me"
                href="/about"
                class="nav-menu__item hover:text-primary {{ $page->isActive('/about') ? 'active text-primary' : '' }}"
            >About</a>
        </li>
    </ul>
</nav>
