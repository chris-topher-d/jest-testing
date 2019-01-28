const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toBe
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Major Tom object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Major',
    lastName: 'Tom'
  });
});

// Less than and Greater than
test('Should be under 1000', () => {
  const amount1 = 775;
  const amount2 = 175;
  expect(amount1 + amount2).toBeLessThan(1000);
});

// Regular Expressions
test('There is no I in team', () => {
  expect('team').not.toMatch(/i/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
      expect(data.name).toEqual('Leanne Graham');
    });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull mathces only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruth matches anything that an if statement treats as true
// toBeFalsy mathces anything that an if statement treats as false
