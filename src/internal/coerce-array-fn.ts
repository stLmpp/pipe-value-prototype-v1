/**
 * @internal
 */
export function coerceArrayFn<T>(array: T | readonly T[]): T[] {
  return Array.isArray(array) ? [...array] : [array];
}
