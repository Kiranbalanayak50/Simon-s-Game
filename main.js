/*const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');
topLeft.addEventListener('click',()=> panelClicked(topLeft));
topRight.addEventListener('click',()=> panelClicked(topRight));
bottomLeft.addEventListener('click',()=> panelClicked(bottomLeft));
bottomRight.addEventListener('click',()=> panelClicked(bottomRight));
const active='active';

const getRandomPanel = () => {

const panels = [
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
];
return panels[parseInt(Math.random()* panels.length)];
};
const sequence = [getRandomPanel()];
let sequenceToGuess = [...sequence];

const flash = panel => {
    return new Promise(resolve => {
        panel.classList.add('active');
        setTimeout(() => {
          panel.classList.remove('active');
            setTimeout(() => {
              resolve();
            },750);
        },1000 );
    });
};
let canClick = false;

const panelClicked = (panel) => {
    if(!canClick) return;
    const expectedPanel = sequenceToGuess.shift();
    if(expectedPanel===panel){
        if(sequenceToGuess.length===0){
          sequence.push(getRandomPanel());
          sequenceToGuess = [...sequence];
          startFlashing();
        }
    }else{
        alert('game over');
        sequence.length=0;
        sequence.push(getRandomPanel());
        sequenceToGuess=[...sequence];
        startFlashing();
    }
};




const startFlashing = async () => {
    canClick=false;
    for(const panel of sequence){
    await flash(panel);
    }
    sequenceToGuess=[...sequence];
    canClick = true;
};
document.getElementById('startBtn').addEventListener('click',startFlashing)
;
startFlashing();*/
/*const panels = {
  topLeft: document.querySelector('.top-left-panel'),
  topRight: document.querySelector('.top-right-panel'),
  bottomLeft: document.querySelector('.bottom-left-panel'),
  bottomRight: document.querySelector('.bottom-right-panel')
};

let sequence = [];
let sequenceToGuess = [];
let canClick = false;

function getRandomPanel() {
  const keys = Object.keys(panels);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
}

function flash(panelKey) {
  return new Promise(resolve => {
    const panel = panels[panelKey];
    panel.classList.add('active');
    setTimeout(() => {
      panel.classList.remove('active');
      setTimeout(resolve, 250);
    }, 800); // 800ms flash
  });
}

async function startFlashing() {
  canClick = false;
  for (const key of sequence) {
    await flash(key);
  }
  sequenceToGuess = [...sequence];
  canClick = true;
}

function panelClicked(e) {
  if (!canClick) return;
  const clickedKey = e.currentTarget.dataset.panel;
  const expectedKey = sequenceToGuess.shift();

  if (clickedKey === expectedKey) {
    if (sequenceToGuess.length === 0) {
      sequence.push(getRandomPanel());
      setTimeout(startFlashing, 600);
    }
  } else {
    alert('Game Over!');
    sequence = [];
    sequence.push(getRandomPanel());
    setTimeout(startFlashing, 600);
  }
}

// Attach listeners
Object.entries(panels).forEach(([key, panel]) => {
  panel.dataset.panel = key;
  panel.addEventListener('click', panelClicked);
});

// Start game
document.getElementById('startBtn').addEventListener('click', () => {
  sequence = [getRandomPanel()];
  startFlashing();
});*/
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