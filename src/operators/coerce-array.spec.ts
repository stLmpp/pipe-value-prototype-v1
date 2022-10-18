import { Transform } from '../transform';

import { coerceArray } from './coerce-array';

describe('coerceArray', () => {
  it('should convert non-array to array', () => {
    expect(Transform.create({}).pipe(coerceArray()).value).toEqual([{}]);
  });

  it('should not convert from array', () => {
    expect(Transform.create([]).pipe(coerceArray()).value).toEqual([]);
  });
});
