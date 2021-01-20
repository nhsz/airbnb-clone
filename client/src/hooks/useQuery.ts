import { useCallback, useEffect, useState } from 'react';
import { api } from '../lib/api';

interface State<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}

function useQuery<TData = any>(query: string) {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: false,
    error: false
  });

  const fetch = useCallback(() => {
    (async function fetchAPI() {
      try {
        setState({
          data: null,
          loading: true,
          error: false
        });
        const { data, errors } = await api.fetch<TData>({ query });

        if (errors?.length) {
          throw new Error(errors[0].message);
        }

        setState({
          data,
          loading: false,
          error: false
        });
      } catch (e) {
        setState({
          data: null,
          loading: false,
          error: true
        });

        throw console.error(e.message);
      }
    })();
  }, [query]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, refetch: fetch };
}

export { useQuery };
