import { Transform } from './transform';

/**
 * @public
 */
export function isTransform(value: any): value is Transform<any> {
  return value instanceof Transform;
}
