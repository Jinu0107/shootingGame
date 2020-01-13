<?php

namespace Gondr\Controller;

use Gondr\App\DB;
use Gondr\App\Library;

class GameController extends MasterController
{
    public function  game()
    {
        $this->render("game");
    }

    public function rank()
    {
        //랭킹 페이지 보여주는 부분
        $sql = "SELECT * FROM users ORDER BY score DESC LIMIT 0, 10";
        $list = DB::fetchAll($sql);

        $this->render("rank", ['list'=>$list]);
    }
    public function rankProcess()
    {
        //게임오버가 됐을 시 자동으로 DB 에 등록해주는 부분
        $id = $_SESSION['user']->id;
        $userscore = $_SESSION['user']->score;
        $score = $_POST['score'];
        if ($userscore >= $score) {
            Library::sendJson(['success' => false, 'msg' => '']);
            return;
        }
        $sql = "UPDATE users SET score = ? WHERE id = ?";
        $result = DB::execute($sql, [$score, $id]);

        if ($result != 1) {
            Library::sendJson(['success' => false, 'msg' => 'DBERR']);

            return;
        }
        Library::sendJson(['success' => true, 'msg' => 'SUCCESS']);
        
        $_SESSION['user']->score = $score;
       
    }
 

    public function option()
    {
        //옵션 페이지 보여주는 부분
        $this->render("option");
    }
}
