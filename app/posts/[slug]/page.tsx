"use-client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { mdxComponents } from "../../../components";

const dateFormatter = Intl.DateTimeFormat("sv-SE", {
  dateStyle: "long",
});

export interface PostProps {
  params: {
    slug: string;
  };
}

function Post(props: PostProps) {
  const {
    params: { slug: _slug },
  } = props;
  const slug = decodeURIComponent(_slug);

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  const date = new Date(post.date);

  return (
    <article className="prose prose-invert max-w-none prose-lg">
      <p className="mb-0">Publicerad {dateFormatter.format(date)}</p>
      <h1 className="mt-0">{post.title}</h1>

      <MDXContent components={mdxComponents} />
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default Post;
