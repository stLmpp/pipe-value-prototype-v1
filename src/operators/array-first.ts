import type { PipeOperator } from '../types';

import { map } from './map';

export function arrayFirst<T>(): PipeOperator<readonly T[], T | undefined> {
  return map((array) => array[0])
}
