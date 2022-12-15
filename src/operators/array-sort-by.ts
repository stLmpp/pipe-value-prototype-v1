import { sort, type ISortByObjectSorter } from 'fast-sort';

import type { PipeOperator } from '../types';

import { map } from './map';

export type ArraySortByOptions<T> = ISortByObjectSorter<T>;

/**
 * @public
 */
export function arraySortBy<T>(
  predicate: ArraySortByOptions<T> | ArraySortByOptions<T>[]
): PipeOperator<readonly T[], T[]> {
  return map((array) => sort(array).by(predicate));
}
