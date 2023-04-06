"use client";

import Button from "@components/ui/Button";
import styles from "./Contact.module.scss";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        tiltAxis="y"
        glareEnable
        glareColor="#39d353"
        glarePosition="all"
        glareMaxOpacity={0.2}
        glareBorderRadius="8px"
      >
        <div className={styles.contactContent}>
          <h1 className={styles.heading}> Contact </h1>
          <div className={styles.contactInfo}>
            <div className={styles.build}>
              I am always interested in working on new projects. <br />
              Let&apos;s build some cool things together!
            </div>
            <Button isLink>
              <Link
                href="mailto: karamveersidhu14@gmail.com"
                className={styles.link}
              >
                Mail Me
              </Link>
            </Button>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Contact;
