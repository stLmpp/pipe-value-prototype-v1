import type { ArrayCallback, PipeOperator } from '../types';

import { arrayFilter } from './array-filter';

export function arrayRemove<T>(
  predicate: ArrayCallback<T, unknown>
): PipeOperator<readonly T[], T[]> {
  return arrayFilter((item, index, array) => !predicate(item, index, array));
}
