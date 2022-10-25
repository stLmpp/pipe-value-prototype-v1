import { Transform } from '../transform';

import { arrayAppend } from './array-append';

describe('arrayAppend', () => {
  it('should append item to array', () => {
    expect(Transform.create([1, 2, 3]).pipe(arrayAppend(4)).value).toEqual([1, 2, 3, 4]);
  });

  it('should append multiple items to array', () => {
    expect(Transform.create([1, 2, 3]).pipe(arrayAppend(4, 5)).value).toEqual([1, 2, 3, 4, 5]);
  });
});
