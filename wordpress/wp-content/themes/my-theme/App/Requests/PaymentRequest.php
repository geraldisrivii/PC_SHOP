<?php


namespace App\Requests;

class PaymentRequest
{
    public function create()
    {
        return [
            'amount' => [
                'type' => 'integer',
                'required' => true,
            ],
            'items' => [
                'type' => 'array',
                'required' => true,
            ],
            'first_name' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '[А-Яа-яЁё0-9]+',
            ],
            'email' => [
                'type' => 'string',
                'required' => true,
                'pattern' => '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
            ],
            'address' => [
                'type' => 'string',
                'required' => true,
            ],
            'shipping_timezone_id' => [
                'type' => 'number',
                'required' => true,
            ],
        ];
    }
}