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

        add_filter('rest_post_dispatch', "{$namespaceOfClass}::exludeEmpty", 12, 3);
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

}