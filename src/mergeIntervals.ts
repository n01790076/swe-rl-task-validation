/** A closed interval [start, end]. Touching boundaries count as overlap. */
export type Interval = readonly [number, number];

/**
 * Merge overlapping or touching closed intervals.
 *
 * - Does not mutate the provided array or its interval tuples.
 * - Throws RangeError for non-finite bounds or inverted intervals.
 * - Time: O(n log n); extra space: O(n).
 */
export function mergeIntervals(intervals: readonly Interval[]): Interval[] {
  const sorted = intervals.map(([start, end]) => {
    if (!Number.isFinite(start) || !Number.isFinite(end) || start > end) {
      throw new RangeError('Each interval requires finite start <= end');
    }
    return [start, end] as [number, number];
  });
  sorted.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const result: [number, number][] = [];
  for (const [start, end] of sorted) {
    const last = result[result.length - 1];
    if (!last || start > last[1]) {
      result.push([start, end]);
    } else {
      last[1] = Math.max(last[1], end);
    }
  }
  return result;
}
