import type { ArrayCallback, PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function arrayToMap<T, R>(
  callback: ArrayCallback<T, R>
): PipeOperator<readonly T[], Map<R, T>> {
  return map((array) =>
    array.reduce((acc, item, index) => acc.set(callback(item, index, array), item), new Map<R, T>())
  );
}
