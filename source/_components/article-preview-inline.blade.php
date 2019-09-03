<div class="flex flex-col mb-4">
    <p class="text-gray-700 font-medium my-2">
        {{ $article->getDate()->format('F j, Y') }}
    </p>

    <h2 class="text-3xl mt-0">
        <a
            href="{{ $article->getUrl() }}"
            title="Read more - {{ $article->title }}"
            class="text-gray-900 font-extrabold"
        >{{ $article->title }}</a>
    </h2>

    <p class="mb-4 mt-0">{!! $article->getExcerpt(200) !!}</p>
</div>
