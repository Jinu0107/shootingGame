<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>안진우 게임 게임페이지</title>
    <script src="/js/Vector.js"></script>
    <script src="/js/Stage.js"></script>
    <script src="/js/Explosion.js"></script>
    <script src="/js/Enemy.js"></script>
    <script src="/js/Background.js"></script>
    <script src="/js/Bullet.js"></script>
    <script src="/js/Player.js"></script>
    <script src="/js/Item.js"></script>
    <script src="/js/Attack.js"></script>
    <script src="/js/Boom.js"></script>
    <script src="/js/App.js"></script>
    <link rel="stylesheet" type="text/css" href="game.css">


</head>

<body>
    <div id="gameOverBox">Press Any Key</div>
    <div id="pauseBox">
        <div id="pauseItem">
            <a href="#" id="resume">Resume</a>
            <br>
            <a href="">Restart</a>
            <br>
            <a href="/">Main</a>
        </div>
    </div>
    <div id="mainBox">
        <canvas id="myGame" width="600" height="900"></canvas>
        <!-- <button id="startBtn">Start</button> -->
    </div>

    <script>
        let app = null;
        // let start = false;
        app = new App();

        // log(app);
        // document.querySelector("#startBtn").addEventListener("click",function(){
        //     log("start");
        //     if(this.start){
        //         location.reload();
        //     } else {
        //         this.start = true;
        //           app = new App();

        //         document.getElementById("startBtn").innerHTML ="ReStart";
        //         this.disabled = true;
        //         this.disabled = false;
        //     }
        // });

        // document.addEventListener("keydown", (e) => {
        //     if (e.key == "Enter") {
        //         document.querySelector("#startBtn").click();
        //     }
        // });
    </script>

</body>

</html>