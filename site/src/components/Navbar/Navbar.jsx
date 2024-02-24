// libs
import { NavLink } from "react-router-dom";

// Components
import NavList from "../NavList/NavList";

// UI
import ButtonDarkMode from "../UI/ButtonDarkMode/ButtonDarkMode";

// Styles
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_row}>
          <NavLink to="/" className={styles.logo}>
            <strong>Микроконтоллеры</strong>
          </NavLink>

          <ButtonDarkMode />

          <NavList />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
