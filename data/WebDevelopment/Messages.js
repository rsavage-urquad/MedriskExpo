/**
 * Messages for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var Messages = [
    {
        id: "LoginPage",
        height: 200,
        width: 300,
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
        id: "HTMLResponse",
        height: 80,
        width: 120,
        panelClass: "msg-panel",
        title: "HTML",
        titleClass: "msg-title",
        titleTextClass: "msg-title-html",
        body: "&lt;html&gt;<br>&lt;head&gt;&lt;title&gt;...&lt;/title&gt;&lt;/head&gt;<br>&lt;body&gt;<br>&nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;",
        bodyClass: "msg-body msg-body-html"
    },
    {
        id: "CSSResponse",
        height: 80,
        width: 120,
        panelClass: "msg-panel",
        title: "CSS",
        titleClass: "msg-title",
        titleTextClass: "msg-title-css",
        body: "body {<br/>&nbsp;&nbsp;font-family:  Arial, sans-serif;<br/>&nbsp;&nbsp;font-size: 14px;<br/>}<br/>. my-class {<br/>&nbsp;&nbsp;background-color: gray;<br/>&nbsp;&nbsp;color: navy;<br/>}",
        bodyClass: "msg-body msg-body-css"
    }
];
