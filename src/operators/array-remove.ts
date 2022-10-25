import type { ArrayPredicate, PipeOperator } from '../types';

import { arrayFilter } from './array-filter';

/**
 * @public
 */
export function arrayRemove<T>(predicate: ArrayPredicate<T>): PipeOperator<readonly T[], T[]> {
  return arrayFilter((item, index, array) => !predicate(item, index, array));
}
