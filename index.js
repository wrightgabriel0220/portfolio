const cursor = document.getElementById('crosshair-cursor');
const body = document.getElementsByTagName('html')[0];
const buttons = document.getElementsByTagName('button');

body.onmousemove = event => {
  updateCursorPosition(event.clientX, event.clientY);
};

Array.from(buttons).forEach(button => {
  button.onmouseenter = event => {
    cursor.style.transform = `scale(${1.5})`;
  };

  button.onmouseleave = event => {
    cursor.style.transform = `scale(${1})`;
  };

  button.onmousedown = event => {
    cursor.style.transform = `rotate(${180}deg) scale(${.5})`;
  };

  button.onmouseup = event => {
    cursor.style.transform = `rotate(${0}deg) scale(${2})`;
  }
})