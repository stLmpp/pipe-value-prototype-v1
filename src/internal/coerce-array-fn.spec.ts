import { coerceArrayFn } from './coerce-array-fn';

describe('coerceArrayFn', () => {
  it('should convert non-array to array', () => {
    expect(coerceArrayFn({})).toEqual([{}]);
  });

  it('should not convert from array', () => {
    expect(coerceArrayFn([])).toEqual([]);
  });
});
