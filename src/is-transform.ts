import { Transform } from './transform';

export function isTransform(value: any): value is Transform<any> {
  return value instanceof Transform;
}
