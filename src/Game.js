import { mmod } from './helpers';
import Ship from './models/Ship';
import Asteroid from './models/Asteroid';

export default class Game {
  constructor(view, keyboard) {
    this.view = view;
    this.keyboard = keyboard;
    this.state = {
      ship: new Ship(),
      asteroids: [
        new Asteroid(100, 100),
        new Asteroid(100, 200),
        new Asteroid(100, 300),
        new Asteroid(100, 400),
        new Asteroid(100, 500)
      ]
    };
  }

  handleKeyboard(delta) {
    const inputs = this.keyboard.getInputs();
    const ship = this.state.ship;
    if (inputs.includes('A')) {
      ship.turnLeft(delta);
    }
    if (inputs.includes('D')) {
      ship.turnRight(delta);
    }
    if (inputs.includes('W')) {
      ship.thrust(delta);
    } else {
      ship.endThrust();
    }
  }

  handlePhysics(delta) {
    this.state.ship.drift(delta);
    this.state.ship.edgeLoop();
  }

  render(delta) {
    this.handleKeyboard(delta);
    this.handlePhysics(delta);
    this.view.render(this.state);
  }
}
