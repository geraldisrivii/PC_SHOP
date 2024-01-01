<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'WordpressDB');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'root');

/** Database hostname */
define('DB_HOST', 'wc_db');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'E>{5ZI&^&|AlqepZDf#Sz{MZY6B7+758F42=SM0#j5#GA2ODf%`-Md.pq!?oa}*Y');
define('SECURE_AUTH_KEY', '*OJ+/+}^i@!8HTDg+gq7,Id<1*b:WL%jM|U&c9AH)6?)dp! avn<9W+-DYC!#5&M');
define('LOGGED_IN_KEY', '5{oEaLP?U{QmK^NI$p01o+>p@ wpq[g9I8D3$7krFHXJlBMxh-iM7FWoP^~w4}N:');
define('NONCE_KEY', '@,$cX5<a^rh_O~-RXh]O[X`3Z+X5Uc_7%O?E#K/PSz6l uS_2!Zn|S?(oF+y`T+r');
define('AUTH_SALT', 'CW>!t3,c^#husV&+W3uQ/Z|~/G?R@ZN$+/9T^b8CGBS_oUrl{fH/.mDAC~m9B/#x');
define('SECURE_AUTH_SALT', 'DY6FF`a_v/!<#%|G=R[1O|hAtpqTI8+d; F@l{9o[b3XeCY(3cWv|/Tw2A`N,x+a');
define('LOGGED_IN_SALT', 'V<>fcFgs+{;aXp$KaUg:6@JVXI&ZB|F|Op:C(?kEL/B0a;RO{L/:]0(#,Dti.vrE');
define('NONCE_SALT', ';^)kRCM1+u/M1^w0J5YWC,LBGvZN|E V<IqO>fOT#6++=#|-{bJtr+3]-php#tso');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';


ini_set('display_errors', 1);
/* Add any custom values between this line and the "stop editing" line. */

// define('WP_MEMORY_LIMIT', '160M');



// for mail

define('MAIL_SETTINGS', [
	'mail_settings_dev' => [
		'host' => 'smtp.gmail.com',
		'auth' => true,
		'port' => 465,
		'username' => 'sasamaltsev981@gmail.com',
		'password' => 'rzdd nftp wqal vcxh',
		'secure' => 'ssl',
		'charset' => 'UTF-8',
		'from_email' => 'sasamaltsev981@gmail.com',
		'from_name' => 'Alexander Maltsev',
		'is_html' => true
	],
	'mail_settings_prod' => [
		'host' => 'smtp.gmail.com',
		'auth' => true,
		'port' => 465,
		'username' => 'sasamaltsev981@gmail.com',
		'password' => 'rzdd nftp wqal vcxh',
		'secure' => 'ssl',
		'charset' => 'UTF-8',
		'from_email' => 'sasamaltsev981@gmail.com',
		'from_name' => 'Alexander Maltsev',
		'is_html' => true
	],
]);

// for admin panel
define('GENERALY_SETTINGS_ID', 25);
define('MAIN_SETTINGS_ID', 21);
define('KATALOG_SETTINGS_ID', 190);

define('PATHS_NAMES_ARRAY', [
	'/' => '558',
	'/katalog' => '868',
]);

define('WP_ENVIRONMENT_TYPE', 'local');

// For yookassa

define('SHOP_ID', '321321');
define('SHOP_KEY', 'test_VmUiqwqcRNY8Kqk03ipeMBwrUt6ZpVB_ZZMHGvL8jtY');
define('RETURNED_URL', 'http://localhost');


define('WPLANG', 'ru_RU');