// react
import { useEffect } from "react";

// libs
import { useLocalStorage } from "@uidotdev/usehooks";

// imgs, styles
import sun from "./sun.svg";
import moon from "./moon.svg";
import styles from "./ButtonDarkMode.module.css";

function ButtonDarkMode() {
  const [mode, setMode] = useLocalStorage("mode", "light");

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      setMode("dark");
    } else {
      document.body.classList.remove("dark");
      setMode("light");
    }
  }, [mode, setMode]);

  function toggleDarkMode() {
    setMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  }

  const normalButton = styles.dark_mode_btn;
  const darkButton = `${styles.dark_mode_btn__active} ${styles.dark_mode_btn}`;

  return (
    <button
      onClick={toggleDarkMode}
      className={mode === "dark" ? darkButton : normalButton}
    >
      <img src={sun} alt="Light mode" className={styles.dark_mode_btn__icon} />
      <img src={moon} alt="Dark mode" className={styles.dark_mode_btn__icon} />
    </button>
  );
}

export default ButtonDarkMode;
