import { PipeOperator } from '../types';

import { map } from './map';

export function arrayToSet<T>(): PipeOperator<T[], Set<T>> {
  return map((array) => new Set(array));
}
