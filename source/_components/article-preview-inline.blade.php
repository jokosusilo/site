<div class="flex flex-col mb-8">
    <p class="mt-2 mb-0 text-sm text-gray-600">
        {{ $article->getDate()->format('F j, Y') }}
    </p>

    <h2 class="mt-0 mb-2 text-2xl">
        <a
            href="{{ $article->getUrl() }}"
            title="Read more - {{ $article->title }}"
            class="font-bold tracking-tight text-gray-900 border-b border-transparent hover:text-primary hover:border-b hover:border-primary"
        >{{ $article->title }}</a>
    </h2>

    <p class="my-0">{!! $article->getExcerpt(200) !!}</p>
</div>
