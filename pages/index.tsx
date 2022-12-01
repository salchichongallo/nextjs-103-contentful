import Link from 'next/link';
import { GetStaticProps } from 'next';
import { BlogPost } from '../lib/BlogPost.interface';
import { fetchContentful } from '../lib/fetchContentful';
import { Button } from '../components/Button';
import styled from '../styles/styled';

type HomeProps = {
  posts: BlogPost[];
};

const Layout = styled('div', {
  display: 'flex',
  paddingTop: '2rem',
  gap: '1rem',
  flexDirection: 'column',
  '@tablet': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  '@laptop': {
    alignItems: 'end',
  },
});

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
              <Button>See More</Button>
            </article>
          ))}
        </section>

        <Layout>
          <Button size="large" compact>
            Text Button
          </Button>
          <Button size="medium" compact>
            Text Button
          </Button>
          <Button size="small" compact>
            Text Button
          </Button>
        </Layout>
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
  } = await fetchContentful(QUERY_LANDING_POSTS);

  return {
    props: {
      posts,
    },
  };
};
