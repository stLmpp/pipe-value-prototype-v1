import type { PipeOperator } from '../types';

import { map } from './map';

export function mapTo<T, R>(toValue: R): PipeOperator<T, R> {
  return map(() => toValue);
}
