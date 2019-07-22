import './styles.css';
import fetchPhotos from './fetchPhotos';

const userInput = document.querySelector('#search-form');

function handleUserSearch(event) {
  event.preventDefault();
  fetchPhotos(event.currentTarget.elements.thing.value).then(data =>
    data.map(el => el.webformatURL)).then(data =>console.log(data[0]))
  ;
}

userInput.addEventListener('click', handleUserSearch);
