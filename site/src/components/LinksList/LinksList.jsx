// libs
import PropTypes from "prop-types";

// styles
import styles from "./LinksList.module.css";

// components
import ArrowLink from "../UI/ArrowLink/ArrowLink";

function LinksList({ links }) {
  return (
    <ul className={styles.common_list}>
      {links.map((link, index) => {
        return (
          <li key={index}>
            - <ArrowLink name={link.name} link={link.link} />
          </li>
        );
      })}
    </ul>
  );
}

LinksList.propTypes = {
  links: PropTypes.array,
};

export default LinksList;
