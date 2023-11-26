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
define( 'DB_NAME', 'WorpressDB' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'wc_db' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',         '3Uatw36aYQ:pjsZ$.ZqPi+<%[HWvM6%q|7x<8Amip}[XOK$T;~LKW+Pgh`AegR^O' );
define( 'SECURE_AUTH_KEY',  ')5zcK`W|YTVWd:*-zWAg^>)u^Lj=>q6g7kp<M}*4&,7#?@&l^3TeJ!&$ &,>/peE' );
define( 'LOGGED_IN_KEY',    '.lwSd~5]M#6iqG)aGh6tR$[5ebJue{f;.JTE63+[NsWpJNz7VLh|GMKmiZV@3[z~' );
define( 'NONCE_KEY',        'C>J~Nh@LJ]iI7L1a!^{dyGFRRM|Z O&%wKJ X+s*w{|y5)C/:T[7/Eqv>)8`V2|Q' );
define( 'AUTH_SALT',        '41y`MKgPP!O9fn8ae=5-,:;+_1z#[ ;@i#|O<;a+Xk<(&jA Lu{P0Xua1urdBQp-' );
define( 'SECURE_AUTH_SALT', 'F@R(hye8LhYr%JeNrAA_H6xwdG<qjB9,z*[b=7&$l:+]}VFLKapT)Hle;=/liRo$' );
define( 'LOGGED_IN_SALT',   'FyWz^ozY*mOxfzfmqAhD[h515zpe%>Z=kI,oyFW6gq}:e?+4<r{jmXiv77zl@Y>^' );
define( 'NONCE_SALT',       'M6&20|oA8{<~FiW?0l,<A82`hHb9CsI+fc[ZZ^^CWlgDSj5nIF2R6Ic[JM+[pxt]' );

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
define( 'WP_DEBUG', true );
ini_set('display_errors', 1);
/* Add any custom values between this line and the "stop editing" line. */

define('WP_MEMORY_LIMIT', '160M');



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
define('GENERALY_SETTINGS_ID', 154);


// For yookassa

define('SHOP_ID', '321322');
define('SHOP_KEY', 'test_6u50VVu79MGLmELpPGMn3BySLTUO3EKTKzze6xxv82Q');
define('RETURNED_URL', 'http://localhost:8080/katalog');



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
