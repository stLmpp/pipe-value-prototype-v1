import type { PipeOperator } from '../types';

import { map } from './map';

const atFn =
  typeof Array.prototype.at === 'function'
    ? <T>(array: readonly T[], index: number): T | undefined => array.at(index)
    : <T>(array: readonly T[], index: number): T | undefined => {
        index = Math.trunc(index) || 0;
        if (index < 0) {
          index += array.length;
        }
        return array[index];
      };

/**
 * @public
 */
export function arrayAt<T>(index: number): PipeOperator<readonly T[], T | undefined> {
  return map((array) => atFn(array, index));
}
