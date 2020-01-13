<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="app.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <link rel="stylesheet" href="notiflix-1.9.1.css" />
    <script src="notiflix-1.9.1.js"></script>
    <title>안진우게임 메인</title>
</head>

<body>
    <div class="container">
        <div class="bgi">
            <div class="mainbox">
                <h1 class="fn-game">Shooting <br>
                    Game</h1>
            </div>

            <div class="subnav">
                <?php if (isset($_SESSION['user'])) : ?>
                    <div class="subbox">
                        <a href="/game" class="playBtn">Play!</a>
                        <a href="/game/rank" class="rank-Btn">Rank</a>
                        <!-- <a href="/game/option" class="option-Btn">Option</a> -->
                        <a href="main/logout" class="sign-out-Btn">Sign out</a>
                    </div>
                <?php else : ?>
                    <div id="userBox">
                        <button class="loginBtn fn-game">Sign in</button>
                        <button class="registerBtn fn-game">Sign up</button>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div id="loginbox">
        <div class="inner-box">
            <div id="login-left">
                <h1 class="fn-user ">Sign in</h1>
                <div class="fn-user ">Sign in to Shootin Game</div>
            </div>
            <div id="login-right">
                <div class="close loginExit">
                    <i class="fas fa-times"></i>
                </div>
                <form action="main/login" method="post" id="loginForm">
                    <div class="input-box">
                        <input type="email" class="fn-user" id="login-userid" name="userid" placeholder="EMAIL">
                    </div>
                    <div class="input-box">
                        <input type="password" class="fn-user" id="login-password" name="password" placeholder="PASSWORD">
                    </div>
                    <div class="input-box">
                        <button type="button" id="loginBtn" class="fn-user sign-in-Btn">Sign in!</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <div id="registerbox">
        <!-- ------------------------------------------------------------------------------------------- -->
        <div class="inner-box">
            <div id="info-space">
                <h1 class="fn-user">Sign up</h1>
                <div class="fn-user">Create your Account!</div>
            </div>
            <div id="register-space">
                <div class="exit close">
                    <i class="fas fa-times"></i>
                </div>
                <!-- ------------------------------------------------------------------------------------------- -->
                <form action="main/register" method="post" id="registerForm">
                    <div class="outsidediv">
                        <div class="insidediv">
                            <input type="text" class="fn-user" id="username" name="username" placeholder="USERNAME">
                        </div>
                    </div>
                    <div class="outsidediv">
                        <div class="insidediv">
                            <input type="email" class="fn-user" id="userid" name="userid" placeholder="EMAIL">
                        </div>
                    </div>
                    <div class="outsidediv">
                        <div class="insidediv">
                            <input type="password" class="fn-user" id="password" name="password" placeholder="PASSWORD">
                        </div>
                    </div>
                    <div class="outsidediv">
                        <div class="insidediv">
                            <input type="password" class="fn-user" id="passwordc" name="passwordc" placeholder="PASSWOD CHECK">
                        </div>
                    </div>
                    <div class="outsidediv">
                        <div class="insidediv btndiv">
                            <button type="button" class="fn-user sign-up-Btn">Sign up!</button>
                        </div>
                    </div>
                </form>
                <!-- ------------------------------------------------------------------------------------------- -->
            </div>

        </div>
    </div>
    <!-- ------------------------------------------------------------------------------------------- -->
    <script>
        let loginBtn = document.querySelector(".loginBtn");
        if (loginBtn != null) {
            document.querySelector(".loginBtn").addEventListener("click", () => {
                loginbox.classList.add("on");
                setTimeout(() => {
                    loginbox.classList.add("fade-in");
                }, 50);

            });

            document.querySelector("#loginbox .close").addEventListener("click", () => {
                loginbox.classList.remove("fade-in");
                setTimeout(() => {
                    loginbox.classList.remove("on");
                }, 500);
            });

            document.querySelector(".registerBtn").addEventListener("click", () => {
                registerbox.classList.add("on");
                setTimeout(() => {
                    registerbox.classList.add("fade-in");
                }, 50);

            });

            document.querySelector("#registerbox .close").addEventListener("click", () => {
                registerbox.classList.remove("fade-in");
                setTimeout(() => {
                    registerbox.classList.remove("on");
                }, 500);
            });

            document.querySelector("#loginBtn").addEventListener("click", () => {
                let id = document.querySelector("#login-userid").value;
                let pass = document.querySelector("#login-password").value;

                let formData = new FormData();
                formData.append("userid", id);
                formData.append("password", pass);

                let req = new XMLHttpRequest();
                req.addEventListener("load", (e) => {
                    let res = JSON.parse(req.responseText);
                    if (res.success) {
                        Notiflix.Report.Success('SUCCESS',
                            'Good Boy',
                            'Click',
                            function() {
                                location.reload();
                            });
                    } else {
                        Notiflix.Report.Failure('FAIL',
                            'Please check your ID or password.',
                            'Click');
                    }
                });
                req.open("POST", "/main/login");
                req.send(formData);
            });
            //--------------------------------------------------------------------------------
            document.querySelector(".sign-up-Btn").addEventListener("click", () => {

                let name = document.querySelector("#username").value;
                let id = document.querySelector("#userid").value;
                let pass = document.querySelector("#password").value;
                let passc = document.querySelector("#passwordc").value;

                let formData = new FormData();
                formData.append("userid", id);
                formData.append("password", pass);
                formData.append("passwordc", passc);
                formData.append("username", name);

                let req = new XMLHttpRequest();
                req.addEventListener("load", (e) => {
                    let res = JSON.parse(req.responseText);
                    console.log(res.success);
                    if (res.success) {
                        Notiflix.Report.Success('SUCCESS',
                            'Successfully Sign-up',
                            'Click',
                            function() {
                                registerbox.classList.remove("fade-in");
                                setTimeout(() => {
                                    registerbox.classList.remove("on");
                                    loginbox.classList.add("on");
                                    setTimeout(() => {
                                        loginbox.classList.add("fade-in");
                                    }, 50);
                                }, 500);
                            });
                    } else {
                        //     Notiflix.Report.Failure( 'FAILURE',
                        //      'Please check your ID or password.', 
                        //       'Click' ); 

                        console.log(res.msg);
                        if (res.msg == "BLANK") {
                            Notiflix.Report.Failure('FAIL',
                                'Required value is blank',
                                'Click');
                        } else if (res.msg == "PASSREE") {
                            Notiflix.Report.Failure('FAIL',
                                'Password differs from check value',
                                'Click');
                        } else if (res.msg == "DBERR") {
                            Notiflix.Report.Failure('FAIL',
                                'DB Error',
                                'Click');
                        }
                    }
                });
                req.open("POST", "/main/register");
                req.send(formData);
            });
            // document.querySelector(".rank_Btn").addEventListener("click", () => {
            //     console.log("이건됨");
            //     let req = new XMLHttpRequest();
            //     req.addEventListener("load", (e) => {
            //         console.log("이건됨");
            //         // let res = JSON.parse(req.responseText);
            //         // console.log(res.success);

            //     });
            //     req.open("POST", "/game/showRank");
            //     req.send(formData);
            // });
        }
    </script>
</body>

</html>