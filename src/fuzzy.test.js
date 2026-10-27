import { describe, it, expect } from 'vitest';
import { fuzzyMatch, fuzzyFilter } from './fuzzy.js';

const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Kiwi', 'Mango', 'Orange', 'Peach', 'Pear', 'Strawberry'];

describe('fuzzyMatch', () => {
  it('matches characters in order, ignoring case', () => {
    expect(fuzzyMatch('bnna', 'Banana')).toBe(true);
    expect(fuzzyMatch('STRW', 'Strawberry')).toBe(true);
  });

  it('rejects out-of-order or missing characters', () => {
    expect(fuzzyMatch('nab', 'Banana')).toBe(false);
    expect(fuzzyMatch('xyz', 'Banana')).toBe(false);
  });

  it('matches everything for an empty query', () => {
    expect(fuzzyMatch('', 'Banana')).toBe(true);
  });
});

describe('fuzzyFilter', () => {
  it('"bnna" shows Banana', () => {
    expect(fuzzyFilter('bnna', fruits)).toEqual(['Banana']);
  });

  it('"strw" shows Strawberry', () => {
    expect(fuzzyFilter('strw', fruits)).toEqual(['Strawberry']);
  });

  it('returns an empty list when nothing matches', () => {
    expect(fuzzyFilter('zzz', fruits)).toEqual([]);
  });
});
