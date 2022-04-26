const BASE_URL = 'https://api.themoviedb.org/3/';
const ApiKey = '71232cc02b0a0eb890148f92fc2f7287';

export async function getTrending() {
  const response = await fetch(`${BASE_URL}trending/all/day?api_key=${ApiKey}`);
  const data = await response.json();
  return data;
}

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${ApiKey}`);
  const data = await response.json();
  return data;
}
