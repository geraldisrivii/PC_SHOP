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
        ];
    }
}