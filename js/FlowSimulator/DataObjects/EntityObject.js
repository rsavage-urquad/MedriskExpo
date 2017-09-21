/**
 * EntityObject Object - Represents an Entity involved in a Flow Simulation.  This is basically
 * the container
 * @param {string} objDivId - Id of the Entity's "div"
 * @param {string} containerId - Id of the Entities container (generally used for resize).
 * @constructor
 */
var EntityObject = function (objDivId, containerId) {
    this.id = objDivId;
    this.object = $("#" + objDivId);
    this.container = $("#" + containerId);
    this.centerX = 0;
    this.centerY = 0;

    this.initialize();
};

// ************************************************************************************************
// Initialization Section
// ************************************************************************************************

/**
 * initialize() - Prepare various page objects/elements.
 */
EntityObject.prototype.initialize = function() {
};

/**
 * populate() - Populate an object based on the contents of another object (property values).
 * @param {object} eo - EntityObject Object.
 */
EntityObject.prototype.populate = function(eo) {
    this.id = this.prepareValue(eo.id, "", null);
    this.object = this.prepareValue(eo.object, {}, null);
    this.container = this.prepareValue(eo.container, {}, null);
};

// ************************************************************************************************
// Events Section
// ************************************************************************************************

/**
 * resize() - Process a resize event by recomputing the center point.
 */
EntityObject.prototype.resize = function() {
    var contHeight = this.container.height();
    var pos = this.object.position();
    var offset = this.object.offset();
    var bottomPadding = 20;
    var myHeight = (contHeight - pos.top) - bottomPadding;

    // Make sure height is at least 1
    myHeight = (myHeight < 1) ? 1 : myHeight;

    var centerX = Math.floor(this.container.width() / 2);
    var centerY = Math.floor(myHeight / 2);

    // Set Height and center Position
    this.object.height(myHeight);
    this.centerX = Math.floor(offset.left + centerX);
    this.centerY = Math.floor(offset.top + centerY);
};

// ************************************************************************************************
// Data Activities Section
// ************************************************************************************************

/**
 * getCenter() - Returns the Center Coordinate.
 * @returns {Coordinate} - Center location.
 */
EntityObject.prototype.getCenter = function() {
    return new Coordinate(this.centerX, this.centerY)
};

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
EntityObject.prototype.prepareValue = function(prop, defaultValue, func) {
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
