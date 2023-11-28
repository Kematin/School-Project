// Styles
import styles from "./HomeSection.module.css";

function HomeSection() {
  return (
    <main className="section">
      <div className="container">
        <ul className={styles.content_list}>
          <li className={styles.content_list__item}>
            <h2 className="title-2">Frontend</h2>
            <p>
              JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </p>
          </li>
          <li className={styles.content_list__item}>
            <h2 className="title-2">Backend</h2>
            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default HomeSection;
