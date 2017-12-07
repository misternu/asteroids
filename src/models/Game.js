import { mmod } from '../helpers';
import Ship from './Ship';
import Asteroid from './Asteroid';

export default class Game {
  constructor() {
    this.state = {
      ship: new Ship(),
      asteroids: [],
      shots: [],
      started: false,
      lives: 2
    };
    this.addRocks(5);
  }

  ready() {
    return !this.state.started && this.state.ship;
  }

  start() {
    this.state.started = true;
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

  shotCollision() {
    const asteroids = this.state.asteroids;
    const shots = this.state.shots;
    asteroids.forEach((a, a_index) => {
      shots.forEach((s, s_index) => {
        if (this.distance(a.state, s.state) < a.state.radius) {
          console.log(a_index);
          asteroids.splice(a_index, 1);
          shots.splice(s_index, 1);
        }
      });
    });
  }

  handlePhysics(delta) {
    this.state.ship.time(delta);
    this.state.asteroids.forEach(a => {
      a.drift(delta);
    });
    this.state.shots.forEach(s => {
      s.time(delta);
    });
    this.state.shots = this.state.shots.filter(s => s.alive());
    this.shipCollision();
    this.shotCollision();
  }

  shoot() {
    const shot = this.state.ship.shoot();
    if (shot) {
      this.state.shots.push(shot);
    }
  }

  time(delta) {
    if (this.state.started) {
      this.handlePhysics(delta);
    }
  }
}
