import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const ApiKey = '71232cc02b0a0eb890148f92fc2f7287';

export async function getTrending() {
  const response = await axios.get(`trending/all/day?api_key=${ApiKey}`);
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`movie/${id}?api_key=${ApiKey}`);
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${ApiKey}&language=en-US`
  );
  return response.data;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${ApiKey}&language=en-US`
  );
  return response.data;
}

export async function getMovieByQuery(query) {
  const response = await axios.get(
    `search/movie?api_key=${ApiKey}&query=${query}&page=1`
  );
  return response.data;
}
