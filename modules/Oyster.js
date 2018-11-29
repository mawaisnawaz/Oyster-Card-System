"use strict";

const Costs = require('./Cost');
const { Zones } = require('./Zones');

//Initiate Zones
let zonesInstances = new Zones;

class Oyster{
    constructor (credit = 0) {
        this.credit = credit;
        this.charge = 0;
        this.zones = [];
    }

    //set credit value
    setCredit(amount) {
        if (typeof(amount) === 'number') {
            this.credit += amount;
        } else {
            return 0;
        }

        return this.credit;
    }

    //get credit value
    getCredit() {
        return this.credit;
    }
    
    //Sets Debit in the Card
    updateCreditData() {   
        (this.credit >= this.charge) ? this.credit -= this.charge : process.exit(console.log('Not enough credit!'));
    }

    
    //maximum fare is charged for oyster card, when user enter the barrier.
    enterTubeStation(station) {
        // console.log("## Entering in the Subway Station...");
        if(typeof station === `object`) {
            this.zones = [];
            this.zones.push(station.station.zone);     
                 
            this.charge = new Costs('Max Cost').cost.price;
            this.updateCreditData();
        } else {
            process.exit(console.log('Invalid Station!'))
        }
    }

    /** 
     * Fare Calculation
     * Removal of Maximum fare Transaction.
     * Replacement with Real Transaction
     * */
    exitTubeStation(finalStation) {
        this.zones.push(finalStation.station.zone);
        this.getFinalCost();
        this.updateCreditData();
    }

    //Method used to account a new bus trip
    setNewBusJourney() {  
        this.charge = new Costs('Bus Cost').cost.price;
        this.updateCreditData();
    }

    /**
     * calculates the real transaction amount
    */
    getFinalCost() {
        // if there is just one station, charge the MAX_COST because there isn't the Enter Station
        if (this.zones.length == 2) {
            //return the MAX_COST
            this.setCredit(new Costs('Max Cost').cost.price);
            // calculate the final cost ( real const )
            var zonesCrossed = zonesInstances.getCrossedZones(this.zones[0], this.zones[1]);
            var isZoneOneCrossed = zonesInstances.didZoneOneCrossed(this.zones[0], this.zones[1]);
            var cost = zonesInstances.getCostByZone(zonesCrossed, isZoneOneCrossed);
            this.charge = cost;
        } else {          
            this.charge = new Costs('Max Cost').cost.price;
        }       
    }
}
module.exports = Oyster;
