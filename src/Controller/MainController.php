<?php

namespace Gondr\Controller;

use Gondr\App\View;
use Gondr\App\DB;

class MainController extends MasterController
{
    public function index()
    {
        $this->render("main");
    }
} 