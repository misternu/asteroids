import { mmod } from '../helpers';
import Shot from './Shot';

export default class Ship {
  constructor() {
    this.state = {
      x: WIDTH / 2,
      y: HEIGHT / 2,
      v: Math.PI / 2,
      dx: 0,
      dy: 0,
      thrusting: false,
      cooldown: 0,
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

  shoot() {
    if (this.state.cooldown < 0) {
      this.state.cooldown = SHOT_COOLDOWN;
      return this.createShot();
    }
  }

  createShot() {
    const x = this.state.x + Math.cos(-this.state.v) * 10;
    const y = this.state.y + Math.sin(-this.state.v) * 10;
    const dx = this.state.dx + Math.cos(-this.state.v) * 200;
    const dy = this.state.dy + Math.sin(-this.state.v) * 200;
    return new Shot(x, y, dx, dy);
  }

  shotCooldown(delta) {
    this.state.cooldown -= delta;
  }

  time(delta) {
    this.state.x += this.state.dx * delta;
    this.state.y += this.state.dy * delta;
    this.edgeLoop();
    this.shotCooldown(delta);
  }

  edgeLoop() {
    this.state.x = mmod(this.state.x, WIDTH);
    this.state.y = mmod(this.state.y, HEIGHT);
  }
}
