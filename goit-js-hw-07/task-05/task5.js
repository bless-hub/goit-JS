const textOutput = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', e => {
  console.log('on input', e.target.value);
  textOutput.textContent = input.value;
  if (!e.target.value) {
    console.log('Незнакомец');
  }
});
