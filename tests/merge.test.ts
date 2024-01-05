import { merge } from '../src/merge';
test('Merge function merges two sorted arrays correctly', () => {
  const result = merge([1, 3, 5], [2, 4, 6]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
test('Merge function handles empty arrays correctly', () => {
  const result = merge([], [2, 4, 6]);
  expect(result).toEqual([2, 4, 6]);
});
test('Merge function handles arrays with different lengths correctly', () => {
  const result = merge([1, 3, 5], [2, 4, 6, 8]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 8]);
});