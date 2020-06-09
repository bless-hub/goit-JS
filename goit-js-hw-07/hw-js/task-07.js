const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.addEventListener('input', e => {
  text.style.fontSize = `${e.target.value}px`;
});
