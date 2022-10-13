import { Transform } from '../transform';

import { map } from './map';

describe('map', () => {
  it('should map data', () => {
    expect(Transform.create([{ id: 1 }]).pipe(map((array) => [array])).value).toEqual([
      [{ id: 1 }],
    ]);
  });
});
