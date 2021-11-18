const cursor = document.getElementById('crosshair-cursor');
const body = document.getElementsByTagName('html')[0];
const buttons = document.getElementsByTagName('button');

const updateCursorSize = targetSize => {
  cursor.style.height = targetSize + 'px';
  cursor.style.width = targetSize + 'px';
}

body.onmousemove = event => {
  cursor.style.top = event.clientY - cursor.clientHeight / 2 + 'px';
  cursor.style.left = event.clientX - cursor.clientWidth / 2 + 'px';
};

Array.from(buttons).forEach(button => {
  button.onmouseenter = event => {
    console.log('Entered button');
    updateCursorSize(50);
  };

  button.onmouseleave = event => {
    console.log('Exited button');
    updateCursorSize(25);
  };
})