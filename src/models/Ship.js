import { mmod } from '../helpers';

export default class Ship {
  constructor() {
    this.state = {
      x: WIDTH / 2,
      y: HEIGHT / 2,
      v: Math.PI / 2,
      dx: 0,
      dy: 0,
      thrusting: false,
      radius: 15
    };
  }

  thrust(delta) {
    this.state.dx += delta * Math.cos(-this.state.v) * THRUST;
    this.state.dy += delta * Math.sin(-this.state.v) * THRUST;
    this.state.thrust = true;
  }

  endThrust() {
    this.state.thrust = false;
  }

  turnLeft(delta) {
    this.state.v += delta * ROTATION;
  }

  turnRight(delta) {
    this.state.v -= delta * ROTATION;
  }

  drift(delta) {
    this.state.x += this.state.dx * delta;
    this.state.y += this.state.dy * delta;
    this.edgeLoop();
  }

  edgeLoop() {
    this.state.x = mmod(this.state.x, WIDTH);
    this.state.y = mmod(this.state.y, HEIGHT);
  }
}
