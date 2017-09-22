/**
 * Messages for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var Messages = [
    {
        id: "LoginPage",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<br/><br/><span style='width: 55px; display: inline-block;'>Login:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block; border: solid 1px black;'>&nbsp;</span><br/>" +
            "<span style='width: 55px; display: inline-block;'>Password:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block;border: solid 1px black;'>&nbsp</span><br/>" +
            "<span style='width: 55px; display: inline-block;'></span><span style='background-color: navy; color: white'>Submit</span>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "LoginPageFilledIn",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<br/><br/><span style='width: 55px; display: inline-block;'>Login:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block; border: solid 1px black;'>HomerS</span><br/>" +
        "<span style='width: 55px; display: inline-block;'>Password:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block;border: solid 1px black;'>****</span><br/>" +
        "<span style='width: 55px; display: inline-block;'></span><span style='background-color: navy; color: white'>Submit</span>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "HTMLResponse",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "HTML",
        titleClass: "msg-title",
        titleTextClass: "msg-title-html",
        body: "&lt;html&gt;<br>&lt;head&gt;&lt;title&gt;...&lt;/title&gt;&lt;/head&gt;<br>" +
            "&lt;body&gt;<br>" +
            "&nbsp;&nbsp;&lt;div&gt;<br/>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;To Do List&lt;/h2&gt;<br/>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;contentArea&quot;&gt;&lt;/div&gt;<br/>" +
            "&nbsp;&nbsp;&lt;/div&gt;<br>" +
            "&lt;/body&gt;<br>&lt;/html&gt;",
        bodyClass: "msg-body msg-body-html"
    },
    {
        id: "CSSResponse",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "CSS",
        titleClass: "msg-title",
        titleTextClass: "msg-title-css",
        body: "body {<br/>&nbsp;&nbsp;font-family:  Arial, sans-serif;<br/>&nbsp;&nbsp;font-size: 14px;<br/>}<br/>" +
            ".user-banner {<br/>&nbsp;&nbsp;background-color: gray;<br/>&nbsp;&nbsp;color: navy;<br/>}<br/>" +
            ".task-item {<br/>&nbsp;&nbsp;color: #2c809f;<br/>&nbsp;&nbsp;padding: 5px;<br/>}",
        bodyClass: "msg-body msg-body-css"
    }
];
