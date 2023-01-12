import Image from "next/image";
import Link from "next/link";
import headerImage from "../public/img/oily-bw.jpg";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const twConfig = resolveConfig(tailwindConfig);

import { allPosts } from "contentlayer/generated";

const sortedPosts = allPosts.sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date),
);

const dateFormatter = Intl.DateTimeFormat("sv-SE", {
  dateStyle: "long",
});

const screens = twConfig.theme?.screens as Record<string, string>;

function Home() {
  return (
    <main className="container mx-auto px-2 max-w-lg ">
      <h1 className="text-white font-black text-7xl mt-12">
        Melkstams{"\n"}Blogg
      </h1>

      <div className="mt-8 relative h-40">
        <Image
          src={headerImage}
          alt="Header image"
          priority
          fill
          className="object-cover"
          sizes={`(max-width: ${screens["lg"]}) 100vw, ${screens["lg"]}`}
        />
      </div>

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
