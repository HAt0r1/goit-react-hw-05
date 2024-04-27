import { NavLink } from "react-router-dom";
import clsx from "clsx";

import style from "./Navigation.module.css";

const activeElement = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const Navigation = () => {
  return (
    <div className={style.container}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink to="/" className={activeElement}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={activeElement}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
