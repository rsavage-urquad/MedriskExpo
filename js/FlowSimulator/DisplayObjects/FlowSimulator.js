/**
 * FlowSimulator.js
 * Author: Roland Savage
 * (c) 2017 - Roland Savage
 */

/**
 * FlowSimulator Object - Performs the Flow Simulation
 * @param {Array} entityArray - Array of EntityObject elements.
 * @param {Array} flowTaskArray - Array of FlowTask elements.
 * @param {Array} messageArray - Array of Message elements.
 * @param {string} descriptionArea - Id of "div" where descriptions will be displayed.
 * @param {string} descriptionElementType - DOM Element type for the description.
 * @constructor
 */
var FlowSimulator = function (entityArray, flowTaskArray, messageArray, descriptionArea, descriptionElementType) {
    this.entityDict = this.loadDictionary(this.entityDict, entityArray, "id");
    this.flowTaskArray = flowTaskArray;
    this.messageDict= this.loadDictionary(this.messageDict, messageArray, "id");
    this.descriptionAreaObj = $("#" + descriptionArea);
    this.descriptionElementType = descriptionElementType;

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
        value.resize.call(value);
    });
};

/**
 * priorStep() - Ultimate result will be to go back a step.
 */
FlowSimulator.prototype.priorStep = function() {
    var flowTask;

    flowTask = this.flowTaskArray[this.currStep];

    // Remove the Description. Calling twice as we will be adding one back
    this.removeLastDescription();
    this.removeLastDescription();

    // If the current Flow Task left a Message on the screen, remove it.
    if (!flowTask.action.removeOnComplete) {
        $("#" + flowTask.messageId).remove();
    }

    // Step back 2 (as we will be processing the next step
    this.currStep -= 2;
    this.currStep = (this.currStep < 0) ? -1 : this.currStep;
    this.nextStep();
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

    // Get the current Task and Message details
    flowTask = this.flowTaskArray[this.currStep];
    message = this.messageDict[flowTask.messageId];

    // Determine the Display/Starting position
    sourceCenter = this.entityDict[flowTask.action.source].getCenter();
    start = this.computeCoordinate(sourceCenter, message.height, message.width);

    // Display or Animate the Message (and display the Description)
    this.displayDescription(flowTask.description);
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
 * initiatePlay() - Initiate the Play functionality yto loop through the Tasks.  The loop will stop when the
 * "playMode" property is set to false.  At this time
 * @param callbackThis
 * @param stopCallback
 */
FlowSimulator.prototype.initiatePlay = function(callbackThis, stopCallback) {
    var realThis = this;
    var duration;
    var flowTask;

    // Display the Next Step
    this.nextStep();

    // Determine the delay Duration
    flowTask = this.flowTaskArray[this.currStep];
    duration = flowTask.postTaskDelay + flowTask.action.duration + flowTask.action.removeDelay;

    // Delay, then either loop or end
    setTimeout(
        function() {
            if (realThis.playMode) {
                // loop
                realThis.initiatePlay.call(realThis, callbackThis, stopCallback);
            }
            else {
                // end (call callback)
                stopCallback.call(callbackThis);
            }
        }, duration
    );
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
 * displayDescription() - Display the provided description in the description area, then scroll
 * to the bottom of the area.
 * @param {string} description - Description to display.
 */
FlowSimulator.prototype.displayDescription = function(description) {
    var elem;

    if (description.trim() !== "") {
        // add the description element
        elem = $("<" + this.descriptionElementType +">");
        elem.html(description);
        this.descriptionAreaObj.append(elem);
        this.scrollToDescriptionBottom();
    }
};

/**
 * removeLastDescription() - Remove the last Description element, then scroll to the bottom of
 * the area.
 * to the bottom of the area
 */
FlowSimulator.prototype.removeLastDescription = function() {
    this.descriptionAreaObj.children().last().remove();
    this.scrollToDescriptionBottom();
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

/**
 * scrollToDescriptionBottom() - Scrolls to the bottom of the Description area.
 */
FlowSimulator.prototype.scrollToDescriptionBottom = function() {
    var scrollHeight;

    scrollHeight = this.descriptionAreaObj.prop("scrollHeight");
    this.descriptionAreaObj.scrollTop(scrollHeight);
};