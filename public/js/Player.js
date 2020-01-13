class Player {
    constructor(x, y, w, h, img, app, hp = 10) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.keyArr = [];
        this.speed = 300;
        this.hpMax = hp;
        this.fireTerm = 0.2;
        this.hp = hp;
        this.firing = false;
        this.slow = false;
        this.pause = false;
        this.power = 1;
        this.boom = 1;

        this.keyY = 0;
        this.keyD = 0;
        this.keyH = 0;
        this.cheat = false;

        this.currentFireTerm = 0;
        this.init();
    }

    setDamage(value) {
        this.hp -= value;
        if (this.hp <= 0) {
            this.explosion();
        }
    }

    explosion() {
        //폭발이펙트 생성
        App.app.getOrCreateExplosion(this.x, this.y, this.w, this.w);
        App.app.gameOver();
        this.active = false;

    }
    checkCollision(x, y, r) {
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;

        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);

        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }
    checkCollisionBody(x, y, r) {
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;

        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);

        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }
    checkItem(x, y, r) {
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;

        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);

        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }





    init() {
        document.addEventListener("keydown", e => {
            // console.log(e.code);
            if (e.code === "ArrowLeft") this.keyArr[0] = true;
            if (e.code === "ArrowRight") this.keyArr[1] = true;
            if (e.code === "ArrowUp") this.keyArr[2] = true;
            if (e.code === "ArrowDown") this.keyArr[3] = true;
            if (e.code === "KeyZ") this.firing = true;
            if (e.code === "ControlLeft") this.slow = true;
            if (App.app.pause) {
                if (e.code === "Escape") {
                    App.app.pause = false;
                    $("#pauseBox").fadeOut();
                }
            } else {
                if (e.code === "Escape") {
                    App.app.pause = true;
                    $("#pauseBox").fadeIn();
                }

            }
            if (e.code === "ShiftLeft") {
                if (this.boom > 0) {
                    console.log(this.boom)
                    App.app.getOrCreateBoom(0, 900, 600, 450);
                    this.boom--;
                }

            }
            if (!this.cheat) {
                if (e.code == "KeyY") {
                    if (this.keyY == 2) {
                    } else {
                        this.keyY++;
                    }
                   
                }
                if (e.code == "KeyD") {
                    if (this.keyY == 2 && this.keyD == 0) {
                        this.keyD++;
                    }
                }
                if (e.code == "KeyH") {
                    if (this.keyD == 1 && this.keyH == 0) {
                        this.keyH++;
                    }

                }
            }




        });

        document.addEventListener("keyup", e => {
            if (e.code === "ArrowLeft") this.keyArr[0] = false;
            if (e.code === "ArrowRight") this.keyArr[1] = false;
            if (e.code === "ArrowUp") this.keyArr[2] = false;
            if (e.code === "ArrowDown") this.keyArr[3] = false;
            if (e.code === "KeyZ") this.firing = false;
            if (e.code === "ControlLeft") this.slow = false;
        })
    }

    fire() {
        if (this.currentFireTerm > 0) return;
        if (this.power == 1) {
            this.app.getOrCreateBullet(this.x + this.w / 3, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 3 * 2, this.y, 3, 700, new Vector(0, -1), 0, false);
        } else if (this.power == 2) {
            this.app.getOrCreateBullet(this.x + this.w / 12, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 3, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 5, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 7, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 9, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 11, this.y, 3, 700, new Vector(0, -1), 0, false);
        } else if (this.power == 3) {
            this.app.getOrCreateBullet(this.x + this.w / 12, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 3, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 5, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 7, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 9, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 12 * 11, this.y, 3, 700, new Vector(0, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 2, this.y, 6, 700, new Vector(1, -1), 0, false);
            this.app.getOrCreateBullet(this.x + this.w / 2, this.y, 6, 700, new Vector(-1, -1), 0, false);
        }
        this.currentFireTerm = this.fireTerm;
    }

    update(d) {
        if (this.currentFireTerm > 0) this.currentFireTerm -= d;
        if (this.power > 3) {
            this.power = 3;
        }
        if (this.keyY == 2 && this.keyD == 1 && this.keyH == 1) {
            this.cheat = true;
            this.hp = 9999999;
            this.power = 3;
        }

        let dx = 0,
            dy = 0;
        if (this.keyArr[0]) dx = -1;
        if (this.keyArr[1]) dx = 1;
        if (this.keyArr[2]) dy = -1;
        if (this.keyArr[3]) dy = 1;
        if (this.firing) this.fire();
        if (this.slow) {
            this.speed = 120;
        } else {
            this.speed = 300;
        }
        this.x += dx * d * this.speed;
        this.y += dy * d * this.speed;

        if (this.power == 0) {
            console.log("dsa");
            this.explosion();
        }
        App.app.playerXY(this.x, this.y);
    }

    checkOut(w, h) {
        if (this.x < 0) this.x = 0;
        if (this.x + this.w >= w) this.x = w - this.w;
        if (this.y < 0) this.y = 0;
        if (this.y + this.h >= h) this.y = h - this.h;
    }

    render(ctx) {

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

        ctx.strokeStyle = "#29fffb";
        ctx.strokeRect(0, App.app.gameHeight - 11, App.app.gameWidth, 10);
        let percent = this.hp / this.hpMax;
        ctx.fillStyle = "#29fffb";
        ctx.fillRect(0, App.app.gameHeight - 11, App.app.gameWidth * percent, 10);
        // ctx.strokeStyle = "#3af05b";
        // ctx.strokeRect(0,874,600,25);
        // let percent = this.hp/this.hpMax;
        // ctx.fillStyle = "#3af05b";
        // ctx.fillRect(0,874,600,25*percent);
    }
}