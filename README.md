# Мой второй интерент магазин на Wordpress + VUE.js (Wordpress REST API + Woocomerce REST API)

Ссылка на сайт - https://computers-shop.ru/

Помимо реализации базового функционала интернет магазина, в этом проекте я сделал упор на реализацию конфигуратора ПК. С возможностью удобного добавления как фильтров так и свойств товарам. 

В проекте используется
- VUE3 composition api на TypeScript.
- Wordpress c подключенным плагином Woocomerce и CFS.
- Api Yookassa. (SDK под PHP)
- Api подсказок по Адресу от Dadata. 
- Composer

Для локальной разработки используется окружение созданное с применением docker и docker-compose, которое включает в себя:
- Nginx.
- Php-fpm.
- MySQL.
- PhpMyAdmin

Для сайта я арендую VPS. Серверное окружение созданное с применением docker и docker-compose, которое включает в себя:
- Nginx.
- Php-fpm.
- MySQL.
- PhpMyAdmin
- certbot (для получения ssl сертификатов)


