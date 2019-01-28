const noDuplicates = require('./noDuplicates');

test('noDuplicates funtion exists', () => {
  expect(noDuplicates).toBeDefined();
});

test('New array contains no dupicates', () => {
  expect(noDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
});
