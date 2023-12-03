// libs
import PropTypes from "prop-types";

// styles
import styles from "./ProjectCardSection.module.css";

// img
import gitHubIcon from "./../../img/icons/gitHub-black.svg";

// UI
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";

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
          <div className={styles.project_details__desc}>
            <p>Skills: {projectDetails.skills}</p>
          </div>
          {projectDetails.gitHubLink && (
            <ButtonHrefOutline
              text="Github repo"
              href={projectDetails.gitHubLink}
              icon={gitHubIcon}
            />
          )}
        </div>
      </div>
    </main>
  );
}

ProjectCardSection.propTypes = {
  projectDetails: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    skills: PropTypes.string,
    gitHubLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  }),
};

export default ProjectCardSection;
