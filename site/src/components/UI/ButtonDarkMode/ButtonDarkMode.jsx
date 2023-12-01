// react
import { useState, useEffect, useRef } from "react";

// imgs, styles
import sun from "./sun.svg";
import moon from "./moon.svg";
import styles from "./ButtonDarkMode.module.css";

function ButtonDarkMode() {
  const [mode, setMode] = useState("light");
  const buttonRef = useRef(null);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      buttonRef.current.classList.add(styles.dark_mode_btn__active);
    } else {
      document.body.classList.remove("dark");
      buttonRef.current.classList.remove(styles.dark_mode_btn__active);
    }
  }, [mode]);

  function toggleDarkMode() {
    setMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleDarkMode}
      className={styles.dark_mode_btn}
    >
      <img src={sun} alt="Light mode" className={styles.dark_mode_btn__icon} />
      <img src={moon} alt="Dark mode" className={styles.dark_mode_btn__icon} />
    </button>
  );
}

export default ButtonDarkMode;
