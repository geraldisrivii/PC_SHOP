<?php


namespace App\Requests;

class UserRequest
{
    public function signup()
    {
        return [
            'login' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '[A-Za-z0-9]{6,15}',
            ],
            'password' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '[A-Za-z0-9]{6,20}[0-9]+',
            ],
            'email' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
            ]
        ];
    }

    public function signin()
    {
        return [
            'login' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '[A-Za-z0-9]{6,15}',
            ],
            'password' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '[A-Za-z0-9]{6,20}[0-9]+',
            ],
        ];
    }
}