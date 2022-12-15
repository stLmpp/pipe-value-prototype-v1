import { coerceArrayFn } from '../internal';
import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayInsert<T>(
  item: T | readonly T[],
  index: number
): PipeOperator<readonly T[], T[]> {
  return map((array) => [...array.slice(0, index), ...coerceArrayFn(item), ...array.slice(index)]);
}
