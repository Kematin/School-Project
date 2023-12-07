// styles
import styles from "./LearningSection.module.css";

// imgs
import alex from "../../img/alex.png";

// components
import LinksList from "../LinksList/LinksList";

function LearningSection() {
  const links1 = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/@AlexGyverShow/videos",
    },
    {
      name: "Уроки",
      link: "https://alexgyver.ru/lessons/",
    },
    {
      name: "Проекты",
      link: "https://alexgyver.ru/ardu-proj/",
    },
  ];
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Источники для обучения</h1>

        <ol className={styles.content_list}>
          <li className={styles.content_item}>
            <h2 className="title-2">AlexGyver</h2>
            <img className={styles.img_cover} src={alex} alt="alex" />
            <p>
              <em>AlexGyver</em> — это творческий и познавательный
              YouTube-канал, предоставляющий зрителям уникальные DIY (сделай
              сам) проекты, основанные на доступных материалах. С самого начала
              своего творческого пути автор стремился не только демонстрировать
              свои умения, но и вдохновлять зрителей повторить его проекты.
              Важным принципом является использование материалов, которые
              доступны в обычных магазинах, делая процесс интересным и доступным
              для всех.
            </p>
            <br />
            <h3 className="title-3">Ссылки</h3>
            <LinksList links={links1} />
          </li>
          <li className={styles.content_item}>
            <h2 className="title-2">Курсы</h2>
            <p>https://micro-controller.ru/</p>
            <p>https://www.lektorium.tv/microcontroller</p>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default LearningSection;
