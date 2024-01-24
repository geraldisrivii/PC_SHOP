<?php

namespace App\Filters;

use \WP_REST_Request;
use \WP_REST_Response;
use \WC_Product;

use App\Filters\Filter;


class GroupedProductFilter extends Filter
{
    public static function register()
    {
        $namespaceOfClass = self::class;

        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_custom_price_to_groupped_response", 14, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_products_to_groupped_response", 18, 3);
        add_filter("woocommerce_rest_product_object_query", "{$namespaceOfClass}::series_filter", 50, 2);
    }

    public static function series_filter($args, $request)
    {
        if (!isset($_GET['series'])) {
            return $args;
        }
        $series = sanitize_text_field($_GET['series']);

        $args['tax_query'][] = [
            'taxonomy' => 'series',
            'field' => 'slug',
            'terms' => $series,
        ];
        return $args;
    }

    public static function add_custom_price_to_groupped_response(WP_REST_Response $response, $product)
    {
        if ($product->has_child()) {
            $children_ids = $product->get_children();

            $childrenPrice = 0;

            foreach ($children_ids as $child_id) {

                $child = new WC_Product($child_id);

                $childrenPrice += $child->get_price();
            }

            // Добавляем массив дочерних товаров в данные ответа
            $response->data['price'] = (string) ($childrenPrice);
        }

        return $response;
    }

    public static function add_products_to_groupped_response(WP_REST_Response $response, $product, $request)
    {
        if ($product->has_child()) {
            $children_ids = $product->get_children();
            $children = [];

            foreach ($children_ids as $child_id) {
                // Получаем объект дочернего товара
                $child = wc_get_product($child_id);

                $childData = $child->get_data();

                $post_id = $child->get_id();

                // $fields = CFS()->find_fields([
                //     'post_id' => $post_id
                // ]);

                // foreach ($fields as $field) {
                //     $childData['cfs'][$field['name']] = CFS()->get($field['name'], $post_id);
                // }

                $childResponse = new WP_REST_Response($childData);

                if($request['full'] == true){
                    $childResponse = apply_filters('cfs-rest-api-fields', $childResponse, $child);

                } else{
                    $childResponse->data['cfs']['shortly_name'] = CFS()->get('shortly_name', $post_id);
                }

                $childResponse = apply_filters('add-images-to-product', $childResponse, $child, $request);

                $categories = $child->get_category_ids();
                foreach ($categories as $id) {
                    $childResponse->data['categories'][] = get_term($id, 'product_cat');
                }

                $children[] = $childResponse->data;
            }
            $response->data['grouped_products'] = $children;
        }

        return $response;
    }
}