import type { PipeOperator } from './types';

export class Transform<T> {
  constructor(value: T) {
    this.#value = value;
  }

  readonly #value: T;

  get value(): T {
    return this.#value;
  }

  pipe(): Transform<T>;
  pipe<A>(op1: PipeOperator<T, A>): Transform<A>;
  pipe<A, B>(op1: PipeOperator<T, A>, op2: PipeOperator<A, B>): Transform<B>;
  pipe<A, B, C>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>
  ): Transform<C>;
  pipe<A, B, C, D>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>
  ): Transform<D>;
  pipe<A, B, C, D, E>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>
  ): Transform<E>;
  pipe<A, B, C, D, E, F>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>
  ): Transform<F>;
  pipe<A, B, C, D, E, F, G>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>
  ): Transform<G>;
  pipe<A, B, C, D, E, F, G, H>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>
  ): Transform<H>;
  pipe<A, B, C, D, E, F, G, H, I>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>,
    op9: PipeOperator<H, I>
  ): Transform<I>;
  pipe<A, B, C, D, E, F, G, H, I, J>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>,
    op9: PipeOperator<H, I>,
    op10: PipeOperator<I, J>
  ): Transform<J>;
  pipe<A, B, C, D, E, F, G, H, I, J, K>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>,
    op9: PipeOperator<H, I>,
    op10: PipeOperator<I, J>,
    op11: PipeOperator<J, K>
  ): Transform<K>;
  pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>,
    op9: PipeOperator<H, I>,
    op10: PipeOperator<I, J>,
    op11: PipeOperator<J, K>,
    op12: PipeOperator<K, L>
  ): Transform<L>;
  pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>,
    op9: PipeOperator<H, I>,
    op10: PipeOperator<I, J>,
    op11: PipeOperator<J, K>,
    op12: PipeOperator<K, L>,
    op13: PipeOperator<L, M>
  ): Transform<M>;
  pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    op1: PipeOperator<T, A>,
    op2: PipeOperator<A, B>,
    op3: PipeOperator<B, C>,
    op4: PipeOperator<C, D>,
    op5: PipeOperator<D, E>,
    op6: PipeOperator<E, F>,
    op7: PipeOperator<F, G>,
    op8: PipeOperator<G, H>,
    op9: PipeOperator<H, I>,
    op10: PipeOperator<I, J>,
    op11: PipeOperator<J, K>,
    op12: PipeOperator<K, L>,
    op13: PipeOperator<L, M>,
    op14: PipeOperator<M, N>,
    ...operators: PipeOperator<any, any>[]
  ): Transform<M>;
  pipe(...operators: PipeOperator<any, any>[]): Transform<any> {
    const newValue = operators.reduce((value, operator) => operator(value), this.#value);
    return Transform.create(newValue);
  }

  static create<T>(value: T): Transform<T> {
    return new Transform(value);
  }
}
