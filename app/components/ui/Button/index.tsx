import styles from "./Button.module.scss";

type propTypes = {
  children: JSX.Element;
  isLink?: boolean;
};

const Button = (props: propTypes) => {
  const { children, isLink } = props;
  return (
    <button
      className={`${styles.button} ${styles.primary} ${
        isLink ? styles.link : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
