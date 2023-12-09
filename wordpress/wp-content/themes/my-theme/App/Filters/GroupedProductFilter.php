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
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::add_products_to_groupped_response", 15, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::cpu_producer_filter", 16, 3);
        add_filter('woocommerce_rest_prepare_product_object', "{$namespaceOfClass}::cpu_socket_filter", 17, 3);
    }

    public static function cpu_producer_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {
        $producer = $request['cpu_producer'];

        if (!isset($producer)) {
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
            if (strtolower($producer) == strtolower($producerCpu)) {
                return $response;
            }
        }
        $response->data = null;
        return $response;
    }

    public static function cpu_socket_filter(WP_REST_Response $response, WC_Product $groped_product, WP_REST_Request $request)
    {
        $socket = $request['cpu_socket'];
        if (!isset($socket)) {
            return $response;
        }
        $cpuProduct = getChildProductBy('cpu', $groped_product);

        if ($cpuProduct) {
            $socketValue = getProductProp($cpuProduct, 'cpu_socket');

            if (strtolower($socketValue) == strtolower($socket)) {
                return $response;
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
}