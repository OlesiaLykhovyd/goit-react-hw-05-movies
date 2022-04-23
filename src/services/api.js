const ApiKey = '71232cc02b0a0eb890148f92fc2f7287';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

async function getTrending() {
  const response = await fetch(`${BASE_URL}${ApiKey}`);
  const data = await response.json();
  return data;
}

export default getTrending;
