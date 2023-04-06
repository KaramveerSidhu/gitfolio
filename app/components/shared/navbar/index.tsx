import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="/#about" className={styles.link}>
            About
          </a>
        </li>
        <li className={styles.listItem}>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
        </li>
        <li className={styles.listItem}>
          <a href="/#contact" className={styles.link}>
            Contact
          </a>
        </li>
        <li className={`${styles.listItem} ${styles.lastListItem}`}>
          <Link
            href="/karamveer-sidhu-resume.pdf"
            className={styles.resumeLink}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
