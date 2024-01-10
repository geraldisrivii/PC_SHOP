<?php


namespace App\Controllers;

use \WP_REST_Request;
use \WP_REST_Response;
use App\Classes\YookassaServise;


class PaymentController
{

    public function create(WP_REST_Request $request)
    {

        $response = new WP_REST_Response();

        $yookassa = new YookassaServise();

        $payment = $yookassa->create_payment($request['amount']);

        if (session()->get('user') == false) {
            return $response->data = [
                'status' => false,
                'message' => 'User insnt logged in or sign up'
            ];
        }

        $order = wc_create_order(['customer_id' => session()->get('user')['ID']]);


        foreach ($request['items'] as $key => $item) {
            $order->add_product(wc_get_product($item['product']['id']), $item['quantity']);
        }


        $order->set_shipping(array(
            'first_name' => $request['first_name'],
            'email' => $request['email'],
            'address_1' => $request['address'],
            'country' => 'RU'
        ));

        update_post_meta($order->id, 'shipping_timezone_id', $request['shipping_timezone_id']);

        update_post_meta($order->id, 'code', random_int(random_int(0, 999) + (time() / 1000), 999999999) );

        $order->set_total($request['amount']);

        // Сохраняем заказ

        $order->set_customer_id(session()->get('user')['ID']);

        $order->calculate_totals();

        $result = update_post_meta($order->id, 'payment_id', $payment->id);

        $order->save();

        $response->data['yookassa_object'] = $payment;
        $response->data['order'] = $order->id;
        $response->data['result'] = session()->get('user')['ID'];

        return $response;
    }


    public function webhookCallback()
    {

        $data = json_decode(file_get_contents('php://input'));

        $response = new WP_REST_Response();

        $yookassa = new YookassaServise();

        $payment_id = $data->object->id;


        $orders = get_posts([
            'post_type' => 'shop_order',
            'post_status' => 'any',
            'numberposts' => -1
        ]);

        $currentOrder = null;
        foreach ($orders as $key => $order) {
            if (get_post_meta($order->ID, 'payment_id', true) == $payment_id) {
                $payment = $yookassa->getInfo($payment_id);

                $currentOrder = wc_get_order($order);

                $currentOrder->update_status($payment->status == 'succeeded' ? 'completed' : 'cancelled');

                $currentOrder->save();

                break;
            }
        }
        return $response->data = [
            'status' => true,
            'payment_id' => $payment_id,
        ];

    }
}