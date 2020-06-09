const onValidation = document.querySelector('#validation-input');
onValidation.addEventListener('change', e => {
  onValidation.classList.add('invalid');

  event.target.value.length === 6
    ? onValidation.classList.remove('invalid')
    : onValidation.classList.add('valid');
});
