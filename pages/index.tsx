import Link from 'next/link';
import { GetStaticProps } from 'next';
import { BlogPost } from '../lib/BlogPost.interface';
import { fetchGraphl } from '../lib/fetchGraphql';

type HomeProps = {
  posts: BlogPost[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <header>
        <h1>Blog.</h1>
      </header>
      <main>
        <section>
          {posts.map(post => (
            <article key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              <p>{post.excerpt}</p>
              <small>{post.publishedAt.slice(0, 10)}</small>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

const QUERY_LANDING_POSTS = /* GraphQL */ `
  query QueryLandingPosts {
    blogPostCollection {
      total
      items {
        title
        slug
        publishedAt
        excerpt
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {
    data: {
      blogPostCollection: { items: posts },
    },
  } = await fetchGraphl(QUERY_LANDING_POSTS);

  return {
    props: {
      posts,
    },
  };
};
