import { Transform } from '../transform';

import { arrayPrepend } from './array-prepend';

describe('arrayPrepend', () => {
  it('should prepend item to array', () => {
    expect(Transform.create([1, 2, 3, 4]).pipe(arrayPrepend(0)).value).toEqual([0, 1, 2, 3, 4]);
  });
});
