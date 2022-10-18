import { PipeOperator } from '../types';

import { map } from './map';

export function coerceArray<T>(): PipeOperator<T | readonly T[], T[]> {
  return map((array) => (Array.isArray(array) ? [...array] : [array]));
}
