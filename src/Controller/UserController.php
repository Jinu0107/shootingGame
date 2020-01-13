<?php

namespace Gondr\Controller;

use Gondr\App\DB;
use Gondr\App\Library;

class UserController extends MasterController
{


    public function registerProcess()
    {
        //실제 회원가입 처리
        $userid = $_POST['userid'];
        $pass = $_POST['password'];
        $passc = $_POST['passwordc'];
        $username = $_POST['username'];

        if ($userid ==  "" || $pass == "" || $username == "") {
            Library::sendJson(['success' => false, 'msg' => 'BLANK']);
            return;
        }

        if ($pass != $passc) {
            Library::sendJson(['success' => false, 'msg' => 'PASSREE']);
            return;
        }

        $sql = "INSERT INTO users (`id`, `name`, `password`, `level`, `score`)
                VALUES (?, ?, PASSWORD(?), ? , ?)";
        $result = DB::execute($sql, [$userid, $username, $pass, 1, 0]);

        if ($result != 1) {
            Library::sendJson(['success' => false, 'msg' => 'DBERR']);
            return;
        }

        Library::sendJson(['success' => true, 'msg' => '회원가입 완료']);
    }



    public function loginProcess()
    {
        $userid = $_POST['userid'];
        $pass = $_POST['password'];

        $sql = "SELECT * FROM users WHERE id = ? AND password = PASSWORD(?)";
        $user = DB::fetch($sql, [$userid, $pass]);

        if ($user == null) {
            //Library::msgAndGo("일치하는 회원이 없습니다." ,"/");
            Library::sendJson(['success' => false, 'msg' => '일치하는 회원이 없습니다.']);

            return;
        }

        $_SESSION['user'] = $user;
        Library::sendJson(['success' => true, 'msg' => '로그인 완료']);
    }
    
  

    public function logout()
    {
        unset($_SESSION['user']);
        Library::msgAndGo("로그아웃 완료", "/", "success");
    }
}
