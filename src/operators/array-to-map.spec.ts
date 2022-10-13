import { Transform } from '../transform';

import { arrayToMap } from './array-to-map';

describe('arrayToMap', () => {
  it('should map from array to map', () => {
    expect(
      Transform.create([{ id: 1 }, { id: 2 }]).pipe(arrayToMap((item) => item.id)).value
    ).toEqual(new Map().set(1, { id: 1 }).set(2, { id: 2 }));
  });
});
