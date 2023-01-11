import Link from "next/link";

interface PostLayoutProps {
  children?: React.ReactNode;
}

function PostLayout(props: PostLayoutProps) {
  const { children } = props;

  return (
    <>
      <header>
        <div className="container mx-auto px-4 max-w-md text-white/90 font-black">
          <Link href="/">Melkstam</Link>
        </div>
      </header>
      <main className="container mx-auto px-4 max-w-md">{children}</main>
    </>
  );
}

export default PostLayout;
