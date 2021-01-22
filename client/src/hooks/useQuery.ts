import { useCallback, useEffect, useReducer } from 'react';
import { api } from '../lib/api';
import { reducer } from './helpers';
import { QueryResult } from './types';

function useQuery<TData = unknown>(query: string): QueryResult<TData> {
  const [state, dispatch] = useReducer(reducer<TData>(), {
    data: null,
    loading: false,
    error: false
  });

  const fetch = useCallback(() => {
    (async function fetchAPI() {
      try {
        dispatch({ type: 'FETCH' });
        const { data, errors } = await api.fetch<TData>({ query });

        if (errors?.length) {
          // Apollo Server returns an array of errors
          throw new Error(errors[0].message);
        }

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (e) {
        dispatch({ type: 'FETCH_ERROR' });

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
