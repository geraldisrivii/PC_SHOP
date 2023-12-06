<?php


require_once get_template_directory() . '/vendor/autoload.php';

require_once(get_template_directory() . '/App/index.php');




add_action('init', function () {



});


add_action('wp_enqueue_scripts', 'wp_enqueue_scripts_func');
function wp_enqueue_scripts_func()
{
    $partOfUri = $_SERVER['REQUEST_URI'];

    $pathsNames = PATHS_NAMES_ARRAY;

    $manifestArray = json_decode(file_get_contents(get_template_directory() . '/manifest.json'), true);

    $pattern = '/^auto\//';
    $replacement = '';

    foreach ($manifestArray as &$path) {
        $path = preg_replace($pattern, $replacement, $path);
    }

    $cssArray = [];
    foreach ($manifestArray as $value) {
        if (preg_match('/\.css$/', $value)) {
            $cssArray[] = $value;
        }
    }

    $dynamicValue = '0';

    if (isset($pathsNames[$partOfUri])) {
        $dynamicValue = $pathsNames[$partOfUri];
    }

    $pattern = '/' . preg_quote($dynamicValue, '/') . '/';

    foreach ($cssArray as $value) {
        if (preg_match($pattern, $value)) {
            wp_enqueue_style($dynamicValue, get_template_directory_uri() . '/' . $value, [], null);
        }
        if (preg_match('/^main/', $value)) {
            wp_enqueue_style('main', get_template_directory_uri() . '/' . $value, [], null);
        }
    }

    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', [], null, true);


    wp_enqueue_script('preloader', get_template_directory_uri() . '/libs/preloader.js', [], null, true);


}
add_filter('wp_is_application_passwords_available', '__return_true');


add_filter('woocommerce_rest_check_permissions', 'disable_ssl_verification_for_local_development', 10, 4);
function disable_ssl_verification_for_local_development($permission, $context, $object_id, $post_type)
{
    if (!is_ssl()) {
        return true;
    }
    return $permission;
}


add_filter('woocommerce_rest_prepare_product_object', 'add_custom_price_to_groupped_response', 11, 3);

function add_custom_price_to_groupped_response(WP_REST_Response $response, $product)
{
    // Проверяем, является ли товар сгруппированным
    if ($product->has_child()) {
        // Получаем массив дочерних товаров
        $children_ids = $product->get_children();
        $childrenPrice = 0;

        $children = [];

        foreach ($children_ids as $child_id) {
            // Получаем объект дочернего товара
            $child = wc_get_product($child_id);

            // Добавляем цену в массив
            $childrenPrice += $child->get_price();

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

        // Добавляем массив дочерних товаров в данные ответа
        $response->data['price'] = (string) ($childrenPrice);
        $response->data['grouped_products'] = $children;
    }

    return $response;
}


add_filter('woocommerce_rest_prepare_product_object', 'filter_products', 12, 3);


function filter_products(WP_REST_Response $response, WC_Product $product, WP_REST_Request $request)
{
    if ($request['without_grouped_products'] == true) {
        if ($product->has_child()) {

            $response->data = null;
            
            foreach ($response->get_links() as $key => $value) {
                $response->remove_link($key);
            }
            
            return $response;
        }
    }
    return $response;
}


// add_filter('rest_post_dispatch', 'filter_products_by_parameter', 10, 3);

// function filter_products_by_parameter(WP_REST_Response $response, $handler, WP_REST_Request $request)
// {

//     foreach ($response->data as $key => $field) {
//         if ($field == null) {
//             unset($response->data[$key]);
//         }
//     }

//     return $response;
// }