
const { Zones } = require('../modules/Zones');

//Initiate Zones
let zones = new Zones;

// tests method getCostByZone()
test('returns 2.5 of fare for a trip between 1 zones crossing zone 1', () => {
  expect(zones.getCostByZone(1, true)).toBe(2.5);
});

test('returns 3 of fare for a trip between 2 zones crossing zone 1', () => {
  expect(zones.getCostByZone(2, true)).toBe(3);
});

test('returns 3.2 of fare for a trip between 3 zones crossing zone 1', () => {
  expect(zones.getCostByZone(3, true)).toBe(3.2);
});

test('returns 2 of fare for a trip between 1 zone NOT crossing zone 1', () => {
  expect(zones.getCostByZone(1, false)).toBe(2);
});

test('returns 2.25 of fare for a trip between 2 zones NOT crossing zone 1', () => {
  expect(zones.getCostByZone(2, false)).toBe(2.25);
});

test('returns 3.2 of fare for a trip between 3 zones NOT crossing zone 1', () => {
  expect(zones.getCostByZone(3, false)).toBe(3.2);
});