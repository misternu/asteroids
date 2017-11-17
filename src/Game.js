import { mmod } from './helpers';
import Ship from './models/Ship';
import Asteroid from './models/Asteroid';

export default class Game {
  constructor(view, keyboard) {
    this.view = view;
    this.keyboard = keyboard;
    this.state = {
      ship: new Ship(),
      asteroids: []
    };
    this.addRocks(5);
  }

  addRocks(n) {
    const shipx = this.state.ship.state.x;
    const shipy = this.state.ship.state.y;
    const asteroids = this.state.asteroids;
    while (asteroids.length < n) {
      let x = Math.random() * WIDTH;
      let y = Math.random() * HEIGHT;
      if (Math.sqrt(Math.pow(shipx - x, 2) + Math.pow(shipy - y, 2)) > 100) {
        asteroids.push(new Asteroid(x, y));
      }
    }
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
    this.state.asteroids.forEach(a => {
      a.drift(delta);
    });
  }

  render(delta) {
    this.handleKeyboard(delta);
    this.handlePhysics(delta);
    this.view.render(this.state);
  }
}
