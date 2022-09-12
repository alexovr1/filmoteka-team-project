const refs = {
  cardBox: document.querySelector('.cards-container'),
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  back: document.querySelector('[futer-modal]'),
  backDropFilmCard: document.querySelector('[data-modal]'),
};

refs.cardBox.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.back.addEventListener('click', bacc);
refs.backDropFilmCard.addEventListener('click', backDropFilm);

let isModalShown = false;

export default function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  isModalShown = !isModalShown;
  if (isModalShown) {
    window.addEventListener('keydown', onEscKeyPress);
  } else {
    window.removeEventListener('keydown', onEscKeyPress);
  }
}


function bacc(event) {
  if (event.currentTarget === event.target) {
    refs.back.classList.add('is-hidden');
  }
}

function backDropFilm(event) {
  if (event.currentTarget === event.target) {
    refs.backDropFilmCard.classList.toggle('is-hidden');
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    toggleModal();
  }
}


