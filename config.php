<?php

use Illuminate\Support\Str;

return [
    'baseUrl' => '',
    'production' => false,
    'siteName' => 'Joko Susilo',
    'siteDescription' => 'Personal Website of Joko Susilo.',
    'siteAuthor' => 'Joko Susilo',
    'siteAuthorRole' => 'Web Developer',

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
        'journals' => [
            'author' => 'Joko Susilo', // Default author, if not provided in a post
            'sort' => '-date',
            'path' => function($page){
                $filename = explode('-', $page->getFilename());
                array_shift($filename);
                return '/journal/'.implode('-', $filename);
            }
        ],
        'recommendationArticle' => [
            'items' => [
                [
                    'title' => 'Refactoring to actions',
                    'link' => 'https://freek.dev/1371-refactoring-to-actions'
                ],
                [
                    'title' => 'Giving collections a voice',
                    'link' => 'https://timacdonald.me/giving-collections-a-voice/'
                ],
                [
                    'title' => 'Dedicated query builders for Eloquent models',
                    'link' => 'https://timacdonald.me/dedicated-eloquent-model-query-builders/'
                ],
                [
                    'title' => 'Expressive Eloquent Collections',
                    'link' => 'https://timacdonald.me/talks/expressive-eloquent-collections/'
                ],
            ]
        ],
        'recommendationVideo' => [
            'items' => [
                [
                    'title' => '"Cruddy by Design" - Adam Wathan - Laracon US 2017',
                    'link' => 'https://youtu.be/MF0jFKvS4SI'
                ],
            ]
        ]
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
        return Str::endsWith(trimPath($page->getPath()), trimPath($path));
    },
];
