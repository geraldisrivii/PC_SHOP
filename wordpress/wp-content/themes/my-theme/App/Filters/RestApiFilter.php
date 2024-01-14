<?php

namespace App\Filters;

use \WP_REST_Request;
use \WP_REST_Response;

use App\Filters\Filter;


class RestApiFilter extends Filter
{

    public static function register()
    {
        $namespaceOfClass = self::class;

        // add_filter('rest_post_dispatch', "{$namespaceOfClass}::exludeEmpty", 12, 3);
        add_filter('woocommerce_rest_check_permissions', "{$namespaceOfClass}::disable_ssl_verification_for_local_development", 10, 4);
    }

    public static function exludeEmpty(WP_REST_Response $response, $handler, WP_REST_Request $request)
    {
        $filteredArray = [];
        foreach ($response->data as $key => $value) {
            if ($value === null | $value === '' | $value === []) {
                continue;
            }
            if (gettype($key) != 'integer') {
                $filteredArray[$key] = $value;
            } else {
                $filteredArray[] = $value;
            }
        }

        $response->data = $filteredArray;

        return $response;
    }

    public static function disable_ssl_verification_for_local_development($permission, $context, $object_id, $post_type)
    {
        if (!is_ssl()) {
            return true;
        }
        return $permission;
    }


}