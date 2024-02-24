// styles
import styles from "./ProjectBankSection.module.css";

// imgs
import img from "./../../img/projects/01.jpg";
import blueprint from "./../../img/blueprint.jpg";
import finallyImg from "./../../img/finally.jpg";
import gitHubIcon from "./../../img/icons/gitHub-black.svg";

// components
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";
import ArrowLink from "../UI/ArrowLink/ArrowLink";

function ProjectBankSection() {
  return (
    <main className="section">
      <div className="container">
        <div className={styles.project_details}>
          <h1 className="title-1">Умная копилка</h1>
          <img src={img} alt="" className={styles.project_details__cover} />

          <div className="container">
            <h1 className="title-2">Этапы разработки</h1>
            <div className={styles.description}>
              <p>Этапы разработки можно разбить на 2 части:</p>
              <ul className={styles.components_list}>
                <li>1. Софт часть</li>
                <li>2. Аппаратная часть</li>
              </ul>
            </div>
            <h1 className="title-3">Софт часть</h1>
            <div className={styles.description}>
              В данной части я писал скетч для микроконтроллера, т.е. программу,
              которая будет исполняться на нем. <em>Первый скетч</em> служит для
              определения монет и купюр, а так-же сохранения данных и вывод
              информации о них на дисплей. <em>Второй скетч</em> позволяет
              интегрировать nfc ключи в проект.
            </div>
            <div className={styles.description}>
              Использовалось множество библиотек, такие как:
              <ul className={styles.components_list}>
                <li>SPI</li>
                <li>MFRC522</li>
                <li>LowPower</li>
                <li>EEPROMex</li>
                <li>LCD 1602 RUS</li>
              </ul>
              С кодом можно ознакомиться на моем{" "}
              <ArrowLink
                name="гитхабе"
                link="https://github.com/Kematin/School-Project"
              />
            </div>
            <h1 className="title-3">Аппаратная часть</h1>
            <div className={styles.description}>
              С начало был сделан предварительный чертеж, по которому были
              приклеены компоненты
            </div>
            <img
              src={blueprint}
              alt=""
              className={styles.project_details__img}
            />
            <div className={styles.description}>
              Далее шел процесс пайки и финальная сборка копилки по схемам.
            </div>
            <img
              src={finallyImg}
              alt=""
              className={styles.project_details__img}
            />

            <div className={styles.description}>
              Все схемы подключения компонентов можно найти на моем{" "}
              <ArrowLink
                name="гитхабе"
                link="https://github.com/Kematin/School-Project"
              />
            </div>
          </div>

          <div className="container">
            <div className="title-2">Компоненты</div>
            <ul className={styles.components_list}>
              <li>Деревянный корпус</li>
              <li>Повербанк - питание</li>
              <li>Arduino Nano 2X</li>
              <li>Кнопки 3X</li>
              <li>Светодиод 3X</li>
              <li>LCD Дисплей</li>
              <li>Датчик препятствий</li>
              <li>Датчик цвета</li>
              <li>RFID RC522 модуль</li>
              <li>Резисторы, перемычки</li>
            </ul>
          </div>
          <ButtonHrefOutline
            text="Github repo"
            href="https://github.com/Kematin/School-Project"
            icon={gitHubIcon}
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectBankSection;
