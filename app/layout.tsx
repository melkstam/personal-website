import "./globals.css";

import { Inter } from "@next/font/google";
import clsx from "clsx";
import AnalyticsWrapper from "../components/analytics";

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
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>

      <body className="min-h-screen bg-black flex flex-col">
        {children}

        <div className="grow" />

        <footer className="container mx-auto px-2 text-white/40 max-w-lg py-4 mt-4">
          &copy; {new Date().getFullYear()} Vilhelm Melkstam
        </footer>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
