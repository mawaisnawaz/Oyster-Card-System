const Costs = require('./Cost');

class Zones {
    /**
     * Method that calculates the number of Zones Crossed according to two points
    */
    getCrossedZones(source, destination) {
        var minZonesVisited = 15;
        source.forEach(function(fromZone, index, array){
            destination.forEach(function(toZone, index, array){
                var zonesVisited = Math.abs(fromZone - toZone) + 1;
                //console.log(fromZone, toZone, zonesVisited, minZonesVisited);
                if(zonesVisited < minZonesVisited) {
                    minZonesVisited = zonesVisited;
                }
                if(minZonesVisited == 1) {
                    return;
                }
            });
        });
        return minZonesVisited;
    }

    /**
     * Verify if range of stations cross over the zone one.
    */
    didZoneOneCrossed(from, to) {
        return (from.length == 1 && this.valueInArray(1, from)) || (to.length == 1 && this.valueInArray(1, to));
    }

    /**
     * Select the correct cost according to zones of the trip
    */
    getCostByZone (totalZonesTraversed, isZoneOneTraversed) {
        if(totalZonesTraversed == 1 && isZoneOneTraversed) { 
            return new Costs('Anywhere in Zone 1').cost.price; 
        }

        if(totalZonesTraversed == 1 && !isZoneOneTraversed) { 
            return new Costs('Any one zone outside zone 1').cost.price; 
        }

        if(totalZonesTraversed == 2 && isZoneOneTraversed) { 
            return new Costs('Any two zones including zone').cost.price; 
        }

        if(totalZonesTraversed == 2 && !isZoneOneTraversed) { 
            return new Costs('Any two zones excluding zone 1').cost.price; 
        }

        if(totalZonesTraversed == 3) {
            return new Costs('Max Cost').cost.price; 
        }

        return new Costs('Max Cost').cost.price;
    } 

    /**
     * Method to verify if element exists in array
    */
    valueInArray(value, stack) {
        var length = stack.length;
        for(var i = 0; i < length; i++) {
            if(stack[i] == value) return true;
        }
        return false;
    }   
}

module.exports = { Zones };

