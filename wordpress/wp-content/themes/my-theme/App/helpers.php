<?php

use App\Classes\Session;
use App\Classes\YookassaServise;

function session(){
    $session = Session::getInstance();

    return  $session;
}
function yookassa(){
    $session = YookassaServise::getInstance();

    return  $session;
}

require_once get_template_directory() . '/App/Helpers/getChildProductBy.php';
require_once get_template_directory() . '/App/Helpers/getProductProp.php';
require_once get_template_directory() . '/App/Helpers/reindexArrayOfAnyDeep.php';