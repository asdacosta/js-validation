import './reset.css';
import './style.css';

const displayForm = (function () {
  const displayFormButton = document.querySelector('body > button');
  const mainSection = document.querySelector('.main-sec');
  const overlay = document.querySelector('body > div');

  displayFormButton.addEventListener('click', () => {
    mainSection.classList.add('active');
    overlay.classList.add('overlay');
  });

  return { mainSection, overlay };
})();

const exitForm = (function () {
  const exit = document.querySelector('.form-sec > div:first-child');

  exit.addEventListener('click', () => {
    displayForm.mainSection.classList.remove('active');
    displayForm.overlay.classList.remove('overlay');
  });
})();

const throwMissingError = (function () {
  const email = document.getElementById('mail');
  const country = document.getElementById('country');
  const zipCode = document.getElementById('zip');
  const pwd = document.getElementById('pwd');
  const pwdConfirm = document.getElementById('pwd-confirm');

  const inputs = [email, country, zipCode, pwd, pwdConfirm];

  inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      input.setCustomValidity(`${input.getAttribute('data-label')} is required`);

      input.addEventListener('input', () => {
        input.setCustomValidity('');
      });
    }
  });
})();
