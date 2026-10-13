# Engineering decisions and trade-offs

These are small, explainable **demonstrations**, not a complete production system design.

## 1) Interval-merging algorithm

| Approach | Strengths | Trade-offs |
| --- | --- | --- |
| Sort then sweep (implemented) | `O(n log n)` total time, simple invariant, deterministic output | Requires sorting and `O(n)` additional memory here to avoid mutation |
| Repeated pairwise merging | Simple to prototype for a few intervals | Typically `O(n²)` worst case; harder to reason about ordering |
| Process intervals as a stream | Useful for already-sorted streams | For arbitrary out-of-order arrivals, additional buffering/state or a different data structure is needed |

**Choice:** sort a copy and merge. This protects callers from mutation and works for unsorted input.

## 2) Bounded LRU cache example

**Requirement:** keep at most `capacity` entries in memory, evicting the least recently used on insertion when full.

**Implemented:** a JavaScript `Map` maintains insertion/recency order. `get()` refreshes access by deleting/reinserting; `set()` refreshes updates. Average operations are `O(1)` and storage is bounded by `O(capacity)`.

| Choice | Advantage | Limitation |
| --- | --- | --- |
| Local in-memory LRU (implemented) | Fast, little setup, deterministic | Lost on restart; separate process instances disagree; no TTL |
| Shared external cache (e.g., Redis) | Shared state, TTL options, scalable infrastructure | Additional latency, cost, network failure and maintenance |
| Durable database-backed cache | Persistence and queries | Higher write/read overhead, more complex eviction policy |

**Out-of-scope for this example:** TTL, concurrent multi-process coordination, cache stampede prevention, observability and fault tolerance. An actual production service should test those needs before adopting a cache.

## 3) Testing strategy

Playwright Test is used for clear TypeScript test organization and assertions **without a browser**. Tests exercise pure algorithms deterministically. A real web application would additionally need UI/API integration tests, accessibility checks and environment-specific testing.

**Constraint:** the code is educational and uses synthetic inputs. Do not infer measured latency or external benchmark scores from these examples.
