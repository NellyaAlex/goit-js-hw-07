function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCount = document.getElementById('controls').querySelector('input[type="number"]');
const createButton = document.getElementById('controls').querySelector('button[data-create]');
const destroyButton = document.getElementById('controls').querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // Очистити попередні елементи
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очистити контейнер
}

createButton.addEventListener('click', () => {
  const count = parseInt(inputCount.value);
  if (isNaN(count) || count < 1 || count > 100) {
    return; // Пропустити недійсне значення
  }
  createBoxes(count);
  inputCount.value = ''; // Очистити значення input
});

destroyButton.addEventListener('click', destroyBoxes);
