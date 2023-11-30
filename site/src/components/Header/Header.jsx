// Styles
import styles from "./Header.module.css";

// UI
import ButtonHref from "../UI/ButtonHref/ButtonHref";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__title}>
          <strong>
            Hi, my name is <em>Yuri</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className={styles.header__text}>
          <p>with passion for learning and creating.</p>
        </div>
        <ButtonHref text="Download CVS" href="!#" />
      </div>
    </header>
  );
}

export default Header;
