import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.heading}> About </h1>
      <div className={styles.aboutDetails}>
        <div className={styles.desc}>
          As a Software Engineer specialized in Web Application Development, I
          prioritize delivering high-quality work. <br />
          <br /> I am passionate about exploring new destinations and meeting
          people from different backgrounds, and I aim to utilize my
          communication, interpersonal, and leadership skills to produce work to
          the best of my ability. <br />
          <br /> Frequently praised as diligent by my peers, I love programming,
          am always ready to accept new challenges and embrace learning. I was
          also a cadet at the National Cadet Corps and am very fond of the
          military. <br /> <br />
          When I&apos;m not working, I enjoy spending time with friends, whether
          it&apos;s catching up over tea, indulging in a fancy dinner, playing
          sports, hitting the gym, or simply wandering around like a flaneur. I
          also dabble in drawing as a hobby.
        </div>
        <div className={styles.img}>
          <Image
            src="/karamveer.png"
            width={200}
            height={240}
            alt="Karamveer Singh Sidhu"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
