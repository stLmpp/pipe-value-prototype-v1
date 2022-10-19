import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayPrepend<T>(item: T): PipeOperator<readonly T[], T[]> {
  return map((array) => [item, ...array]);
}
