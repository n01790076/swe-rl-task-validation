# Coding task evaluation rubric

Use this to assess a candidate implementation of the **merge closed intervals** task. Score only verifiable observations from a code review and test execution.

| Category | Points | What to check |
| --- | ---: | --- |
| Functional correctness | 40 | Overlapping, disjoint, unsorted and nested intervals |
| Edge cases and validity | 30 | Empty input, duplicate/touching intervals, invalid bounds, no mutation |
| Complexity | 15 | Reasonable asymptotic analysis; `O(n log n)` approach preferred |
| Code quality | 15 | Clear TypeScript types, understandable flow, reusable functions |
| **Total** | **100** | |

## Evidence format

Record the following for every reviewed solution:

```text
Candidate/source: <local file or revision>
Test command: npm test
Observed: <pass/fail and relevant assertion output>
Code review notes: <specific lines or behavior>
Time and space complexity: <analysis with reasoning>
Decision: <accept / revise / inconclusive>
```

## Common failure modes to look for

- Comparing only neighboring intervals **before sorting**.
- Ignoring nested ranges, e.g. `[1,10]` followed by `[3,4]`.
- Incorrect boundary handling (`<` instead of `<=` for touching ranges).
- Sorting the original input in place instead of a copy.
- Assuming input bounds are always valid without implementing the agreed contract.

A passing test suite provides evidence for its covered cases, **not** proof of correctness for all inputs. Any untested performance or production claims should be marked **not verified**.
