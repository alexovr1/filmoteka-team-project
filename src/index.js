import { trendFilms } from './js/fetchData';
import card from './js/card-template';
import toggleModal from './js/modal-film-open-close';

const refs = {
  cardBox: document.querySelector('.cards-container'),
};

trendFilms().then(e => {
  refs.cardBox.innerHTML += card(e.data.results);
});
