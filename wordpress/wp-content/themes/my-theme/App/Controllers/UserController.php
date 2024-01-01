<?php


namespace App\Controllers;

use App\Models\UserModel;
use \WP_REST_Request;
use \WP_REST_Response;


class UserController
{

    public function signup(WP_REST_Request $request)
    {

        $response = new WP_REST_Response();

        try {
            $userWP = UserModel::signup($request['login'], $request['password'], $request['email']);
        } catch (\Throwable $th) {
            $response->set_status(400);
            $response->data = [
                'status' => false,
                'message' => $th->getMessage()
            ];
            return $response;
        }


        $userWP->data->is_email_verified = (boolean) get_metadata('user', $userWP->ID, 'isEmailVerified', true);

        $response->data = [
            'status' => true,
            'user' => $userWP,
            'message' => __('Succesfuly registered', 'my-theme'),
        ];

        return $response;
    }

    public function signin(WP_REST_Request $request)
    {
        $response = new WP_REST_Response();

        try {
            $userWP = UserModel::signin($request['login'], $request['password']);
        } catch (\Throwable $th) {
            $response->set_status(400);
            $response->data = [
                'status' => false,
                'message' => $th->getMessage()
            ];
            return $response;
        }

        $response->data = [
            'status' => true,
            'message' => __('Succesfuly logged in', 'my-theme'),
            'user' => $userWP,
        ];

        return $response;
    }

    public function signout(WP_REST_Request $request)
    {

        $response = new WP_REST_Response();

        $result = UserModel::signout();

        return $response->data = [
            'status' => $result,
        ];
    }

    public function getCurrentUser(WP_REST_Request $request)
    {
        $response = new WP_REST_Response();

        $user = UserModel::getCurrentUser();

        if (!$user) {
            return $response->data = [
                'status' => false,
                'message' => 'User not found'
            ];
        }

        $user['data']['is_email_verified'] = (boolean) get_metadata('user', $user['ID'], 'isEmailVerified', true);

        $response->data = $user;

        return $response;
    }


    public function checkExistingUser(WP_REST_Request $request)
    {
        $response = new WP_REST_Response();

        $name = $request['field'];

        try {
            $result = UserModel::checkUserByField($name, $request['value']);
        } catch (\Throwable $th) {
            $response->set_status(400);
            return $response->data = [
                'status' => false,
                'message' => $th->getMessage()
            ];
        }

        if ($result) {
            return $response->data = [
                'status' => false,
                'message' => "This {$name} already used"
            ];
        }

        return $response->data = [
            'status' => true,
            'message' => "This {$name} may be used"
        ];
    }
}