class Stage {
    constructor(gw, gh, imgs) {

        this.stage1 = [
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~초반패턴 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~빠르게 나오다 멈추는 새끼~~~~~~~~~~~~~~~~~~~~~
            {
                time: 4,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    stoptime: 200,
                    enemyfireTerm: 1800,
                    pw: true
                }
            },
            {
                time: 4.5,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800,
                    boom: true
                }
            },
            {
                time: 5,
                data: {
                    x: gw / 8 + 80,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 5.5,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 6,
                data: {
                    x: gw / 8 + 160,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 6.5,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 7,
                data: {
                    x: gw / 8 * 7,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 7.5,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800,
                    pw: true
                }
            },
            {
                time: 8,
                data: {
                    x: gw / 8 * 7 - 80,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 8.5,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 9,
                data: {
                    x: gw / 8 * 7 - 160,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800,
                    hpUp: true

                }
            },
            {
                time: 9.5,
                data: {
                    x: gw / 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    // stoptime: 2500,
                    stoptime: 200,
                    enemyfireTerm: 1800,
                    hpUp: true

                }
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~빠르게 나오다 멈추는 새끼 끝~~~~~~~~~~~~~~~~~~~~~
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  V 자로 움직이는 새끼~~~~~~~~~~~~~~~~~~~
            {
                time: 16,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(1, 1),
                    hp: 3,
                    enp: 2,
                    stoptime: 2500,
                    enemyfireTerm: 900,
                    moveV: new Vector(1, -1),
                    boom: true
                }
            },
            {
                time: 17,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(1, 1),
                    hp: 3,
                    enp: 2,
                    stoptime: 2500,
                    enemyfireTerm: 900,
                    moveV: new Vector(1, -1)
                }
            },
            {
                time: 18,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(1, 1),
                    hp: 3,
                    enp: 2,
                    stoptime: 2500,
                    enemyfireTerm: 900,
                    moveV: new Vector(1, -1)
                }
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  V 자로 움직이는 새끼~~~~~~~~~~~~~~~~~~~
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 나와서 총알 뿌리고 나가는 애~~~~~~~~~~~~~~~
            {
                time: 20,
                data: {
                    x: -150,
                    y: 100,
                    w: 150,
                    h: 110,
                    img: imgs.enemy3,
                    s: 100,
                    v: new Vector(1, 0),
                    hp: 35,
                    enp: 3,
                    stoptime: 2500,
                    moveV: new Vector(-1, 0),
                    enemyfireTerm: 400,
                    bs: 150
                }
            },
            {
                time: 21,
                data: {
                    x: gw,
                    y: 100,
                    w: 150,
                    h: 110,
                    img: imgs.enemy3,
                    s: 100,
                    v: new Vector(-1, 0),
                    hp: 35,
                    enp: 3,
                    stoptime: 2500,
                    moveV: new Vector(1, 0),
                    enemyfireTerm: 400,
                    bs: 150

                }
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 나와서 총알 뿌리고 나가는 애 끝~~~~~~~~~~~~~~~
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 평범한 애들 <------------  4마리~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            {
                time: 23,
                data: {
                    x: gw,
                    y: 60,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    enp: 4,
                    s: 300,
                    v: new Vector(-1, 0),

                }
            },
            {
                time: 24,
                data: {
                    x: gw,
                    y: 60,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    enp: 4,
                    s: 300,
                    v: new Vector(-1, 0),
                }
            },
            {
                time: 25,
                data: {
                    x: gw,
                    y: 60,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    enp: 4,
                    s: 300,
                    v: new Vector(-1, 0),
                }
            },
            {
                time: 26,
                data: {
                    x: gw,
                    y: 60,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    enp: 4,
                    s: 300,
                    v: new Vector(-1, 0),
                }
            },
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 평범한 애들 <------------  4마리~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 갑툭튀 악질 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            {
                time: 33,
                data: {
                    x: -80,
                    y: -55,
                    w: 80,
                    h: 55,
                    img: imgs.enemy3,
                    s: 300,
                    v: new Vector(1, 1),
                    hp: 6,
                    enp: 3,
                    stoptime: 700,
                    moveV: new Vector(1, 7),
                    enemyfireTerm: 600,
                    bs: 150
                }
            },

            {
                time: 34,
                data: {
                    x: gw,
                    y: -55,
                    w: 80,
                    h: 55,
                    img: imgs.enemy3,
                    s: 300,
                    v: new Vector(-1, 1),
                    hp: 6,
                    enp: 3,
                    stoptime: 600,
                    moveV: new Vector(-1, 7),
                    enemyfireTerm: 600,
                    bs: 150,
                    hpUp: true
                }
            },

            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 갑툭튀 악질 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 정신나가게 흔드는애 ~~~~~~~~~~~~~~~~~~~
            {
                time: 38,
                data: {
                    x: gw / 2,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(0, 1),
                    hp: 5,
                    enp: 2,
                    stoptime: 1800,
                    enemyfireTerm: 450,
                    moveV: new Vector(1, 1)
                }
            },
            {
                time: 39,
                data: {
                    x: gw / 2,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(0, 1),
                    hp: 5,
                    enp: 2,
                    stoptime: 1800,
                    enemyfireTerm: 450,
                    moveV: new Vector(-1, 1)
                }
            },
            {
                time: 40,
                data: {
                    x: gw / 2,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(0, 1),
                    hp: 5,
                    enp: 2,
                    stoptime: 1800,
                    enemyfireTerm: 450,
                    moveV: new Vector(1, 1)
                }
            },
            {
                time: 41,
                data: {
                    x: gw / 2,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(0, 1),
                    hp: 5,
                    enp: 2,
                    stoptime: 1800,
                    enemyfireTerm: 450,
                    moveV: new Vector(-1, 1),
                    boom: true
                }
            },
            {
                time: 42,
                data: {
                    x: gw / 2,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy2,
                    s: 200,
                    v: new Vector(0, 1),
                    hp: 5,
                    enp: 2,
                    stoptime: 1800,
                    enemyfireTerm: 450,
                    moveV: new Vector(1, 1)
                }
            },

            {
                time: 42,
                data: {
                    x: gw,
                    y: 70,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 250,
                    v: new Vector(-2, 1),
                    hp: 3,
                    enp: 3,
                    stoptime: 1200,
                    enemyfireTerm: 400,
                    moveV: new Vector(-1, 2),
                    bs: 140
                }
            },
            {
                time: 43,
                data: {
                    x: gw,
                    y: 70,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 250,
                    v: new Vector(-2, 1),
                    hp: 3,
                    enp: 3,
                    stoptime: 1100,
                    enemyfireTerm: 400,
                    moveV: new Vector(-1, 2),
                    bs: 140
                }
            },
            {
                time: 44,
                data: {
                    x: gw,
                    y: 70,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 250,
                    v: new Vector(-2, 1),
                    hp: 3,
                    enp: 3,
                    stoptime: 1000,
                    enemyfireTerm: 400,
                    moveV: new Vector(-1, 2),
                    bs: 140
                }
            },
            {
                time: 46,
                data: {
                    x: -80,
                    y: 70,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 250,
                    v: new Vector(2, 1),
                    hp: 3,
                    enp: 3,
                    stoptime: 1000,
                    enemyfireTerm: 500,
                    moveV: new Vector(1, 2),
                    bs: 140
                }
            },
            {
                time: 47,
                data: {
                    x: -80,
                    y: 70,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 250,
                    v: new Vector(2, 1),
                    hp: 3,
                    enp: 3,
                    stoptime: 1000,
                    enemyfireTerm: 500,
                    moveV: new Vector(1, 2),
                    bs: 140,
                    hpUp: true
                }
            },
            {
                time: 48,
                data: {
                    x: -80,
                    y: 70,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 250,
                    v: new Vector(2, 1),
                    hp: 3,
                    enp: 3,
                    stoptime: 1000,
                    enemyfireTerm: 500,
                    moveV: new Vector(1, 2),
                    bs: 140
                }
            },
            {
                time: 52,
                data: {
                    x: gw / 2 - 150,
                    y: -200,
                    w: 300,
                    h: 200,
                    img: imgs.boss,
                    s: 70,
                    v: new Vector(0, 1),
                    hp: 1200,
                    boss: true
                }
            },

        ];

        this.stage2 = [
            {
                time: 4,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 5,
                data: {
                    x: gw,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 6,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800,
                    pw: true
                }
            },
            {
                time: 7,
                data: {
                    x: gw,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 8,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800,
                    boom: true

                }
            },
            {
                time: 9,
                data: {
                    x: gw,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800,
                    hpUp: true
                }
            },
            {
                time: 12,
                data: {
                    x: 250,
                    y: -80,
                    w: 120,
                    h: 80,
                    img: imgs.enemy4,
                    s: 200,
                    v: new Vector(0, 1),
                    hp: 45,
                    enp: 1,
                    enemyfireTerm: 1200,
                    stoptime: 2200,
                    bs: 400

                }
            },
            {
                time: 14,
                data: {
                    x: gw,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800
                }
            },
            {
                time: 15,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 16,
                data: {
                    x: gw,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800,
                    hpUp: true
                }
            },
            {
                time: 17,
                data: {
                    x: -60,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 600,
                    v: new Vector(0, 1),
                    hp: 2,
                    enp: 4,
                    enemyfireTerm: 1800,
                    pw: true

                }
            },
            {
                time: 22,
                data: {
                    x: gw / 9,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 500,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 23,
                data: {
                    x: gw / 9 * 2,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800,
                    pw: true

                }
            },
            {
                time: 24,
                data: {
                    x: gw / 9 * 3,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 25,
                data: {
                    x: gw / 9 * 4,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 26,
                data: {
                    x: gw / 9 * 5,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 27,
                data: {
                    x: gw / 9 * 6,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800,
                    pw: true

                }
            },
            {
                time: 28,
                data: {
                    x: gw / 9 * 7,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 29,
                data: {
                    x: gw / 9 * 8,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(0, 1),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 29,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 30,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 31,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 32,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 33,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 34,
                data: {
                    x: gw,
                    y: gh / 9 ,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 35,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 36,
                data: {
                    x: gw,
                    y: gh / 9,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 700,
                    v: new Vector(-1, 0),
                    hp: 1,
                    enp: 4,
                    stoptime: 300,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 39,
                data: {
                    x: gw / 2,
                    y: -90,
                    w: 60,
                    h: 70,
                    img: imgs.enemy5,
                    s: 150,
                    v: new Vector(0, 1),
                    hp: 40,
                    enp: 5,
                    stoptime: 800,
                    enemyfireTerm: 1800

                }
            },
            {
                time: 43,
                data: {
                    x: gw,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(-1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 46,
                data: {
                    x: -80,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 50,
                data: {
                    x: gw / 2 - 150,
                    y: -390,
                    w: 270,
                    h: 390,
                    img: imgs.boss2,
                    s: 120,
                    boss : true,
                    v: new Vector(0, 1),
                    hp: 1500,

                }
            },
        ];
        this.stage3 = [
            {
                time: 4,
                data: {
                    x: gw,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(-1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 6,
                data: {
                    x: gw,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(-1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 8,
                data: {
                    x: gw,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(-1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 10,
                data: {
                    x: -80,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 12,
                data: {
                    x: -80,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 14,
                data: {
                    x: -80,
                    y: gh / 2,
                    w: 80,
                    h: 90,
                    img: imgs.enemy6,
                    s: 200,
                    v: new Vector(1, -1),
                    hp: 5,
                    enp: 6,
                    enemyfireTerm: 1,
                    bs: 450

                }
            },
            {
                time: 17,
                data: {
                    x: -150,
                    y: 100,
                    w: 150,
                    h: 110,
                    img: imgs.enemy3,
                    s: 100,
                    v: new Vector(1, 0),
                    hp: 35,
                    enp: 3,
                    stoptime: 2500,
                    moveV: new Vector(-1, 0),
                    enemyfireTerm: 400,
                    bs: 150
                }
            },
            {
                time: 18,
                data: {
                    x: gw,
                    y: 100,
                    w: 150,
                    h: 110,
                    img: imgs.enemy3,
                    s: 100,
                    v: new Vector(-1, 0),
                    hp: 35,
                    enp: 3,
                    stoptime: 2500,
                    moveV: new Vector(1, 0),
                    enemyfireTerm: 400,
                    bs: 150

                }
            },
        ];
    }
}