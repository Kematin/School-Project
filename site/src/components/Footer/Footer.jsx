// Icons
import vk from "./../../img/icons/vk.svg";
import github from "./../../img/icons/gitHub.svg";

// Styles
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <ul className={styles.social}>
            <li className="social__item">
              <a href="https://vk.com/kematin">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Kematin">
                <img src={github} alt="Link" />
              </a>
            </li>
          </ul>
          <div className={styles.copyright}>
            <p>© 2024 kematin.space</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
