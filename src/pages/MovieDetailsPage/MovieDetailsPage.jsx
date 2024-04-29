import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieInfo } from "../../movies-api";
import MovieFullInfo from "../../components/MovieFullInfo/MovieFullInfo";
import Loader from "../../components/Loader/Loader";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getInfo() {
      try {
        setIsLoading(true);
        const data = await getMovieInfo(movieId);
        console.log(data);
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
      {isLoading && <Loader />}
      {movieInfo && <MovieFullInfo movie={movieInfo} />}
    </div>
  );
};

export default MovieDetailsPage;
