"use-client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { mdxComponents } from "../../../components";

const dateFormatter = Intl.DateTimeFormat("sv-SE", {
  dateStyle: "long",
});

interface PostProps {
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
      <h1 className="mb-0">{post.title}</h1>
      <p className="mt-0 mb-8">Publicerad {dateFormatter.format(date)}</p>

      <MDXContent components={mdxComponents} />
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default Post;
