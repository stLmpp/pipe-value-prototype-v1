import type { ArrayCallback, ArrayPredicate, PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export interface ArrayUpsertOptions<T> {
  update?: ArrayCallback<T, T>;
  insert?: () => T;
}

/**
 * @public
 */
export function arrayUpsert<T>(
  getter: ArrayPredicate<T>,
  handler: ArrayUpsertOptions<T>
): PipeOperator<readonly T[], T[]> {
  return map((array) => {
    let newArray = [...array];
    if (!handler.update && !handler.insert) {
      return newArray;
    }
    const index = newArray.findIndex(getter);
    if (index > -1 && handler.update) {
      newArray[index] = handler.update(newArray[index], index, newArray);
    }
    if (index === -1 && handler.insert) {
      newArray = [...newArray, handler.insert()];
    }
    return newArray;
  });
}
