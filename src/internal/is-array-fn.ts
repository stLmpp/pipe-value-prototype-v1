/**
 * @internal
 */
export function isArrayFn(value: any): value is any[] | readonly any[] {
  return Array.isArray(value);
}
