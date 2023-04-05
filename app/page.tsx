import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Cover from "@components/home-page/cover";
import About from "./components/home-page/about";
import Contact from "./components/home-page/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <About />
      <Contact />
    </main>
  );
}
