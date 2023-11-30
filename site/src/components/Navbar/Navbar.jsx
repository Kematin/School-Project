// Icons
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

// Styles
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_row}>
          <a href="./index.html" className={styles.logo}>
            <strong>Microcontoller</strong> project
          </a>
          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className={styles.nav_list}>
            <li className="nav_list__item">
              <a
                href="./index.html"
                className={
                  (styles.nav_list__link, styles.nav_list__link__active)
                }
              >
                Home
              </a>
            </li>
            <li className="nav_list__item">
              <a href="./projects.html" className={styles.nav_list__link}>
                Projects
              </a>
            </li>
            <li className="nav_list__item">
              <a href="./contacts.html" className={styles.nav_list__link}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
