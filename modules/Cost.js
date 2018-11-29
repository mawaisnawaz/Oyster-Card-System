class Costs {
    constructor(cost) {
        this._cost = cost; 
        
        this.costs = [
            {
                "name": "Bus Cost", 
                "price": 1.8
            },
            {
                "name": "Anywhere in Zone 1", 
                "price": 2.5
            },
            {
                "name": "Any one zone outside zone 1", 
                "price": 2.0
            },
            {
                "name": "Any two zones including zone", 
                "price": 3.0
            },
            {
                "name": "Any two zones excluding zone 1", 
                "price": 2.25
            },
            {
                "name": "Any three zones", 
                "price": 3.20
            },    
            {
                "name": "Max Cost", 
                "price": 3.20
            },                                  
        ]; 
    }

    set cost(name) {
        return this._cost; 
    }
    get cost() {
        return this.costs.find(e=> e.name === this._cost);
    }    
}

module.exports = Costs;
