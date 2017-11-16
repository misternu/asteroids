import { mmod } from './helpers';
import Ship from './models/Ship';

export default class Game {
  constructor(view, keyboard) {
    this.view = view;
    this.keyboard = keyboard;
    this.state = {
      ship: new Ship()
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
