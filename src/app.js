import View from './View';

function mmod(m, n) {
  return (m % n + n) % n;
}

function main() {
  // var now = Date.now();
  // var delta = now - then;
  // keyboard(delta / 1000);
  view.render();
  // then = now;
  requestAnimationFrame(main);
}

// Cross-browser support for requestAnimationFrame
requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.mozRequestAnimationFrame;

const view = new View();
main();
