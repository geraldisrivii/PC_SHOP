<?php

add_action('init', 'register_post_types');

function register_post_types()
{
	//resolution

	register_post_type('shipping_time', [
		'label' => null,
		'labels' => [
			'name' => 'Время для доставки',
			// основное название для типа записи
			'singular_name' => 'Время для доставки',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое Время для доставки',
			// для добавления новой записи
			'add_new_item' => 'Добавление Время для доставки',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование Время для доставки',
			// для редактирования типа записи
			'new_item' => 'Новое Время для доставки',
			// текст новой записи
			'view_item' => 'Смотреть Время для доставки',
			// для просмотра записи этого типа.
			'search_items' => 'Искать Время для доставки =',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Время для доставки',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => true,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'shipping_times',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

	register_post_type('resolution', [
		'label' => null,
		'labels' => [
			'name' => 'Разрешение',
			// основное название для типа записи
			'singular_name' => 'Разрешение',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое Разрешение',
			// для добавления новой записи
			'add_new_item' => 'Добавление Разрешение',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование Разрешение',
			// для редактирования типа записи
			'new_item' => 'Новое Разрешение',
			// текст новой записи
			'view_item' => 'Смотреть Разрешение',
			// для просмотра записи этого типа.
			'search_items' => 'Искать Разрешение =',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Разрешения',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => true,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'resolutions',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

	register_post_type('diginity', [
		'label' => null,
		'labels' => [
			'name' => 'Преимущества',
			// основное название для типа записи
			'singular_name' => 'Преимущество',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое преимущество',
			// для добавления новой записи
			'add_new_item' => 'Добавление преимущества',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование преимущества',
			// для редактирования типа записи
			'new_item' => 'Новое преимущество',
			// текст новой записи
			'view_item' => 'Смотреть преимущество',
			// для просмотра записи этого типа.
			'search_items' => 'Искать преимущество =',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Преимущества',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'diginities',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

	register_taxonomy('series', ['product'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Series',
			'singular_name' => 'Series',
			'search_items' => 'Series',
			'all_items' => 'Series',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Series',
			'back_to_items' => '← Вернутся в Series',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'series', // $taxonomy
	]);

	register_taxonomy('gpu_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства видеокарт',
			'singular_name' => 'Свойство видеокарт',
			'search_items' => 'Search свойства видеокарт',
			'all_items' => 'Все свойства видеокарт',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства видеокарт',
			'back_to_items' => '← Вернутся в свойства видеокарт',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'gpu_props', // $taxonomy
	]);

	register_taxonomy('cpu_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства CP',
			'singular_name' => 'Свойство CPU',
			'search_items' => 'Search свойства CPU',
			'all_items' => 'Все свойства CPU',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства CPU',
			'back_to_items' => '← Вернутся в свойства CPU',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'cpu_props', // $taxonomy
	]);

	register_taxonomy('ram_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства RAM',
			'singular_name' => 'Свойство RAM',
			'search_items' => 'Search свойства RAM',
			'all_items' => 'Все свойства RAM',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства RAM',
			'back_to_items' => '← Вернутся в свойства RAM',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'ram_props', // $taxonomy
	]);


	register_taxonomy('motherboard_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства материнской платы',
			'singular_name' => 'Свойство материнской платы',
			'search_items' => 'Search свойства материнской платы',
			'all_items' => 'Все свойства материнской платы',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства материнской платы',
			'back_to_items' => '← Вернутся в свойства материнской платы',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'motherboard_props', // $taxonomy
	]);

	register_taxonomy('pb_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства блока питания',
			'singular_name' => 'Свойство блока питания',
			'search_items' => 'Search свойства блока питания',
			'all_items' => 'Все свойства блока питания',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства блока питания',
			'back_to_items' => '← Вернутся в свойства блока питания',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'pb_props', // $taxonomy
	]);

	register_taxonomy('pb_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства блока питания',
			'singular_name' => 'Свойство блока питания',
			'search_items' => 'Search свойства блока питания',
			'all_items' => 'Все свойства блока питания',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства блока питания',
			'back_to_items' => '← Вернутся в свойства блока питания',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'pb_props', // $taxonomy
	]);


	register_taxonomy('hdd_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства жесткого диска',
			'singular_name' => 'Свойство жесткого диска',
			'search_items' => 'Search свойства жесткого диска',
			'all_items' => 'Все свойства жесткого диска',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства жесткого диска',
			'back_to_items' => '← Вернутся в свойства жесткого диска',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'hdd_props', // $taxonomy
	]);


	register_taxonomy('ssd_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства SSD диска',
			'singular_name' => 'Свойство SSD диска',
			'search_items' => 'Search свойства SSD диска',
			'all_items' => 'Все свойства SSD диска',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства SSD диска',
			'back_to_items' => '← Вернутся в свойства SSD диска',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'ssd_props', // $taxonomy
	]);

	register_taxonomy('case_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства корпуса',
			'singular_name' => 'Свойство корпуса',
			'search_items' => 'Search свойства корпуса',
			'all_items' => 'Все свойства корпуса',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства корпуса',
			'back_to_items' => '← Вернутся в свойства корпуса',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'case_props', // $taxonomy
	]);


	register_taxonomy('cooler_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства кулера',
			'singular_name' => 'Свойство кулера',
			'search_items' => 'Search свойства кулера',
			'all_items' => 'Все свойства кулера',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства кулера',
			'back_to_items' => '← Вернутся в свойства кулера',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'cooler_props', // $taxonomy
	]);


	register_taxonomy('case_fan_props', ['post'], [
		'label' => '', // определяется параметром $labels->name
		'labels' => [
			'name' => 'Свойства корпусных вентиляторов',
			'singular_name' => 'Свойство корпусных вентиляторов',
			'search_items' => 'Search свойства корпусных вентиляторов',
			'all_items' => 'Все свойства корпусных вентиляторов',
			'view_item ' => 'Подробнее',
			'parent_item' => 'Родитель',
			'parent_item_colon' => 'Родитель:',
			'edit_item' => 'Изменить свойство',
			'update_item' => 'Обновить свойство',
			'add_new_item' => 'Добавить свойство',
			'new_item_name' => 'Новое свойство',
			'menu_name' => 'Свойства корпусных вентиляторов',
			'back_to_items' => '← Вернутся в свойства корпусных вентиляторов',
		],
		'description' => '', // описание таксономии
		'public' => true,
		// 'show_ui' => false, 
		// 'show_in_menu'
		'hierarchical' => false,
		'rewrite' => true,
		'capabilities' => array(),
		'meta_box_cb' => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column' => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest' => true, // добавить в REST API
		'rest_base' => 'case_fan_props', // $taxonomy
	]);



	register_post_type('FAQ', [
		'label' => null,
		'labels' => [
			'name' => 'FAQ',
			// основное название для типа записи
			'singular_name' => 'FAQ',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое FAQ',
			// для добавления новой записи
			'add_new_item' => 'Добавление FAQ',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование FAQ',
			// для редактирования типа записи
			'new_item' => 'Новое FAQ',
			// текст новой записи
			'view_item' => 'Смотреть FAQ',
			// для просмотра записи этого типа.
			'search_items' => 'Искать FAQ',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'FAQ',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'faqs',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);


	register_post_type('special', [
		'label' => null,
		'labels' => [
			'name' => 'Специальные предложения',
			// основное название для типа записи
			'singular_name' => 'Специальные предложение',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое предложение',
			// для добавления новой записи
			'add_new_item' => 'Добавление предложения',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование предложения',
			// для редактирования типа записи
			'new_item' => 'Новое предложение',
			// текст новой записи
			'view_item' => 'Смотреть предложение',
			// для просмотра записи этого типа.
			'search_items' => 'Искать предложение',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Специальные предложения',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'specials',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

}