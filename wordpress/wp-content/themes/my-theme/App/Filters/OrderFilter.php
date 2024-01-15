<?php

namespace App\Filters;

use \WP_REST_Request;
use \WP_REST_Response;

use App\Filters\Filter;


class OrderFilter extends Filter
{
    public static function register()
    {
        $namespaceOfClass = self::class;

        add_filter('woocommerce_rest_prepare_shop_order_object', "{$namespaceOfClass}::add_timezone_to_response", 11, 3);
        add_filter('woocommerce_rest_prepare_shop_order_object', "{$namespaceOfClass}::add_trutfull_total", 12, 3);

    }

    public static function add_timezone_to_response(WP_REST_Response $response, \WC_Order $order, WP_REST_Request $request)
    {

        $response->data['code'] = get_post_meta($order->get_id(), 'code', true);

        // timezone
        $shiping_timezone_id = get_post_meta($order->get_id(), 'shipping_timezone_id', true);

        if (!$shiping_timezone_id) {
            return $response;
        }

        $timezone = get_post($shiping_timezone_id);

        $reponse = apply_filters('rest_prepare_shipping_time', new WP_REST_Response($timezone->to_array()), $timezone, $request);

        $response->data['timezone'] = $reponse->data;


        return $response;
    }

    public static function add_trutfull_total(WP_REST_Response $response, \WC_Order $order, WP_REST_Request $request)
    {

        $line_items = $order->get_items();

        $total = 0;

        $lineItemsResponse = [];

        foreach ($line_items as $line_item) {
            $product = wc_get_product($line_item->get_product_id());

            $totalOfProduct = 0;

            $children = $product->get_children();


            foreach ($children as $key => $child) {
                $child = wc_get_product($child);
                $totalOfProduct += $child->get_price();
            }

            $total += $totalOfProduct * $line_item->get_quantity();

            $productData = $product->get_data();

            $src = wp_get_attachment_image_src($product->get_image_id(), 'full');

            if ($src) {
                $attachmentImage = [
                    'src' => $src[0],
                    'name' => $product->get_image_id()
                ];

                $productData['images'][] = $attachmentImage;
            }


            $productData['price'] = $totalOfProduct;

            $productResponse = [
                'quantity' => $line_item->get_quantity(),
                'product' => $productData
            ];

            $lineItemsResponse[] = $productResponse;
        }


        $response->data['total'] = $total;
        $response->data['line_items'] = $lineItemsResponse;

        return $response;
    }


}