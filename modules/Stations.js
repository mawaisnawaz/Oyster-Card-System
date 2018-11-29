class Stations {
    constructor(station) {
        this._station = station; 
        
        this.stations = [
            {
                "name": "Holborn", 
                "zone": [1]
            },
            {
                "name": "Earl's Court", 
                "zone": [1,2]
            },
            {
                "name": "Wimbledon", 
                "zone": [3]
            },
            {
                "name": "Hammersmith", 
                "zone": [2]
            },                                    
        ]; 
    }

    set station(name) {
        return this._station; 
    }
    get station() {
        return this.stations.find(e=> e.name === this._station);
    }    
}

module.exports = Stations;
