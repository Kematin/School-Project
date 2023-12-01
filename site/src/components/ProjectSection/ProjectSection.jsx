// js data
import projects from "../../helpers/projectsList";

// styles
import styles from "./ProjectSection.module.css";

// Components
import Project from "../Project/Project";

function ProjectSection() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className={styles.projects}>
          {projects.map((project) => {
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
