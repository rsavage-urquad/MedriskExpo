/**
 * FlowSimulator Object - Performs the Flow Simulation
 * @param {Array} entityArray - Array of EntityObject elements.
 * @param {Array} flowTaskArray - Array of FlowTask elements.
 * @param {Array} messageArray - Array of Message elements.
 * @param {string} descriptionArea - Id of "div" where descriptions will be displayed.
 * @constructor
 */
var FlowSimulator = function (entityArray, flowTaskArray, messageArray, descriptionArea) {
    this.entityDict = this.loadDictionary(this.entityDict, entityArray, "id");
    this.flowTaskArray = flowTaskArray;
    this.messageDict= this.loadDictionary(this.messageDict, messageArray, "id");
    this.descriptionAreaObj = $("#" + descriptionArea);

    this.currStep = -1;     // Initialized to -1 as "nextStep" will add one first.

    this.initialize();
};

// ************************************************************************************************
// Initialization Section
// ************************************************************************************************

/**
 * initialize() - Prepare various page objects/elements.
 */
FlowSimulator.prototype.initialize = function() {
};

/**
 * loadDictionary() - Initializes and loads the supplied Dictionary from the Array
 * @param {Object} dict - Dictionary object to be initialized/loaded
 * @param {Array} arr - Entity Array
 * @param {string} id - Name of Id Property to be used as Key.
 */
FlowSimulator.prototype.loadDictionary = function(dict, arr, id) {
    dict = {};

    _.forEach(arr, function(item) {
        dict[item[id]] = item;
    });

    return dict;
};

// ************************************************************************************************
// Events Section
// ************************************************************************************************

/**
 * processResize() - Process a resize request
 */
FlowSimulator.prototype.processResize = function() {
    // Notify Entity Objects
    _.forOwn(this.entityDict, function(value) {
        value.resize();
    });
};

/**
 * nextStep() - Process the next task of the Flow Array
 */
FlowSimulator.prototype.nextStep = function() {
    var flowTask;
    var message;
    var sourceCenter;
    var destCenter;
    var start;
    var end;

    this.currStep++;
    if (this.currStep > (this.flowTaskArray.length - 1)) {
        this.reinitializeDisplay();
        this.currStep = 0;
    }

    flowTask = this.flowTaskArray[this.currStep];
    message = this.messageDict[flowTask.messageId];
    this.displayDescription(flowTask.description);

    sourceCenter = this.entityDict[flowTask.action.source].getCenter();
    start = this.computeCoordinate(sourceCenter, message.height, message.width);

    if (flowTask.action.type === "D") {
        // Display the Message
        message.display(start, flowTask.action.removeOnComplete, flowTask.action.removeDelay);
    }
    else {
        // Animate the message
        destCenter = this.entityDict[flowTask.action.destination].getCenter();
        end = this.computeCoordinate(destCenter, message.height, message.width);
        message.animate(start, end, flowTask.action.duration, flowTask.action.removeOnComplete, flowTask.action.removeDelay);
    }
};

/**
 * reinitializeRequestReceived() - Handle the Reinitialize Display request
 */
FlowSimulator.prototype.reinitializeRequestReceived = function() {
    this.reinitializeDisplay();
    this.currStep = -1;
};

// ************************************************************************************************
// Data Activities Section
// ************************************************************************************************


// ************************************************************************************************
// Display Processing Section
// ************************************************************************************************

/**
 * reinitializeDisplay() - Reinitialize the display by removing any Message that was possibly
 * displayed as part of a Flow Task.  Also clear the Description area.
 */
FlowSimulator.prototype.reinitializeDisplay = function() {
    _.forEach(this.flowTaskArray, function(item) {
        var obj = $("#" + item.messageId);
        if (obj.length > 0) {
            obj.remove();
        }
    });

    // Clear the Description area
    this.clearDescription();
};

/**
 * displayDescription() - Display the provided description in the description area.
 * @param {string} description - Description to display.
 */
FlowSimulator.prototype.displayDescription = function(description) {
    var elem = $("<li>");
    elem.html(description);
    this.descriptionAreaObj.append(elem);
    var scrollHeight = this.descriptionAreaObj.prop("scrollHeight");

    // Scroll to bottom of area
    this.descriptionAreaObj.scrollTop(scrollHeight);
};

/**
 * clearDescription() - Clear the description area.
 */
FlowSimulator.prototype.clearDescription = function() {
    this.descriptionAreaObj.empty();
};

// ************************************************************************************************
// Helpers Section
// ************************************************************************************************

/**
 * computeCoordinate() - Compute a messages coordinates based on the Source/Destination center point and
 * the Messages height and width.
 * @param targetCenter - Identifies which center Coordinates for the target EntityObject.
 * @param msgHeight - Message's height
 * @param msgWidth - Message's width
 * @returns {Coordinate} - Message offset coordinate.
 */
FlowSimulator.prototype.computeCoordinate = function(targetCenter, msgHeight, msgWidth) {
    var x = Math.floor(targetCenter.x -(msgWidth / 2));
    var y = Math.floor(targetCenter.y -(msgHeight / 2));

    return new Coordinate(x, y);
};