const log = console.log;

class App {
    constructor() {
        // console.log("sadf");
        App.app = this; // 앱에 스태틱으로 넣었다 이말이야
        this.gameWidth = 600;
        this.gameHeight = 900;

        this.canvas = document.querySelector("#myGame");
        this.ctx = this.canvas.getContext("2d");
        this.start = true;
        this.imageList = {}; //이미지 저장 오브젝트
        this.firstStart = false;

        this.player = null;
        this.backList = []; //배경그림 리스트
        this.playerBulletList = []; //플레이어 총알 리스트

        this.enemyList = []; //적기체 저장 리스트
        this.expList = []; //폭발리스트
        this.ackList = [];
        this.itemList = [];
        this.boomList = [];
        this.playerX = null;
        this.playerY = null;
        this.playTime = 0;
        //여기에 스테이지 데이터 제어 변수들이 들어갑니다.
        this.gameTimer = 0; //게임이 시작되고 몇초가 흘렀는지 저장
        this.stageIdx = 0; //지금 몇번째 적을 만들어내는지 저장

        this.stageData = []; //스테이지의 데이터

        this.over = false;
        this.pause = true;
        this.stageLevel = 1;
        this.stageRound = 1;


        this.score = 0;
        // $("#gameOverBox").fadeIn();
        this.init(); //초기화 함수


        document.addEventListener("keydown", e => {
            if (!this.firstStart) {
                this.firstStart = true;
                document.querySelector("#gameOverBox").innerHTML = "3";
                this.timer1 = setTimeout(() => {
                    document.querySelector("#gameOverBox").innerHTML = "2";
                    this.timer2 = setTimeout(() => {
                        document.querySelector("#gameOverBox").innerHTML = "1";
                        this.timer3 = setTimeout(() => {
                            $("#gameOverBox").fadeOut();
                            this.pause = false;



                        }, 1000);
                    }, 1000);
                }, 1000);

            }
        });




        document.querySelector("#resume").addEventListener("click", () => {
            App.app.pause = false;
            $("#pauseBox").fadeOut();
        });


        document.addEventListener("keypress", (e) => {
            if (e.key == "|") {
                this.start = true;
                document.querySelector("#startBtn").click();
            }
        });


    }

    async init() {
        this.imageList.player = await this.loadImage("player.png");
        this.imageList.back = await this.loadImage("back.png");
        this.imageList.back2 = await this.loadImage("back2.png");
        this.imageList.back3 = await this.loadImage("back3.png");
        this.imageList.enemy = await this.loadImage("enemy1.png");
        this.imageList.enemy2 = await this.loadImage("ap1.png");
        // console.log("1");
        this.imageList.enemy3 = await this.loadImage("ap3.png");
        this.imageList.enemy4 = await this.loadImage("ap2.png");
        this.imageList.enemy5 = await this.loadImage("ap9.png");
        this.imageList.enemy6 = await this.loadImage("ap10.png");
        // console.log("2");
        // this.imageList.enemy4 = await this.loadImage("ap4.png");
        // console.log("3");
        // this.imageList.enemy5 = await this.loadImage("ap5.png");
        // console.log("4");
        this.imageList.explosion = await this.loadImage("explosion.png");
        this.imageList.boss = await this.loadImage("boss.png");
        this.imageList.boss2 = await this.loadImage("boss2.png");
        this.imageList.attack = await this.loadImage("explosion02.png")
        this.imageList.hpUp = await this.loadImage("hpUp.png");
        this.imageList.powerUp = await this.loadImage("powerUp.png");
        this.imageList.boom = await this.loadImage("boom.png");
        



        //백그라운드 생성
        for (let i = 0; i < 3; i++) {
            this.backList.push(
                new Background(0, -i * this.gameHeight,
                    this.gameWidth, this.gameHeight,
                    this.imageList.back));
        }
        //플레이어 생성(x좌표 y좌표 너비 높이 이미지)
        this.player = new Player(
            this.gameWidth / 2 - 30, this.gameHeight - 60,
            60, 40, this.imageList.player, this);

        let stage = new Stage(this.gameWidth, this.gameHeight, this.imageList);
        this.stageData = stage.stage1;

        // let tempExp = new Explosion(100, 100, 60, 60, this.imageList.explosion);
        // this.expList.push(tempExp);

        // let tempItm = new Item();
        // tempItm.reset(100, 100, 60, 60, this.imageList.powerUp, new Vector(0, 1));
        // this.itemList.push(tempItm);
        // log(this.imageList.powerUp);
        // this.ctx.drawImage(this.imageList.powerUp , 200, 300 , 60, 60);

        // let tempack = new Attack();
        // log(this.imageList.attack);
        // tempack.setActive(100, 100, 60, 60, this.imageList.attack);
        // this.ackList.push(tempack);

        // let tempbom = new Boom();
        // tempbom.reset(20, this.gameHeight, 550, 450, this.imageList.boom, new Vector(0, -1));
        // this.boomList.push(tempbom);


        requestAnimationFrame(this.frame.bind(this));
    }
    playerXY(x, y) {
        this.playerX = x;
        this.playerY = y;
        // log(x , y);
    }



    getOrCreateExplosion(x, y, w, h) {
        let exp = this.expList.find(x => !x.active);
        if (exp === undefined) {
            exp = new Explosion(this.imageList.explosion);
            this.expList.push(exp);
        }
        exp.setActive(x, y, w, h);
        // this.getOrCreateItem(x, y, w, h, 1, new Vector(0, 1));
        // this.getOrCreateItem(x, y, w, h, 2, new Vector(0, 1));
    }
    getOrCreateAttack(x, y, w, h) {
        let ack = this.ackList.find(x => !x.active);
        if (ack === undefined) {
            ack = new Attack();
            this.ackList.push(ack);
        }
        ack.setActive(x, y, w, h, this.imageList.attack);
    }

    //1=>파워 2=> 폭탄 3=> 물약
    getOrCreateItem(x, y, w, h, item, v) {

        let itm = this.itemList.find(x => !x.active);

        if (itm === undefined) {
            // log("여긴 들어옴");
            itm = new Item();
            this.itemList.push(itm);
        }
        if (item == 1) {
            // console.log("들어간듯");
            itm.reset(x, y, w, h, this.imageList.powerUp, v, 1);
        } else if (item == 2) {
            itm.reset(x, y, w, h, this.imageList.boom, v, 2);
        } else {

            itm.reset(x, y, w, h, this.imageList.hpUp, v, 3);
        }
    }
    getOrCreateBoom(x, y, w, h) {

        let bom = this.boomList.find(x => !x.active);
        if (bom === undefined) {
            bom = new Boom();
            this.boomList.push(bom);
        }
        bom.reset(x, y, w, h, this.imageList.boom, new Vector(0, -1));
    }

    getOrCreateBullet(x, y, r, s, v, enemyColor = 0, isEnemy = true) {
        let bullet = this.playerBulletList.find(x => !x.active);
        if (bullet == undefined) {
            bullet = new Bullet();
            this.playerBulletList.push(bullet);
        }
        bullet.setActive(x, y, r, s, v, isEnemy, enemyColor);
    }

    getOrCreateEnemy(data) {
        let e = this.enemyList.find(x => !x.active);
        if (e === undefined) {
            e = new Enemy();
            this.enemyList.push(e);
        }
        e.reset(data.x, data.y, data.w, data.h, data.img, data.s, data.v, data.hp, data.boss, data.enemyfireTerm, data.enp, data.stoptime, data.moveV, data.bs,
            data.pw, data.boom, data.hpUp);
    }

    loadImage(name) {
        return new Promise((res, rej) => {
            let img = new Image();
            img.src = `/images/${name}`;
            img.addEventListener("load", () => {
                res(img);
            });
        });
    }
    killEnemy() {
        this.score += 250;
    }


    frame(time) {
        if (!this.start) this.start = time;
        let delta = time - this.start;
        this.start = time;
        if (!this.over) {
            this.update(delta / 1000);
            this.render();
            // if(delta / 1000 > 1){
            this.ctx.font = 'bold 29px 나눔고딕';
            this.ctx.fillStyle = "rgb(200,200,200)";
            // this.ctx.testAlign(left);
            this.ctx.textBaseline = top;
            this.ctx.fillText('SCORE : ' + this.score, 0, 29);
            // this.ctx.testAlign(right);
            this.ctx.font = 'bold 20px 나눔고딕';
            this.ctx.fillText('STAGE : ' + this.stageLevel + ' - ' + this.stageRound, this.gameWidth - 160, this.gameHeight - 29);
            this.ctx.font = 'bold 24px 나눔고딕';
            this.ctx.fillText("PlayTime : " + parseInt(this.playTime), 10, this.gameHeight - 59);
            this.ctx.font = 'bold 24px 나눔고딕';
            this.ctx.fillText("StageTime : " + parseInt(this.gameTimer), 10, this.gameHeight - 29);
            for (let i = 1; i <= this.player.power; i++) {
                // log("ads");
                if (this.player.power > 0) {
                    this.ctx.drawImage(this.imageList.powerUp, 55 * i, this.gameHeight - 140, 45, 45);
                }
            }
            for (let i = 1; i <= this.player.boom; i++) {
                // log("ads");
                if (this.player.boom > 0) {
                    this.ctx.drawImage(this.imageList.boom, 55 * i, this.gameHeight - 200, 45, 45);
                }
            }


            // }

        }

        requestAnimationFrame(this.frame.bind(this));
    }
    gameOver() {
        this.over = true;
        document.querySelector("#gameOverBox").innerHTML = "Game<br>Over<br><br>SCORE : " + this.score;
        $("#gameOverBox").fadeIn();
        let score = this.score;
        let formData = new FormData();
        formData.append("score", score);
        let req = new XMLHttpRequest();
        req.addEventListener("load", (e) => {
            let res = JSON.parse(req.responseText);
            if (res.success) { } else { }

        });
        req.open("POST", "/game/rank");
        req.send(formData);

        setTimeout(() => {
            location.href = "/";
        }, 5000);
    }


    update(delta) {
        if (this.pause) {
            delta = 0;
            return;
        }
        this.score = this.score + 1;

        this.gameTimer += delta; //이렇게 되면 게임 진행시간이 this.gameTimer에 들어간다.
        this.playTime += delta;

        this.backList.forEach(back => back.update(delta));
        if (this.backList[0].y > this.gameHeight) {
            let first = this.backList.shift();
            first.y = this.backList[this.backList.length - 1].y - this.gameHeight;
            this.backList.push(first);
        }
        this.player.update(delta);
        this.player.checkOut(this.gameWidth, this.gameHeight);



        let nowEnemy = this.stageData[this.stageIdx];
        if (nowEnemy !== undefined && nowEnemy.time <= this.gameTimer) {
            this.getOrCreateEnemy(nowEnemy.data);
            this.stageIdx++;
        }

        this.playerBulletList.forEach(b => b.update(delta));
        this.enemyList.forEach(e => e.update(delta));

        this.playerBulletList.filter(b => b.active).forEach(b => {
            if (!b.isEnemy) {
                this.enemyList.filter(e => e.active).forEach(e => {
                    if (e.checkCollision(b.x, b.y, b.r)) {
                        e.setDamage(b.damage);
                        this.getOrCreateAttack(b.x - 30, b.y - 20, 30, 30);
                        // this.getOrCreateExplosion(b.x - 30, b.y - 20, 60, 60);
                        b.active = false;
                    }
                });
            } else {
                //적총알이 플레이어에 충돌했는지를 검사
                if (this.player.checkCollision(b.x, b.y, b.r)) {
                    this.player.setDamage(b.damage);
                    this.getOrCreateAttack(b.x - 30, b.y - 20, 30, 30);
                    // this.getOrCreateAttack(b.x, b.y, 60, 60);
                    this.player.active = false;
                    b.active = false;
                }
                this.boomList.filter(m => m.active).forEach(m => {
                    if (m.checkCollision(b.x, b.y, b.r)) {
                        b.active = false;
                    }
                });

            }
        });
        this.enemyList.filter(e => e.active).forEach(e => {
            if (this.player.checkCollisionBody(e.x, e.y, e.w / 2)) {
                if (!e.boss) {
                    this.player.power--;
                    e.setDamage(1000000);
                } else {
                    this.player.power -= 3;
                }

            }
        });
        this.enemyList.filter(e => e.active).forEach(e => {
            this.boomList.filter(b => b.active).forEach(b => {
                if (b.checkCollisionBody(e.x, e.y, e.w / 2)) {
                    if (!e.boss) {
                        e.setDamage(100);
                    } else {
                        b.active = false;
                        e.setDamage(100);
                    }
                }
            });
        });
        this.itemList.filter(i => i.active).forEach(i => {
            if (this.player.checkItem(i.x, i.y, i.w / 2)) {
                if (i.number == 1) {
                    this.player.power++;
                } else if (i.number == 2) {
                    this.player.boom++;
                } else {
                    this.player.hp += 2;
                }
                i.active = false;
            }
        });

        this.boomList.forEach(b => b.update(delta));
        this.itemList.forEach(i => i.update(delta));
        this.ackList.forEach(a => a.update(delta));
        this.expList.forEach(e => e.update(delta));
    }

    clearRound() {
        setTimeout(() => {
            document.querySelector("#gameOverBox").innerHTML = "Next Level";
            $("#gameOverBox").fadeIn();
            this.stageRound++;
            if (this.stageRound > 2) {
                this.stageRound = 1;
                this.stageLevel++;
            }
            setTimeout(() => {
                this.backList = [];
                let stage = new Stage(this.gameWidth, this.gameHeight, this.imageList)
                this.gameTimer = 0;
                if (this.stageRound == 1) {
                    for (let i = 0; i < 3; i++) {
                        this.backList.push(
                            new Background(0, -i * this.gameHeight,
                                this.gameWidth, this.gameHeight,
                                this.imageList.back));
                    }
                } else if (this.stageRound == 2) {
                    this.stageData = stage.stage2;
                    for (let i = 0; i < 3; i++) {
                        this.backList.push(
                            new Background(0, -i * this.gameHeight,
                                this.gameWidth, this.gameHeight,
                                this.imageList.back2));
                    }
                } else {
                    for (let i = 0; i < 3; i++) {
                        this.backList.push(
                            new Background(0, -i * this.gameHeight,
                                this.gameWidth, this.gameHeight,
                                this.imageList.back2));
                    }
                }


                this.stageIdx = 0;
                $("#gameOverBox").fadeOut();
            }, 2000);
        }, 2000);
        this.playerBulletList.filter(b => b.active).forEach(b => {
            b.active = false;
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.backList.forEach(back => back.render(this.ctx));
        this.playerBulletList.forEach(b => b.render(this.ctx));
        this.enemyList.forEach(e => e.render(this.ctx));
        this.player.render(this.ctx);
        this.expList.forEach(e => e.render(this.ctx));
        this.ackList.forEach(a => a.render(this.ctx));
        this.itemList.forEach(i => i.render(this.ctx));
        this.boomList.forEach(b => b.render(this.ctx));
    }

}