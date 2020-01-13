<?php

use Gondr\App\Route;

if(isset($_SESSION['user'])){
    Route::get('/main/logout' , 'UserController@logout');
    Route::get('/game' , 'GameController@game');
    Route::get('/game/rank' , 'GameController@rank');
    Route::post('/game/rank' , 'GameController@rankProcess');
    Route::get('/game/option' , 'GameController@option');
    
}else {
    
    Route::post('/main/register' , 'UserController@registerProcess');
    Route::post('/main/login' , 'UserController@loginProcess');
}

Route::get('/' , 'MainController@index');