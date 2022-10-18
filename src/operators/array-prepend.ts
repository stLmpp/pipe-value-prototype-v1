import { PipeOperator } from '../types';

import { map } from './map';

export function arrayPrepend<T>(item: T): PipeOperator<readonly T[], T[]> {
  return map((array) => [item, ...array]);
}
