import styles from "./Tabs.module.scss";
import clsx from "clsx";

type propTypes = {
  activeTab: string;
  onChange: Function;
};

const Tabs = (props: propTypes) => {
  const { activeTab, onChange = () => undefined } = props;

  const isPersonalActive = activeTab === "personal";

  return (
    <div className={styles.tabs}>
      <div
        className={clsx(styles.tab, !isPersonalActive && styles.active)}
        onClick={() => onChange("contributed")}
      >
        Projects I contributed to
      </div>
      <div> | </div>
      <div
        className={clsx(styles.tab, isPersonalActive && styles.active)}
        onClick={() => onChange("personal")}
      >
        Independent Projects
      </div>
    </div>
  );
};

export default Tabs;
