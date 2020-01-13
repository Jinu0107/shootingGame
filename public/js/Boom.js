class Boom {
    constructor() {
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = null;
        this.v = null;
        this.active = false;
        this.speed = 200;
    }

    reset(x, y, w, h, img, v) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.v = v;
        this.active = true;
    }

    update(d) {
        if (!this.active) return;
        let normal = this.v.normalize();

        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;


        if (this.x < -this.w * 2 || this.y < -this.h * 2 ||
            this.x > this.w + App.app.gameWidth ||
            this.y > this.h + App.app.gameHeight
        ) {
            this.active = false;
        }
    }
    render(ctx) {
        if (!this.active) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
}