import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayAppend<T>(item: T): PipeOperator<readonly T[], T[]> {
  return map((array) => [...array, item]);
}
