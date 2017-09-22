/**
 * Messages for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var Messages = [
    {
        id: "PageRequest",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/><br/>" +
        "<div style='text-align: center;'>" +
        "<span style='color: #0000FF;'>G</span><span style='color: #FF0000;'>o</span><span style='color: #BEBE12;'>o</span><span style='color: #008000;'>g</span><span style='color: #0000FF;'>l</span><span style='color: #FF0000;'>e</span><br />" +
        "<span style='width: 150px; display: inline-block; border: solid 1px black;background-color: white;'>&nbsp;</span>" +
        "</div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "GetLoginPage",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "HTTP",
        titleClass: "msg-title",
        titleTextClass: "msg-title-httpget",
        body: "GET https://www.todo.com /HTTP/1.1<br/>" +
        "<b>Client</b><br/>" +
        "&nbsp;&nbsp; Accept: text/html, application/xhtml+xml, */*<br/>" +
        "&nbsp;&nbsp; Accept-Encoding: gzip, deflate<br/>" +
        "&nbsp;&nbsp; Accept-Language: en-US<br/>" +
        "&nbsp;&nbsp; User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko<br/>" +
        "<b>Cookies</b><br/>" +
        "&nbsp; Cookie<br/>" +
        "&nbsp;&nbsp;&nbsp; ASP.NET_SessionId=yr6rt3losu8dhy7",
        bodyClass: "msg-body msg-body-http"
    },
    {
        id: "PostLoginCredentials",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "HTTP",
        titleClass: "msg-title",
        titleTextClass: "msg-title-httppost",
        body: "Post https://www.todo.com /HTTP/1.1<br/>" +
        "<b>Client</b><br/>" +
        "&nbsp;&nbsp; Accept: text/html, application/xhtml+xml, */*<br/>" +
        "&nbsp;&nbsp; Accept-Encoding: gzip, deflate<br/>" +
        "&nbsp;&nbsp; Accept-Language: en-US<br/>" +
        "&nbsp;&nbsp; User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko<br/>" +
        "<b>Data</b><br/>" +
        "&nbsp; usedId: &quot;HomerS&quot;<br/>" +
        "&nbsp; password: &lt;hidden&gt;",
        bodyClass: "msg-body msg-body-http"
    },
    {
        id: "LoginPage",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/><br/>" +
            "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>User Id:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block; border: solid 1px black;'>&nbsp;</span></div>" +
            "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>Password:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block;border: solid 1px black;'>&nbsp</span></div>" +
            "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'></span><span style='background-color: navy; color: white; padding: 1px;'>Submit</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "LoginPageFilledInBad",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/><br/>" +
            "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>User Id:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block; border: solid 1px black;'>HomerS</span></div>" +
            "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>Password:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block;border: solid 1px black;'>***</span></div>" +
            "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'></span><span style='background-color: navy; color: white; padding: 1px;'>Submit</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "LoginFailed",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/><br/>" +
        "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>User Id:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block; border: solid 1px black;'>HomerS</span></div>" +
        "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>Password:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block;border: solid 1px black;'>***</span></div>" +
        "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'></span><span style='background-color: navy; color: white; padding: 1px;'>Submit</span></div>" +
        "<div style='padding: 1px;'><span style='color: red'>Invalid User Id or Password, try again.</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "LoginPageFilledInGood",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/><br/>" +
        "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>User Id:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block; border: solid 1px black;'>HomerS</span></div>" +
        "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'>Password:</span><span style='background-color: #FFFACD; width: 80px; display: inline-block;border: solid 1px black;'>****</span></div>" +
        "<div style='padding: 1px;'><span style='width: 55px; display: inline-block;'></span><span style='background-color: navy; color: white; padding: 1px;'>Submit</span></div>",
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
        id: "HTMLResponseLogin",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "HTML",
        titleClass: "msg-title",
        titleTextClass: "msg-title-html",
        body: "&lt;html&gt;<br>&lt;head&gt;&lt;title&gt;...&lt;/title&gt;&lt;/head&gt;<br>" +
        "&lt;body&gt;<br>" +
        "&nbsp;&nbsp;&lt;div&gt;<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;To Do List - Login&lt;/h2&gt;<br/>" +
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
    },
    {
        id: "JSONLoginResponse",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "JSON",
        titleClass: "msg-title",
        titleTextClass: "msg-title-json",
        body: "resp: {<br/>" +
            "&nbsp;&nbsp;isValid: false<br/>" +
            "&nbsp;&nbsp;numTries: 1<br/>" +
            "&nbsp;&nbsp;tamperHash: yr6s6djf9kk3jl235ww2mspan986d0<br/>}",
        bodyClass: "msg-body msg-body-json"
    },
    {
        id: "SQLSPLoginBad",
        height: 60,
        width: 200,
        panelClass: "msg-panel",
        title: "SQL Stored Proc",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sqlsp",
        body: "<b>EXEC GetUserInfo</b><br/>" +
        "&nbsp; UserId=<span style='color: red;'>&apos;HomerS&apos;</span>,<br/>" +
        "&nbsp; PasswordHash=<span style='color: red;'>&apos;d6e4krei5j432h678w0w2&apos;</span>",
        bodyClass: "msg-body msg-body-sqlsp"
    },
    {
        id: "SQLSPLoginGood",
        height: 60,
        width: 200,
        panelClass: "msg-panel",
        title: "SQL Stored Proc",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sqlsp",
        body: "<b>EXEC GetUserInfo</b><br/>" +
        "&nbsp; UserId=<span style='color: red;'>&apos;HomerS&apos;</span>,<br/>" +
        "&nbsp; PasswordHash=<span style='color: red;'>&apos;9r7yh8ucv654hk9hslwz3&apos;</span>",
        bodyClass: "msg-body msg-body-sqlsp"
    },
    {
        id: "SQLSPLoginResponseBad",
        height: 60,
        width: 280,
        panelClass: "msg-panel",
        title: "SQL Response",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sqlresp",
        body: "<div style='margin-top: 3px;'><span style='width: 50px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>UserId</span><span style='width: 200px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>UserName</span></div>" +
            "<div><span style='width: 50px; display: inline-block; border: solid 1px black; padding: 1px; color: gray; font-style: italic;'>null</span><span style='width: 200px; display: inline-block; border: solid 1px black; padding: 1px; color: gray; font-style: italic;'>null</span></div>",
        bodyClass: "msg-body msg-body-sqlresp"
    },
    {
        id: "SQLSPLoginResponseGood",
        height: 60,
        width: 280,
        panelClass: "msg-panel",
        title: "SQL Response",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sqlresp",
        body: "<div style='margin-top: 3px;'><span style='width: 50px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>UserId</span><span style='width: 200px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>UserName</span></div>" +
        "<div><span style='width: 50px; display: inline-block; border: solid 1px black; padding: 1px;'>783</span><span style='width: 200px; display: inline-block; border: solid 1px black; padding: 1px;'>Homer Simpson</span></div>",
        bodyClass: "msg-body msg-body-sqlresp"
    }
];
