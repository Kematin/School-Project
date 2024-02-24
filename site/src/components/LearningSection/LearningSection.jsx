// styles
import styles from "./LearningSection.module.css";

// imgs
import alex from "../../img/alex.png";
import alex_arduino from "../../img/alex_arduino.png";
import lectorium from "../../img/lectorium.png";
import selivanov_course from "../../img/selivanov_course.png";

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
    {
      name: "GitHub",
      link: "https://github.com/AlexGyver",
    },
  ];
  const links2 = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/@ArduNotes/videos",
    },
    {
      name: "Уроки",
      link: "https://alexgyver.ru/arduino_lessons/",
    },
  ];
  const links3 = [
    { name: "Курс", link: "https://www.lektorium.tv/microcontroller" },
    { name: "VK", link: "https://vk.com/openlektorium" },
  ];
  const links4 = [
    { name: "Курс", link: "https://micro-controller.ru/" },
    { name: "Блог", link: "https://www.mcu4you.ru/" },
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
            <h2 className="title-2">Заметки Ардуинщика</h2>
            <img
              className={styles.img_cover}
              src={alex_arduino}
              alt="alex arduino"
            />
            <p>
              <em>Заметки Ардуинщика</em> - это второй образовательный канал
              AlexGyver, где он погружает зрителей в захватывающий мир arduino и
              программирования. Канал не просто предоставляет контент для
              развлечения, но и стремится к активному обучению. Он предоставляет
              подробные уроки для новичков, форум с активным сообществом, где
              можно обсудить вопросы и получить помощь, а также базу уроков на
              сайте, считающуюся одной из самых подробных в области Arduino и
              программирования.
            </p>
            <br />
            <h3 className="title-3">Ссылки</h3>
            <LinksList links={links2} />
          </li>
          <li className={styles.content_item}>
            <h2 className="title-2">Курс Лекториум</h2>
            <img
              className={styles.img_cover}
              src={lectorium}
              alt="lectorium course"
            ></img>
            <p>
              <em>Этот курс</em> по программированию микроконтроллеров на языках
              C/C++ предоставляет учащимся уникальную возможность освоить
              ключевые навыки для работы с встраиваемыми системами. Обучение
              включает в себя разнообразные творческие подходы к
              программированию, а также практическое применение знаний в
              различных областях, от смартфонов до беспилотных аппаратов.
            </p>
            <br />
            <h3 className="title-3">Ссылки</h3>
            <LinksList links={links3} />
          </li>
          <li className={styles.content_item}>
            <h2 className="title-2">Курс от Селиванова Максима</h2>
            <img
              className={styles.img_cover}
              src={selivanov_course}
              alt="selivanov course"
            />
            <p>
              <em>Этот структурированный</em> и всесторонний курс по
              программированию микроконтроллеров предоставляет полный комплекс
              обучения, охватывая теорию, практические навыки и реальные
              проекты. Знания, полученные в ходе обучения, позволят вам
              создавать графические библиотеки для TFT-экранов, открывая широкие
              возможности в области визуального представления информации.{" "}
              <em>Стоимость курса 2990 рублей.</em>
            </p>
            <br />
            <h3 className="title-3">Ссылки</h3>
            <LinksList links={links4} />
          </li>
        </ol>
      </div>
    </main>
  );
}

export default LearningSection;
