export default class View {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
    document.body.appendChild(this.canvas);
  }

  drawBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.globalAlpha = 1.0;
    this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    this.ctx.globalAlpha = 1.0;
  }

  drawShip(ship) {
    var width = 20;
    var height = 30;
    let ctx = this.ctx;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    //Move stroke to ship
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(-ship.v); //rotate defaults clockwise, where radians are counterclockwise

    //Draw ship
    ctx.beginPath();
    ctx.moveTo(height * 2 / 3, 0);
    ctx.lineTo(-height / 3, width / 2);
    ctx.moveTo(height * 2 / 3, 0);
    ctx.lineTo(-height / 3, -width / 2);
    ctx.moveTo(-height / 6, -width / 2.5);
    ctx.lineTo(-height / 6, width / 2.5);
    // ctx.closePath();
    // ctx.fill();

    //Draw thrust
    if (ship.thrust && Date.now() % 20 > 10) {
      ctx.moveTo(-height / 6, width / 5);
      ctx.lineTo(-height / 2, 0);
      ctx.moveTo(-height / 6, -width / 5);
      ctx.lineTo(-height / 2, 0);
    }

    ctx.stroke();

    //Move stroke back
    ctx.restore();
  }

  render(state) {
    this.drawBackground();
    this.drawShip(state.ship.state);
  }
}
