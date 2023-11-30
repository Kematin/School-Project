// imgs
import project_1 from "../../img/projects/01.jpg";
import project_2 from "../../img/projects/02.jpg";

// styles
import styles from "./ProjectSection.module.css";

function ProjectSection() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className={styles.projects}>
          <li className={styles.project}>
            <a href="./project-page.html">
              <img
                src={project_1}
                alt="Project img"
                className={styles.project__img}
              />
              <h3 className={styles.project__title}>Gaming streaming portal</h3>
            </a>
          </li>
          <li className={styles.project}>
            <a href="./project-page.html">
              <img
                src={project_2}
                alt="Project img"
                className={styles.project__img}
              />
              <h3 className={styles.project__title}>Video service</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default ProjectSection;
