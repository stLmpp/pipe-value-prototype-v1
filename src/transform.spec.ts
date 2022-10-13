import { arrayMap, arrayToMap, map } from './operators';
import { Transform } from './transform';

describe('Transform', () => {
  const initialData = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
  ];

  let transformData: Transform<typeof initialData>;

  beforeEach(() => {
    transformData = Transform.create(initialData);
  });

  it('should create instance', () => {
    expect(transformData).toBeDefined();
  });

  it('should get value', () => {
    expect(transformData.value).toEqual(initialData);
  });

  it('should return new instance when piping', () => {
    expect(transformData.pipe()).not.toBe(transformData);
  });

  it('should keep same value when piping without operators', () => {
    expect(transformData.pipe().value).toEqual(initialData);
  });

  it('should pipe operator and change value', () => {
    const newData = transformData.pipe(arrayMap((item) => item.id));
    expect(newData.value).toEqual([1, 2]);
  });

  it('should pipe multiple operators and change value', () => {
    const newData = transformData.pipe(
      arrayToMap((item) => item.id),
      map((newMap) => [...newMap])
    );
    expect(newData.value).toEqual(
      expect.arrayContaining([
        [1, { id: 1, name: '1' }],
        [2, { id: 2, name: '2' }],
      ])
    );
  });
});
