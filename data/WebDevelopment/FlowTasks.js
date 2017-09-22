/**
 * FlowTasks for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var FlowTasks = [
    {
        id: "PageRequest",
        name: "Page Request",
        description: "User enters URL and hits enter.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PageRequest",
        postTaskDelay: 2000
    },
    {
        id: "GetLoginPage",
        name: "Get Login Page",
        description: "Browser sends request.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "GetLoginPage",
        postTaskDelay: 500
    },
    {
        id: "HTMLResponseLogin",
        name: "HTML Response",
        description: "HTML Response from Server to Client's web browser.",
        actionId: 2,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "HTMLResponseLogin",
        postTaskDelay: 0
    },
    {
        id: "CSSResponse",
        name: "CSS Response",
        description: "Cascading Style Sheet provides display style instructions to the Client's web browser.",
        actionId: 3,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "CSSResponse",
        postTaskDelay: 0
    },
    {
        id: "LoginPage",
        name: "Login Page",
        description: "Login Page rendered in the web browser.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "LoginPage",
        postTaskDelay: 2000
    },
    {
        id: "LoginPageFilledInBad",
        name: "Login Page Filled In (incorrectly)",
        description: "User enters invalid credentials and \"Submits\" info.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "LoginPageFilledInBad",
        postTaskDelay: 2000
    },
    {
        id: "PostLoginCredentials",
        name: "Post Login Info",
        description: "Login credentials sent to Web Server.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "PostLoginCredentials",
        postTaskDelay: 500
    },
    {
        id: "GetUserInfoSPBad",
        name: "Get User Info SP Bad",
        description: "Call the Database Stored Procedure to Get the User information.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "dbServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLSPLoginBad",
        postTaskDelay: 0
    },
    {
        id: "GetUserInfoSPResponseBad",
        name: "Get User Info SP Response - Bad",
        description: "Database cannot find the requested information.",
        actionId: 1,
        type: "A",
        source: "dbServer",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLSPLoginResponseBad",
        postTaskDelay: 0
    },
    {
        id: "JSONLoginResponseInvalid",
        name: "JSON Invalid Response",
        description: "Response from Web Server indicating failed authentication.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "JSONLoginResponse",
        postTaskDelay: 0
    },
    {
        id: "LoginFailed",
        name: "Login Failed",
        description: "Invalid credentials (Doh!)",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "LoginFailed",
        postTaskDelay: 2000
    },
    {
        id: "LoginPageFilledInGood",
        name: "Login Page Filled In (correctly)",
        description: "User enters valid credentials and \"Submits\" info",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "LoginPageFilledInGood",
        postTaskDelay: 2000
    },
    {
        id: "PostLoginCredentials",
        name: "Post Login Info",
        description: "Login credentials sent to Web Server",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "PostLoginCredentials",
        postTaskDelay: 500
    },
    {
        id: "GetUserInfoSPGood",
        name: "Get User Info SP - Good",
        description: "Call the Database Stored Procedure to Get the User information.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "dbServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLSPLoginGood",
        postTaskDelay: 0
    },
    {
        id: "GetUserInfoSPResponseGood",
        name: "Get User Info SP Response - Good",
        description: "Database find and returns the requested information.",
        actionId: 1,
        type: "A",
        source: "dbServer",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLSPLoginResponseGood",
        postTaskDelay: 0
    },

    /* Get Tasks */

    {
        id: "HTMLResponse",
        name: "HTML Response",
        description: "Response from Server to Client's Web Browser",
        actionId: 2,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "HTMLResponse",
        postTaskDelay: 500
    },
    {
        id: "CSSResponse",
        name: "CSS Response",
        description: "Cascading Style Sheet provides display style instructions to the Client's Web Browser",
        actionId: 3,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "CSSResponse",
        postTaskDelay: 500
    }

    /* Display To do List */
    /* User completed item */
    /* Post to Server */
    /* Update Database */
    /* Database Response */
    /* Json Response to Browser */
    /* Render change on Browser */
    /* User Adds Item */
    /* Post to Server */
    /* Insert Database */
    /* Database Response */
    /* Json Response to Browser */
    /* Render change on Browser */

];