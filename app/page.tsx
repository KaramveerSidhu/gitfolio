import { Inter } from "next/font/google";
import Cover from "@components/home-page/cover";
import About from "./components/home-page/about";
import Contact from "./components/home-page/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cover />
      <About />
      <Contact />
    </>
  );
}
