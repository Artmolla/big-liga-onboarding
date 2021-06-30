const description = document.querySelector('.intro__description');

const toggleDescription = () => {
  description.classList.toggle('intro__description--active');
};

const onEscPress = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && description.classList.contains('intro__description--active')) {
    evt.preventDefault();

    toggleDescription();
  }
};

const breakpointChecker = () => {
  const breakpoint = window.matchMedia('(max-width: 1023px)');

  if (breakpoint.matches) {
    document.querySelector('.intro').addEventListener('click', toggleDescription);
    document.addEventListener('keydown', onEscPress);
  }
};

export {breakpointChecker};
