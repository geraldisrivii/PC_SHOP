<?php


namespace App\Models;


class UserModel
{
    public static function getCurrentUser()
    {
        return session()->get('user');
    }

    public static function signout(){
        return session()->remove('user');
    }
    public static function signin(string $login, string $password)
    {

        $user = self::getCurrentUser();

        if ($user) {
            throw new \Exception(__("User is already logged in", 'my-theme'), 1);
        }

        $userWP = self::checkUserByField('login', $login);

        if ($userWP == false) {
            throw new \Exception(__("User with passed login isnt found", 'my-theme'), 1);
        }

        if (!wp_check_password($password, $userWP->user_pass, $userWP->ID)) {
            throw new \Exception(__("User with passed login, have another password", 'my-theme'), 1);
        }

        $result = session()->add('user', $userWP);

        $userWP->is_email_verified = get_metadata('user', $userWP->ID, 'isEmailVerified', true);

        return $userWP;
    }

    public static function signup(string $login, string $password, string $email)
    {
        $user = session()->get('user');

        if ($user) {
            throw new \Exception(__('Preliminary you need to sign out', 'my-theme'), 1);
        }

        $user_id = wp_create_user($login, $password, $email);

        if (is_wp_error($user_id)) {
            throw new \Exception($user_id->get_error_message(), 1);
        } 

        update_metadata('user', $user_id, 'isEmailVerified', false);

        $userWP = self::setCustomersRole($user_id);

        session()->add('user', $userWP);

        return $userWP;
    }



    public static function checkUserByField(string $field, string $value)
    {
        return get_user_by($field, $value);
    }

    private static function setCustomersRole($user_id)
    {
        $userWP = new \WP_User($user_id);
        $userWP->set_role('customer');

        return $userWP;
    }
}