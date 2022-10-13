import { Transform } from './transform';
import { TransformSymbol } from './transform-symbol';

export function isTransform(value: any): value is Transform<any> {
  return (
    value && (value instanceof Transform || (typeof value === 'object' && value[TransformSymbol]))
  );
}
