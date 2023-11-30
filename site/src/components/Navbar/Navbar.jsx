// libs
import { NavLink } from "react-router-dom";

// Icons
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

// Styles
import styles from "./Navbar.module.css";

// Components
import NavList from "../NavList/NavList";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_row}>
          <NavLink to="/" className={styles.logo}>
            <strong>Microcontoller</strong> project
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <NavList />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
