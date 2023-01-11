import { NextSeo } from "next-seo";
import NEXT_SEO_DEFAULT from "../lib/defaultSEO";

export default function Head() {
  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} />
    </>
  );
}
