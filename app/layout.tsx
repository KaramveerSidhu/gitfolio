import Footer from "@components/shared/footer";
import { NAME, SITE_DESCRIPTION } from "@constants";
import Navbar from "./components/shared/navbar";
import Sidebar from "./components/shared/sidebar";
import "./globals.css";
import styles from "./layout.module.scss";

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
        <Navbar />
        <Sidebar />
        <main className={styles.main}> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
