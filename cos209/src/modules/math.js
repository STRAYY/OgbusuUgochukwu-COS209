// Concept: Modules allow code to be split and reused across files.
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

const DEFAULT_FACTOR = 10;
export default function scale(n) {
  return n * DEFAULT_FACTOR;
}
