import { Transform } from '../transform';

import { arrayToSet } from './array-to-set';

describe('arrayToSet', () => {
  it('should transform from array to set', () => {
    expect(Transform.create([2, 1, 2, 3, 3]).pipe(arrayToSet()).value).toEqual(new Set([2, 1, 3]));
  })
})
