import { useState } from "react";
import { useEffect } from "react";
import { getTrendMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const trendMovies = await getTrendMovies();
        setMovies(trendMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <main className={style.main}>
      <h1 className={style.title}>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <Error />}
      {isLoading && <Loader />}
    </main>
  );
};

export default HomePage;
