import { ArrayCallback, PipeOperator } from '../types';

export function arrayMap<T, R>(callback: ArrayCallback<T, R>): PipeOperator<T[], R[]> {
  return (source) => source.map(callback);
}
