import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayAppend<T>(...items: readonly T[]): PipeOperator<readonly T[], T[]> {
  return map((array) => [...array, ...items]);
}
