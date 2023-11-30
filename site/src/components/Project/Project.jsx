// styles
import styles from "./Project.module.css";

function Project({ imageUrl, title }) {
  return (
    <li className={styles.project}>
      <a href="./project-page.html">
        <img src={imageUrl} alt={title} className={styles.project__img} />
        <h3 className={styles.project__title}>{title}</h3>
      </a>
    </li>
  );
}

export default Project;
