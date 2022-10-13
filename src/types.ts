export type PipeOperator<T, R> = (source: T) => R;
export type PipeMonoOperator<T> = PipeOperator<T, T>;
export type ArrayCallback<T, R> = (item: T, index: number, array: readonly T[]) => R;
export type ArrayPredicate<T> = ArrayCallback<T, unknown>;
