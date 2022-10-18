export interface PipeOperator<T, R> {
  (source: T): R;
}
export interface PipeMonoOperator<T> {
  (source: T): T;
}
export interface ArrayCallback<T, R> {
  (item: T, index: number, array: readonly T[]): R;
}
export interface ArrayPredicate<T> {
  (item: T, index: number, array: readonly T[]): unknown;
}
