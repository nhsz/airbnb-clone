export interface State<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}

export interface QueryResult<TData> extends State<TData> {
  refetch: () => void;
}

export type MutationTuple<TData, TVariables> = [
  State<TData>,
  (variables?: TVariables) => Promise<void>
];
