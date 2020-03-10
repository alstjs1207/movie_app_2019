import axios from 'axios';

const ID_KEY = 'c9eO1L0uOQFb2BfbAaRD';
const SECRET_KEY = 'M1Ean6tqGj';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY
  }
});

export const naverMoviesApi = {
  search: word => api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: 20
    }
  })
};
