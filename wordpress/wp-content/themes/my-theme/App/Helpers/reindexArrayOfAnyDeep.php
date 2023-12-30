<?php

function reindex_array_of_any_deep(array $array)
{

    $array = array_values($array);

    foreach ($array as $value) {
        if (is_array($value)) {
            reindex_array_of_any_deep($value);
        }
    }

    return $array;
}