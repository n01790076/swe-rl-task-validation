# SWE task specification: Merge closed intervals

## Problem

Implement `mergeIntervals(intervals)` in TypeScript. Input is an array of closed numeric intervals `[start, end]`, where both ends are inclusive. Return sorted, non-overlapping intervals representing the same covered values.

## Acceptance criteria

1. Every returned interval has `start <= end`.
2. Output is sorted in ascending order by `start`.
3. Intervals overlapping **or touching at an endpoint** must be merged.
4. Duplicate and fully contained intervals must be merged correctly.
5. An empty input returns an empty array.
6. The function **must not mutate** the supplied input or tuples.
7. Non-finite numbers (`NaN`, `Infinity`) and inverted ranges must throw `RangeError`.

## Examples

| Input | Expected |
| --- | --- |
| `[[1,3],[2,6],[8,10]]` | `[[1,6],[8,10]]` |
| `[[4,5],[1,4]]` | `[[1,5]]` |
| `[[9,9],[2,2]]` | `[[2,2],[9,9]]` |
| `[]` | `[]` |

## Reference approach

1. Validate interval bounds.
2. Copy and sort intervals by their starting positions.
3. Sweep from left to right, extending the most recent merged interval when another interval overlaps/touches it.

### Complexity

- Sorting dominates: **time `O(n log n)`**, including the merge pass (`O(n)`).
- Input copy and merged output: **additional space `O(n)`**.
- A repeated pairwise-merge strategy may take `O(n²)` and is simpler only for tiny input sizes.

See [source code](../src/mergeIntervals.ts) and [tests](../tests/mergeIntervals.spec.ts).
