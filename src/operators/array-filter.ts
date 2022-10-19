import type { ArrayPredicate, PipeOperator } from '../types';

import { map } from './map';

export function arrayFilter<T>(predicate: ArrayPredicate<T>): PipeOperator<readonly T[], T[]> {
  return map((array) => array.filter(predicate));
}
