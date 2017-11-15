export default class Game {
  constructor(view, keyboard) {
    this.view = view;
    this.keyboard = keyboard;
    this.state = {
      ship: {
        x: WIDTH / 2,
        y: HEIGHT / 2,
        v: Math.PI / 2,
        dx: 0,
        dy: 0
      }
    };
  }

  handleKeyboard(delta) {
    const inputs = this.keyboard.getInputs();
    const ship = this.state.ship;
    if (inputs.includes('A')) {
      ship.v += delta * ROTATION;
    }
    if (inputs.includes('D')) {
      ship.v -= delta * ROTATION;
    }
    if (inputs.includes('W')) {
      ship.dx += delta * Math.cos(-ship.v) * THRUST;
      ship.dy += delta * Math.sin(-ship.v) * THRUST;
    }
  }

  handlePhysics(delta) {
    this.state.ship.x += this.state.ship.dx;
    this.state.ship.y += this.state.ship.dy;
  }

  render(delta) {
    this.handleKeyboard(delta);
    this.handlePhysics(delta);
    this.view.render(this.state);
  }
}
