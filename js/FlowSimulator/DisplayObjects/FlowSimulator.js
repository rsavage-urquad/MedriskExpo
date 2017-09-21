/**
 * FlowSimulator Object - Performs the Flow Simulation
 * @param {Array} entityArray - Array of EntityObject elements.
 * @param {Array} flowArray - Array of FlowObject elements.
 * @constructor
 */
var FlowSimulator = function (entityArray, flowArray) {
    this.entityDict = this.loadEntityDict(entityArray);
    this.flowArray = flowArray;

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
 * loadEntityDict() - Loads the Entity Dictionary from the Array
 * @param {Array} entityArray - Entity Array
 */
FlowSimulator.prototype.loadEntityDict = function(entityArray) {
    var realThis = this;
    this.entityDict = {};

    _.forEach(entityArray, function(item) {
        realThis.entityDict[item.id] = item;
    })
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

    // TODO: RS - Advance script
    // TODO: RS - What if no more scripts?
    var msgBody ="&lt;html&gt;<br>&lt;head&gt;&lt;title&gt;...&lt;/title&gt;&lt;/head&gt;<br>&lt;body&gt;<br>&nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;";

    var elem = new Message("testDiv", 80, 120, "msg-panel", "HTML", "msg-title", "msg-title-html", msgBody, "msg-body msg-body-html", { x:500, y: 400 }, { x: 100, y: 200 }, 1500);
    elem.animate({ x:500, y: 400 }, { x: 100, y: 200 }, 1500, true, 1000);

};


// ************************************************************************************************
// Data Activities Section
// ************************************************************************************************


// ************************************************************************************************
// Display Processing Section
// ************************************************************************************************

// ************************************************************************************************
// Helpers Section
// ************************************************************************************************

