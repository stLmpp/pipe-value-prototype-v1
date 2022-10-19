import type { PipeMonoOperator } from '../types';

/**
 * @public
 */
export function identity<T>(): PipeMonoOperator<T> {
  return (value) => value;
}
