<?php

namespace App\Filters;

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


        add_filter('rest_post_dispatch', "{$namespaceOfClass}::exludeEmpty", 12, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::unsetMetadata", 14, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::optimize", 15, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::without_grouped_products", 16, 3);
    }


    public static function exludeEmpty(WP_REST_Response $response, $handler, WP_REST_Request $request)
    {
        $filteredArray = [];
        foreach ($response->data as $key => $value) {
            if ($value == null | $value == '' | $value == []) {
                continue;
            }
            if(gettype($key) != 'integer') {
                $filteredArray[$key] = $value;
            } else{
                $filteredArray[] = $value;
            }
        }

        $response->data = $filteredArray;

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

    public static function without_grouped_products(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {
        if ($request['without_grouped_products'] == true) {
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
}