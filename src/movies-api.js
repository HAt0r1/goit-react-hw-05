import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2NjZGFjNjY1ZmQ1ZmZhZTZhZjRiZDI5YTM1MjRhNCIsInN1YiI6IjY2MmNmNmExOGE4OGIyMDEyNGNkZDIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vK9OZiKRB771fp8uzNdjTb0qVQ0OGuyjX7Q46g6AIUg",
  },
};

export const getTrendMovies = async () => {
  const responce = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );
  return responce.data;
};

export const getMoviesByKeyWords = async (word) => {
  const responce = await axios.get(
    `search/movie?query=${word}&language=en-US`,
    options
  );
  return responce.data;
};

export const getMovieInfo = async (movieId) => {
  const responce = await axios.get(`movie/${movieId}?language=en-US`, options);
  return responce.data;
};
