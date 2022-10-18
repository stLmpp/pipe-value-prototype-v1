import { Transform } from '../transform';

import { arrayFilter } from './array-filter';

describe('arrayFilter', () => {
  it('should filter array', () => {
    expect(
      Transform.create([1, 2, 3, 4]).pipe(arrayFilter((item) => item % 2 === 0)).value
    ).toEqual([2, 4]);
  });
});
