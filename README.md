# SWE/RL Coding Task Validation

A TypeScript and Playwright portfolio project demonstrating software engineering, automated testing, algorithmic analysis, and structured evaluation of coding solutions.

**Author:** Frank Oteng Marfo  
**Technologies:** TypeScript, JavaScript, Node.js, Playwright, Git

## Project Overview

This repository demonstrates techniques for developing and evaluating software engineering solutions using reproducible test cases, clear acceptance criteria, and technical documentation.

The project focuses on:

- Software development and debugging
- Coding task design and solution verification
- Automated testing and edge-case analysis
- Time and space complexity analysis
- System design decisions and trade-offs
- Structured code evaluation

## Featured Coding Projects

### 1. Merge Intervals Algorithm

Implementation: `src/mergeIntervals.ts`

Features:
- Sorts and merges overlapping intervals
- Handles duplicate, nested, and touching intervals
- Validates input and prevents unwanted mutation
- Time complexity: O(n log n)
- Additional space complexity: O(n)

Tests: `tests/mergeIntervals.spec.ts`

### 2. Least Recently Used (LRU) Cache

Implementation: `src/lruCache.ts`

Features:
- Bounded in-memory caching
- Least-recently-used eviction
- Average O(1) lookup and update
- Evaluation of memory, performance, and scalability trade-offs

Tests: `tests/lruCache.spec.ts`

## Testing and Validation

Playwright Test provides automated assertions covering:

- Functional correctness
- Expected outputs
- Boundary conditions
- Invalid inputs
- Edge cases
- Reproducible test results

The repository also contains example API/UI tests that require a separate application server.

## Running the Algorithm Tests

Requirements: Node.js and npm.

Install dependencies:

```bash
npm install
```

Run the self-contained algorithm tests:

```bash
npx playwright test tests/mergeIntervals.spec.ts tests/lruCache.spec.ts
```

Check TypeScript types:

```bash
npx tsc --noEmit
```

The existing `task-validation.spec.ts` tests require a compatible application at `http://localhost:3000` and should be run separately.

## Technical Documentation

- `docs/task-specification.md` — Requirements and acceptance criteria
- `docs/evaluation-rubric.md` — Code evaluation and quality criteria
- `docs/design-tradeoffs.md` — Algorithm choices and system design considerations

## Project Purpose

This project provides practical examples of software development, automated validation, algorithmic reasoning, and technical evaluation relevant to software engineering and AI coding assessment roles.

The examples are educational and do not represent a deployed production system or externally verified benchmark results.

## Author

Frank Oteng Marfo  
Brampton, Ontario, Canada
GitHub: https://github.com/n01790076
