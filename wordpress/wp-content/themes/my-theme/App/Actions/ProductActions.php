<?php

namespace App\Actions;

use App\Actions\ActionsClass;

class ProductActions extends ActionsClass
{
    public static function register()
    {
        $namespaceOfClass = self::class;

        add_action('woocommerce_process_product_meta', "{$namespaceOfClass}::add_complementary_meta_data", 10, 1);
        // add_action('woocommerce_process_product_meta', "{$namespaceOfClass}::reindex_all_arrays_in_cfs", 11, 1);
    }

    public static function add_complementary_meta_data($post_id)
    {
        $properties = CFS()->get('properties');

        if ($properties == null || empty($properties)) {
            return;
        }

        delete_post_meta($post_id, 'prop');

        foreach ($properties as $prop) {

            $term = get_term($prop['key'][0]);

            $value = $prop['value'];

            $termSlug = $term->slug;

            add_post_meta($post_id, 'prop', "{$termSlug}:{$value}");
        }
    }

    public static function reindex_all_arrays_in_cfs($post_id)
    {

        $properties = CFS()->get('properties', $post_id);
        CFS()->save(['properties' => $properties], ['ID' => $post_id]);

        dd('');

        $fields = CFS()->find_fields(['post_id' => $post_id]);

        foreach ($fields as $field) {
            if ($field['type'] == 'loop') {

                $loopValues = CFS()->get($field['name'], $post_id);

                if($loopValues == null){
                    continue;
                }

                // $loopValues = reindex_array_of_any_deep($loopValues);
                
                dd($loopValues);

                dd(CFS()->save([$field['name'] => CFS()->get($field['name'], $post_id)], ['ID' => $post_id])); 

                CFS()->save([$field['name'] => $loopValues], ['ID' => $post_id]);
            }
        }
    }
}