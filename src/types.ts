/**
 * @public
 */
export interface PipeOperator<T, R> {
  (source: T): R;
}

/**
 * @public
 */
export interface PipeMonoOperator<T> {
  (source: T): T;
}

/**
 * @public
 */
export interface ArrayCallback<T, R> {
  (item: T, index: number, array: readonly T[]): R;
}

/**
 * @public
 */
export interface ArrayPredicate<T> {
  (item: T, index: number, array: readonly T[]): unknown;
}
