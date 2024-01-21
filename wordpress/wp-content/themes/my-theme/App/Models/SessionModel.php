<?php

namespace App\Models;


class SessionModel
{
    public static function setSessionCookie()
    {
        return setcookie('auth', wp_hash_password('someone'), [
            'secure' => false,
            'path' => '/',
            // 'sameSite' => 'None',
            'expires' => time() + 5000 * 60 * 60
        ]);
    }
}