type Options = {
  preview?: boolean;
};

export function fetchContentful(
  query: string,
  variables: any = {},
  options: Options = {}
) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        options.preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { ...variables, preview: !!options.preview },
    }),
  };

  return fetch(fetchUrl, fetchOptions).then((response) => response.json());
}
