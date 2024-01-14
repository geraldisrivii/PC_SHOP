<?php

use App\Classes\Router;


add_action('rest_api_init', function () {
	// Payments 
	Router::post('/payments', 'PaymentController@create', 'HasCookieMiddleware', 'PaymentRequest');
	Router::post('/payments/webhook', 'PaymentController@webhookCallback');
	// Admin
	Router::get('/settings', 'AdminController@show');
	// Session
	Router::post('/sessions', 'SessionController@create');


	// Products
	Router::post('/products/customs', 'ProductController@createCustomProduct', namespace: 'wc/v3', request: 'ProductRequest');

	// User
	Router::post('/users/signup', 'UserController@signup', 'HasCookieMiddleware', 'UserRequest');
	Router::post('/users/signin', 'UserController@signin', 'HasCookieMiddleware', 'UserRequest');
	Router::delete('/users/signout', 'UserController@signout', 'HasCookieMiddleware');
	Router::get('/users/check_by_field', 'UserController@checkExistingUser');

	Router::get('/users/current', 'UserController@getCurrentUser', 'HasCookieMiddleware');

	// Mail
	Router::post('/mails', 'MailController@create', 'HasCookieMiddleware');
	Router::post('/mails/check', 'MailController@checkCode', 'HasCookieMiddleware');
	Router::post('/mails/check', 'MailController@checkCode', 'HasCookieMiddleware');


});


