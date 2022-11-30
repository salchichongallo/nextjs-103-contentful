import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { BlogPost } from "../../lib/BlogPost.interface";
import { fetchContentful } from "../../lib/fetchContentful";

type Props = {
  post: BlogPost;
};

export default function BlogPostPage({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      <main>
        <p>{post.excerpt}</p>
        <small>{post.publishedAt}</small>
      </main>
      <Link href="/">⟵ Go back</Link>
    </div>
  );
}

type Params = {
  slug: string;
};

const QUERY_BLOG_POST = /* GraphQL */ `
  query QueryBlogPost($slug: String!) {
    blogPostCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        publishedAt
        excerpt
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const {
    data: {
      blogPostCollection: { items },
    },
  } = await fetchContentful(QUERY_BLOG_POST, { slug: params!.slug });
  return {
    props: {
      post: items[0],
    },
  };
};

const QUERY_POSTS_PATHS = /* GraphQL */ `
  query QueryPostsPaths {
    blogPostCollection {
      items {
        slug
      }
    }
  }
`;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const {
    data: {
      blogPostCollection: { items: posts },
    },
  } = await fetchContentful(QUERY_POSTS_PATHS);

  return {
    paths: posts.map((post: Pick<BlogPost, "slug">) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
