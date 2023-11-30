// libs
import { NavLink } from "react-router-dom";

// styles
import styles from "./NavItem.module.css";

function NavItem({ link, name }) {
  const activeLink = (styles.nav_list__link, styles.nav_list__link__active);
  const normalLink = styles.nav_list__link;

  return (
    <li className="nav_list__item">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
