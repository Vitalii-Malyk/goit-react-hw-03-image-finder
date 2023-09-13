const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '38612629-f2604cf2bc8cc8583c7392e39';

export const getImages = searchRequest => {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&${searchRequest}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
