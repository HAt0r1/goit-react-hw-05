import { Link, useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={style.list}>
      {movies.map((movie) => {
        return (
          <li className={style.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
