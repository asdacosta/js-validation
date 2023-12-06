import './reset.css';
import './style.css';
// import './assets/###.mp4';

// const importAllAssets = (function () {
//   function importAll(r) {
//     return r.keys().map(r);
//   }

//   const assets = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
// })();

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
