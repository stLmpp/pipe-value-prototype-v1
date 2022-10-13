import { ArrayCallback, PipeOperator } from '../types';

import { map } from './map';

export function arrayToMap<T, R>(callback: ArrayCallback<T, R>): PipeOperator<T[], Map<R, T>> {
  return map((array) =>
    array.reduce((acc, item, index) => acc.set(callback(item, index, array), item), new Map<R, T>())
  );
}
