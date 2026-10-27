import { describe, it, expect } from 'vitest';
import { createCounter } from './counter.js';

describe('createCounter', () => {
  it('starts at the given value', () => {
    expect(createCounter(3).value).toBe(3);
  });

  it('increments by one', () => {
    const counter = createCounter();
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
  });

  it('resets to the start value', () => {
    const counter = createCounter();
    counter.increment();
    expect(counter.reset()).toBe(0);
    expect(counter.value).toBe(0);
  });
});
