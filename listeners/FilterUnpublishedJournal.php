<?php

namespace App\Listeners;

use TightenCo\Jigsaw\Jigsaw;

class FilterUnpublishedJournal
{
    public function handle(Jigsaw $jigsaw)
    {
        if ($jigsaw->getConfig("production") == false) {
            return;
        }

        $jigsaw->getCollection('journal')->each(function ($item, $key) use ($jigsaw) {
            if ($item->published == false) {
                $jigsaw->getCollection('journal')->forget($key);
            }
        });
    }
}
