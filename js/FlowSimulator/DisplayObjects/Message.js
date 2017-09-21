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
    this.id = id;
    this.height = height;
    this.width = width;
    this.panelClass = panelClass;
    this.title = title;
    this.titleClass = titleClass;
    this.titleTextClass = titleTextClass;
    this.body = body;
    this.bodyClass = bodyClass;

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
    this.id = this.prepareValue(eo.id, "", null);
    this.object = this.prepareValue(eo.object, {}, null);
    this.container = this.prepareValue(eo.container, {}, null);

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


// ************************************************************************************************
// Helpers Section
// ************************************************************************************************
