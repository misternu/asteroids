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
    this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  drawShip(ship) {
    var width = 20;
    var height = 30;
    let ctx = this.ctx;
    ctx.fillStyle = 'red';

    //Move stroke to ship
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(-ship.v); //rotate defaults clockwise, where radians are counterclockwise

    //Draw ship
    ctx.beginPath();
    ctx.moveTo(height * 2 / 3, 0);
    ctx.lineTo(-height / 3, width / 2);
    ctx.lineTo(-height / 3, -width / 2);
    ctx.closePath();
    ctx.fill();

    //Move stroke back
    ctx.restore();
  }

  render(state) {
    this.drawBackground();
    this.drawShip(state.ship);
  }
}
