class Bullet {
    constructor() {
        this.x = null;
        this.y = null;
        this.r = null;
        this.speed = null;
        this.vector = null;
        this.active = false;
        this.damage = 1;
        this.isEnemy = true;
        this.enemyColor = 0;
    }

    setActive(x, y, r, s, v, isEnemy = true, enemyColor = 0) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = s;
        this.vector = v;
        this.active = true;
        this.isEnemy = isEnemy;
        this.enemyColor = enemyColor;
    }

    update(d) {
        if (!this.active) return;
        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;

        // 화면밖 검사
        if (this.x < -this.r || this.x > App.app.gameWidth + this.r || this.y < -this.r || this.y > App.app.gameHeight + this.r) {
            this.active = false;
        }
    }

    render(ctx) {
        if (!this.active) return;
        if (!this.isEnemy) {
            ctx.beginPath();
            ctx.fillStyle = "#56ac50";
            ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "#affbb8";
            ctx.arc(this.x, this.y, this.r + 1, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "#f7f9f5";
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        } else {
            if (this.enemyColor == 0) {
                ctx.beginPath();
                ctx.fillStyle = "#f01616";
                ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#f8f860";
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            } else if (this.enemyColor == 1) {
                ctx.beginPath();
                ctx.fillStyle = "#f01616";
                ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#f8f860";
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            } else if (this.enemyColor == 2) {
                ctx.beginPath();
                ctx.fillStyle = "#3f3e82";
                ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#f7f9ff";
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            } else if (this.enemyColor == 3) {
                ctx.beginPath();
                ctx.fillStyle = "#e9a49e";
                ctx.arc(this.x, this.y, this.r + 5, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#b25d5a";
                ctx.arc(this.x, this.y, this.r + 3, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = "#ffeee5";
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}