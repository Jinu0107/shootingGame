<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gondr - Todo</title>
    <link rel="stylesheet" href="/vendor/bootstrap441/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div class="container-fluid">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" class="navbar-brand">Todo</a>
                <button class="navbar-toggler" 
                        type="button"
                        data-toggle="collapse"
                        data-target="#mainNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a href="#" class="nav-link">메인</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">일정등록</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">일정삭제</a>
                        </li>
                    </ul>
                    <div class="ml-auto">
                        <?php if(isset($_SESSION['user'])) : ?>
                            <button class="btn btn-primary"><?= $_SESSION['user']->name ?></button>
                            <a href="/user/logout" class="btn btn-danger">로그아웃</a>
                        <?php else : ?>
                            <a href="/user/register" class="btn btn-primary">회원가입</a>
                            <a href="/user/login" class="btn btn-success">로그인</a>
                        <?php endif; ?>
                    </div>
                </div>

            </nav>
        </header>
        <?php if (isset($_SESSION['err'])) : ?>
            <div class="alert alert-<?= $_SESSION['err']['css'] ?> out">
                <?= $_SESSION['err']['msg'] ?>
            </div>
            <?php unset($_SESSION['err']); ?>
            
            <script>
                let fade = document.querySelector(".out");
                setTimeout(()=>{
                    fade.classList.add("fade-out");
                    setTimeout(()=>{
                        fade.remove();
                    }, 500);
                }, 3000);
            </script>
        <?php endif; ?>
    </div>