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
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_images_to_response", 14, 3);
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


    public static function unsetMetadata(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {
        unset($response->data['meta_data']);

        return $response;
    }

    public static function add_images_to_response(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {   
        if(!isset($response->data['images'])){
            
            if($product->get_image_id() == ''){
                return $response;
            }

            $response->data['images'][]['src'] = wp_get_attachment_image_src($product->get_image_id(), 'full')[0];

            if(empty($product->get_gallery_image_ids())){
                return $response;
            }

            foreach ($product->get_gallery_image_ids() as $id) {
                $response->data['images'][] = wp_get_attachment_image_src($id, 'full');
            }
            
        }
        return $response;
    }

    public static function optimize(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
    {
        foreach ($response->get_links() as $key => $value) {
            $response->remove_link($key);
        }
        if ($request['optimize'] == true) {

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