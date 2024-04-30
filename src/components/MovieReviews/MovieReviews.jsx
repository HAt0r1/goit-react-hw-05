import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import style from "./MovieReviews.module.css";

const MovieReview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      {reviews.length > 0 ? (
        <ul className={style.list}>
          {reviews.map((review) => {
            return (
              <li className={style.item} key={review.id}>
                <p className={style.name}>{review.author}</p>
                <p className={style.review}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h3 className={style.error}>
            Unfortunately, this film has no reviews.
          </h3>
        </div>
      )}
    </>
  );
};

export default MovieReview;
