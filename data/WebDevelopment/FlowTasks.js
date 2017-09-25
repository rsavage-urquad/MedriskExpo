/**
 * FlowTasks for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var FlowTasks = [
    {
        id: "PageRequest",
        name: "Page Request",
        description: "User enters URL and submits request.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PageRequest",
        postTaskDelay: 1000
    },
    {
        id: "GetLoginPage",
        name: "Get Login Page",
        description: "Browser sends request to web server.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "GetLoginPage",
        postTaskDelay: 0
    },
    {
        id: "HTMLResponseLogin",
        name: "HTML Response",
        description: "HTML response sent from web server to the browser.",
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
        description: "Cascading Style Sheet, which provides styling instructions, is sent to the browser.",
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
        description: "Login Page rendered in the browser.",
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
        description: "User enters invalid credentials and submits info.",
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
        description: "Login credentials sent to web server.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "PostLoginCredentials",
        postTaskDelay: 0
    },
    {
        id: "GetUserInfoSPBad",
        name: "Get User Info SP Bad",
        description: "Web application calls a Database Stored Procedure to get the user information.",
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
        description: "Response from web server to browser indicating failed authentication.",
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
        description: "Invalid credentials (<span style='color: red; font-style: italic;'>Doh!</span>).",
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
        description: "User enters valid credentials and submits info.",
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
        description: "Login credentials sent to the web server.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "PostLoginCredentials",
        postTaskDelay: 0
    },
    {
        id: "GetUserInfoSPGood",
        name: "Get User Info SP - Good",
        description: "Web application calls a Database Stored Procedure to get the user information.",
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
    {
        id: "GetTaskInfo",
        name: "Get Task Info",
        description: "Web server send requests to Database for the user's Task information.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "dbServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLGetTasks",
        postTaskDelay: 0
    },
    {
        id: "TaskInfoResponse",
        name: "Task Info Response",
        description: "Database server responds with the requested Task information.",
        actionId: 1,
        type: "A",
        source: "dbServer",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLGetTasksResponse",
        postTaskDelay: 0
    },
    {
        id: "HTMLResponse",
        name: "HTML Response",
        description: "HTML page populated and sent from web server to the browser.",
        actionId: 2,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "HTMLResponse",
        postTaskDelay: 0
    },
    {
        id: "CSSResponse",
        name: "CSS Response",
        description: "Cascading Style Sheet sent to the browser.",
        actionId: 3,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "CSSResponse",
        postTaskDelay: 0
    },
    {
        id: "JavaScriptResponse",
        name: "JavaScript Response",
        description: "JavaScript code, which adds \"client-side\" processing logic, is sent to the browser.",
        actionId: 3,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "JavaScriptResponse",
        postTaskDelay: 0
    },
    {
        id: "TasksPage",
        name: "Tasks Page",
        description: "Task page rendered on the browser.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "TasksPage",
        postTaskDelay: 2000
    },
    {
        id: "TaskPageClickComplete",
        name: "Task Page Click Complete",
        description: "User clicks \"Complete\" for a Task.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "TaskPageClickComplete",
        postTaskDelay: 2000
    },
    {
        id: "CompleteTaskRequest",
        name: "Complete Task Request",
        description: "Browser calls Web API to request the Task be marked as completed.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "CompleteTaskRequest",
        postTaskDelay: 0
    },
    {
        id: "UpdateTaskInfo",
        name: "Update Task Info",
        description: "Web server send requests to Database to mark the Task as completed.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "dbServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLUpdateTask",
        postTaskDelay: 0
    },
    {
        id: "TaskCompleteResponse",
        name: "Task Complete Response",
        description: "Database server responds with the status of the update.",
        actionId: 1,
        type: "A",
        source: "dbServer",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLSuccessResponse",
        postTaskDelay: 0
    },
    {
        id: "JSONCompleteTaskResponse",
        name: "JSON Complete Task Response",
        description: "Web server sends response indicating that the request succeeded.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "JSONCompleteTaskResponse",
        postTaskDelay: 0
    },
    {
        id: "TasksPageUpdated",
        name: "Tasks Page Updated",
        description: "Task page is updated with result of \"Complete Task\" request.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "TasksPageUpdated",
        postTaskDelay: 2000
    },
    {
        id: "TasksPageAdd",
        name: "Tasks Page Add",
        description: "User enters a new Task and clicks \"Add\" button.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "TasksPageAdd",
        postTaskDelay: 2000
    },
    {
        id: "AddTaskRequest",
        name: "Add Task Request",
        description: "Browser calls Web API to add a new Task.",
        actionId: 1,
        type: "A",
        source: "clientBrowser",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 1000,
        messageId: "AddTaskRequest",
        postTaskDelay: 0
    },
    {
        id: "AddTaskInfo",
        name: "Add Task Info",
        description: "Web server send requests to Database to insert the new Task.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "dbServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLInsertTask",
        postTaskDelay: 0
    },
    {
        id: "TaskCompleteResponse",
        name: "Task Complete Response",
        description: "Database server responds with the status of the insert.",
        actionId: 1,
        type: "A",
        source: "dbServer",
        destination: "webServer",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "SQLSuccessResponse",
        postTaskDelay: 0
    },
    {
        id: "JSONAddTaskResponse",
        name: "JSON Add Task Response",
        description: "Web server sends response indicating that the request succeeded.",
        actionId: 1,
        type: "A",
        source: "webServer",
        destination: "clientBrowser",
        duration: 1500,
        removeOnComplete: true,
        removeDelay: 500,
        messageId: "JSONAddTaskResponse",
        postTaskDelay: 0
    },
    {
        id: "TasksPageTaskAdded",
        name: "Tasks Page Task Added",
        description: "Task page is altered with result of newly added Task.",
        actionId: 1,
        type: "D",
        source: "clientBrowserDisplay",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "TasksPageTaskAdded",
        postTaskDelay: 2000
    }
];