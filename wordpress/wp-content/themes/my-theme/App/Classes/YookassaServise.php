<?php

namespace App\Classes;

use YooKassa\Client;

class YookassaServise
{
    private $client;

    private static $instance; // Singleton

    public static function getInstance() // Singleton
    {
        if (is_null(self::$instance)) {
            self::$instance = new self;
        }
        return self::$instance;
    }


    public function __construct()
    {
        $client = new Client();
        $client->setAuth(SHOP_ID, SHOP_KEY);
        $this->client = $client;
    }

    public function create_payment($amount, $description = 'Заказ №1')
    {
        $payment = $this->client->createPayment(
            array(
                'amount' => array(
                    'value' => $amount,
                    'currency' => 'RUB',
                ),
                'confirmation' => array(
                    'type' => 'redirect',
                    'return_url' => RETURNED_URL,
                ),
                'capture' => true,
                'description' => 'Hefd',
            ),
            uniqid('', true)
        );

        return $payment;
    }

    public function getInfo(string $id)
    {
        return $this->client->getPaymentInfo($id);
    }
}