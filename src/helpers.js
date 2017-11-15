function mmod(m, n) {
  return (m % n + n) % n;
}

// Cross-browser support for requestAnimationFrame
requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.mozRequestAnimationFrame;
