import { useEffect, useState } from "react";
import { getMoviesByKeyWords } from "../../movies-api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

import style from "./MoviesPage.module.css";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function getMovies() {
      if (searchParams.get("query" !== null)) {
        try {
          setIsLoading(true);
          const data = await getMoviesByKeyWords(searchParams.get("query"));
          setMovies(data.results);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
    }
    getMovies();
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const keyWord = form.movie.value.trim();
    if (keyWord === "") {
      return;
    }
    setSearchParams({ query: keyWord });
  };

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input className={style.input} type="text" name="movie" id="" />
        <button className={style.button} type="submit">
          Send
        </button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <Error />}
      {isLoading && <Loader />}
    </main>
  );
};

export default MoviePage;
