var webDevelopment = null;

$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    webDevelopment = new WebDevelopment();
});

var WebDevelopment = function () {
    this.flowSimulator = null;
    this.serverTier = $("#serverTier");
    this.clientTier = $("#clientTier");
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
WebDevelopment.prototype.initialize = function() {
    var realThis = this;
    var entityArray = this.loadEntities();
    var flowTaskArray = this.loadFlowTasks();
    var messageArray = this.loadMessages();

    this.flowSimulator = new FlowSimulator(entityArray, flowTaskArray, messageArray, "descriptionDisplay");

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

WebDevelopment.prototype.nextClicked = function() {
    this.playMode = false;
    this.updatePlayStopButton();
    this.flowSimulator.nextStep();
};

WebDevelopment.prototype.playStopClicked = function() {
    this.playMode = !this.playMode;
    this.updatePlayStopButton();

    // TODO: RS - Auto Play Mode
};

/**
 * restartClicked() - Handle the Restart click event.
 */
WebDevelopment.prototype.restartClicked = function() {
    this.playMode = false;
    this.updatePlayStopButton();
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
WebDevelopment.prototype.loadEntities = function() {
    var entityArray = [];

    _.forEach(Entities, function(item) {
        entityArray.push(new EntityObject(item.id, item.containerId));
    });

    return entityArray;
};

/**
 * loadFlowTasks() - Loads and returns the Flow Task Array.  Currently loading from JavaScript "var", but
 * can be refactored to retrieve from server.
 * @returns {Array} Populated Flow Task Array
 */
WebDevelopment.prototype.loadFlowTasks = function() {
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
WebDevelopment.prototype.loadMessages = function() {
    var messageArray = [];

    _.forEach(Messages, function(item) {
        messageArray.push(new Message(item.id, item.height, item.width, item.panelClass, item.title, item.titleClass, item.titleTextClass, item.body, item.bodyClass));
    });

    return messageArray;
};


// ************************************************************************************************
// Display Processing Section
// ************************************************************************************************

WebDevelopment.prototype.updatePlayStopButton = function() {
    var playStopButtonObj = $("#playStopButton");
    var playStopIconObj = $("<i class='fa'>");
    var icon = "fa-stop";

    if (!this.playMode) {
        icon = "fa-play";
    }
    playStopButtonObj.empty();
    playStopIconObj.addClass(icon);
    playStopButtonObj.append(playStopIconObj);
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
WebDevelopment.prototype.resizeEnd = function(realThis) {
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

WebDevelopment.prototype.processResize = function() {
    // Recalculate Heights
    var winHeight = window.innerHeight;
    var bannerHeight = $("#banner").outerHeight();
    var networkHeight = $("#network").outerHeight();
    var tierHeight = Math.floor((winHeight - (bannerHeight + networkHeight)) / 2);

    // Reset Tier Sized
    this.serverTier.outerHeight(tierHeight);
    this.clientTier.outerHeight(tierHeight);

    // Notify Flow Simulator
    this.flowSimulator.processResize();
    this.flowSimulator.reinitializeRequestReceived();
};
