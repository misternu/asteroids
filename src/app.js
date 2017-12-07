require('./constants');
import GameController from './GameController';
import View from './View';
import Keyboard from './Keyboard';
// Cross-browser support for requestAnimationFrame
requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.mozRequestAnimationFrame;

// Main loop
function main(time) {
  var delta = time - then;
  delta = delta < 100 ? delta : 0;
  controller.render(delta / 1000);
  then = time;
  requestAnimationFrame(main);
}

// Driver
const view = new View();
const keyboard = new Keyboard();
const controller = new GameController(view, keyboard);
let then;
main();
