import Image from "next/image";
import Link from "next/link";
import headerImage from "../public/img/oily-bw.jpg";

import { allPosts } from "contentlayer/generated";

const sortedPosts = allPosts.sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date),
);

const dateFormatter = Intl.DateTimeFormat("sv-SE", {
  dateStyle: "long",
});

function Home() {
  return (
    <main className="container mx-auto px-2 max-w-lg ">
      <h1 className="text-white font-black text-7xl mt-12">
        Melkstams{"\n"}Blogg
      </h1>

      <Image
        src={headerImage}
        alt="Header image"
        priority
        className="h-40 object-cover mt-8"
      />

      <h2 className="text-white/95 font-black text-4xl mt-12">Inlägg</h2>

      <div className="pt-2">
        {sortedPosts.map((post) => (
          <div key={post.slug} className="my-4">
            <Link href={post.url}>
              <h3 className="text-white/80 text-2xl font-bold">{post.title}</h3>
              <p className="text-white/60">
                {dateFormatter.format(new Date(post.date))}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
