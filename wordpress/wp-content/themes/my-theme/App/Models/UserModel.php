<?php


namespace App\Models;


class UserModel
{
    public static function getCurrentUser(){
        return session()->get('user');
    }
}