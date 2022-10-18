import { Transform } from '../transform';

import { arrayUpdate } from './array-update';

describe('arrayUpdate', () => {
  it('should update an item in the array', () => {
    expect(
      Transform.create([
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
      ]).pipe(
        arrayUpdate(
          (item) => item.id === 2,
          (item) => ({ ...item, name: 'updated' })
        )
      ).value
    ).toEqual([
      { id: 1, name: '1' },
      { id: 2, name: 'updated' },
      { id: 3, name: '3' },
    ]);
  });

  it('should not modify the original array', () => {
    const array = [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
    ];
    const newArray = Transform.create(array).pipe(
      arrayUpdate(
        (item) => item.id === 2,
        (item) => ({ ...item, name: 'updated' })
      )
    ).value;
    expect(newArray).toEqual([
      { id: 1, name: '1' },
      { id: 2, name: 'updated' },
      { id: 3, name: '3' },
    ]);
    expect(array).not.toBe(newArray);
    expect(array[1].name).toBe('2');
  });
});
