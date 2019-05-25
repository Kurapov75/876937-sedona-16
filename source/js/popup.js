var modalError = document.querySelector('.modal-error');
var modalConfirm = document.querySelector('.modal-confirm');
var form = document.querySelector('form');
var firstName = document.querySelector('[name=first-name]');
var secondName = document.querySelector('[name=second-name]');
var telField = document.querySelector('[name=tel]');
var emailField = document.querySelector('[name=email]');
var closeError = document.querySelector('.modal-error__close');
var closeConfirm = document.querySelector('.modal-confirm__close');

form.addEventListener('submit', function (evt) {
  if (!firstName.value || !secondName.value || !telField.value || !emailField.value) {
    evt.preventDefault();
    modalError.classList.add('modal-error--show');
    secondName.classList.add('required');
    firstName.classList.add('required');
    telField.classList.add('required');
    emailField.classList.add('required');
  }
  else {
    event.preventDefault();
    modalConfirm.classList.add('modal-confirm--show');
  }
});

closeError.addEventListener('click', function() {
  modalError.classList.remove('modal-error--show');
  secondName.classList.remove('required');
  firstName.classList.remove('required');
  telField.classList.remove('required');
  emailField.classList.remove('required');
});

closeConfirm.addEventListener('click', function() {
  modalConfirm.classList.remove('modal-confirm--show');
});
