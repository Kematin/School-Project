// libs
import { NavLink } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

// Components
import NavList from "../NavList/NavList";

// UI
import ButtonDarkMode from "../UI/ButtonDarkMode/ButtonDarkMode";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_row}>
          <NavLink to="/" className={styles.logo}>
            <strong>Microcontoller</strong> project
          </NavLink>

          <ButtonDarkMode />

          <NavList />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
