import { useState } from 'react';
import { api } from '../lib/api';

// useState typings
interface State<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}

// Hook return typings
type MutationTuple<TData, TVariables> = [State<TData>, (variables?: TVariables) => Promise<void>];

function useMutation<TData = unknown, TVariables = unknown>(
  query: string
): MutationTuple<TData, TVariables> {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: false,
    error: false
  });

  const fetch = async (variables?: TVariables) => {
    try {
      setState({
        data: null,
        loading: true,
        error: false
      });

      const { data, errors } = await api.fetch<TData, TVariables>({ query, variables });

      if (errors?.length) {
        // Apollo Server returns an array of errors
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
  };

  return [state, fetch];
}

export { useMutation };
