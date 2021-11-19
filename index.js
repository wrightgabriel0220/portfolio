const cursor = document.getElementById('crosshair-cursor');
const body = document.getElementsByTagName('html')[0];
const buttons = document.getElementsByTagName('button');

const updateCursorPosition = (x, y) => {
  cursor.style.top = y - cursor.clientHeight / 2 + 'px';
  cursor.style.left = x - cursor.clientWidth / 2 + 'px';
};

const updateTrackerPositions = (x, y) => {
  const northSouthTracker = document.getElementById('ns-tracker');
  const westEastTracker = document.getElementById('we-tracker');

  northSouthTracker.style.left = `${x}px`;
  westEastTracker.style.top = `${y}px`;

  const southTickReporter = document.getElementById('south-tick-reporter');
  const eastTickReporter = document.getElementById('east-tick-reporter');

  southTickReporter.innerText = `x:${x}`;
  eastTickReporter.innerText = `y:${y}`;
}

body.onmousemove = event => {
  updateTrackerPositions(event.clientX, event.clientY);
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
    cursor.style.transform = `rotate(${-180}deg) scale(${.5})`;
  };

  button.onmouseup = event => {
    cursor.style.transform = `rotate(${0}deg) scale(${1.5})`;
  }
})