// img, styles
import styles from "./ButtonHrefOutline.module.css";

function ButtonHrefOutline({ text, href, icon }) {
  return (
    <a href={href} className={styles.btn_outline}>
      <img src={icon} alt="" />
      {text}
    </a>
  );
}

export default ButtonHrefOutline;
