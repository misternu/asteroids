import Game from './models/Game';

export default class GameController {
  constructor(view, keyboard) {
    this.view = view;
    this.keyboard = keyboard;
    this.game = new Game();
  }

  handleKeyboard(delta) {
    const inputs = this.keyboard.getInputs();
    const ship = this.game.state.ship;
    const game = this.game;

    if (inputs.includes('A')) {
      ship.turnLeft(delta);
    }

    if (inputs.includes('D')) {
      ship.turnRight(delta);
    }

    if (inputs.includes('W')) {
      ship.thrust(delta);
      if (game.ready()) {
        game.start();
      }
    } else {
      ship.endThrust();
    }

    if (inputs.includes('Space')) {
      game.shoot();
    }
  }

  render(delta) {
    this.handleKeyboard(delta);
    this.game.time(delta);
    this.view.render(this.game.state);
  }
}
