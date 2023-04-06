import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);
onReloadCheck();

function onInputData(event) {
  let data = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onReloadCheck() {
  let storageValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storageValue !== null) {
    form.email.value = storageValue.email;
    form.message.value = storageValue.message;
  }
}
