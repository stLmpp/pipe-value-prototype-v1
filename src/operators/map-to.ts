import { PipeOperator } from '../types';

export function mapTo<T, R>(toValue: R): PipeOperator<T, R> {
  return () => toValue;
}
