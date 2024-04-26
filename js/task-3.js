const nameInput = document.querySelector('#name-input');
console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim();
  if (inputValue === '' || inputValue.replace(/\s/g, '').length === 0) {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});
