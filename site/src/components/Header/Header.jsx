// Styles
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__title}>
          <strong>
            Привет, мое имя <em>Рафаэль</em>
          </strong>
        </h1>
        <div className={styles.header__text}>
          <p>Этот сайт является частью моей школьной инициативы.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
