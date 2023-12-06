import './reset.css';
import './style.css';

const importAllAssets = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const assets = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
})();

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
  const inputs = [email, country, zipCode, pwd];

  // For congratUser...
  const form = document.querySelector('form');
  const submitButton = document.querySelector('.form-sec button');
  const starImg = document.querySelector('img');

  return {
    displayFormButton,
    mainSection,
    overlay,
    exit,
    inputs,
    pwd,
    pwdConfirm,
    submitButton,
    starImg,
    form,
  };
})();

const displayForm = (function () {
  getNodes.displayFormButton.addEventListener('click', () => {
    getNodes.mainSection.classList.add('active');
    getNodes.overlay.classList.add('overlay');

    colorFields.colorUnfocused();
    colorFields.colorLive();
    throwMissingError();
  });
})();

const exitForm = (function () {
  getNodes.exit.addEventListener('click', () => {
    getNodes.mainSection.classList.remove('active');
    getNodes.overlay.classList.remove('overlay');
  });
})();

const throwMissingError = function () {
  getNodes.inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      input.setCustomValidity(`${input.getAttribute('data-label')} is required`);
      input.addEventListener('input', () => {
        input.setCustomValidity('');
      });
    }
  });
};

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
    getNodes.inputs.forEach((input, index) => {
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

const validateConfirmPwd = (function () {
  if (getNodes.pwdConfirm.validity.valueMissing) {
    getNodes.pwdConfirm.setCustomValidity(
      `${getNodes.pwdConfirm.getAttribute('data-label')} is required`,
    );
  }

  getNodes.pwdConfirm.addEventListener('input', () => {
    if (getNodes.pwdConfirm.value === getNodes.pwd.value) {
      getNodes.pwdConfirm.style.backgroundColor = 'lightgreen';
    } else {
      getNodes.pwdConfirm.style.backgroundColor = 'lightcoral';
    }

    getNodes.pwdConfirm.setCustomValidity('');
  });
})();

const congratUserForSubmission = (function () {
  function resetFields() {
    getNodes.inputs.forEach((input) => {
      input.style.backgroundColor = 'white';
    });
    getNodes.pwdConfirm.style.backgroundColor = 'white';
    getNodes.form.reset();
  }

  getNodes.submitButton.addEventListener('click', (event) => {
    if (getNodes.form.checkValidity()) {
      event.preventDefault();
      getNodes.starImg.classList.add('high-five');
      setTimeout(() => {
        getNodes.starImg.classList.remove('high-five');
      }, 2000);

      resetFields();
      getNodes.mainSection.classList.remove('active');
    }
  });
})();
