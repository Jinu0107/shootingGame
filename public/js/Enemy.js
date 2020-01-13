class Enemy {
    constructor() {
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = null;
        this.vector = null;
        this.speed = null;
        this.active = false;
        this.hp = null;
        this.boss = null;
        this.phase = false;
        this.hpP = null;
        this.hpF = null;
        this.enemyfireTerm = null;
        this.bossfireTerm = 3000;
        this.enp = null;
        this.stoptime = null;
        this.moveV = null;
        this.bs = null;
        this.tempSpeed = null;
        this.fireT = false;
        this.bossMove = false;
        this.powerUp = null;
        this.boom = null;
        this.hpUp = null;
        this.stage = null;


        // enp 란 ?
        // 잡몹들의 패턴을 말한다 
        // 0 = 기본적으로 그냥 움직이는 친구
        // 1 = 정해준 시간뒤에 멈추는 친구
        // 2 = 정해준 시간 뒤에 방향을 바꾸는 친구
        // 3 = 정해준 시간뒤에 멈추고 다시 그 시간뒤에 방향을 바꾸는 친구
        // stoptime = 위에서 말한 '정해진 시간'
        // moveV = 방향을 바꾸어 움직일 벡터방향
    }

    reset(x, y, w, h, img, s, v, hp, boss = false, enemyfireTerm = 900, enp = 0, stoptime = 0, moveV = new Vector(0, 0), bs = 300, pw = false, boom = false, hpUp = false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = s;
        this.vector = v;
        this.active = true;
        this.hp = hp;
        this.hpF = hp;
        this.hpMax = hp;
        this.boss = boss;
        this.enemyfireTerm = enemyfireTerm;
        this.enp = enp;
        this.stoptime = stoptime;
        this.moveV = moveV;
        this.bs = bs;
        this.tempSpeed = s;
        this.fireT = false;
        this.bossMove = false;
        this.powerUp = pw;
        this.boom = boom;
        this.hpUp = hpUp;
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
        clearTimeout(this.timer4);
        clearTimeout(this.timer5);
        clearTimeout(this.timer6);
        clearTimeout(this.timer7);



        if (this.enp == 1) {
            this.timer1 = setTimeout(() => {
                this.speed = 0;
            }, this.stoptime);
        } else if (this.enp == 2) {
            this.timer2 = setTimeout(() => {
                this.vector = this.moveV;
            }, this.stoptime);
        } else if (this.enp == 3) {
            this.timer3 = setTimeout(() => {
                this.speed = 0;
                this.timer4 = setTimeout(() => {
                    this.speed = this.tempSpeed;
                    this.vector = this.moveV;
                }, this.stoptime * 2);
            }, this.stoptime);
        } else if (this.enp == 4) {
            // console.log(App.app.playerX - this.x, App.app.playerY);
            this.timer5 = setTimeout(() => {
                this.speed = 0;
                this.timer6 = setTimeout(() => {
                    this.speed = this.tempSpeed;
                    this.vector = new Vector(App.app.playerX - this.x, App.app.playerY);
                }, this.stoptime * 2);
            }, this.stoptime);


        } else if (this.enp == 5) {
            for (let i = 0; i <= 5; i++) {
                this.timer7 = setTimeout(() => {
                    this.vector = new Vector(App.app.playerX - this.x, App.app.playerY - this.y);
                }, this.stoptime);
            }
        }

        if (this.boss) {
            this.bossfire();
        } else {
            this.fire();
        }
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
        App.app.killEnemy();
        if (this.powerUp) {
            App.app.getOrCreateItem(this.x, this.y, 50, 50, 1, new Vector(0, 1));

        }
        if (this.boom) {
            App.app.getOrCreateItem(this.x, this.y, 50, 50, 2, new Vector(0, 1));

        }
        if (this.hpUp) {
            App.app.getOrCreateItem(this.x, this.y, 50, 50, 3, new Vector(0, 1));
        }

        if (this.boss) {
            this.stage++;
            console.log(this.stage);
            App.app.clearRound();
            if (this.stage > 3) {
                this.stage = 1;
            }
        }
        this.active = false;
    }

    bossfire() {
        if (!this.active) return;
        this.hpP = this.hp * (100 / this.hpF);
        if (App.app.stageRound == 1) {
            //임시로 하는거
            // this.hpP = 79;
            if (this.hpP > 68) {
                this.bossfireTerm = 3000;
                // for (let i = 1; i < 12; i++) {
                //     App.app.getOrCreateBullet(this.x + this.w / 12 * i, this.y + this.h - 5, 3, 300, new Vector((-6 + i), 9));
                //     App.app.getOrCreateBullet(this.x + this.w / 12 * (i - 1), this.y + this.h - 5, 3, 300, new Vector((-4 + i), 9));
                // }
                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 280, new Vector((0.5 - i), 6), 2);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 280, new Vector((-0.5 + i), 6), 2);
                }
                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 400, new Vector((1 - i), 6));
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 400, new Vector((-1 + i), 6));
                }
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 500, new Vector(0.2, 3));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 500, new Vector(-0.2, 3));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 750, new Vector(0, 1));
                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 200, new Vector((0.5 - i), 6), 2);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 200, new Vector((-0.5 + i), 6), 2);
                }
            } else if (this.hpP > 40) {
                this.bossfireTerm = 800;

                for (let i = 1; i < 10; i++) App.app.getOrCreateBullet(this.x + this.w / 4, this.y + this.h - 150, 3, 250, new Vector((-5 + i), 0), 2);
                for (let i = 1; i < 12; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 2, this.y + this.h - 50, 3, 250, new Vector((-6 + i), 0), 2);
                for (let i = 1; i < 10; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 3, this.y + this.h - 150, 3, 250, new Vector((-5 + i), 0), 2);
                if (this.phase) {
                    for (let i = 1; i < 16; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 2, this.y + this.h - 150, 3, 250, new Vector((-8 + i), 8), 2);
                    this.phase = false;
                } else {
                    for (let i = 1; i < 9; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 2, this.y + this.h - 150, 3, 250, new Vector(-9 + (i * 2), 16), 2);
                    this.phase = true;
                }
            } else {
                this.bossfireTerm = 2000;
                this.bossMove = true;
                this.speed = 35;
                // for (let i = 1; i < 10; i++) App.app.getOrCreateBullet(this.x + this.w / 4, this.y + this.h - 150, 3, 300, new Vector((-5 + i), 8));
                // // for(let i = 1; i < 12; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 2 , this.y + this.h - 50 , 3, 300, new Vector((-6+i), 8));
                // for (let i = 1; i < 10; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 3, this.y + this.h - 150, 3, 300, new Vector((-5 + i), 8));

                // for (let i = 1; i < 10; i++) App.app.getOrCreateBullet(this.x + this.w / 4, this.y + this.h - 150, 3, 300, new Vector((-5 + i), 0));
                // for (let i = 1; i < 12; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 2, this.y + this.h - 50, 3, 300, new Vector((-6 + i), 0));
                // for (let i = 1; i < 10; i++) App.app.getOrCreateBullet(this.x + this.w / 4 * 3, this.y + this.h - 150, 3, 300, new Vector((-5 + i), 0));
                for (let i = 1; i < 8; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 90 - (i * 8), new Vector((1 - i), 6), 3);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 90 - (i * 8), new Vector((-1 + i), 6), 3);
                }
                for (let i = 1; i < 8; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 60 - (i * 8), new Vector((0 - i), 6), 3);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 60 - (i * 8), new Vector((0 + i), 6), 3);
                }
                for (let i = 1; i < 6; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 40 - (i * 8), new Vector((2 - i), 6), 3);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 40 - (i * 8), new Vector((-2 + i), 6), 3);
                }
                // for(let i = 1; i < 10; i++){
                //     App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 100 - (i * 8), new Vector((0 - i), 9),2);
                // }
            }
        } else if (App.app.stageRound == 2) {
            if (this.hpP > 60) {
                this.bossfireTerm = 4000;
                this.bossMove = true;
                this.speed = 60;
                // for (let i = 1; i < 12; i++) {
                //     App.app.getOrCreateBullet(this.x + this.w / 12 * i, this.y + this.h - 5, 3, 300, new Vector((-6 + i), 9));
                //     App.app.getOrCreateBullet(this.x + this.w / 12 * (i - 1), this.y + this.h - 5, 3, 300, new Vector((-4 + i), 9));
                // }

                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 12 * i, this.y + this.h / 2, 4, 400, new Vector(App.app.playerX - this.x, App.app.playerY - this.y));
                    App.app.getOrCreateBullet(this.x + this.w / 12 * i, this.y + this.h / 2, 4, 400, new Vector(App.app.playerX - this.x, App.app.playerY - this.y));
                }
                for (let i = 1; i < 6; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 40 - (i * 8), new Vector((2 - i), 6), 2);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 40 - (i * 8), new Vector((-2 + i), 6), 2);
                }

            } else {
                this.bossfireTerm = 3500;
                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 55, new Vector((0.5 - i), 6));
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 55, new Vector((-0.5 + i), 6));
                }
                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 40, new Vector((1 - i), 6), 2);
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 40, new Vector((-1 + i), 6), 2);
                }
                for (let i = 1; i < 12; i++) {
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 30, new Vector((0.5 - i), 6));
                    App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, 30, new Vector((-0.5 + i), 6));
                }

                // for (let i = 1; i < 12; i++) {
                //     App.app.getOrCreateBullet(this.x + this.w / 12 * i, this.y + this.h / 2, 4, 20, new Vector(App.app.playerX - this.x, App.app.playerY - this.y * 2),3);
                //     App.app.getOrCreateBullet(this.x + this.w / 12 * i, this.y + this.h / 2, 4, 20, new Vector(App.app.playerX - this.x, App.app.playerY - this.y * 2),3);
                // }
            }
        }


        setTimeout(this.bossfire.bind(this), this.bossfireTerm);
    }
    fire() {
        if (!this.active) return;
        if (this.enp == 1) {
            for (let i = 1; i < 12; i++) {
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, this.bs, new Vector((1 - i), 4));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, this.bs, new Vector((-1 + i), 4));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, this.bs, new Vector((1 - i), -4));
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h / 2, 5, this.bs, new Vector((-1 + i), -4));
            }
        } else if (this.enp == 2) {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, this.bs, new Vector(0, 1), 2);
        } else if (this.enp == 3) {
            if (!this.fireT) {
                App.app.getOrCreateBullet(this.x + this.w / 4 * 2, this.y + this.h - 5, 3, this.bs, new Vector(-1, 1), 3);
                App.app.getOrCreateBullet(this.x + this.w / 4 * 3, this.y + this.h - 5, 3, this.bs, new Vector(1, 1), 3);
                App.app.getOrCreateBullet(this.x + this.w / 4 * 2, this.y, 3, this.bs, new Vector(-1, -1), 3);
                App.app.getOrCreateBullet(this.x + this.w / 4 * 3, this.y, 3, this.bs, new Vector(1, -1), 3);
                this.fireT = true;
            } else {
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, this.bs, new Vector(0, 1), 3);
                App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, this.bs, new Vector(0, -1), 3);
                App.app.getOrCreateBullet(this.x + this.w, this.y / 2, 3, this.bs, new Vector(1, 0), 3);
                App.app.getOrCreateBullet(this.x, this.y / 2, 3, this.bs, new Vector(-1, 0), 3);
                this.fireT = false;
            }


        } else if (this.enp == 4) {
        } else {
            App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, this.bs, new Vector(0, 1));
        }

        setTimeout(this.fire.bind(this), this.enemyfireTerm);
    }

    update(d) {
        if (!this.active) return;
        if (!this.boss) {
            let normal = this.vector.normalize();


            this.x += normal.x * d * this.speed;
            this.y += normal.y * d * this.speed;




            if (this.x < -this.w * 2 || this.y < -this.h * 2 ||
                this.x > this.w + App.app.gameWidth ||
                this.y > this.h + App.app.gameHeight
            ) {
                this.active = false;
            }

            ////여기부터 보스  
        } else {
            let normal = this.vector.normalize();
            if (this.y < 0) {
                this.x += normal.x * d * this.speed;
                this.y += normal.y * d * this.speed;
            } else {
                if (normal.x == 0) normal.x = -1;
                if (this.bossMove) {
                    if (this.x <= 0 || this.x + this.w >= App.app.gameWidth) {
                        normal.x *= -1;
                    }
                    this.x += normal.x * d * this.speed;
                }
            }

            if (this.x < -this.w * 2 || this.y < -this.h * 2 ||
                this.x > this.w + App.app.gameWidth ||
                this.y > this.h + App.app.gameHeight
            ) {
                this.active = false;
            }
        }
    }

    checkCollision(x, y, r) {
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;

        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);

        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }

    render(ctx) {
        if (!this.active) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

        if (this.boss) {
            ctx.strokeStyle = "#de354c";
            ctx.strokeRect(this.x, this.y, this.w, 10);
            let percent = this.hp / this.hpMax;
            ctx.fillStyle = "#de354c";
            ctx.fillRect(this.x, this.y, this.w * percent, 10);
        }
    }
}