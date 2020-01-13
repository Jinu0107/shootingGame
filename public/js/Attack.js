
class Attack {
    constructor() {
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = null;
        this.now = 0;
        this.duration = 0.6;
        this.idx = 0;
        this.active = false;
    }

    setActive(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.active = true;
        this.now = 0;
        this.img = img;
    }

    update(d) {
        if (!this.active) return;
        this.now += d;
        this.idx = Math.floor(16 * this.now / this.duration);
        if (this.now > this.duration) {
            this.active = false;
        }
    }

    render(ctx) {
        if (!this.active) return;
        let sx = this.idx % 4 * 50.75;
        let sy = Math.floor(this.idx / 4) * 50.75;

        ctx.drawImage(
            this.img, sx, sy, 50.75, 50.75,
            this.x, this.y, this.w, this.h);
    }
}