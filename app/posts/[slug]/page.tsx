interface PostProps {}

function Post(props: PostProps) {
  //   const { } = props;

  return <>Post</>;
}

export async function generateStaticParams() {
  return [];
}

export default Post;
