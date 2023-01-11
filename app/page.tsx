import Image from "next/image";
import headerImage from "../public/img/oily-bw.jpg";

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
        className="h-32 object-cover mt-4"
      />

      <h2 className="text-white/95 font-black text-4xl mt-12">Inlägg</h2>
    </main>
  );
}

export default Home;
