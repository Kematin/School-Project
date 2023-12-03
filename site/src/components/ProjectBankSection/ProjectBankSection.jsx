// styles
import styles from "./ProjectBankSection.module.css";

// imgs
import img from "./../../img/projects/03-big.jpg";
import gitHubIcon from "./../../img/icons/gitHub-black.svg";

// components
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";

function ProjectBankSection() {
  return (
    <main className="section">
      <div className="container">
        <div className={styles.project_details}>
          <h1 className="title-1">Умная копилка</h1>
          <img src={img} alt="" className={styles.project_details__cover} />
          <h1 className="title-2">Этапы разработки</h1>
          <div className={styles.project_details__desc}>
            <p>
              <strong>Использованные технологии:</strong> Arduino
            </p>
          </div>
          <ButtonHrefOutline
            text="Github repo"
            href="https://github.com/Kematin"
            icon={gitHubIcon}
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectBankSection;
