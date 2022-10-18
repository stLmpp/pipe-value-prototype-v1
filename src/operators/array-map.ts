import { ArrayCallback, PipeOperator } from '../types';

import { map } from './map';

export function arrayMap<T, R>(callback: ArrayCallback<T, R>): PipeOperator<readonly T[], R[]> {
  return map((source) => source.map(callback));
}
