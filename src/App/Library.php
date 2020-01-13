<?php

namespace Gondr\App;

class Library
{
    public static function msgAndGo($msg, $target, $css="danger")
    {
        $_SESSION['err'] = ['css' => $css, 'msg' => $msg];
        header("Location: ". $target);
    }

    public static function sendJson($data)
    {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    
}