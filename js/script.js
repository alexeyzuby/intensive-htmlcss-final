var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');

var callback = document.querySelector('.callback-form');
var callbackLink = document.querySelector('.map__button');
var callbackName = callback.querySelector('[name="name"]');
var callbackEmail = callback.querySelector('[name="email"]');
var callbackRequired = [callbackName, callbackEmail];

var sliderDots = document.querySelectorAll('.welcome-slider__dot');
var sliderItems = document.querySelectorAll('.welcome-slider__item');

var openModal = function (evt) {
  evt.preventDefault();
  modal.classList.add('modal_open');
  callbackName.focus();
  window.addEventListener('keydown', onEscClick);
};

var closeModal = function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal_open');
  modal.classList.remove('modal_error');
  window.removeEventListener('keydown', onEscClick);
};

var submitForm = function (evt) {
  if (!callbackName.value || !callbackEmail.value) {
    evt.preventDefault();
    modal.classList.remove('modal_error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal_error');
  }
  callbackRequired.forEach(function (field) {
    if (!field.value) {
      field.classList.add('error');
    } else if (field.classList.contains('error')) {
      field.classList.remove('error');
    }
  })
};

var onEscClick = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.remove('modal_open');
    modal.classList.remove('modal_error');
    window.removeEventListener('keydown', onEscClick);
  }
};

callbackLink.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
callback.addEventListener('submit', submitForm);

sliderDots.forEach(function (dot, i) {
  dot.dataset.id = i;
  dot.addEventListener('click', function (evt) {
    sliderItems.forEach(function (item) {
      item.style.display = 'none';
    });
    sliderDots.forEach(function (dot) {
      dot.classList.remove('welcome-slider__dot_active');
    });
    sliderItems[dot.dataset.id].style.display = 'block';
    sliderDots[i].classList.add('welcome-slider__dot_active');
  })
});
