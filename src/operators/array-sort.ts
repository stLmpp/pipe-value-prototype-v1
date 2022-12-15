import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arraySort<T>(
  comparator: (valueA: T, valueB: T) => number
): PipeOperator<readonly T[], T[]> {
  return map((array) => [...array].sort(comparator));
}
