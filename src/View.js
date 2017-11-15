const RATIO = 5 / 4;
const HEIGHT = 600;
const WIDTH = Math.floor(RATIO * HEIGHT);

class View {
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

  render() {
    this.drawBackground();
  }
}

export default View;
