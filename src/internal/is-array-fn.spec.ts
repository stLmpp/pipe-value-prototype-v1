import { isArrayFn } from './is-array-fn';

describe('isArrayFn', () => {
  it('should return true if is array', () => {
    expect(isArrayFn([])).toBe(true);
    expect(isArrayFn(Array(1))).toBe(true);
    expect(isArrayFn(new Array(1))).toBe(true);
    expect(isArrayFn(Array.from({ length: 1 }))).toBe(true);
  });

  it('should return false is not array', () => {
    expect(isArrayFn({})).toBe(false);
    expect(isArrayFn({ length: 1 })).toBe(false);
    expect(isArrayFn(1)).toBe(false);
    expect(isArrayFn('asd')).toBe(false);
    expect(isArrayFn(new Map())).toBe(false);
    expect(isArrayFn(new Set())).toBe(false);
    expect(isArrayFn(new RegExp(''))).toBe(false);
    expect(isArrayFn(Object.create(null))).toBe(false);
  });
});
