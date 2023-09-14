export default async function getImages(searchRequest, page = 1) {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '38612629-f2604cf2bc8cc8583c7392e39';

  return await fetch(
    `${url}?q=${searchRequest}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
