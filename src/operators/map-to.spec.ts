import { Transform } from '../transform';

import { mapTo } from './map-to';

describe('mapTo', () => {
  it('should map from one value to another', () => {
    expect(Transform.create([]).pipe(mapTo(true)).value).toBe(true);
  })
})
