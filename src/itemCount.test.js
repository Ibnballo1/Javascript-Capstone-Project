const itemCount = require('./modules/itemCount.js');

test('test total item count', () => {
  expect(itemCount([1, 2, 3, 4, 5])).toBe(5);
});