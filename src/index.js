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
