import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { getMoviesByKeyWords } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

import style from "./MoviesPage.module.css";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keyWord, setKeyWord] = useState(null);

  useEffect(() => {
    async function getSearchMovies() {
      try {
        setIsLoading(true);
        if (keyWord.key === "") {
          return;
        }
        const data = await getMoviesByKeyWords(keyWord.key);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovies();
  }, [keyWord]);

  const handleSubmit = (values, action) => {
    if (values.key === "") {
      return;
    }
    setKeyWord({ key: values.key });
    action.resetForm();
  };

  return (
    <main className={style.main}>
      <Formik initialValues={{ key: "" }} onSubmit={handleSubmit}>
        <Form className={style.form}>
          <Field className={style.input} type="text" name="key" />
          <button className={style.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      {movies.length > 0 && <MovieList movies={movies} />}
      {/* {(movies.length > 0 || error) && <Error />} */}
      {isLoading && <Loader />}
    </main>
  );
};

export default MoviePage;
