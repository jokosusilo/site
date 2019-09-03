<?php

return [
    'baseUrl' => '',
    'production' => false,
    'siteName' => 'Joko Susilo',
    'siteDescription' => 'Personal Website of Joko Susilo.',
    'siteAuthor' => 'Joko Susilo',

    // collections
    'collections' => [
        'articles' => [
            'author' => 'Joko Susilo', // Default author, if not provided in a post
            'sort' => '-date',
            'path' => function($page){
                $filename = explode('-', $page->getFilename());
                array_shift($filename);
                return implode('-', $filename);
            }
        ],
        'categories' => [
            'path' => '/blog/categories/{filename}',
            'articles' => function ($page, $allPosts) {
                return $allPosts->filter(function ($article) use ($page) {
                    return $article->categories ? in_array($page->getFilename(), $article->categories, true) : false;
                });
            },
        ],
    ],

    // helpers
    'getDate' => function ($page) {
        return Datetime::createFromFormat('U', $page->date);
    },
    'getExcerpt' => function ($page, $length = 255) {
        $content = $page->excerpt ?? $page->getContent();
        $cleaned = strip_tags(
            preg_replace(['/<pre>[\w\W]*?<\/pre>/', '/<h\d>[\w\W]*?<\/h\d>/'], '', $content),
            '<code>'
        );

        $truncated = substr($cleaned, 0, $length);

        if (substr_count($truncated, '<code>') > substr_count($truncated, '</code>')) {
            $truncated .= '</code>';
        }

        return strlen($cleaned) > $length
            ? preg_replace('/\s+?(\S+)?$/', '', $truncated) . '...'
            : $cleaned;
    },
    'isActive' => function ($page, $path) {
        return ends_with(trimPath($page->getPath()), trimPath($path));
    },
];
