// libs
import PropTypes from "prop-types";

// styles
import styles from "./ProjectCardSection.module.css";

// components
import LinksBox from "../LinksBox/LinksBox";

function ProjectCardSection({ projectDetails }) {
  return (
    <main className="section">
      <div className="container">
        <div className={styles.project_details}>
          <h1 className="title-1">{projectDetails.title}</h1>
          <img
            src={projectDetails.img}
            alt=""
            className={styles.project_details__cover}
          />
          <div className="container">
            <h2 className="title-2">Описание</h2>
            <div className={styles.description}>
              <p>{projectDetails.description}</p>
            </div>
          </div>
          <div className="container">
            <div className="title-2">Компоненты</div>
            <ul className={styles.components_list}>
              {projectDetails.components.map((component, index) => {
                return <li key={index}>{component}</li>;
              })}
            </ul>
          </div>
          <div className="contanier">
            <LinksBox links={projectDetails.links} />
          </div>
        </div>
      </div>
    </main>
  );
}

ProjectCardSection.propTypes = {
  projectDetails: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    components: PropTypes.array,
    links: PropTypes.shape({
      gitHubLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
      projectLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
      youtubeLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    }),
  }),
};

export default ProjectCardSection;
