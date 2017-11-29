import { mmod } from './helpers';
import Ship from './models/Ship';
import Asteroid from './models/Asteroid';

export default class Game {
  constructor(view, keyboard) {
    this.view = view;
    this.keyboard = keyboard;
    this.state = {
      ship: new Ship(),
      asteroids: [],
      started: false,
      lives: 2
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
      if (!this.state.started && this.state.ship) {
        this.state.started = true;
      }
    } else {
      ship.endThrust();
    }
  }

  distance(a, b) {
    return Math.sqrt(Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2);
  }

  shipCollision() {
    const ship = this.state.ship.state;
    this.state.asteroids.forEach(a => {
      const asteroid = a.state;
      if (this.distance(asteroid, ship) < asteroid.radius + ship.radius) {
        // Ship collision
        if (this.state.lives > 0) {
          this.state.lives -= 1;
          this.state.started = false;
          this.state.ship = new Ship();
        } else {
          this.state.ship = null;
        }
      }
    });
  }

  handlePhysics(delta) {
    this.state.ship.drift(delta);
    this.state.asteroids.forEach(a => {
      a.drift(delta);
    });
    this.shipCollision();
  }

  render(delta) {
    this.handleKeyboard(delta);
    if (this.state.started) {
      this.handlePhysics(delta);
    }
    this.view.render(this.state);
  }
}
