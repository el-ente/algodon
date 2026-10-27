export function createCounter(start = 0) {
  let count = start;
  return {
    increment() {
      count += 1;
      return count;
    },
    get value() {
      return count;
    },
  };
}
