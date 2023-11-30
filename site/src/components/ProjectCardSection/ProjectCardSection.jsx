// styles
import styles from "./ProjectCardSection.module.css";

// img
import gitHubIcon from "./../../img/icons/gitHub-black.svg";

// UI
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";

function ProjectCardSection() {
  return (
    <main className="section">
      <div className="container">
        <div className={styles.project_details}>
          <h1 className="title-1">Video service</h1>
          <img
            src="./img/projects/02-big.jpg"
            alt=""
            className={styles.project_details__cover}
          />
          <div className={styles.project_details__desc}>
            <p>Skills: React, Node.js, MongoDB</p>
          </div>
          <ButtonHrefOutline text="Github repo" href="!#" icon={gitHubIcon} />
        </div>
      </div>
    </main>
  );
}

export default ProjectCardSection;
