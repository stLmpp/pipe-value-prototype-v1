import { Transform } from '../transform';

import { identity } from './identity';

describe('identity', () => {
  it('should return itself', () => {
    const data = {};
    expect(Transform.create(data).pipe(identity()).value).toBe(data);
  });
});
