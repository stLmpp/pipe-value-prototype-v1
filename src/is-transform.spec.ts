import { isTransform } from './is-transform';
import { Transform } from './transform';

describe('isTransform', () => {
  it('should work with instance', () => {
    expect(isTransform(Transform.create({}))).toBe(true);
    expect(isTransform(new Transform({}))).toBe(true);
  });

  it('should not work with not instances', () => {
    expect(isTransform({})).toBe(false);
    const plainTransform: Transform<any> = {
      pipe: () => plainTransform,
      get value(): any {
        return undefined;
      },
    } as any;
    expect(isTransform(plainTransform)).toBe(false);
    expect(isTransform([])).toBe(false);
    expect(isTransform(1)).toBe(false);
    expect(isTransform('s')).toBe(false);
    expect(isTransform(new RegExp(''))).toBe(false);
    expect(isTransform(new Map())).toBe(false);
    expect(isTransform(new Set())).toBe(false);
    expect(isTransform(true)).toBe(false);
  });
});
