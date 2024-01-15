class MyWindow {
  constructor(size, position) {
    this.size = size;
    this.position = position;
  }

  create() {
    const myWindow = document.createElement('div');

    const posOpt = Object.keys(this.position);

    myWindow.style.cssText = `
      position: fixed;
      z-index: 20000;
      background: white;
      border: 1px solid silver;
      border-radius: 15px;
      padding: 35px;
      width: ${this.size.w}px;
      height: ${this.size.h}px;
      ${posOpt[0]}: ${this.position[posOpt[0]]}px;
      ${posOpt[1]}: ${this.position[posOpt[1]]}px;
    `;

    myWindow.innerHTML = 'Modal window';

    document.body.append(myWindow);

    return myWindow;
  }
}
  
// ModalWindow ----------------------------------------------------------------------

class ModalWindow extends MyWindow {
  create() {
    const myWindow = super.create();
    this.myWindow = myWindow;
    this.overlay = document.createElement('div');
    const overlay = this.overlay;

    overlay.style.cssText = `
      position: fixed;
      z-index: 10000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .7);
      overflow: hidden;
    `;
    
    document.body.append(overlay);

    overlay.innerHTML = `
      <img src="img/close2.png" alt="" class='btn-close'>
    `;

    const btnClose = document.querySelector('.btn-close');
    btnClose.style.cssText = `
      width: 30px;
      margin: 25px;
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
    `;

    btnClose.onclick = () => {
      myWindow.remove();
      overlay.remove();
    }

    return myWindow;
  }
}
  
// Alert ----------------------------------------------------------------------

class Alert extends ModalWindow {
  constructor(size, position, title, text) {
    super(size, position);
    this.title = title;
    this.text = text;
  }

  create() {
    const myWindow = super.create();
    myWindow.innerHTML = `
      <h3 class="title">${ this.title }</h3>
      <p class="text">${ this.text }</p>
    `;

    const titleBox = document.querySelector('.title');
    titleBox.style.cssText = `
      font-family: sans-serif;
    `;

    const textBox = document.querySelector('.text');
    textBox.style.cssText = `
      margin: 10px 0;
      font-family: sans-serif;
    `;
  }
}

// Prompt ----------------------------------------------------------------------

class Prompt extends Alert {
  constructor(size, position, title, text) {
    super(size, position, title, text);
  }

  create() {
    super.create();
    const container = document.createElement('div');
    const input = document.createElement('input');
    const btnCancel = document.createElement('button');
    const btnOk = document.createElement('button');
  
    input.setAttribute('class', 'input-prompt');
    btnCancel.setAttribute('class', 'btn-cancel');
    btnCancel.textContent = 'Cancel';
    btnOk.setAttribute('class', 'btn-ok');
    btnOk.textContent = 'Ok';
  
    container.appendChild(input);
    container.appendChild(btnCancel);
    container.appendChild(btnOk);
  
    this.myWindow.appendChild(container);
  
    btnCancel.onclick = () => {
      this.myWindow.remove();
      this.overlay.remove();
    };
  
    btnOk.onclick = () => {
      this.myWindow.remove();
      this.overlay.remove();
    };

    const inputBox = document.querySelector('input');
    inputBox.style.cssText = `
      margin-right: 25px;
      font-family: sans-serif;
    `;

    const buttonCancelBox = document.querySelector('.btn-cancel');
    const buttonOkBox = document.querySelector('.btn-ok');
    buttonCancelBox.style.cssText = `
      margin: 10px;
      padding: 5px 15px;
      border-radius: 5px;
      font-family: sans-serif;
      cursor: pointer;
    `;

    buttonOkBox.style.cssText = `
      margin: 10px;
      padding: 5px 15px;
      border-radius: 5px;
      font-family: sans-serif;
      cursor: pointer;
    `;
  }
}
  
// Confirm ----------------------------------------------------------------------

class Confirm extends Alert {
  constructor(size, position, title, text) {
    super(size, position, title, text);
  }

  create() {
    super.create();
    const container = document.createElement('div');
    const btnConfirm = document.createElement('button');
    const btnOk = document.createElement('button');
  
    btnConfirm.setAttribute('class', 'btn-confirm');
    btnConfirm.textContent = 'Confirm';
    btnOk.setAttribute('class', 'btn-ok');
    btnOk.textContent = 'Ok';
  
    container.appendChild(btnConfirm);
    container.appendChild(btnOk);
  
    this.myWindow.appendChild(container);
  
    btnConfirm.onclick = () => {
      this.myWindow.remove();
      this.overlay.remove();
    };
  
    btnOk.onclick = () => {
      this.myWindow.remove();
      this.overlay.remove();
    };

    const buttonConfirmBox = document.querySelector('.btn-confirm');
    const buttonOkBox = document.querySelector('.btn-ok');
    buttonConfirmBox.style.cssText = `
      margin: 10px;
      padding: 5px 15px;
      border-radius: 5px;
      font-family: sans-serif;
      cursor: pointer;
    `;

    buttonOkBox.style.cssText = `
      margin: 10px;
      padding: 5px 15px;
      border-radius: 5px;
      font-family: sans-serif;
      cursor: pointer;
    `;
  }
}

// =============================================================================

const w1 = new Alert({w: 300, h: 200}, {top: 200, left: 500}, 'ALERT', 'Hi!');
const w2 = new Prompt({w: 700, h: 300}, {top: 200, left: 500}, 'PROMPT', 'How are you?');
const w3 = new Confirm({w: 500, h: 200}, {top: 200, left: 500}, 'CONFIRM', 'Good luck!');

const btnAlert = document.querySelector('.alert');
const btnpPrompt = document.querySelector('.prompt');
const btnConfirm = document.querySelector('.confirm');

btnAlert.onclick = () => {
  w1.create();
}

btnpPrompt.onclick = () => {
  w2.create();
}

btnConfirm.onclick = () => {
  w3.create();
}



