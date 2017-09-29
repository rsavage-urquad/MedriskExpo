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
        "<div>PreparePlatform()</div>" +
        "<div>ApplyIngredients()</div>" +
        "<div>FinalPreparation()</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayPreparePlatform",
        height: 112,
        width: 250,
        panelClass: "msg-panel",
        title: "PreparePlatform",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>OpenPackaging()</div>" +
        "<div><span style='color: blue; font-style: italic;'>elem[]</span> = RemoveElement(2)</div>" +
        "<div>PlaceElement(<span style='color: blue; font-style: italic;'>elem[0]</span>, <span style='color: blue; font-style: italic;'>pbLoc</span>)</div>" +
        "<div>PlaceElement(<span style='color: blue; font-style: italic;'>elem[1]</span>, <span style='color: blue; font-style: italic;'>jellyLoc</span>)</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayApplyIngredients",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
            "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
            "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
            "<div style='height: 1px; background-color: black;'></div>" +
            "<div style='font-size: 12px; margin-top: 4px;'>" +
            "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
            "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
            "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
            "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
            "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
            "<div>}</div>" +
            "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayFinalPreparation",
        height: 74,
        width: 320,
        panelClass: "msg-panel",
        title: "FinalPreparation",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>AssembleProduct(<span style='color: blue; font-style: italic;'>pbLoc.elem</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div>SliceProduct(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>&quot;NW&quot;</span>, <span style='color: blue; font-style: italic;'>&quot;SE&quot;</span>)</div>",
        bodyClass: "msg-body-overview"
    },

    /*  Prepare Platform */
    {
        id: "OverviewHighlightPreparePlatform",
        height: 94,
        width: 180,
        panelClass: "msg-panel",
        title: "Main Process",
        titleClass: "msg-title-overview",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #D1E3FD;'>PreparePlatform()</div>" +
        "<div>ApplyIngredients()</div>" +
        "<div>FinalPreparation()</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "PreparePlatformHighlightOpenPackage",
        height: 112,
        width: 250,
        panelClass: "msg-panel",
        title: "PreparePlatform",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #FFCED7;'>OpenPackaging()</div>" +
        "<div><span style='color: blue; font-style: italic;'>elem[]</span> = RemoveElement(2)</div>" +
        "<div>PlaceElement(<span style='color: blue; font-style: italic;'>elem[0]</span>, <span style='color: blue; font-style: italic;'>pbLoc</span>)</div>" +
        "<div>PlaceElement(<span style='color: blue; font-style: italic;'>elem[1]</span>, <span style='color: blue; font-style: italic;'>jellyLoc</span>)</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "OpenPackage",
        height: 285,
        width: 280,
        panelClass: "msg-panel",
        title: "OpenPackage()",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>if Fastener == Clip {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; Remove the clip</div>" +
        "<div>}</div>" +
        "<div>else if Fastener == Twist Tie {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; <span style='color: blue; font-style: italic;'>direction</span> = counter-clockwise</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; do while Twist Tie still attached to package {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Twist tie in <span style='color: blue; font-style: italic;'>direction</span></div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if is Twist Tie getting tighter {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color: blue; font-style: italic;'>direction</span> = clockwise</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; }</div>" +
        "<div>}</div>" +
        "<div>else {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; Rip the damn thing open already!</div>" +
        "<div>}</div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "Fasteners",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Fasteners",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
         "<div style='text-align: center'><img src='assets/pbandj/Fasteners.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "PreparePlatformHighlightRemoveElement",
        height: 112,
        width: 250,
        panelClass: "msg-panel",
        title: "PreparePlatform",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>OpenPackaging()</div>" +
        "<div style='background-color: #FFCED7;'><span style='color: blue; font-style: italic;'>elem[]</span> = RemoveElement(2)</div>" +
        "<div>PlaceElement(<span style='color: blue; font-style: italic;'>elem[0]</span>, <span style='color: blue; font-style: italic;'>pbLoc</span>)</div>" +
        "<div>PlaceElement(<span style='color: blue; font-style: italic;'>elem[1]</span>, <span style='color: blue; font-style: italic;'>jellyLoc</span>)</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "RemoveElement",
        height: 137,
        width: 250,
        panelClass: "msg-panel",
        title: "RemoveElement(<span style='color: gold; font-style: italic;'>elementCount</span>)",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div><span style='color: blue; font-style: italic;'>currElements</span> = 0 </div>" +
        "<div>do while <span style='color: blue; font-style: italic;'>currElements</span> < <span style='color: blue; font-style: italic;'>elementCount</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; Retrieve element</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp; <span style='color: blue; font-style: italic;'>currElements</span> = <span style='color: blue; font-style: italic;'>currElements</span> + 1</div>" +
        "<div>}</div>" +
        "<div>return Retreived Elements</div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "RetrieveBread",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Retrieve 2 Slices of Bread",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/RetrieveBread-trans.png' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "PreparePlatformHighlightPlaceElements",
        height: 112,
        width: 250,
        panelClass: "msg-panel",
        title: "PreparePlatform",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>OpenPackaging()</div>" +
        "<div><span style='color: blue; font-style: italic;'>elem[]</span> = RemoveElement(2)</div>" +
        "<div style='background-color: #FFCED7;'>PlaceElement(<span style='color: blue; font-style: italic;'>elem[0]</span>, <span style='color: blue; font-style: italic;'>pbLoc</span>)</div>" +
        "<div style='background-color: #FFCED7;'>PlaceElement(<span style='color: blue; font-style: italic;'>elem[1]</span>, <span style='color: blue; font-style: italic;'>jellyLoc</span>)</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "PlaceElement",
        height: 65,
        width: 250,
        panelClass: "msg-panel",
        title: "PlaceElement(<span style='color: gold; font-style: italic;'>item</span>, <span style='color: gold; font-style: italic;'>location</span>)",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>get <span style='color: blue; font-style: italic;'>item</span></div>" +
        "<div>place <span style='color: blue; font-style: italic;'>item</span> in <span style='color: blue; font-style: italic;'>location</span></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "PlaceBread",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Place Bread",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/TwoSlicesOfBread.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },

    /*  Apply Ingredients */

    {
        id: "OverviewHighlightApplyIngredients",
        height: 94,
        width: 180,
        panelClass: "msg-panel",
        title: "Main Process",
        titleClass: "msg-title-overview",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>PreparePlatform()</div>" +
        "<div style='background-color: #D1E3FD;'>ApplyIngredients()</div>" +
        "<div>FinalPreparation()</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayApplyIngredientsHighlightOpenContainer",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "OpenCloseContainer",
        height: 149,
        width: 300,
        panelClass: "msg-panel",
        title: "OpenCloseContainer(<span style='color: gold; font-style: italic;'>ingredient</span>, <span style='color: gold; font-style: italic;'>action</span>)",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div><span style='color: blue; font-style: italic;'>direction</span> = &quot;counter clockwise&quot;</div>" +
        "<div>if action == &quot;close&quot; {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; <span style='color: blue; font-style: italic;'>direction</span> = &quot;clockwise&quot;</div>" +
        "<div>}</div>" +
        "<div>do while <span style='color: blue; font-style: italic;'>ingredient</span> not <span style='color: blue; font-style: italic;'>action</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; Turn lid <span style='color: blue; font-style: italic;'>direction</span></div>" +
        "<div>}</div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "DisplayApplyIngredientsHighlightSpreadIngredient",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "SpreadIngredient",
        height: 236,
        width: 325,
        panelClass: "msg-panel",
        title: "SpreadIngredient(<span style='color: gold; font-style: italic;'>tool</span>, <span style='color: gold; font-style: italic;'>ingredient</span>, <span style='color: gold; font-style: italic;'>platform</span>)",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>LoadIngredient(<span style='color: blue; font-style: italic;'>tool</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>do while <span style='color: blue; font-style: italic;'>ingredient</span> not coating face of <span style='color: blue; font-style: italic;'>platform</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; spread <span style='color: blue; font-style: italic;'>ingredient</span> on <span style='color: blue; font-style: italic;'>platform</span></div>" +
        "<div>&nbsp;&nbsp;&nbsp; if insufficient <span style='color: blue; font-style: italic;'>ingredient</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LoadIngredient(<span style='color: blue; font-style: italic;'>tool</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; }</div>" +
        "<div>}</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div>LoadIngredient(<span style='color: blue; font-style: italic;'>tool</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>"+
        "<div>&nbsp;&nbsp;&nbsp; Insert <span style='color: blue; font-style: italic;'>tool</span> in <span style='color: blue; font-style: italic;'>ingredient</span></div>" +
        "<div>&nbsp;&nbsp;&nbsp; Load <span style='color: blue; font-style: italic;'>tool</span> with <span style='color: blue; font-style: italic;'>ingredient</span></div>" +
        "<div>&nbsp;&nbsp;&nbsp; Apply <span style='color: blue; font-style: italic;'>ingredient</span> to <span style='color: blue; font-style: italic;'>platform</span></div>" +
        "<div>}</div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "LoadPeanutButter",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Load Peanut Butter",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/LoadPeanutButter.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "ApplyPeanutButter",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Apply Peanut Butter",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/BreadWithPeanutButter.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "DisplayApplyIngredientsHighlightCloseContainer",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayApplyIngredientsHighlightCleanAsset",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "CleanAsset",
        height: 82,
        width: 218,
        panelClass: "msg-panel",
        title: "CleanAsset(<span style='color: gold; font-style: italic;'>tool</span>)",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>do while <span style='color: blue; font-style: italic;'>tool</span> not acceptably clean {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; wipe <span style='color: blue; font-style: italic;'>tool</span></div>" +
        "<div>}</div>",
        bodyClass: "msg-body-pseudo-code"
    },

    // Jelly

    {
        id: "DisplayApplyIngredientsHighlightOpenContainerJelly",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayApplyIngredientsHighlightSpreadIngredientJelly",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "LoadJelly",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Load Jelly",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/LoadJelly.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "ApplyJelly",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Apply Jelly",
        titleClass: "msg-title-prepare-platform",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/BreadWithJelly.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "DisplayApplyIngredientsHighlightCloseContainerJelly",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayApplyIngredientsHighlightCleanAssetJelly",
        height: 178,
        width: 320,
        panelClass: "msg-panel",
        title: "ApplyIngredients",
        titleClass: "msg-title-apply-ingredients",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>peanutButter</span>, <span style='color: blue; font-style: italic;'>pbLoc.elem</span>)</div>" +
        "<div style='background-color: #B6EEB6;'>ProcessIngredient(<span style='color: blue; font-style: italic;'>jelly</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='height: 1px; background-color: black;'></div>" +
        "<div style='font-size: 12px; margin-top: 4px;'>" +
        "<div>ProcessIngredient(<span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>) {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;open&quot;)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; SpreadIngredient(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>ingredient</span>, <span style='color: blue; font-style: italic;'>platform</span>)</div>" +
        "<div>&nbsp;&nbsp;&nbsp; OpenCloseContainer(<span style='color: blue; font-style: italic;'>ingredient</span>, &quot;close&quot;)</div>" +
        "<div style='background-color: #B6EEB6;'>&nbsp;&nbsp;&nbsp; CleanAsset(<span style='color: blue; font-style: italic;'>knife</span>)</div>" +
        "<div>}</div>" +
        "</div>",
        bodyClass: "msg-body-overview"
    },

    // Final Preparation

    {
        id: "OverviewHighlightFinalPreparation",
        height: 94,
        width: 180,
        panelClass: "msg-panel",
        title: "Main Process",
        titleClass: "msg-title-overview",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>PreparePlatform()</div>" +
        "<div>ApplyIngredients()</div>" +
        "<div style='background-color: #D1E3FD;'>FinalPreparation()</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "DisplayFinalPreparationHighlightAssembleProduct",
        height: 74,
        width: 320,
        panelClass: "msg-panel",
        title: "FinalPreparation",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='background-color: #C9B3D9'>AssembleProduct(<span style='color: blue; font-style: italic;'>pbLoc.elem</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div>SliceProduct(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>&quot;NW&quot;</span>, <span style='color: blue; font-style: italic;'>&quot;SE&quot;</span>)</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "AssembleProduct",
        height: 168,
        width: 350,
        panelClass: "msg-panel",
        title: "AssembleProduct(<span style='color: gold; font-style: italic;'>basePlatform</span>, <span style='color: gold; font-style: italic;'>topPlatform</span>)",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>do while <span style='color: blue; font-style: italic;'>topPlatform</span> altitude < 6 inches above <span style='color: blue; font-style: italic;'>basePlatform</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; Elevate <span style='color: blue; font-style: italic;'>topPlatform</span></div>" +
        "<div>}</div>" +
        "<div>Position <span style='color: blue; font-style: italic;'>topPlatform</span> over <span style='color: blue; font-style: italic;'>basePlatform</span></div>" +
        "<div>Invert <span style='color: blue; font-style: italic;'>topPlatform</span></div>" +
        "<div>do while <span style='color: blue; font-style: italic;'>topPlatform</span> is not touching <span style='color: blue; font-style: italic;'>basePlatform</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; Lower <span style='color: blue; font-style: italic;'>topPlatform</span></div>" +
        "<div>}</div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "AssembledSandwich",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Assembled Sandwich",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/Assembled.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "DisplayFinalPreparationHighlightSliceProduct",
        height: 74,
        width: 320,
        panelClass: "msg-panel",
        title: "FinalPreparation",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>AssembleProduct(<span style='color: blue; font-style: italic;'>pbLoc.elem</span>, <span style='color: blue; font-style: italic;'>jellyLoc.elem</span>)</div>" +
        "<div style='background-color: #C9B3D9'>SliceProduct(<span style='color: blue; font-style: italic;'>knife</span>, <span style='color: blue; font-style: italic;'>&quot;NW&quot;</span>, <span style='color: blue; font-style: italic;'>&quot;SE&quot;</span>)</div>",
        bodyClass: "msg-body-overview"
    },
    {
        id: "SliceProduct",
        height: 84,
        width: 268,
        panelClass: "msg-panel",
        title: "SliceProduct(<span style='color: gold; font-style: italic;'>tool</span>, <span style='color: gold; font-style: italic;'>startLoc</span>, <span style='color: gold; font-style: italic;'>endLoc</span>)",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div>using <span style='color: blue; font-style: italic;'>tool</span> {</div>" +
        "<div>&nbsp;&nbsp;&nbsp; Slice product from <span style='color: blue; font-style: italic;'>startLoc</span> to <span style='color: blue; font-style: italic;'>endLoc</span></div>" +
        "<div>}</div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "SlicedSandwich",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Sliced Sandwich",
        titleClass: "msg-title-final-preparation",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/SliceOptions.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    },
    {
        id: "SandwichCompleted",
        height: 192,
        width: 250,
        panelClass: "msg-panel",
        title: "Sandwich Completed",
        titleClass: "msg-title-overview",
        titleTextClass: "",
        body: "<div style='margin-top: 5px;'></div>" +
        "<div style='text-align: center'><img src='assets/pbandj/SlicedDiagnal.jpg' class='asset-image' /></div>",
        bodyClass: "msg-body-pseudo-code"
    }

];
