'use strict';

function fetchPhotos(word) {
 return fetch(
    `https://pixabay.com/api/?key=13083480-36e6529ec243ccac1724af6b3&q=${word}&image_type=photo`,
  )
    .then(response => response.json()).then(data => data.hits);
}
//если поиск по двум словам, то просто при получении строки делить по пробелу слова, а потом их джоинить с разделителем +
export default fetchPhotos;
