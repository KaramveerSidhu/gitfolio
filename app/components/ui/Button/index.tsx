import styles from "./Button.module.scss";

const Button = (props) => {
  const { children } = props;
  return (
    <button className={`${styles.button} ${styles.primary}`}>{children}</button>
  );
};

export default Button;
