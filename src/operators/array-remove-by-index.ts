import { coerceArrayFn } from '../internal';
import type { PipeOperator } from '../types';

import { arrayRemove } from './array-remove';

/**
 * @public
 */
export function arrayRemoveByIndex<T>(
  indexOrIndices: number | number[]
): PipeOperator<readonly T[], T[]> {
  const indices = new Set(coerceArrayFn(indexOrIndices));
  return arrayRemove((_, index) => indices.has(index));
}
