import { test, expect } from '@playwright/test';
import { LruCache } from '../src/lruCache';

test.describe('LruCache - behavior and edge cases', () => {
  test('stores and retrieves values', () => {
    const cache = new LruCache<string, number>(2);
    cache.set('a', 1);
    expect(cache.get('a')).toBe(1);
    expect(cache.get('missing')).toBeUndefined();
  });

  test('evicts least recently used entry after access changes recency', () => {
    const cache = new LruCache<string, number>(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.get('a'); // a is now most recently used
    cache.set('c', 3); // b is evicted
    expect(cache.has('a')).toBe(true);
    expect(cache.has('b')).toBe(false);
    expect(cache.get('c')).toBe(3);
    expect(cache.size).toBe(2);
  });

  test('updating an existing key refreshes recency without increasing size', () => {
    const cache = new LruCache<string, number>(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('a', 9);
    cache.set('c', 3);
    expect(cache.get('a')).toBe(9);
    expect(cache.has('b')).toBe(false);
    expect(cache.size).toBe(2);
  });

  test('delete and clear remove entries', () => {
    const cache = new LruCache<string, number>(1);
    cache.set('a', 1);
    expect(cache.delete('a')).toBe(true);
    expect(cache.delete('a')).toBe(false);
    cache.set('b', 2);
    cache.clear();
    expect(cache.size).toBe(0);
  });

  test('rejects zero, negative, non-integer or unsafe capacities', () => {
    for (const capacity of [0, -1, 1.5, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
      expect(() => new LruCache(capacity)).toThrow(RangeError);
    }
  });
});
