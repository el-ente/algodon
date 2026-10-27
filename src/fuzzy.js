export function fuzzyMatch(query, text) {
  const q = query.trim().toLowerCase();
  const t = text.toLowerCase();
  let i = 0;
  for (const ch of t) {
    if (i < q.length && ch === q[i]) i += 1;
  }
  return i === q.length;
}

export function fuzzyFilter(query, items) {
  return items.filter((item) => fuzzyMatch(query, item));
}
