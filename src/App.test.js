import { test } from './App';

describe('Test Suite', () => {
  it('should return expected value', () => {
    const res = test('a string');
    expect(res).toBe({ base: true, value: 'a', extends: true });
  })
});