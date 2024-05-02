function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCount = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  let width = 30;
  let height = 30;

  const fragments = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragments.push(box);
    width += 10;
    height += 10;
  }
  boxesContainer.append(...fragments);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const count = parseInt(inputCount.value);
  if (isNaN(count) || count < 1 || count > 100) {
    return;
  }
  createBoxes(count);
  inputCount.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
