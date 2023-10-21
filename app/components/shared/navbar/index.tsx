import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import clsx from "clsx";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={clsx(styles.listItem, styles.logoLink)}>
          <Link href="/" className={styles.link}>
            <div className={styles.logo}>
              <Image
                src="/logo-white.png"
                fill
                alt="Karamveer Singh Sidhu logo"
              />
            </div>
          </Link>
        </li>
        <li className={clsx(styles.listItem, styles.firstListItem)}>
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
          <a href="/blog" className={styles.link}>
            Blog
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/#contact" className={styles.link}>
            Contact
          </a>
        </li>
        <li className={clsx(styles.listItem, styles.lastListItem)}>
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
