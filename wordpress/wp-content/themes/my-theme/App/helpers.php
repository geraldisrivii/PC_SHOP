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