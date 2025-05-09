const panels = {
  topLeft: document.querySelector('.top-left-panel'),
  topRight: document.querySelector('.top-right-panel'),
  bottomLeft: document.querySelector('.bottom-left-panel'),
  bottomRight: document.querySelector('.bottom-right-panel')
};

let sequence = [];
let sequenceToGuess = [];
let canClick = false;

const getRandomPanel = () => {
  const keys = Object.keys(panels);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
};

const flash = (panelKey) => {
  return new Promise((resolve) => {
    const panel = panels[panelKey];
    panel.classList.add('active');
    setTimeout(() => {
      panel.classList.remove('active');
      setTimeout(() => {
        resolve();
      }, 250);
    }, 800);
  });
};

const startFlashing = async () => {
  canClick = false;
  for (const key of sequence) {
    await flash(key);
  }
  sequenceToGuess = [...sequence];
  canClick = true;
};

const panelClicked = (e) => {
  if (!canClick) return;

  const clickedKey = e.currentTarget.dataset.panel;
  const expectedKey = sequenceToGuess.shift();

  if (clickedKey === expectedKey) {
    if (sequenceToGuess.length === 0) {
      sequence.push(getRandomPanel());
      setTimeout(() => {
        startFlashing();
      }, 600);
    }
  } else {
    alert('Game Over!');
    sequence = [getRandomPanel()];
    setTimeout(() => {
      startFlashing();
    }, 600);
  }
};

Object.entries(panels).forEach(([key, panel]) => {
  panel.dataset.panel = key;
  panel.addEventListener('click', panelClicked);
});

document.getElementById('startBtn').addEventListener('click', () => {
  sequence = [getRandomPanel()];
  startFlashing();
});
