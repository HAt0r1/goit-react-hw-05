import style from "./MovieCard.module.css";

const MovieCard = ({ movie: { title, poster_path } }) => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <img
          className={style.image}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <p className={style.text}>{title}</p>
    </div>
  );
};

export default MovieCard;
