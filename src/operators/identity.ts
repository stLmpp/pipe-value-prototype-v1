import { PipeMonoOperator } from '../types';

export function identity<T>(): PipeMonoOperator<T> {
  return (value) => value;
}
