import "./globals.css";
import styles from "./layout.module.scss";
import Icon from "@components/ui/Icon";
import Link from "next/link";
import { GITHUB, LINKEDIN } from "@constants";
import { NAME, SITE_DESCRIPTION } from "@constants";
import Footer from "@components/shared/footer";

export const metadata = {
  title: NAME,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.listItem}> About </li>
            <li className={styles.listItem}> Experience </li>
            <li className={styles.listItem}> Projects </li>
            <li className={styles.listItem}> Contact </li>
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
        <div className={styles.profilesNav}>
          <Link href={GITHUB} target="_blank" rel="noopener noreferrer">
            <Icon url="pr-github" />
          </Link>
          <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            <Icon url="pr-linkedin" />
          </Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
