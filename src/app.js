const RATIO = 5 / 4;
const HEIGHT = 600;
const WIDTH = Math.floor(RATIO * HEIGHT);

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);

console.log('hello world');
