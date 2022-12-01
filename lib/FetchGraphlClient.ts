export interface FetchQueryOptions {
  variables?: object;
}

interface ContentfulOptions {
  spaceId: string;
  accessToken: string;
  environment?: string;
}

export class FetchGraphqlClient {
  constructor(private readonly options: ContentfulOptions) {}

  public async fetch<T = any>(
    query: string,
    options?: FetchQueryOptions,
  ): Promise<{ data: T }> {
    const response = await fetch(this.buildUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.options.accessToken}`,
      },
      body: JSON.stringify({
        query,
        variables: options?.variables,
      }),
    });
    return await response.json();
  }

  private buildUrl() {
    const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${this.options.spaceId}`;
    if (this.options.environment != null) {
      return `${baseUrl}/${this.options.environment}`;
    }
    return baseUrl;
  }
}
