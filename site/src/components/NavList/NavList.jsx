// styles
import styles from "./NavList.module.css";

// components
import NavItem from "../NavItem/NavItem";

function NavList() {
  return (
    <ul className={styles.nav_list}>
      <NavItem link="/" name="Основная страница" />
      <NavItem link="/projects" name="Проекты" />
      <NavItem link="/contacts" name="Обучение" />
    </ul>
  );
}

export default NavList;
