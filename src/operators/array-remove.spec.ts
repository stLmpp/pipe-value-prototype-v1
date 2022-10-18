import { Transform } from '../transform';

import { arrayRemove } from './array-remove';

describe('arrayRemove', () => {
  it('should remove from array', () => {
    expect(
      Transform.create([1, 2, 3, 4]).pipe(arrayRemove((item) => item % 2 === 0)).value
    ).toEqual([1, 3]);
  });
});
