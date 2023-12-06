import './reset.css';
import './style.css';

const getNodes = (function () {
  const displayFormButton = document.querySelector('body > button');
  const exit = document.querySelector('.form-sec > div:first-child');
  const mainSection = document.querySelector('.main-sec');
  const overlay = document.querySelector('body > div');

  // For throw...
  const email = document.getElementById('mail');
  const country = document.getElementById('country');
  const zipCode = document.getElementById('zip');
  const pwd = document.getElementById('pwd');
  const pwdConfirm = document.getElementById('pwd-confirm');
  const inputs = [email, country, zipCode, pwd, pwdConfirm];

  return {
    displayFormButton,
    mainSection,
    overlay,
    exit,
    inputs,
  };
})();

const displayForm = (function () {
  getNodes.displayFormButton.addEventListener('click', () => {
    getNodes.mainSection.classList.add('active');
    getNodes.overlay.classList.add('overlay');
  });
})();

const exitForm = (function () {
  getNodes.exit.addEventListener('click', () => {
    getNodes.mainSection.classList.remove('active');
    getNodes.overlay.classList.remove('overlay');
  });
})();

const throwMissingError = (function () {
  getNodes.inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      input.setCustomValidity(`${input.getAttribute('data-label')} is required`);

      input.addEventListener('input', () => {
        input.setCustomValidity('');
      });
    }
  });
})();
