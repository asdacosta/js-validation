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

    colorFields.colorUnfocused();
    colorFields.colorLive();
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

const colorFields = (function () {
  function colorUnfocused() {
    getNodes.inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        if (input.validity.valid) {
          input.style.backgroundColor = 'lightgreen';
        }
        if (!input.validity.valid) {
          input.style.backgroundColor = 'lightcoral';
        }
      });
    });
  }

  function colorLive() {
    getNodes.inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.validity.valid) {
          input.style.backgroundColor = 'lightgreen';
        }
        if (!input.validity.valid) {
          input.style.backgroundColor = 'lightcoral';
        }
      });
    });
  }

  return { colorUnfocused, colorLive };
})();
