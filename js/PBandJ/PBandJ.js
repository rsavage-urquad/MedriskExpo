/**
 * PBandJ.js
 * Author: Roland Savage
 * (c) 2017 - Roland Savage
 */

var pbandj = null;

$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    pbandj = new PBandJ();
});

/**
 * WebDevelopment Object - Processing object for the Web Development Demonstration page.
 * @constructor
 */
var PBandJ = function () {
    this.flowSimulator = null;
    this.mainContainer = $("#mainContainer");
    this.overview = $("#overview");
    this.preparePlatform = $("#preparePlatform");
    this.applyIngredients = $("#applyIngredients");
    this.finalPreparation = $("#finalPreparation");
    this.pseudoCodeContainer = $("#pseudoCode");
    this.currActivityContainer = $("#currActivity");

    this.playMode = false;

    // Windows Resize Support
    this.resizeTime = {};
    this.resizeTimeout = false;
    this.resizeDelta = 300;

    this.initialize();
};

// ************************************************************************************************
// Initialization Section
// ************************************************************************************************

/**
 * initialize() - Prepare various page objects/elements.
 */
PBandJ.prototype.initialize = function() {
    var realThis = this;

    // Load the Entities, Tasks and Messages
    var entityArray = this.loadEntities();
    var flowTaskArray = this.loadFlowTasks();
    var messageArray = this.loadMessages();

    // Initialize the Flow Simulator Object
    this.flowSimulator = new FlowSimulator(entityArray, flowTaskArray, messageArray, "descriptionDisplay", "li");

    // Resize to the current screen size
    this.processResize();

    // Add a event handler to the Window resize event
    $(window).resize(function() {
        realThis.resizeTime = new Date();
        if (realThis.resizeTimeout === false) {
            realThis.resizeTimeout = true;
            setTimeout(
                function() {
                    // Resize activity has ended, call handler.
                    realThis.resizeEnd(realThis);
                },
                realThis.resizeDelta
            );
        }
    });
};

// ************************************************************************************************
// Events Section
// ************************************************************************************************

/**
 * priorClicked() - Handle the "Prior" button click.  If flow is "playing" it will be stopped.
 */
PBandJ.prototype.priorClicked = function() {
    if (this.playMode) {
        this.playStopClicked();
    }
    this.flowSimulator.priorStep();
};

/**
 * nextClicked() - Handle the "Next" button click.  If flow is "playing" it will be stopped.
 */
PBandJ.prototype.nextClicked = function() {
    if (this.playMode) {
        this.playStopClicked();
    }
    this.flowSimulator.nextStep();
};

/**
 * playStopClicked() - Handle the "Play/Stop" button click.
 */
PBandJ.prototype.playStopClicked = function() {
    this.playMode = !this.playMode;
    this.updatePlayStopButton();
    this.flowSimulator.playMode = this.playMode;
    if (this.playMode) {
        this.flowSimulator.initiatePlay(this, this.stopCompleted);
    }
};

/**
 * restartClicked() - Handle the Restart click.
 */
PBandJ.prototype.restartClicked = function() {
    if (this.playMode) {
        this.playStopClicked();
    }
    this.flowSimulator.reinitializeRequestReceived();
};

// ************************************************************************************************
// Data Activities Section
// ************************************************************************************************

/**
 * loadEntities() - Loads and returns the Entity Array.  Currently loading from JavaScript "var", but
 * can be refactored to retrieve from server.
 * @returns {Array} Populated Entity Array
 */
PBandJ.prototype.loadEntities = function() {
    var entityArray = [];

    _.forEach(Entities, function(item) {
        entityArray.push(new EntityObject(item.id, item.containerId, item.useFullContainer));
    });

    return entityArray;
};

/**
 * loadFlowTasks() - Loads and returns the Flow Task Array.  Currently loading from JavaScript "var", but
 * can be refactored to retrieve from server.
 * @returns {Array} Populated Flow Task Array
 */
PBandJ.prototype.loadFlowTasks = function() {
    var flowTaskArray = [];

    _.forEach(FlowTasks, function(item) {
        flowTaskArray.push(new FlowTask(item.id, item.name, item.description, item.actionId, item.type, item.source,
            item.destination, item.duration, item.removeOnComplete, item.removeDelay, item.messageId, item.postTaskDelay));
    });

    return flowTaskArray;
};

/**
 * loadMessages() - Loads and returns the Message Array.  Currently loading from JavaScript "var", but
 * can be refactored to retrieve from server.
 * @returns {Array} Populated Messages Array
 */
PBandJ.prototype.loadMessages = function() {
    var messageArray = [];

    _.forEach(Messages, function(item) {
        messageArray.push(new Message(item.id, item.height, item.width, item.panelClass, item.title, item.titleClass, item.titleTextClass, item.body, item.bodyClass));
    });

    return messageArray;
};


// ************************************************************************************************
// Display Processing Section
// ************************************************************************************************

/**
 * updatePlayStopButton() - Update the display and state of the Play/Stop button.
 */
PBandJ.prototype.updatePlayStopButton = function() {
    var playStopButtonObj = $("#playStopButton");
    var playStopIconObj = $("<i class='fa'>");
    var icon = (!this.playMode) ? "fa-hourglass" : "fa-stop";

    // set the button Icon
    playStopButtonObj.empty();
    playStopIconObj.addClass(icon);
    playStopButtonObj.append(playStopIconObj);

    // If it was a "Stop" request, disable the button (a callback will be used to enable it).
    if (!this.playMode) {
        playStopButtonObj.prop("disabled",true);
    }
};

/**
 * stopCompleted() - Callback function to be called when Flow simulator has stopped it processing.
 */
PBandJ.prototype.stopCompleted = function() {
    var playStopButtonObj = $("#playStopButton");
    var playStopIconObj = $("<i class='fa'>");
    var icon = "fa-play";

    // Prepare and enable the Play/Stop button
    playStopButtonObj.empty();
    playStopIconObj.addClass(icon);
    playStopButtonObj.append(playStopIconObj);
    playStopButtonObj.prop("disabled",false);
};

// ************************************************************************************************
// Helpers Section
// ************************************************************************************************

/**
 * resizeEnd() - When a Window Resize event completes, this method assesses the changes and
 * redraw the Heights og the various Tiers.  It will also notify the subordinate objects to
 * recompute their area.
 * @param realThis {object} - pointer the real "this" object.
 */
PBandJ.prototype.resizeEnd = function(realThis) {
    if (new Date() - realThis.resizeTime < realThis.resizeDelta) {
        setTimeout(
            function() {
                realThis.resizeEnd(realThis);
            },
            realThis.resizeDelta);
    } else {
        this.resizeTimeout = false;
        realThis.processResize();
    }
};

/**
 * processResize() - Process a resize occurrence.
 */
PBandJ.prototype.processResize = function() {
    // Recalculate Heights
    var winHeight = window.innerHeight;
    var bannerHeight = $("#banner").outerHeight(true);
    var rowHeight = winHeight - bannerHeight;
    var halfHeight = Math.floor(rowHeight / 2);

    // Reset the main area sizes
    this.mainContainer.outerHeight(rowHeight);

    // Set the heights of the items in Column 1
    var overviewDivHeight = $("#overviewDiv").height();
    var overviewHeadHeight = $("#overviewHead").outerHeight(true);
    var overviewSectionHeight = Math.floor((overviewDivHeight - overviewHeadHeight) / 4);
    this.overview.outerHeight(overviewSectionHeight);
    this.preparePlatform.outerHeight(overviewSectionHeight);
    this.applyIngredients.outerHeight(overviewSectionHeight);
    this.finalPreparation.outerHeight(overviewSectionHeight);

    // Set the heights of the items in Column 2
    $("#assetDiv").outerHeight(halfHeight);
    var assetHeadHeight = $("#assetHead").outerHeight(true);
    var assetHeight = (halfHeight - assetHeadHeight) - 2;
    $("#assets").outerHeight(assetHeight);
    this.resizeImages("assets");
    $("#pseudoCodeDiv").outerHeight(halfHeight);
    var pseudoCodeHeadHeight = $("#pseudoCodeHead").outerHeight(true);
    var pseudoCodeHeight = (halfHeight - pseudoCodeHeadHeight) - 2;
    this.pseudoCodeContainer.outerHeight(pseudoCodeHeight);

    // Set the heights of the items in Column 3
    $("#descriptionDiv").outerHeight(halfHeight);
    var descHeadHeight = $("#descriptionHead").outerHeight(true);
    var descHeight = (halfHeight - descHeadHeight) - 2;
    $("#descriptionDisplay").outerHeight(descHeight);
    $("#activityDiv").outerHeight(halfHeight);
    var activityHeadHeight = $("#activityHead").outerHeight(true);
    var activityHeight = (halfHeight - activityHeadHeight) - 2;
    this.currActivityContainer.outerHeight(activityHeight);

    // Notify Flow Simulator
    this.flowSimulator.processResize();
    this.flowSimulator.reinitializeRequestReceived();
};

PBandJ.prototype.resizeImages = function(assetAreaId) {
    var areaObj = $("#" + assetAreaId);
    var height = areaObj.height();
    var width = areaObj.height();

    if (height < 320) {
        // TODO: RS - Need to resize as needed
    }

};
