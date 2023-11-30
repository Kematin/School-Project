// styles
import styles from "./NavList.module.css";

// components
import NavItem from "../NavItem/NavItem";

function NavList() {
  return (
    <ul className={styles.nav_list}>
      <NavItem link="/" name="Home" />
      <NavItem link="/projects" name="Projects" />
      <NavItem link="/contacts" name="Contacts" />
    </ul>
  );
}

export default NavList;
