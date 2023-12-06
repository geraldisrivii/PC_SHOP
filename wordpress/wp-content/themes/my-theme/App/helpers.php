<?php

use App\Classes\Session;

function session(){

    $session = Session::getInstance();

    return  $session;

}