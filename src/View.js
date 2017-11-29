import AsteroidSprite from './views/AsteroidSprite';
import ShipSprite from './views/ShipSprite';

export default class View {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
    document.body.appendChild(this.canvas);

    this.shipSprite = new ShipSprite(this.ctx);
    this.asteroidSprite = new AsteroidSprite(this.ctx);
  }

  drawBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.globalAlpha = 1.0;
    this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    this.ctx.globalAlpha = 1.0;
  }

  render(state) {
    this.drawBackground();
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    if (state.ship) {
      this.shipSprite.render(state.ship.state);
    }
    state.asteroids.forEach(this.asteroidSprite.render, this.asteroidSprite);
  }
}
