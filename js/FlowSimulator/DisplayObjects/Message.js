/**
 * Message.js
 * Author: Roland Savage
 * (c) 2017 - Roland Savage
 */

/**
 * Message Object - Represents a Message that can be passed from Entity object to Entity object.
 * @param {string} id - Id for Message object's DOM Element.
 * @param {number} height - DOM Element's height.
 * @param {number} width - DOM Element's width.
 * @param {string} panelClass - Class for Panel DOM Element
 * @param {string} title - Title info for Panel DOM Element
 * @param {string} titleClass - Class for Title Area "div" element
 * @param {string} titleTextClass - Class for Title "span" element
 * @param {string} body - Body info for Panel DOM Element
 * @param {string} bodyClass - Class for Body Area "div" element
 * @constructor
 */
var Message = function (id, height, width, panelClass, title, titleClass, titleTextClass, body, bodyClass) {
    this.panelObj = null;
    this.id = this.prepareValue(id, "", null);
    this.height = this.prepareValue(height, 0, null);
    this.width = this.prepareValue(width, 0, null);
    this.panelClass = this.prepareValue(panelClass, "", null);
    this.title = this.prepareValue(title, "", null);
    this.titleClass = this.prepareValue(titleClass, "", null);
    this.titleTextClass = this.prepareValue(titleTextClass, "", null);
    this.body = this.prepareValue(body, "", null);
    this.bodyClass = this.prepareValue(bodyClass, "", null);

    this.initialize();
};

// ************************************************************************************************
// Initialization Section
// ************************************************************************************************

/**
 * initialize() - Prepare various page objects/elements.
 */
Message.prototype.initialize = function() {
    var title;
    var titleText;
    var body;

    // Build the Message "Panel" object
    this.panelObj = $("<div>", {id: this.id});
    this.panelObj.addClass(this.panelClass);
    this.panelObj.height(this.height);
    this.panelObj.width(this.width);

    title = $("<div>");
    title.addClass(this.titleClass);
    titleText = $("<span>");
    titleText.addClass(this.titleTextClass);
    titleText.html(this.title);
    title.append(titleText);

    body = $("<div>");
    body.addClass(this.bodyClass);
    body.html(this.body);

    this.panelObj.append(title);
    this.panelObj.append(body);
};

/**
 * populate() - Populate an object based on the contents of another object (property values).
 * @param {object} msg - Message Object.
 */
Message.prototype.populate = function(msg) {
    this.panelObj = this.prepareValue(msg.panelObj, {}, null);
    this.id = this.prepareValue(msg.id, "", null);
    this.height = this.prepareValue(msg.height, 0, null);
    this.width = this.prepareValue(msg.width, 0, null);
    this.panelClass = this.prepareValue(msg.panelClass, "", null);
    this.title = this.prepareValue(msg.title, "", null);
    this.titleClass = this.prepareValue(msg.titleClass, "", null);
    this.titleTextClass = this.prepareValue(msg.titleTextClass, "", null);
    this.body = this.prepareValue(msg.body, "", null);
    this.bodyClass = this.prepareValue(msg.bodyClass, "", null);
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

/**
 * animate() - Animates the Message object's movement from the given starting position
 * to the given ending location.  Message object will optionally be removed on completion.
 * @param {Coordinate} start - Starting Location
 * @param {Coordinate} end - Ending Location
 * @param {number} duration - Animation duration (ms)
 * @param {boolean} removeOnComplete - Should Message object be removed on completion.
 * @param {number} removeDelay - amount of time to delay before remove (if removeOnComplete is true)
 */
Message.prototype.animate = function(start, end, duration, removeOnComplete, removeDelay) {
    var realThis = this;

    $("body").append(this.panelObj);
    this.panelObj.offset({top: start.y, left: start.x });

    this.panelObj.animate(
        {
            top: end.y,
            left: end.x
        }, duration, "swing", function() {
            if (removeOnComplete) {
                setTimeout(function() {
                    realThis.panelObj.remove();
                }, removeDelay);
            }
        }
    );
};

/**
 * display() - Displays the Message in the desired location
 * @param {Coordinate} loc - Location to display the message
 * @param {boolean} removeOnComplete - Should Message object be removed on completion.
 * @param {number} removeDelay - amount of time to delay before remove (if removeOnComplete is true)
 */
Message.prototype.display = function(loc, removeOnComplete, removeDelay) {
    var realThis = this;

    $("body").append(this.panelObj);
    this.panelObj.offset({top: loc.y, left: loc.x });
    if (removeOnComplete) {
        setTimeout(function() {
            realThis.panelObj.remove();
        }, removeDelay);
    }
};

/**
 * remove() - Handles a Remove task by removing a message, optionally, after
 * a specified delay.
 * @param {number} removeDelay - Time to delay (ms)
 */
Message.prototype.remove = function(removeDelay) {
    var realThis = this;

    setTimeout(function() {
        realThis.panelObj.remove();
    }, removeDelay);
};

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
Message.prototype.prepareValue = function(prop, defaultValue, func) {
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
