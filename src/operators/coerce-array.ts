import { coerceArrayFn } from '../internal';
import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function coerceArray<T>(): PipeOperator<T | readonly T[], T[]> {
  return map(coerceArrayFn);
}
