import type { ArrayPredicate, PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayFind<T>(
  predicate: ArrayPredicate<T>
): PipeOperator<readonly T[], T | undefined> {
  return map((array) => array.find(predicate));
}
