import { useEffect, useState } from "react";
import { getMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import style from "./MovieCast.module.css";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setActors(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      {actors.length > 0 ? (
        <ul className={style.list}>
          {actors.map((actor) => {
            return (
              <li key={actor.id}>
                <div className={style.itemContainer}>
                  <div className={style.imageContainer}>
                    <img
                      className={style.image}
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      alt={actor.name}
                    />
                  </div>
                  <div>
                    <p className={style.text}>{actor.name}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h3 className={style.error}>
            Sorry, but we dont have information about cast in this film
          </h3>
        </div>
      )}
    </>
  );
};

export default MovieCast;
