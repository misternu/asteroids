import { mmod } from '../helpers';

export default class Shot {
  constructor(x, y, dx, dy) {
    this.state = {
      x: x,
      y: y,
      dx: dx,
      dy: dy,
      life: 1.7
    };
  }

  alive() {
    return this.state.life > 0;
  }

  time(delta) {
    this.state.x += this.state.dx * delta;
    this.state.y += this.state.dy * delta;
    this.state.life -= delta;
    this.edgeLoop();
  }

  edgeLoop() {
    this.state.x = mmod(this.state.x, WIDTH);
    this.state.y = mmod(this.state.y, HEIGHT);
  }
}
