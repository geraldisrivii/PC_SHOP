<?php


namespace App\Requests;

class ProductRequest
{
    public function createCustomProduct()
    {
        return [
            'name' => [
                'type' => 'string',
                'required' => true,
            ],
            'items' => [
                'type' => 'array',
                'required' => true,
            ],
            'imageID' => [
                'type' => ['integer'],
                // 'required' => true,
            ],
        ];
    }
}