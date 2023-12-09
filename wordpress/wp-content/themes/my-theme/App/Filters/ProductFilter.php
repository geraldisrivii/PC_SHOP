<?php

namespace App\Filters;

use App\Models\ProductModel;
use \WP_REST_Request;
use \WP_REST_Response;
use \WC_Product;

use App\Filters\Filter;


class ProductFilter extends Filter
{
    private static $namespaceOfClass = 'App\\Filters\\ProductFilter';
    public static function register()
    {
        $namespaceOfClass = self::$namespaceOfClass;

        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::without_grouped_products", 13, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_custom_price_to_groupped_response", 14, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_products_to_groupped_response", 15, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::unsetMetadata", 20, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::optimize", 21, 3);
    }


    public static function without_grouped_products(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {
        if (((boolean) $request['without_grouped_products']) === true) {
            if ($product->has_child()) {
                foreach ($response->get_links() as $key => $value) {
                    $response->remove_link($key);
                }
                $response->data = null;
                return $response;
            }
        }

        return $response;
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

    public static function add_products_to_groupped_response(WP_REST_Response $response, $product)
    {
        if ($product->has_child()) {
            $children_ids = $product->get_children();
            $children = [];

            foreach ($children_ids as $child_id) {
                // Получаем объект дочернего товара
                $child = wc_get_product($child_id);

                $childData = $child->get_data();

                $cfsFields = CFS()->find_fields([
                    'post_id' => $child_id
                ]);

                foreach ($cfsFields as $key => $field) {
                    $childData['cfs'][$field['name']] = CFS()->get($field['name'], $child_id);
                }

                $categories = get_the_terms($child_id, 'product_cat');

                $childData['categories'] = $categories;

                unset($childData['category_ids']);

                unset($childData['meta_data']);

                $children[] = $childData;
            }
            $response->data['grouped_products'] = $children;
        }

        return $response;
    }





    public static function unsetMetadata(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {
        unset($response->data['meta_data']);

        return $response;
    }

    public static function optimize(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {
        if ($request['optimize'] == true) {
            foreach ($response->get_links() as $key => $value) {
                $response->remove_link($key);
            }

            unset($response->data['related_ids']);
            unset($response->data['date_created']);
            unset($response->data['date_created_gmt']);
            unset($response->data['date_modified']);
            unset($response->data['date_modified_gmt']);
            unset($response->data['external_url']);
            unset($response->data['button_text']);
            unset($response->data['permalink_template']);
            unset($response->data['post_password']);
            unset($response->data['generated_slug']);
        }

        return $response;
    }
}