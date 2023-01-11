import "./globals.css";

import { Inter } from "@next/font/google";
import clsx from "clsx";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={clsx(inter.variable)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}
