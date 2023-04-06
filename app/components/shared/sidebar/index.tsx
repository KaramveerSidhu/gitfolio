import { GITHUB, LINKEDIN } from "@constants";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import Icon from "@components/ui/Icon";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link href={GITHUB} target="_blank" rel="noopener noreferrer">
        <Icon url="pr-github" />
      </Link>
      <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer">
        <Icon url="pr-linkedin" />
      </Link>
    </div>
  );
};

export default Sidebar;
