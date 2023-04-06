import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.madeBy}>
        Made with 💝 by&nbsp;
        <Link
          href="https://github.com/KaramveerSidhu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Karamveer
        </Link>
        <div className={styles.img}>
          <Image
            src="/astronaut-moon.png"
            width={245}
            height={250}
            alt="Karamveer - Astronaut"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
