import { MovieDB } from './api-service';
import { getMovieDetails } from './home-page-loading';
// console.dir(getMovieDetails);
const modalOpenEl = document.querySelector('[data-modal-open]');
const modalCloseEl = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('[data-modal]');
const backdropEl = document.querySelector('.backdrop');
const modalContainerEl = document.querySelector('.tablet-container');
// слухач на батьківський UL карток
modalOpenEl.addEventListener('click', onModalOpenClick);
const movieDB = new MovieDB();

// Функція відкриття модалки
async function onModalOpenClick(event) {
  event.preventDefault();
  if (event.target.closest('li')) {
    modalEl.classList.remove('is-hidden');
    modalCloseEl.addEventListener('click', onModalCloseClick);
    backdropEl.addEventListener('click', onBackdropElClick);
    window.addEventListener('keydown', onEscBtnClick);

    const selectedMovie = event.target.closest('li');
    // console.log(selectedMovie);
    const FilmID = selectedMovie.dataset.movieid;
    // console.log(FilmID);
    try {
      const { data } = await movieDB.fetchMovieById(FilmID);

      // Достукуємось до ЛокалСторедж і робимо перевірку на
      // наявність фільму в списках доданих
      // console.log(data.id);
      const LS_WWATCHED_ARRAY = JSON.parse(localStorage.getItem("watched films"));
      // console.log(LS_WWATCHED_ARRAY);


      renderFilmCard(data);

      const foundFilm = LS_WWATCHED_ARRAY.find(el => el.id === data.id);

      const watchedBtnEl = document.querySelector(".watched");
      if (foundFilm) {
        watchedBtnEl.textContent = 'Remove from watched';
        // тут має бути логіка видалення фільму
        // витягнути масив об'єктів
        // видалити foundFilm з цього масиву
        // записати новий масив в ЛокалСторедж
        // JSON.parse(localStorage.getItem("watched films")
      }

      // console.dir(watchedBtnEl);


      watchedBtnEl.addEventListener("click", onWatchedBtnElClick = () => {
        localStrgWriteWatched(data);
      });

      const addToQueueBtnEl = document.querySelector(".queue");
      console.log(addToQueueBtnEl);
      addToQueueBtnEl.addEventListener("click", onaddToQueueElClick = () => {
        localStrgWriteAddToQueue(data);
      });
      function onWatchedBtnElClick() {
        localStorageWrite(data)
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    alert('Please click on film image');
  }
  return;
}
function onModalCloseClick() {
  modalEl.classList.add('is-hidden');
  modalCloseEl.removeEventListener('click', onModalCloseClick);
  backdropEl.removeEventListener('click', onBackdropElClick);
  window.removeEventListener('keydown', onEscBtnClick);
}
function onBackdropElClick(event) {
  if (event.target === backdropEl) {
    onModalCloseClick();
  }
}
function onEscBtnClick(event) {
  if (event.code === 'Escape') {
    onModalCloseClick();
  }
}

// data.genres
function prepareObject(array) {
  let newArr = array.map(el => el.name);

  let filmGenres = '';

  if (newArr.length < 4) {
    filmGenres = newArr.join(', ');
  }

  if (newArr.length >= 4) {
    filmGenres = newArr.slice(0, 2).join(', ') + ", Others";
  }
  return filmGenres;
}


function renderFilmCard(data) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = data;

  let filmGenres = prepareObject(data.genres);


  const markup = `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="modal-image" alt="${title}" />
           <div class="description-container">
        <h2 class="film-heading">${title}</h2>
        <ul class="film-info__list">
          <li class="film-info__item">
            <p class="film-info__item--el">Vote / Votes</p>
            <span class="film-info__vote">${vote_average}</span>
            <span> &nbsp;/&nbsp;</span>
            <span class="film-info__params">${vote_count}</span>
          </li>
          <li class="film-info__item">
            <p class="film-info__item--el">Popularity</p>
            <span class="film-info__params">${popularity}</span>
          </li>
          <li class="film-info__item">
            <p class="film-info__item--el">Original Title</p>
            <span class="film-info__params">${original_title}</span>
          </li>
          <li class="film-info__item">
            <p class="film-info__item--el">Genre</p>
            <span class="film-info__params">${filmGenres}</span>
          </li>
        </ul>
        <h3 class="film-info__about">About</h3>
        <p class="film-info__description">
          ${overview}
        </p>
        <div class="btn-container">
        <button class="button button__orange watched">add to Watched</button>
        <button class="button button__transparent queue">add to queue</button>
      </div>
        </div>`;
  modalContainerEl.innerHTML = markup;
}
const WATCHED_STORAGE_KEY = "watched films";
const QUEUE_STORAGE_KEY = "films in queue"
function localStrgWriteWatched(data) {
  console.log(data);

  filmGenres = prepareObject(data.genres);

  const watchedFilms = JSON.parse(localStorage.getItem(WATCHED_STORAGE_KEY)) || [];
  const { poster_path, title, vote_average, vote_count, popularity, original_title, overview, release_date, id } = data;
  const filmData = {
    title: title,
    poster_path: poster_path,
    vote_average: vote_average,
    vote_count: vote_count,
    popularity: popularity,
    original_title: original_title,
    overview: overview,
    filmGenres: filmGenres,
    release_date: release_date,
    id: id,
  };
  watchedFilms.push(filmData);
  const stringifyData = JSON.stringify(watchedFilms);
  localStorage.setItem(WATCHED_STORAGE_KEY, stringifyData);
}

function localStrgWriteAddToQueue(data) {
  filmGenres = prepareObject(data.genres);
  const watchedFilms = JSON.parse(localStorage.getItem(QUEUE_STORAGE_KEY)) || []
  const { poster_path, title, vote_average, vote_count, popularity, original_title, overview, release_date, id } = data;
  const filmData = {
    title: title,
    poster_path: poster_path,
    vote_average: vote_average,
    vote_count: vote_count,
    popularity: popularity,
    original_title: original_title,
    overview: overview,
    filmGenres: filmGenres,
    release_date: release_date,
    id: id,
  };

  watchedFilms.push(filmData);
  const stringifyData = JSON.stringify(watchedFilms);
  localStorage.setItem(QUEUE_STORAGE_KEY, stringifyData);
}


function localStorageRemove(data) {
  localStorage.removeItem(data)
}



// function onModalOpenClick(event) {
//   event.preventDefault();
//   if (event.target.closest('li')) {
//     modalEl.classList.remove('is-hidden');
//     modalCloseEl.addEventListener('click', onModalCloseClick);
//     backdropEl.addEventListener('click', onBackdropElClick);
//     window.addEventListener('keydown', onEscBtnClick);
//   } else {
//     alert('Please click on film image');
//   }
//   return;
// }
// function onModalCloseClick() {
//   modalEl.classList.add('is-hidden');
//   modalCloseEl.removeEventListener('click', onModalCloseClick);
//   backdropEl.removeEventListener('click', onBackdropElClick);
//   window.removeEventListener('keydown', onEscBtnClick);
// }
// function onBackdropElClick(event) {
//   if (event.target === backdropEl) {
//     onModalCloseClick();
//   }
// }
// function onEscBtnClick(event) {
//   if (event.code === 'Escape') {
//     onModalCloseClick();
//   }
// }