<?php


require_once get_template_directory() . '/vendor/autoload.php';

require_once(get_template_directory() . '/App/index.php');




add_action('init', function () {

});


function my_theme_setup()
{
    load_theme_textdomain('my-theme', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'my_theme_setup');



function change_language_for_all_users($locale) {


    if(!is_ssl()){
        // $locale = 'ru_RU';

        return $locale;
    }

    $ip = $_SERVER['REMOTE_ADDR'];

    $data = (wp_remote_get("http://ip-api.com/json/{$ip}"));

    $data = (json_decode($data['body']));

    $countryCode = $data->countryCode;

    $countryCodeLower = strtolower($countryCode);

    // Устанавливаем желаемый язык
    $locale = "{$countryCodeLower}_{$countryCode}"; // Замените на нужный вам язык
    
    return $locale;
}

// Добавляем фильтр на хук locale
add_filter('locale', 'change_language_for_all_users');