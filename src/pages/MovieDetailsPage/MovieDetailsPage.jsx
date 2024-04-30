import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getMovieInfo } from "../../movies-api";
import MovieFullInfo from "../../components/MovieFullInfo/MovieFullInfo";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backDrop = useRef(location.state);
  useEffect(() => {
    async function getInfo() {
      try {
        setIsLoading(true);
        const data = await getMovieInfo(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getInfo();
  }, [movieId]);

  return (
    <div className={style.container}>
      <Link to={backDrop.current ?? "/movies"} className={style.backdrop}>
        Back
      </Link>
      {isLoading && <Loader />}
      {error && <Error />}
      {movieInfo && <MovieFullInfo ref={location.state} movie={movieInfo} />}
      <div>
        <h3 className={style.linkTitle}>Additional information</h3>
        <ul className={style.linkList}>
          <li>
            <Link to="cast" className={style.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={style.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
