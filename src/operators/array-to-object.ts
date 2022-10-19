import type { ArrayCallback, PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayToObject<T, R extends keyof any>(
  callback: ArrayCallback<T, R>
): PipeOperator<readonly T[], Record<R, T>> {
  return map((array) =>
    array.reduce(
      (acc, item, index) => ({ ...acc, [callback(item, index, array)]: item }),
      {} as Record<R, T>
    )
  );
}
