import { ArrayCallback, ArrayPredicate, PipeOperator } from '../types';

import { map } from './map';

export function arrayUpdate<T>(
  predicate: ArrayPredicate<T>,
  update: ArrayCallback<T, T>
): PipeOperator<readonly T[], T[]> {
  return map((array) => {
    const newArray = [...array];
    const index = newArray.findIndex(predicate);
    if (index > -1) {
      newArray[index] = update(newArray[index], index, newArray);
    }
    return newArray;
  });
}
