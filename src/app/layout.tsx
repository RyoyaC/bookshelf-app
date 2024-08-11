import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/styles/main.module.css";
import Header from "@/components/header";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* TODO: 背景の一番下まで色がつかないため、CSSを調整する必要あり */}
        <div className={styles.bggray}>
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
