// libs
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import styles from "./Project.module.css";

function Project({ id, imageUrl, title }) {
  const projectLink = `/project/${id}`;

  return (
    <li className={styles.project}>
      <NavLink to={projectLink}>
        <img src={imageUrl} alt={title} className={styles.project__img} />
        <h3 className={styles.project__title}>{title}</h3>
      </NavLink>
    </li>
  );
}

Project.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Project;
