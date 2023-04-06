import "./globals.css";
import styles from "./layout.module.scss";
import Link from "next/link";
import { NAME, SITE_DESCRIPTION } from "@constants";
import Footer from "@components/shared/footer";
import Sidebar from "./components/shared/sidebar";
import Navbar from "./components/shared/navbar";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
