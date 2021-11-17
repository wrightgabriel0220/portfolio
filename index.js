const cursor = document.getElementById('crosshair-cursor');
const body = document.getElementsByTagName('html')[0];

console.log('Running script');
console.log(body);

body.onmousemove = event => {
  cursor.style.left = (event.clientX - 12.5) + 'px';
  cursor.style.top = (event.clientY - 12.5) + 'px';
};