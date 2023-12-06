<?php


namespace App\Controllers;

use \WP_REST_Request;
use \WP_REST_Response;
use App\Models\SessionModel;


class SessionController
{

    public function create(WP_REST_Request $request)
    {
        $response = new WP_REST_Response();

        if (isset($_COOKIE['auth'])) {
            $response->data = [
                'status' => false,
                'cookies' => $_COOKIE['auth']
            ];
            return $response;
        }

        $result = SessionModel::setSessionCookie();


        return $response->data = [
            'status' => $result,
        ];
    }

}