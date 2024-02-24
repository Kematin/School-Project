import styles from "./ButtonHref.module.css";

function ButtonHref({ text, href }) {
  return (
    <a href={href} className={styles.btn}>
      {text}
    </a>
  );
}

export default ButtonHref;
