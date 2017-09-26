/**
 * Messages for Web Development Flow Simulation - this will take the place of a JSON response from the Server.
 */
var Messages = [
    {
        id: "DisplayOverview",
        height: 94,
        width: 180,
        panelClass: "msg-panel",
        title: "Main Process",
        titleClass: "msg-title-overview",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<ul style='padding-left: 20px;'>" +
        "<li>PreparePlatform()</li>" +
        "<li>ApplyIngredients()</li>" +
        "<li>FinalPreparation()</li>" +
        "</ul>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayPreparePlatform",
        height: 112,
        width: 180,
        panelClass: "msg-panel",
        title: "Prepare Platform",
        titleClass: "msg-title-functional-area",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<ul style='padding-left: 20px;'>" +
        "<li>OpenPackaging()</li>" +
        "<li>RemoveSlices(2)</li>" +
        "<li>PlaceSlice(0, pbLoc)</li>" +
        "<li>PlaceSlice(1, jellyLoc)</li>" +
        "</ul>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayApplyIngredients",
        height: 112,
        width: 180,
        panelClass: "msg-panel",
        title: "Prepare Platform",
        titleClass: "msg-title-functional-area",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<ul style='padding-left: 20px;'>" +
        "<li>OpenPackaging()</li>" +
        "<li>RemoveSlices(2)</li>" +
        "<li>PlaceSlice(0, pbLoc)</li>" +
        "<li>PlaceSlice(1, jellyLoc)</li>" +
        "</ul>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayFinalPreparation",
        height: 112,
        width: 180,
        panelClass: "msg-panel",
        title: "Prepare Platform",
        titleClass: "msg-title-functional-area",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<ul style='padding-left: 20px;'>" +
        "<li>OpenPackaging()</li>" +
        "<li>RemoveSlices(2)</li>" +
        "<li>PlaceSlice(0, pbLoc)</li>" +
        "<li>PlaceSlice(1, jellyLoc)</li>" +
        "</ul>",
        bodyClass: "msg-body-overview"
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
        id: "JavaScriptResponse",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "JavaScript",
        titleClass: "msg-title",
        titleTextClass: "msg-title-js",
        body: "var Todo = function(area) {<br/>" +
            "&nbsp; this.contentArea = area;<br/>" +
            "&nbsp; this.user = null;<br/>" +
            "&nbsp; this.tasks = [];<br/>" +
            "}<br/>" +
            "<br/>" +
            "Todo.prototype.closeTask(taskId) {<br/>" +
            "&nbsp; var realThis = this;<br/>" +
            "&nbsp; var url = &quot;/api/Todo/Close/&quot; + taskId;<br/>" +
            "<br/>" +
            "&nbsp; $.ajax({<br/>" +
            "&nbsp;&nbsp;&nbsp; type: &quot;POST&quot;,<br/>" +
            "&nbsp;&nbsp;&nbsp; url: url,<br/>" +
            "&nbsp;&nbsp;&nbsp; datatype: &quot;json&quot;,<br/>" +
            "&nbsp;&nbsp;&nbsp; contentType: &quot;application/json; charset=utf-8&quot;,<br/>" +
            "&nbsp;&nbsp;&nbsp; success: function (data) {<br/>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // Update the display<br/>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; realThis.Update(taskId);<br/>" +
            "&nbsp;&nbsp;&nbsp; }<br/>" +
            "&nbsp; });<br/>" +
            "}",
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
            "&nbsp;&nbsp;isValid: false,<br/>" +
            "&nbsp;&nbsp;numTries: 1,<br/>" +
            "&nbsp;&nbsp;tamperHash: &quot;yr6s6djf9kk3jl235ww2mspan986d0&quot;<br/>}",
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
    },
    {
        id: "SQLGetTasks",
        height: 100,
        width: 130,
        panelClass: "msg-panel",
        title: "SQL",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sql",
        body: "<span style='color: blue'>SELECT</span><br/>" +
            "&nbsp;&nbsp; TaskId,<br/>" +
            "&nbsp;&nbsp; TaskDesc,<br/>" +
            "&nbsp;&nbsp; Status<br/>" +
            "<span style='color: blue'>FROM</span> TaskInfo<br/>" +
            "<span style='color: blue'>WHERE</span> UserId = 783",
        bodyClass: "msg-body msg-body-sql"
    },
    {
        id: "SQLGetTasksResponse",
        height: 90,
        width: 350,
        panelClass: "msg-panel",
        title: "SQL Response",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sqlresp",
        body: "<div style='margin-top: 3px;'>" +
            "<span style='width: 50px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>TaskId</span>" +
            "<span style='width: 200px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>TaskDesc</span>" +
            "<span style='width: 60px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>Status</span>" +
            "</div>" +
            "<div>" +
            "<span style='width: 50px; display: inline-block; border: solid 1px black; padding: 1px;'>87554</span>" +
            "<span style='width: 200px; display: inline-block; border: solid 1px black; padding: 1px;'>Eat Doughnuts</span>" +
            "<span style='width: 60px; display: inline-block; border: solid 1px black; padding: 1px;'>O</span>" +
            "</div>" +
            "<div>" +
            "<span style='width: 50px; display: inline-block; border: solid 1px black; padding: 1px;'>87555</span>" +
            "<span style='width: 200px; display: inline-block; border: solid 1px black; padding: 1px;'>Drink at Moe&apos;s</span>" +
            "<span style='width: 60px; display: inline-block; border: solid 1px black; padding: 1px;'>O</span>" +
            "</div>" +
            "<div>" +
            "<span style='width: 50px; display: inline-block; border: solid 1px black; padding: 1px;'>87558</span>" +
            "<span style='width: 200px; display: inline-block; border: solid 1px black; padding: 1px;'>Kill the boy</span>" +
            "<span style='width: 60px; display: inline-block; border: solid 1px black; padding: 1px;'>O</span>" +
            "</div>",
        bodyClass: "msg-body msg-body-sqlresp"
    },
    {
        id: "TasksPage",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/>" +
            "<div style='padding-left: 5px; color: darkblue; font-style:italic; font-size: 12px;'>To Do for Homer Simpson</div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Eat Doughnuts</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Drink at Moe's</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Kill The boy</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'><span style='width: 180px; display: inline-block; background-color: #FFFACD; border: solid 1px black;'>&nbsp;</span></span><span style='width: 36px; display: inline-block; text-align: center; background-color: mediumblue; color: white; padding: 1px; border: solid 1px black;'>Add</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "TaskPageClickComplete",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/>" +
        "<div style='padding-left: 5px; color: darkblue; font-style:italic; font-size: 12px;'>To Do for Homer Simpson</div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Eat Doughnuts</span><span style='width: 47px; display: inline-block; text-align: center; background-color: darkgray; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Drink at Moe's</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Kill The boy</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'><span style='width: 180px; display: inline-block; background-color: #FFFACD; border: solid 1px black;'>&nbsp;</span></span><span style='width: 36px; display: inline-block; text-align: center; background-color: mediumblue; color: white; padding: 1px; border: solid 1px black;'>Add</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "CompleteTaskRequest",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "HTTP",
        titleClass: "msg-title",
        titleTextClass: "msg-title-httpget",
        body: "GET https://www.todo.com/api/ToDo/Complete/87554 /HTTP/1.1<br/>" +
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
        id: "JSONCompleteTaskResponse",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "JSON",
        titleClass: "msg-title",
        titleTextClass: "msg-title-json",
        body: "resp: {<br/>" +
            "&nbsp;&nbsp;requestType: &quot;C&quot;,<br/>" +
            "&nbsp;&nbsp;taskId: 87554,<br/>" +
            "&nbsp;&nbsp;success: true<br/>}",
        bodyClass: "msg-body msg-body-json"
    },
    {
        id: "SQLUpdateTask",
        height: 80,
        width: 160,
        panelClass: "msg-panel",
        title: "SQL",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sql",
        body: "<span style='color: blue'>BEGIN TRAN</span> CompleteTask<br/>" +
            "<span style='color: blue'>UPDATE</span> TaskInfo <span style='color: blue'>SET</span><br/>" +
            "Status = &apos;C&apos;<br/>" +
            "<span style='color: blue'>WHERE</span> TaskId = 87554<br/>" +
            "<span style='color: blue'>COMMIT TRAN</span> CompleteTask",
        bodyClass: "msg-body msg-body-sql"
    },
    {
        id: "SQLSuccessResponse",
        height: 60,
        width: 180,
        panelClass: "msg-panel",
        title: "SQL Response",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sqlresp",
        body: "<div style='margin-top: 3px;'><span style='width: 150px; display: inline-block; border: solid 1px black; background-color: #e5e5e5; padding: 1px;'>Response</span></div>" +
            "<div><span style='width: 150px; display: inline-block; border: solid 1px black; padding: 1px; color: green; font-style: italic'>Success</span></div>",
        bodyClass: "msg-body msg-body-sqlresp"
    },
    {
        id: "TasksPageUpdated",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/>" +
            "<div style='padding-left: 5px; color: darkblue; font-style:italic; font-size: 12px;'>To Do for Homer Simpson</div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block; text-decoration: line-through'>Eat Doughnuts</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Drink at Moe's</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Kill The boy</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'><span style='width: 180px; display: inline-block; background-color: #FFFACD; border: solid 1px black;'>&nbsp;</span></span><span style='width: 36px; display: inline-block; text-align: center; background-color: mediumblue; color: white; padding: 1px; border: solid 1px black;'>Add</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "TasksPageAdd",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/>" +
            "<div style='padding-left: 5px; color: darkblue; font-style:italic; font-size: 12px;'>To Do for Homer Simpson</div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block; text-decoration: line-through'>Eat Doughnuts</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Drink at Moe's</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Kill The boy</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
            "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'><span style='width: 180px; display: inline-block; background-color: #FFFACD; border: solid 1px black;'>Snuggle with Marge</span></span><span style='width: 36px; display: inline-block; text-align: center; background-color: mediumblue; color: white; padding: 1px; border: solid 1px black;'>Add</span></div>",
        bodyClass: "msg-body-browser"
    },
    {
        id: "AddTaskRequest",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "HTTP",
        titleClass: "msg-title",
        titleTextClass: "msg-title-httppost",
        body: "Post https://www.todo.com/api/ToDo/Add  /HTTP/1.1<br/>" +
            "<b>Client</b><br/>" +
            "&nbsp;&nbsp; Accept: text/html, application/xhtml+xml, */*<br/>" +
            "&nbsp;&nbsp; Accept-Encoding: gzip, deflate<br/>" +
            "&nbsp;&nbsp; Accept-Language: en-US<br/>" +
            "&nbsp;&nbsp; User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko<br/>" +
            "<b>Data</b><br/>" +
            "&nbsp;&nbsp; usedId: 783<br/>" +
            "&nbsp;&nbsp; TaskDesc: &quot;Snuggle with Marge&quot;",
        bodyClass: "msg-body msg-body-http"
    },
    {
        id: "SQLInsertTask",
        height: 122,
        width: 160,
        panelClass: "msg-panel",
        title: "SQL",
        titleClass: "msg-title",
        titleTextClass: "msg-title-sql",
        body: "<span style='color: blue'>BEGIN TRAN</span> InsertTask<br/>" +
            "<span style='color: blue'>INSERT INTO </span> TaskInfo (<br/>" +
            "&nbsp;&nbsp; TaskDesc,<br/>" +
            "&nbsp;&nbsp; Status<br/>" +
            ") <span style='color: blue'>VALUES</span> (<br/>" +
            "&nbsp;&nbsp; &apos;Snuggle with Marge&apos;,<br/>" +
            "&nbsp;&nbsp; &apos;O&apos;<br/>" +
            ")<br/>" +
            "<span style='color: blue'>COMMIT TRAN</span> InsertTask",
        bodyClass: "msg-body msg-body-sql"
    },
    {
        id: "JSONAddTaskResponse",
        height: 120,
        width: 180,
        panelClass: "msg-panel",
        title: "JSON",
        titleClass: "msg-title",
        titleTextClass: "msg-title-json",
        body: "resp: {<br/>" +
            "&nbsp;&nbsp;requestType: &quot;A&quot;,<br/>" +
            "&nbsp;&nbsp;taskId: 87592,<br/>" +
            "&nbsp;&nbsp;taskDesc: &quot;Snuggle with Marge&quot;,<br/>" +
            "&nbsp;&nbsp;success: true<br/>}",
        bodyClass: "msg-body msg-body-json"
    },
    {
        id: "TasksPageTaskAdded",
        height: 260,
        width: 390,
        panelClass: "msg-panel",
        title: "Web Browser",
        titleClass: "msg-title-browser",
        titleTextClass: "",
        body: "<div style='padding: 2px; background-color: gainsboro;'>Url: <span style='width: 300px; display: inline-block; border: solid 1px black;background-color: white;'>https://www.todo.com</span></div><br/>" +
        "<div style='padding-left: 5px; color: darkblue; font-style:italic; font-size: 12px;'>To Do for Homer Simpson</div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block; text-decoration: line-through'>Eat Doughnuts</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Drink at Moe's</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Kill The boy</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'>Snuggle with Marge</span><span style='width: 47px; display: inline-block; text-align: center; background-color: gainsboro; padding: 1px; border: solid 1px black;'>Complete</span></div>" +
        "<div style='padding-left: 20px; margin-top: 2px;'><span style='width: 200px; display: inline-block;'><span style='width: 180px; display: inline-block; background-color: #FFFACD; border: solid 1px black;'>&nbsp;</span></span><span style='width: 36px; display: inline-block; text-align: center; background-color: mediumblue; color: white; padding: 1px; border: solid 1px black;'>Add</span></div>",
        bodyClass: "msg-body-browser"
    }
];
