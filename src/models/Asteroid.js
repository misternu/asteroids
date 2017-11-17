export default class Asteroid {
  constructor(x, y) {
    this.state = {
      x: x,
      y: y,
      v: Math.random() * Math.PI * 2,
      dx: 0,
      dy: 0
    };
  }
}
