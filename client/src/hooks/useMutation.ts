import { useReducer } from 'react';
import { api } from '../lib/api';
import { reducer } from './helpers';
import { MutationTuple } from './types';

function useMutation<TData = unknown, TVariables = unknown>(
  query: string
): MutationTuple<TData, TVariables> {
  const [state, dispatch] = useReducer(reducer<TData>(), {
    data: null,
    loading: false,
    error: false
  });

  const fetch = async (variables?: TVariables) => {
    try {
      dispatch({ type: 'FETCH' });
      const { data, errors } = await api.fetch<TData, TVariables>({ query, variables });

      if (errors?.length) {
        // Apollo Server returns an array of errors
        throw new Error(errors[0].message);
      }

      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (e) {
      dispatch({ type: 'FETCH_ERROR' });

      throw console.error(e.message);
    }
  };

  return [state, fetch];
}

export { useMutation };
