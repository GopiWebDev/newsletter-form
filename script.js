const button = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');
const error = document.querySelector('[data-error-text]');
const success = document.querySelector('[data-success]');
const card = document.querySelector('[data-card]');
const dismiss = document.querySelector('[data-dismiss]');

button.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmail();
});

function checkEmail() {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!input.value.match(validRegex)) {
    error.classList.remove('error-hide');
    error.classList.add('error');
    input.classList.add('input-error');
  } else {
    error.classList.remove('error');
    error.classList.add('error-hide');
    input.classList.remove('input-error');
    success.classList.remove('error-hide');
    success.classList.add('success');
    card.classList.remove('card');
    card.classList.add('error-hide');
    input.value = null;
  }
}

dismiss.addEventListener('click', () => {
  success.classList.remove('success');
  success.classList.add('error-hide');
  card.classList.remove('error-hide');
  card.classList.add('card');
});
