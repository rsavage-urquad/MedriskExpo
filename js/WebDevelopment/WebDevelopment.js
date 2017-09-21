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
    var entityArray = [];
    var flowArray = [];

    entityArray.push(new EntityObject("webServer", "webContainer"));
    entityArray.push(new EntityObject("dbServer", "dbContainer"));
    entityArray.push(new EntityObject("clientBrowser", "browserContainer"));

    this.flowSimulator = new FlowSimulator(entityArray, flowArray);

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

// ************************************************************************************************
// Data Activities Section
// ************************************************************************************************


// ************************************************************************************************
// Display Processing Section
// ************************************************************************************************

WebDevelopment.prototype.updatePlayStopButton = function() {
    var playStopButtonObj = $("#playStopButton");
    var playStopIconObj = $("<i class='fa'>");
    var icon = "fa-stop";
    var btnText = " Stop";

    if (!this.playMode) {
        icon = "fa-play";
        btnText = " Play";
    }

    playStopButtonObj.text(btnText);
    playStopIconObj.addClass(icon);
    playStopButtonObj.prepend(playStopIconObj);
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
};
