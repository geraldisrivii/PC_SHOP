<?php


namespace App\Controllers;

use App\Models\ProductModel;
use \WP_REST_Request;
use \WP_REST_Response;


class ProductController
{
    public function createCustomProduct(WP_REST_Request $request)
    {

        $response = new WP_REST_Response();

        $product = new \WC_Product_Grouped();

        // Устанавливаем необходимые атрибуты товара
        $product->set_name($request['name']);
        $product->set_status('publish');
        $product->set_catalog_visibility('hidden');

        if($request['imageID']) {
            $product->set_image_id( $request['imageID'] );
        }

        $items = $request->get_param('items');

        $products = [];

        foreach ($items as $child_id) {
            $products[] = wc_get_product($child_id);
        }

        
        $product->set_children($items);

        $product->set_category_ids([get_term_by('slug', 'custom-pc', 'product_cat')->term_id]);

        $product->save();


        $productData = $product->get_data();

        $productResponse = apply_filters('woocommerce_rest_prepare_product_object', new WP_REST_Response($productData), $product, $request);

        $response->data = $productResponse->data;

        $response->set_status(201);

        return $response;
    }
}