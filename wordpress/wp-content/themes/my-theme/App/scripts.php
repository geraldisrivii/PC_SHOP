<?php

add_action('wp_enqueue_scripts', 'wp_enqueue_scripts_func', 999);
function wp_enqueue_scripts_func()
{

    $partOfUri = $_SERVER['REQUEST_URI'];

    $pathsNames = PATHS_NAMES_ARRAY;

    $manifestArray = json_decode(file_get_contents(get_template_directory() . '/manifest.json'), true);

    $pattern = '/^auto\//';
    $replacement = '';

    foreach ($manifestArray as &$path) {
        $path = preg_replace($pattern, $replacement, $path);
    }

    $cssArray = [];
    foreach ($manifestArray as $value) {
        if (preg_match('/\.css$/', $value)) {
            $cssArray[] = $value;
        }
    }

    $dynamicValue = '0';

    if (isset($pathsNames[$partOfUri])) {
        $dynamicValue = $pathsNames[$partOfUri];
    }

    $pattern = '/' . preg_quote($dynamicValue, '/') . '/';

    foreach ($cssArray as $value) {
        if (preg_match($pattern, $value)) {
            wp_enqueue_style($dynamicValue, get_template_directory_uri() . '/' . $value, [], null);
        }
        if (preg_match('/^main/', $value)) {
            wp_enqueue_style('main', get_template_directory_uri() . '/' . $value, [], null);
        }
    }

    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', [], null, true);


    wp_enqueue_script('preloader', get_template_directory_uri() . '/libs/preloader.js', [], null, true);
}

