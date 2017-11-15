require('./helpers');
require('./constants');
import Game from './Game';
import View from './View';
import Keyboard from './Keyboard';

function main(time) {
  var delta = time - then;
  game.render(delta / 1000);
  then = time;
  requestAnimationFrame(main);
}

const view = new View();
const keyboard = new Keyboard();
const game = new Game(view, keyboard);
let then;
main();
