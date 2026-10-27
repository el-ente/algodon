export function createCounter(start = 0) {
  let count = start;
  return {
    increment() {
      count += 1;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    get value() {
      return count;
    },
  };
}
