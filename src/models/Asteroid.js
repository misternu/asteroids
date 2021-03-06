import { mmod } from '../helpers';

export default class Asteroid {
  constructor(x, y) {
    this.state = {
      x: x,
      y: y,
      v: Math.random() * Math.PI * 2,
      dx: (Math.random() - 0.5) * 100,
      dy: (Math.random() - 0.5) * 100,
      dv: (Math.random() - 0.5) * 2,
      type: Math.floor(Math.random() * 4),
      radius: 20
    };
  }

  drift(delta) {
    this.state.x += this.state.dx * delta;
    this.state.y += this.state.dy * delta;
    this.state.v += this.state.dv * delta;
    this.edgeLoop();
  }

  edgeLoop() {
    this.state.x = mmod(this.state.x, WIDTH);
    this.state.y = mmod(this.state.y, HEIGHT);
  }
}
