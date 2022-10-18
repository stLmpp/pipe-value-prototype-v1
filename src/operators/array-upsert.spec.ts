import { Transform } from '../transform';

import { arrayUpsert } from './array-upsert';

describe('arrayUpsert', () => {
  it('should add missing item', () => {
    expect(
      Transform.create([{ id: 1 }]).pipe(
        arrayUpsert((item) => item.id === 3, { insert: () => ({ id: 3 }) })
      ).value
    ).toEqual([{ id: 1 }, { id: 3 }]);
  });

  it('should update existing item', () => {
    expect(
      Transform.create([
        { id: 1, name: '1' },
        { id: 3, name: '3' },
      ]).pipe(
        arrayUpsert((item) => item.id === 3, { update: (item) => ({ ...item, name: 'updated' }) })
      ).value
    ).toEqual([
      { id: 1, name: '1' },
      { id: 3, name: 'updated' },
    ]);
  });

  it('should copy array is handler has no keys', () => {
    expect(
      Transform.create([{ id: 1 }]).pipe(arrayUpsert((item) => item.id === 1, {})).value
    ).toEqual([{ id: 1 }]);
  });
});
