// styles
import styles from "./LearningSection.module.css";

function LearningSection() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Источники для обучения</h1>

        <ul className={styles.content_list}>
          <li className={styles.content_item}>
            <h2 className="title-2">AlexGyver</h2>
            <p></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default LearningSection;
