const loader = document.querySelector('.loader');
const loaderLogo = loader.querySelector('.loader__logo');
const intro = document.querySelector('.intro');

const disableLoader = () => {
  loaderLogo.classList.remove('loader__logo--big');
  loader.classList.add('loader--disabled');

  document.removeEventListener('keydown', onEnterPress);
  document.removeEventListener('click', onClickHandler);
};

const showIntro = () => {
  intro.classList.remove('intro--disabled');
};

const onEnterPress = (evt) => {
  const isEnterKey = evt.key === 'Enter';

  if (isEnterKey) {
    evt.preventDefault();

    disableLoader();
    showIntro();
  }
};

const onClickHandler = (evt) => {
  evt.preventDefault();

  disableLoader();
  showIntro();
};

const initLoaderInteraction = () => {
  if (loader) {
    intro.classList.add('intro--disabled');
    loader.classList.remove('loader--disabled');
    loaderLogo.classList.add('loader__logo--big');

    document.addEventListener('keydown', onEnterPress);
    document.addEventListener('click', onClickHandler);
  }
};

export {initLoaderInteraction};
