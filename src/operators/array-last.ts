import type { PipeOperator } from '../types';

import { map } from './map';

export function arrayLast<T>(): PipeOperator<readonly T[], T | undefined> {
  return map((array) => array[array.length - 1]);
}
