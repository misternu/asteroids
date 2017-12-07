export default class Keyboard {
  constructor() {
    this.keysDown = {};
    this.addListeners();
  }

  addListeners() {
    let keysDown = this.keysDown;
    addEventListener(
      'keydown',
      event => {
        if (event.keyCode == 32) {
          keysDown['Space'] = true;
        } else {
          keysDown[event.key] = true;
        }
      },
      false
    );
    addEventListener('keyup', event => {
      if (event.keyCode == 32) {
        delete keysDown['Space'];
      } else {
        delete keysDown[event.key];
      }
    });
  }

  getInputs() {
    let inputs = [];
    if (this.keysDown.ArrowUp || this.keysDown.w) {
      inputs.push('W');
    }
    if (this.keysDown.ArrowLeft || this.keysDown.a) {
      inputs.push('A');
    }
    if (this.keysDown.ArrowRight || this.keysDown.d) {
      inputs.push('D');
    }
    if (this.keysDown.Space) {
      inputs.push('Space');
    }
    return inputs;
  }
}
