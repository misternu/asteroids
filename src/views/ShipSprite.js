export default class ShipSprite {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 20;
    this.height = 30;
  }

  drawThrust(ctx) {
    ctx.moveTo(-this.height / 6, this.width / 5);
    ctx.lineTo(-this.height / 2, 0);
    ctx.moveTo(-this.height / 6, -this.width / 5);
    ctx.lineTo(-this.height / 2, 0);
  }

  drawShip(ctx) {
    ctx.moveTo(this.height * 2 / 3, 0);
    ctx.lineTo(-this.height / 3, this.width / 2);
    ctx.moveTo(this.height * 2 / 3, 0);
    ctx.lineTo(-this.height / 3, -this.width / 2);
    ctx.moveTo(-this.height / 6, -this.width / 2.5);
    ctx.lineTo(-this.height / 6, this.width / 2.5);
  }

  render(ship) {
    let ctx = this.ctx;
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(-ship.v);
    ctx.beginPath();

    this.drawShip(ctx);
    if (ship.thrust && Date.now() % 20 > 10) {
      this.drawThrust(ctx);
    }

    ctx.stroke();
    ctx.restore();
  }
}
