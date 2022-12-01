import { FetchGraphqlClient } from './FetchGraphlClient';

const client = new FetchGraphqlClient({
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export function fetchGraphl<T = any>(query: string, variables: any = {}) {
  return client.fetch<T>(query, { variables });
}
