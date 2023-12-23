<?php

namespace App\Filters;

use \WP_REST_Request;
use \WP_REST_Response;
use \WC_Product;

use App\Filters\Filter;


class GroupedProductFilter extends Filter
{
    private static $namespaceOfClass = 'App\\Filters\\GroupedProductFilter';
    public static function register()
    {
        $namespaceOfClass = self::$namespaceOfClass;

        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_custom_price_to_groupped_response", 14, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_products_to_groupped_response", 18, 3);
        // add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::cpu_producer_filter", 16, 3);
        // add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::cpu_socket_filter", 17, 3);
        // add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::cpu_model_filter", 18, 3);
        // add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::gpu_producer_filter", 19, 3);
        // add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::gpu_model_filter", 20, 3);
    }
    public static function gpu_producer_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {

        $producers = $request['gpu_producer'];

        if (!isset($producers)) {
            return $response;
        }
        if (!$groped_product->has_child()) {
            return $response;
        }

        $gpuProduct = getChildProductBy('gpu', $groped_product);

        $producerValue = CFS()->get('producer', $gpuProduct->get_id());

        foreach ($producers as $producer) {
            if (strtolower($producerValue) == strtolower($producer)) {
                return $response;
            }
        }

        $response->data = null;
        return $response;
    }
    public static function gpu_model_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {
        $models = $request['gpu_model'];

        if (!isset($models)) {
            return $response;
        }
        if (!$groped_product->has_child()) {
            return $response;
        }

        $gpuProduct = getChildProductBy('gpu', $groped_product);

        foreach ($models as $model) {
            if ($gpuProduct->get_id() == $model) {
                return $response;
            }
        }

        $response->data = null;
        return $response;
    }

    public static function cpu_model_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {
        $models = $request['cpu_model'];

        if (!isset($models)) {
            return $response;
        }
        if (!$groped_product->has_child()) {
            return $response;
        }

        $cpuProduct = getChildProductBy('cpu', $groped_product);

        foreach ($models as $key => $model) {
            if ($cpuProduct->get_id() == $model) {
                return $response;
            }
        }

        $response->data = null;
        return $response;
    }
    public static function cpu_producer_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {
        $producers = $request['cpu_producer'];

        if (!isset($producers)) {
            return $response;
        }
        if (!$groped_product->has_child()) {
            return $response;
        }

        $cpuProduct = getChildProductBy('cpu', $groped_product);

        if ($cpuProduct) {

            $producerCpu = CFS()->get('producer', $cpuProduct->get_id());

            // Если он не определен не отображаем элемент так как не можем убедится в производителе
            if (!$producerCpu) {
                $response->data = null;
                return $response;
            }

            // Если производитель процессора совпадает с запрошенным
            foreach ($producers as $key => $producer) {
                if (strtolower($producer) == strtolower($producerCpu)) {
                    return $response;
                }
            }
        }
        $response->data = null;
        return $response;
    }

    public static function cpu_socket_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {
        $sockets = $request['cpu_socket'];
        if (!isset($sockets)) {
            return $response;
        }
        $cpuProduct = getChildProductBy('cpu', $groped_product);

        if ($cpuProduct) {
            $socketValue = getProductProp($cpuProduct, 'cpu_socket');

            foreach ($sockets as $socket) {
                if (strtolower($socketValue) == strtolower($socket)) {
                    return $response;
                }
            }
        }
        $response->data = null;
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

    public static function add_products_to_groupped_response(WP_REST_Response $response, $product, $request)
    {
        if ($product->has_child()) {
            $children_ids = $product->get_children();
            $children = [];

            foreach ($children_ids as $child_id) {
                // Получаем объект дочернего товара
                $child = wc_get_product($child_id);

                $childData = $child->get_data();

                $childResponse = apply_filters('woocommerce_rest_prepare_product_object', new WP_REST_Response($childData), $child, $request);

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