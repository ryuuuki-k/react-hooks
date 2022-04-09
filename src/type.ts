export type Action =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };
