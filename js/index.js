// class MyWindow {
//     constructor(size, position) {
//       this.size = size;
//       this.position = position;
//     }
  
//     create() {
//       const myWindow = document.createElement('div');
  
//       const posOpt = Object.keys(this.position);
//       myWindow.style.cssText = `
//         position: fixed;
//         z-index: 20000;
//         background: white;
//         border: 1px solid silver;
//         width: ${this.size.w}px;
//         height: ${this.size.h}px;
//         ${posOpt[0]}: ${this.position[posOpt[0]]}px;
//         ${posOpt[1]}: ${this.position[posOpt[1]]}px;
//       `;
  
//       myWindow.innerHTML = 'Modal window';
  
//       document.body.append(myWindow);
  
//       return myWindow;
//     }
//   }
  
//   class ModalWindow extends MyWindow {
//     create() {
//       const myWindow = super.create();
//       const overlay = document.createElement('div');
//       overlay.style.cssText = `
//         position: fixed;
//         z-index: 10000;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: rgba(0, 0, 0, .7);
//         overflow: hidden;
//       `;
//       document.body.append(overlay);
  
//       return myWindow;
//     }
//   }
  
//   class Alert extends ModalWindow {
//     constructor(size, position, title, text) {
//       super(size, position);
//       this.title = title;
//       this.text = text;
//     }
  
//     create() {
//       const myWindow = super.create();
//       myWindow.innerHTML = `
//         <h3 class="title">${ this.title }</h3>
//         <p class="text">${ this.text }</p>
//       `;
  
//     }
//   }
  
  
  
//   // const w1 = new Alert({w: 200, h: 200}, {top: 200, left: 500}, 'alert title', 'alert text');
//   // w1.create();
  
//   alert('alert');
//   prompt();
//   confirm();




