import { allPosts } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { notFound } from "next/navigation";
import NEXT_SEO_DEFAULT from "../../../lib/defaultSEO";
import { PostProps } from "./page";

export default function Head(props: PostProps) {
  const {
    params: { slug: _slug },
  } = props;
  const slug = decodeURIComponent(_slug);

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <NextSeo
        {...NEXT_SEO_DEFAULT}
        title={post.title}
        description={`${post.body.raw.substring(0, 70)}…`}
      />
    </>
  );
}
