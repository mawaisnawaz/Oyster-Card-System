'use strict';

const Stations = require('./Modules/Stations');
const Oyster = require('./Modules/Oyster');

// Instantiate User:
let oysterInstances = new Oyster();

// Card charged with initial value 30
oysterInstances.setCredit(30);

/**  
 *  Tube Holborn to Earl’s Court
 */
oysterInstances.enterTubeStation(new Stations('Holborn'));
oysterInstances.exitTubeStation(new Stations("Earl's Court"));

/**
 * set bus trip from 328 bus from Earl’s Court to Chelsea
* */ 
oysterInstances.setNewBusJourney();

/**  
 *  Tube Earl’s court to Hammersmith
 */
oysterInstances.enterTubeStation(new Stations("Earl's Court"));
oysterInstances.exitTubeStation(new Stations('Hammersmith'));

var credit = oysterInstances.getCredit();
console.log('Remaining Credit (£) :', credit);
