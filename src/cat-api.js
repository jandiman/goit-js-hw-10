const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_N34gROnHWrrCcRVx3NjQG9iMG1dTcyN02TVlz8WZ4GbDWYXTb6GMAm6OKQArhMGM';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatsByBreeds(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_id=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
