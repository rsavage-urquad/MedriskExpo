/**
 * FlowTasks for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var FlowTasks = [
    {
        id: "LoginPage",
        name: "Login Page",
        description: "User Logs In to application",
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
        postTaskDelay: 2000
    },
    {
        id: "CSSResponse",
        name: "CSS Response",
        description: "Cascading Style Sheet provides display style instructions to the Client's Web Browser",
        actionId: 3,
        type: "A",
        source: "dbServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "CSSResponse",
        postTaskDelay: 2000
    }
];