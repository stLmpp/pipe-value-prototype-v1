import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayToSet<T>(): PipeOperator<readonly T[], Set<T>> {
  return map((array) => new Set(array));
}
