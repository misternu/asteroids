export default class ShotSprite {
  constructor(ctx) {
    this.ctx = ctx;
  }

  render(shot) {
    const ctx = this.ctx;
    const state = shot.state;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(state.x, state.y, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}
