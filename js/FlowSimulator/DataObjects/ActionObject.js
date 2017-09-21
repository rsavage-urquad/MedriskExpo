/**
 * ActionObject Object - Represents the actions that can be performed on a Message object during
 * a Flow Task.
 * @param {string} id - Action Id
 * @param {string} type - Action Type ("M"=Move, "D"=Display)
 * @param {string} source - Id of Entity Object that will be the Source
 * @param {string} destination - Id of Entity Object that will be the Destination
 * @param {number} duration - Animation duration (ms)
 * @param {boolean} removeOnComplete - Should Message be removed on Task completion
 * @param {number} removeDelay - Removal delay (ms) if removeOnComplete is true.
 * @constructor
 */
var ActionObject = function (id, type, source, destination, duration, removeOnComplete, removeDelay) {
    this.id = this.prepareValue(id, "", null);
    this.type = this.prepareValue(type, "", null);
    this.source = this.prepareValue(source, "", null);
    this.destination = this.prepareValue(destination, "", null);
    this.duration = this.prepareValue(duration, 0, null);
    this.removeOnComplete = this.prepareValue(removeOnComplete, false, null);
    this.removeDelay = this.prepareValue(removeDelay, 0, null);
};

// ************************************************************************************************
// Initialization Section
// ************************************************************************************************

/**
 * populate() - Populate an object based on the contents of another object (property values).
 * @param {object} ao - ActionObject Object.
 */
ActionObject.prototype.populate = function(ao) {
    this.id = this.prepareValue(ao.id, "", null);
    this.type = this.prepareValue(ao.type, "", null);
    this.source = this.prepareValue(ao.source, "", null);
    this.destination = this.prepareValue(ao.destination, "", null);
    this.duration = this.prepareValue(ao.duration, 0, null);
    this.removeOnComplete = this.prepareValue(ao.removeOnComplete, false, null);
    this.removeDelay = this.prepareValue(ao.removeDelay, 0, null);
};

// ************************************************************************************************
// Events Section
// ************************************************************************************************

// ************************************************************************************************
// Data Activities Section
// ************************************************************************************************

// ************************************************************************************************
// Display Processing Section
// ************************************************************************************************

// ************************************************************************************************
// Helpers Section
// ************************************************************************************************

/**
 * prepareValue() - Prepares a Property to be either a default value (if undefined or null) or
 * (optionally) the result of a passed function.
 * @param prop - value to be acted upon.
 * @param defaultValue - Default value, if "prop" is undefined or null.
 * @param func - (Optional - if not needed, pass null).  Function to act on valid "prop".
 * @returns {*} - Value or default value
 */
ActionObject.prototype.prepareValue = function(prop, defaultValue, func) {
    if ((typeof prop === "undefined") || (prop === null)) {
        // provided "prop" in not valid, use default
        return defaultValue;
    }
    else {
        if (typeof func === "function") {
            // Function was provided, so use it
            return func(prop)
        }
        else {
            // Just pass value back.
            return prop;
        }
    }
};

