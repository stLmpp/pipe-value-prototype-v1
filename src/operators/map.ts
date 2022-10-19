import type { PipeOperator } from '../types';

export function map<T, R>(callback: (source: T) => R): PipeOperator<T, R> {
  return (source) => callback(source);
}
