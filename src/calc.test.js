import calc from './calc';
console.log(calc);

test('adds 1 + 2 to equal 3', () => {
  const result = 3;
  expect(calc.add(1, 2)).toBe(result);
});
test('sub 1 - 2 to equal -1', () => {
  const result = 0;
  expect(calc.sub(2, 2)).toBe(result);
});