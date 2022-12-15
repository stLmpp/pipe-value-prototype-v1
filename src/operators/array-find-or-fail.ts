import type { ArrayPredicate, PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayFindOrFail<T>(predicate: ArrayPredicate<T>): PipeOperator<readonly T[], T> {
  return map((array) => {
    const item = array.find(predicate);
    if (typeof item === 'undefined') {
      throw new Error('Item not found');
    }
    return item;
  });
}
