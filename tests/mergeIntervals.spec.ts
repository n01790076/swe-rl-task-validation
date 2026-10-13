import { test, expect } from '@playwright/test';
import { mergeIntervals } from '../src/mergeIntervals';

test.describe('mergeIntervals - acceptance and edge cases', () => {
  test('returns an empty array for empty input', () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  test('merges overlapping intervals', () => {
    expect(mergeIntervals([[1, 3], [2, 6], [8, 10]])).toEqual([[1, 6], [8, 10]]);
  });

  test('handles unsorted, nested and duplicate intervals', () => {
    expect(mergeIntervals([[5, 7], [1, 10], [3, 4], [1, 10]])).toEqual([[1, 10]]);
  });

  test('merges intervals that touch at their boundary', () => {
    expect(mergeIntervals([[4, 5], [1, 4]])).toEqual([[1, 5]]);
  });

  test('keeps disjoint and zero-length intervals', () => {
    expect(mergeIntervals([[7, 7], [-2, 1], [3, 3]])).toEqual([[-2, 1], [3, 3], [7, 7]]);
  });

  test('does not mutate input arrays or nested tuples', () => {
    const intervals = Object.freeze([
      Object.freeze([8, 10] as const),
      Object.freeze([1, 3] as const),
      Object.freeze([2, 6] as const),
    ]);
    expect(mergeIntervals(intervals)).toEqual([[1, 6], [8, 10]]);
    expect(intervals).toEqual([[8, 10], [1, 3], [2, 6]]);
  });

  test('rejects reversed intervals', () => {
    expect(() => mergeIntervals([[10, 2]])).toThrow(RangeError);
  });

  test('rejects non-finite bounds', () => {
    expect(() => mergeIntervals([[0, Infinity]])).toThrow(RangeError);
    expect(() => mergeIntervals([[NaN, 5]])).toThrow(RangeError);
  });
});
