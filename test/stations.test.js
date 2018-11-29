const Stations = require('../modules/Stations');

// The class should initialise
test('should create a new instance', () => {
    let holborn = new Stations('Holborn'); 
    expect(holborn instanceof Stations).toBeTruthy();
});

// Returns the station name and zone
test('should return a station name and zone', () => {
    let holborn = new Stations('Holborn'); 
    expect(holborn.station.name).toBe('Holborn'); 
    expect(holborn.station.zone).toEqual([1]); 
});