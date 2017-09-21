/**
 * FlowTask Object - Represents the Plow Tasks that will be processed.
 * @param {string} id - Id
 * @param {string} name - Name
 * @param {string} description - Description text (may include HTML)
 * @param {string} actionId - Action Id
 * @param {string} type - Action Type ("M"=Move, "D"=Display)
 * @param {string} source - Id of Entity Object that will be the Source
 * @param {string} destination - Id of Entity Object that will be the Destination
 * @param {number} duration - Animation duration (ms)
 * @param {boolean} removeOnComplete - Should Message be removed on Task completion
 * @param {number} removeDelay - Removal delay (ms) if removeOnComplete is true.
 * @param {string} messageId - Message Id
 * @param {number} postTaskDelay - When in Play Mode, the amount of time to delay until next task.
 * @constructor
 */
var FlowTask = function (id, name, description, actionId, type, source, destination, duration, removeOnComplete, removeDelay, messageId, postTaskDelay) {
    this.id = this.prepareValue(id, "", null);
    this.name = this.prepareValue(name, "", null);
    this.description = this.prepareValue(description, "", null);
    this.action = new ActionObject(actionId, type, source, destination, duration, removeOnComplete, removeDelay);
    this.messageId = this.prepareValue(messageId, "", null);
    this.postTaskDelay = this.prepareValue(postTaskDelay, 0, null);
};

// ************************************************************************************************
// Initialization Section
// ************************************************************************************************

/**
 * populate() - Populate an object based on the contents of another object (property values).
 * @param {object} ft - FlowTask Object.
 */
FlowTask.prototype.populate = function(ft) {
    this.id = this.prepareValue(ft.id, "", null);
    this.name = this.prepareValue(ft.name, "", null);
    this.description = this.prepareValue(ft.description, "", null);
    this.action = this.prepareValue(ft.action, new ActionObject(), null);
    this.messageId = this.prepareValue(ft.messageId, "", null);
    this.postTaskDelay = this.prepareValue(ft.postTaskDelay, 0, null);
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
FlowTask.prototype.prepareValue = function(prop, defaultValue, func) {
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
