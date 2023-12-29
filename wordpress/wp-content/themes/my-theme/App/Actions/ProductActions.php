<?php

namespace App\Actions;

use App\Actions\ActionsClass;

class ProductActions extends ActionsClass
{
    public static function register()
    {
        $namespaceOfClass = self::class;

        add_action('woocommerce_process_product_meta', "{$namespaceOfClass}::add_complementary_meta_data");
    }

    public static function add_complementary_meta_data($post_id)
    {
        $properties = CFS()->get('properties');

        delete_post_meta($post_id, 'prop');

        foreach ($properties as $prop) {

            $term = get_term($prop['key'][0]);

            $value = $prop['value'];

            $termSlug = $term->slug;

            add_post_meta($post_id, 'prop', "{$termSlug}:{$value}");
        }
    }
}