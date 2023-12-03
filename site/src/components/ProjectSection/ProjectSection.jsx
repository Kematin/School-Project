// js data
import projects from "../../helpers/projectsList";

// styles, imgs
import styles from "./ProjectSection.module.css";
import img from "../../img/projects/03-big.jpg";

// Components
import Project from "../Project/Project";

function ProjectSection() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Мой проект</h2>
        <ul className={styles.projects}>
          <Project id={1} title={"Умная копилка"} imageUrl={img} />
        </ul>
        <br />
        <h2 className="title-1">Другие примеры</h2>
        <ul className={styles.projects}>
          {projects.map((project) => {
            if (project.id === 1) {
              return null;
            }
            return (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                imageUrl={project.img}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default ProjectSection;
