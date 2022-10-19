import type { PipeOperator } from '../types';

/**
 * @public
 */
export function map<T, R>(callback: (source: T) => R): PipeOperator<T, R> {
  return (source) => callback(source);
}
