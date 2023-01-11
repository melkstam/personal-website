// next-seo.config.ts
import type { NextSeoProps } from "next-seo";

const NEXT_SEO_DEFAULT: NextSeoProps = {
  useAppDir: true,
  title: "Melkstams Blogg",
  description: "Min blogg data och annat",
  twitter: {
    handle: "@melkstam",
    cardType: "summary_large_image",
  },
};

export default NEXT_SEO_DEFAULT;
