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
          <LinksBox links={projectDetails.links} />
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
