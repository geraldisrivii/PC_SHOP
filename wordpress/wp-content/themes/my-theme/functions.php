<?php


require_once get_template_directory() . '/vendor/autoload.php';

require_once(get_template_directory() . '/App/index.php');


function my_theme_setup()
{
    load_theme_textdomain('my-theme', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'my_theme_setup');



function change_language_for_all_users($locale)
{
    if (!is_ssl()) {
        return $locale;
    }

    return $locale;
}
add_filter('locale', 'change_language_for_all_users');



add_filter('redirect_canonical', 'disable_woocommerce_redirect_canonical');
function disable_woocommerce_redirect_canonical($redirect_url)
{
    return false;
}


function hide_products_in_admin($query)
{
    if (is_admin() && $query->is_main_query() && $query->get('post_type') === 'product') {

        $query->set('tax_query', [
            [
                'taxonomy' => 'product_cat',
                'field' => 'slug',
                'terms' => 'custom-pc',
                'operator' => 'NOT IN',
            ]
        ]);
        
    }
}
add_action('pre_get_posts', 'hide_products_in_admin');
