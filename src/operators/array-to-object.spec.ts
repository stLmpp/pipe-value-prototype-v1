import { Transform } from '../transform';

import { arrayToObject } from './array-to-object';

describe('arrayToObject', () => {
  it('should transform array into an object', () => {
    expect(
      Transform.create([{ id: 1 }, { id: 2 }]).pipe(arrayToObject((item) => item.id)).value
    ).toEqual(
      expect.objectContaining({
        1: { id: 1 },
        2: { id: 2 },
      })
    );
  });
});
