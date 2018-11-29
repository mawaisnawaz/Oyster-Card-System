const Oyster = require('../modules/Oyster');
const Stations = require('../modules/Stations')
let oysterInstances = new Oyster();

// test methods for set credit
test('returns 0 for empty string', () => {
  expect(oysterInstances.setCredit("")).toBe(0);
});

test('returns 10 for integer 10', () => {
  expect(oysterInstances.setCredit(15)).toBe(15);
});

test('returns of negative number should be 0', () => {
  expect(oysterInstances.setCredit(-15)).toBe(0);
});

test('returns 30.5 for a float number 30.5', () => {
  expect(oysterInstances.setCredit(30.5)).toBe(30.5);
});

// test in case card is not swiped. (max charge for no swipe)
test("didn't swipe the card previously and exit the station", () => {
	var oysterInstances = new Oyster(30);
	oysterInstances.exitTubeStation(new Stations("Earl's Court"));
	expect(oysterInstances.getCredit()).toBe(26.8); 
});
