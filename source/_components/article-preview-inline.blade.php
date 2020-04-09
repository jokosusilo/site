<div class="flex flex-col mb-8">
    <p class="text-gray-700 font-medium mt-2 mb-0 text-sm">
        {{ $article->getDate()->format('F j, Y') }}
    </p>

    <h2 class="text-2xl mt-0 mb-2">
        <a
            href="{{ $article->getUrl() }}"
            title="Read more - {{ $article->title }}"
            class="text-gray-900 hover:text-primary border-b border-transparent hover:border-b hover:border-primary font-bold tracking-tight"
        >{{ $article->title }}</a>
    </h2>

    <p class="my-0">{!! $article->getExcerpt(200) !!}</p>
</div>
