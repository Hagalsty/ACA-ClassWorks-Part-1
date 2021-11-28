function castArray(val) {
  if (Array.isArray(val)) return val;
  if (arguments.length === 0) return [];

  return [val];
}
