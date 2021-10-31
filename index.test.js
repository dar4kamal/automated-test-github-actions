const { mooncakeSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays('woooah!')).toBe('(o.o) woooahhh!');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('(o.o) chookity?');
});
