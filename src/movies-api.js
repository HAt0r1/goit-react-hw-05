import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  params: {
    language: "en-US",
  },
  include_adult: false,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2NjZGFjNjY1ZmQ1ZmZhZTZhZjRiZDI5YTM1MjRhNCIsInN1YiI6IjY2MmNmNmExOGE4OGIyMDEyNGNkZDIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vK9OZiKRB771fp8uzNdjTb0qVQ0OGuyjX7Q46g6AIUg",
  },
};

export const getTrendMovies = async () => {
  const responce = await axios.get("trending/movie/day", options);
  return responce.data;
};

export const getMoviesByKeyWords = async (word) => {
  options.params.query = word;
  const responce = await axios.get("search/movie", options);
  return responce.data;
};
