import type { PipeOperator } from '../types';

import { map } from './map';

export function arrayLastIndex<T>(): PipeOperator<readonly T[], number> {
  return map((array) => array.length - 1);
}
