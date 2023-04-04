import Button from "@components/ui/Button";
import styles from "./Cover.module.scss";
import Icon from "@components/ui/Icon";

const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.intro}>Hello! I am Karamveer, I love</div>
      <div className={styles.main}>Crafting Seamless digital experiences,</div>
      <div className={styles.desc}>
        with robust & scalable web applications.
      </div>
      <div className={styles.btnContainer}>
        <Button>
          View Projects <Icon url="chevron_right" stroke="#FFFFFF" />
        </Button>
      </div>
    </div>
  );
};

export default Cover;
