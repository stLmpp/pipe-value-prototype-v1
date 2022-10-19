import type { PipeOperator } from '../types';

import { map } from './map';

/**
 * @public
 */
export function mapTo<T, R>(toValue: R): PipeOperator<T, R> {
  return map(() => toValue);
}
