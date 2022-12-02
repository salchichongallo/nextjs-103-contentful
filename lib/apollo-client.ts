import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
if (process.env.CONTENTFUL_ENVIRONMENT) {
  uri += `/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;
}

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri,
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
