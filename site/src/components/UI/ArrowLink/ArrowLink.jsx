import PropTypes from "prop-types";
import styles from "./ArrowLink.module.css";

function ArrowLink({ name, link }) {
  return (
    <a className={styles.arrow_link} href={link}>
      {name}
    </a>
  );
}

ArrowLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

export default ArrowLink;
