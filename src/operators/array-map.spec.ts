import { Transform } from '../transform';

import { arrayMap } from './array-map';

describe('arrayMap', () => {
  it('should map items in the array', () => {
    expect(
      Transform.create([{ id: 1 }, { id: 2 }]).pipe(arrayMap((item) => item.id)).value
    ).toEqual([1, 2]);
  });
});
