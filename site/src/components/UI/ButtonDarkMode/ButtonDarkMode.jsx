// imgs, styles
import sun from "./../../../img/icons/sun.svg";
import moon from "./../../../img/icons/moon.svg";
import styles from "./ButtonDarkMode.module.css";

function ButtonDarkMode() {
  return (
    <button className={styles.dark_mode_btn}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default ButtonDarkMode;
