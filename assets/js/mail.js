'use strict';

emailjs.init('OSEHpPm6yEepwZfyb');

const form = document.querySelector('#contact-form');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('#form-btn');
const formBtnIcon = formBtn.querySelector('ion-icon');
const formBtnText = formBtn.querySelector('span');

const checkFormValidity = () => {
  if (form.checkValidity()) {
    formBtn.removeAttribute('disabled');
  } else {
    formBtn.setAttribute('disabled', '');
  }
};

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', checkFormValidity);
}

const showLoadingState = () => {
  formBtn.setAttribute('disabled', 'true');
  formBtnIcon.setAttribute('name', 'sync');
  formBtnText.textContent = 'Sending...';
};

const showSuccessState = () => {
  formBtnIcon.setAttribute('name', 'checkmark');
  formBtnText.textContent = 'Message Sent';
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  showLoadingState();

  const formData = {
    fullname: document.querySelector('#fullname').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  emailjs.send('service_djb80ip', 'template_0zkcks1', formData).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
      showSuccessState();
    },
    function (error) {
      console.error('FAILED...', error);
      alert("Oops! Something went wrong, and we couldn't send your message.");
      formBtn.removeAttribute('disabled');
      formBtnIcon.setAttribute('name', 'paper-plane');
      formBtnText.textContent = 'Send Message';
    }
  );

  form.reset();
});
