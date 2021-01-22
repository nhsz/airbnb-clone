interface RequestBody<TVariables> {
  query: string;
  variables?: TVariables;
}

interface Error {
  message: string;
}

const GRAPHQL_ENDPOINT = '/api';

const api = {
  fetch: async <TData = unknown, TVariables = unknown>(body: RequestBody<TVariables>) => {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error('Failed to fetch from server.');
    }

    return res.json() as Promise<{ data: TData; errors: Error[] }>;
  }
};

export { api };
