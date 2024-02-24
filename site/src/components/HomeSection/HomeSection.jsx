// libs
import { NavLink } from "react-router-dom";

// styles
import styles from "./HomeSection.module.css";

// imgs
import microcontrollerImg from "../../img/microcontrollers.jpg";
import arduinoImg from "../../img/arduino.jpg";
import projectIcon from "./../../img/icons/tools-white.png";
import bookIcon from "./../../img/icons/book.png";

// UI
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";

function HomeSection() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Микроконтроллер</h1>
        <ul className={styles.content_list}>
          <li className={styles.content_item}>
            <h2 className="title-2">Что это такое?</h2>
            <p>
              <em>Микроконтроллер</em> - чрезвычайно универсальное устройство,
              на его основе можно сделать бесконечно много разных электронных
              устройств, как полезных, так и бесполезных. Под управлением
              микроконтроллеров работает любая техника, в которой есть какие-то
              настройки, режимы или автоматизация (стиральная машина,
              микроволновка, мультиварка…), некоторые узлы автомобилей, станки с
              ЧПУ, простенькие гаджеты и так далее.
            </p>
            <img
              className={styles.img_cover}
              src={microcontrollerImg}
              alt="microcontrollers"
            />
            <p>
              Один из самых простых способов опробовать технологии
              микроконтроллеров является семейство <em>Arduino.</em> Именно на
              данной технологии был выполнен{" "}
              <NavLink to="/project/1">мой проект.</NavLink>
            </p>
          </li>
          <li className={styles.content_item}>
            <h2 className="title-2">Arduino</h2>
            <p>
              Что такое <em>Arduino?</em> Формально это торговая марка, под
              которой выпускаются официальные платы и программы. Название
              Arduino идёт от одноименного названия забегаловки в Италии, где
              создатели любили пропустить по рюмочке. С точки зрения
              использования, Arduino – это платформа для разработки электронных
              устройств, точнее их прототипов и макетов. Включает в себя железо
              (платы) и софт (среда разработки).
            </p>
            <img
              className={styles.img_cover}
              src={arduinoImg}
              alt="arduino image"
            />
            <p>
              <em>Семейство Arduino</em> – несколько моделей так называемых
              отладочных плат. Отладочная плата представляет собой как ни
              странно печатную плату, на которой стоит микроконтроллер (далее
              МК) – та самая штука, которую мы будем программировать. В младших
              платах Arduino используются микроконтроллеры AVR (UNO, Nano, Mega,
              Leonardo), в современных моделях стоят более мощные ARM Cortex для
              более серьёзных проектов.
            </p>
          </li>
          <li className={styles.content_item}>
            <h2 className="title-2">Возможности</h2>
            <p>
              <em>Зачем учиться работать с Ардуино и электроникой в целом?</em>
            </p>
            <ul className={styles.common_list}>
              <li>
                <em>1.</em> Это невероятно интересное, техническое, развивающее
                мозги и относительно дешёвое “DIY” хобби с бесконечным
                количеством идей и способов их реализаций.
              </li>
              <li>
                <em>2.</em> Возможность создания узко-специальных электронных
                устройств и станков, аналогов которым нет в продаже или они
                слишком дорогие. В том числе для личных нужд или работы
                (знакомый ювелир сделал себе контроллер для муфельной печи,
                который стоит очень дорого).
              </li>
              <li>
                <em>3.</em> Возможность создания уникальных устройств с целью
                выхода на краудфандинг и запуска своего бизнеса.
              </li>
              <li>
                <em>4.</em> Отличная практика в программировании и электронике,
                особенно перед обучением на соответствующую специальность.
              </li>
              <li>
                <em>5. </em> Возможности в целом: автоматизация, автоматическое
                регулирование процессов, дистанционное управление, мониторинг
                различных величин, носимые и стационарные электронные устройства
                различного назначения.
              </li>
            </ul>
          </li>
          <li className={styles.content_item}>
            <h2 className="title-2">Ссылки</h2>
            <p>
              <em>Смотрите также:</em>
            </p>
            <ul className={styles.common_list}>
              <li>
                <ButtonHrefOutline
                  text="Примеры проектов на Arduino"
                  icon={projectIcon}
                  href="/projects"
                />
              </li>
              <li>
                <ButtonHrefOutline
                  text="Источники для обучения"
                  icon={bookIcon}
                  href="/learning"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default HomeSection;
