import Link from "next/link";

interface PostLayoutProps {
  children?: React.ReactNode;
}

function PostLayout(props: PostLayoutProps) {
  const { children } = props;

  return (
    <>
      <header>
        <div className="container mx-auto px-2 max-w-lg py-4 mb-8">
          <Link
            href="/"
            className="text-white/90 font-black text-2xl hover:underline underline-offset-2"
          >
            Melkstams Blogg
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-2 max-w-lg">{children}</main>
    </>
  );
}

export default PostLayout;
