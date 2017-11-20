import shapes from './asteroidShapes';

export default class AsteroidSprite {
  constructor(ctx) {
    this.ctx = ctx;
  }

  render(asteroid) {
    const ctx = this.ctx;
    const state = asteroid.state;
    ctx.save();
    ctx.translate(state.x, state.y);
    ctx.rotate(-state.v);
    this.drawShape(state.type);
    ctx.restore();
  }

  drawShape(type) {
    const ctx = this.ctx;
    const shape = shapes[type];
    const size = 6;
    ctx.beginPath();
    ctx.moveTo(size * shape[0][0], size * shape[0][1]);
    for (var i = 1; i < shape.length; i++) {
      ctx.lineTo(size * shape[i][0], size * shape[i][1]);
    }
    ctx.stroke();
  }
}
