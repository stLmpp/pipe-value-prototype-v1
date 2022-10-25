import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayPrepend<T>(...items: readonly T[]): PipeOperator<readonly T[], T[]> {
  return map((array) => [...items, ...array]);
}
