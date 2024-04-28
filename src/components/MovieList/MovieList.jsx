import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={style.list}>
      {movies.map((movie) => {
        console.log(movie);
        return (
          <li className={style.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
