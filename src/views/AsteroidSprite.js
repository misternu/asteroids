const shapes = [
  [
    [0, -3],
    [2, -4],
    [4, -2],
    [2, -1],
    [4, 1],
    [2, 4],
    [-1, 3],
    [-2, 4],
    [-4, 2],
    [-3, 0],
    [-4, -2],
    [-2, -4],
    [0, -3]
  ]
];

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
    this.drawShape();
    ctx.restore();
  }

  drawShape() {
    const ctx = this.ctx;
    const shape = shapes[0];
    const size = 4;
    ctx.beginPath();
    ctx.moveTo(size * shape[0][0], size * shape[0][1]);
    for (var i = 1; i < shape.length; i++) {
      ctx.lineTo(size * shape[i][0], size * shape[i][1]);
    }
    ctx.stroke();
  }
}
