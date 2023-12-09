<?php

/*
Plugin Name: Register settings button in admin panel plugin
Description: Register settings button in admin panel
Version: 1.0
Author: Alexander Malstev
*/

// function custom_menu()
// {
// 	add_menu_page(
// 		'Заголовок меню', // Название страницы в меню
// 		'Заголовок меню', // Название пункта меню
// 		'manage_options', // Разрешения, необходимые для доступа к странице
// 		'custom-menu-slug', // Уникальный идентификатор страницы
// 		'custom_menu_page', // Функция, отображающая содержимое страницы
// 		'dashicons-tickets', // URL иконки для пункта меню
// 		30 // Позиция пункта меню
// 	);

// 	// Добавление подпунктов
// 	add_submenu_page(
// 		'custom-menu-slug', // Родительский идентификатор страницы меню
// 		'Производитель процессора', // Название подпункта меню
// 		'Производитель процессора', // Название пункта навигации
// 		'manage_options', // Разрешения, необходимые для доступа к странице
// 		'cpu_producer-slug', // Уникальный идентификатор страницы подпункта
// 		'submenu_page_callback' // Функция, отображающая содержимое страницы подпункта
// 	);
// }

// add_action('admin_menu', 'custom_menu');

// function custom_menu_page()
// {

// }

// function submenu_page_callback()
// {
// 	wp_redirect(get_home_url() . "/wp-admin/edit-tags.php?taxonomy=cpu_producer");
// }

function settings_menu()
{
	add_menu_page('Настройки сайта', 'Настройки сайта', 'edit_posts', 'site_seetings', 'settings_page');
}

function settings_page()
{
	$post_ID = GENERALY_SETTINGS_ID;
	wp_redirect(get_home_url() . "/wp-admin/post.php?post={$post_ID}&action=edit");
}
add_action('admin_menu', 'settings_menu');


add_action('pre_get_posts', 'exclude_post_from_admin');

function exclude_post_from_admin($query)
{
	$post_ID = GENERALY_SETTINGS_ID;
	if (is_admin() && $query->get('post_type') == 'post') {
		$query->set('post__not_in', [$post_ID]);
	}
}
