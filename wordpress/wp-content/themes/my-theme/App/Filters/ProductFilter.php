<?php

namespace App\Filters;

use \WP_REST_Request;
use \WP_REST_Response;
use \WC_Product;

use App\Filters\Filter;


class ProductFilter extends Filter
{
    public static function register()
    {
        $namespaceOfClass = self::class;

        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::without_grouped_products", 13, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_images_to_response", 14, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::unsetMetadata", 20, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::optimize", 22, 3);
        add_filter('woocommerce_rest_product_object_query', "{$namespaceOfClass}::filter_motherboard_socket", 51, 2);
        add_filter('add-images-to-product', "{$namespaceOfClass}::add_images_to_response", 1, 3);
    }


    public static function filter_motherboard_socket($args, WP_REST_Request $request) {
        
        $filters = $request->get_param('filters');
        if(!isset($filters) && empty($filters)) {
            return $args;
        }

        $compares = [
            'match' => '=',
            'min' => '>=',
            'max' => '<=',
        ];

        foreach ($filters as $filter) {
            $args['meta_query'][] = [
                'prop' => 'prop',
                'value' => $filter['name'] . ":" . $filter['value'],
                'compare' =>  $compares[$filter['kind']],
            ];
        }


        return $args;
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
                $response->data['images'] = [];
                return $response;
            }

            $attachmentImage = [
                'src' => wp_get_attachment_image_src($product->get_image_id(), 'full')[0],
                'name' => $product->get_image_id(),
                'id' => (integer)$product->get_image_id(),
            ];

            $response->data['images'][] = $attachmentImage;

            if(empty($product->get_gallery_image_ids())){
                return $response;
            }

            foreach ($product->get_gallery_image_ids() as $id) {

                $attachmentImage = [
                    'src' => wp_get_attachment_image_src($id, 'full')[0],
                    'name' => (string)$id,
                    'id' => (integer)$id
                ];
                $response->data['images'][] = $attachmentImage;
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
            unset($response->data['catalog_visibility']);
            unset($response->data['short_description']);
            unset($response->data['date_on_sale_from']);
            unset($response->data['date_on_sale_from_gmt']);
            unset($response->data['date_on_sale_to']);
            unset($response->data['date_on_sale_to_gmt']);
            unset($response->data['on_sale']);
            unset($response->data['purchasable']);
            unset($response->data['virtual']);
            unset($response->data['downloadable']);
            unset($response->data['downloads']);
            unset($response->data['download_limit']);
            unset($response->data['download_expiry']);
            unset($response->data['tax_status']);
            unset($response->data['sold_individually']);
            unset($response->data['weight']);
            unset($response->data['dimensions']);
            unset($response->data['shipping_required']);
        }

        return $response;
    }
}