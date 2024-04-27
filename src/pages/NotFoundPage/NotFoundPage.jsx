import { Link } from "react-router-dom";

import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h3 className={style.text}>Sorry, page not found &#128532;</h3>
      <p className={style.text}>
        You can reload the page and click the button below to return to the home
        page.
      </p>
      <Link to="/" className={style.homeLink}>
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
