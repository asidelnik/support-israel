import { Link, useLocation } from "react-router-dom";
import c from "../styles/RouteNotFound.module.scss";
import { useEffect } from "react";

export default function RouteNotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={c.container}>
      <h2>העמוד לא קיים</h2>
      <Link
        to="/theme"
        className={c.link}
      >
        חזרה לעמוד הבית
      </Link>
    </div>
  );
}
