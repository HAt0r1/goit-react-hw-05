import { Link } from "react-router-dom";
import style from "./MovieFullInfo.module.css";
const MovieFullInfo = ({ movie }) => {
  return (
    <>
      <div className={style.imageContainer}>
        <img
          className={style.image}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={style.infoContainer}>
        <div>
          <h2 className={style.title}>
            {movie.title} (
            {movie.release_date.slice(0, movie.release_date.indexOf("-"))})
          </h2>
          <p className={style.score}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
        </div>
        <div>
          <h3 className={style.overTitle}>Overview</h3>
          <p className={style.overview}>{movie.overview}</p>
        </div>
        <div>
          <h3 className={style.genreTitle}>Genres</h3>
          <ul className={style.genresList}>
            {movie.genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <p className={style.genre}>{genre.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={style.linkTitle}>Additional information</h3>
        <ul className={style.linkList}>
          <li>
            <Link className={style.link}>Cast</Link>
          </li>
          <li>
            <Link className={style.link}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieFullInfo;
