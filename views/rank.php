<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css"href="/rank.css">
    <title>안진우게임 랭킹페이지</title>
    <!-- <?= $i = 1; ?> -->
</head>
<body>
    <div id="bgi">
        <div id="backBtn">
            <a href="/" id="back">Back</a>
        </div>
        <div id="mainText">
            Top Score
        </div>
        <div id="scoreBox">
        <ul>
            <?php foreach ($list as $user) : ?>
                <li><?=$i ?>. <?= $user->name ?> : <?= $user->score ?></li>
                <!-- <?= $i++;?> -->
            <?php endforeach; ?>
        </ul>
        </div>
    </div>
</body>

</html>