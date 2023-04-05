import Button from "@components/ui/Button";
import styles from "./Contact.module.scss";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}> Contact </h1>
      <div className={styles.contactInfo}>
        <div className={styles.build}>
          I am always interested in working on new projects. <br />
          Let&apos;s build cool things together!
        </div>
        <Button isLink>
          <Link href="/contact" className={styles.link}>
            Mail Me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
