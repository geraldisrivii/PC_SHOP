<?php


require_once get_template_directory() . '/vendor/autoload.php';

require_once(get_template_directory() . '/App/index.php');


function my_theme_setup()
{
    load_theme_textdomain('my-theme', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'my_theme_setup');



function change_language_for_all_users($locale) {
    if(!is_ssl()){
        return $locale;
    }

    return $locale;
}
add_filter('locale', 'change_language_for_all_users');