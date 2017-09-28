/**
 * FlowTasks for Build a Peanut Butter and Jelly Sandwich Flow Simulation - this will take the place of a
 * JSON response from the Server.
 */
var FlowTasks = [
    {
        id: "DisplayOverview",
        name: "Display Overview",
        description: "",
        actionId: 1,
        type: "D",
        source: "overview",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayOverview",
        postTaskDelay: 0
    },
    {
        id: "DisplayPreparePlatform",
        name: "Display Prepare Platform",
        description: "",
        actionId: 1,
        type: "D",
        source: "preparePlatform",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayPreparePlatform",
        postTaskDelay: 0
    },
    {
        id: "DisplayApplyIngredients",
        name: "Display Apply Ingredients",
        description: "",
        actionId: 1,
        type: "D",
        source: "applyIngredients",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayApplyIngredients",
        postTaskDelay: 0
    },
    {
        id: "DisplayFinalPreparation",
        name: "Display Final Preparation",
        description: "",
        actionId: 1,
        type: "D",
        source: "finalPreparation",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayFinalPreparation",
        postTaskDelay: 0
    },

    /* Prepare Platform */
    {
        id: "OverviewHighlightPreparePlatform",
        name: "Overview - Highlight Prepare Platform",
        description: "",
        actionId: 1,
        type: "D",
        source: "overview",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "OverviewHighlightPreparePlatform",
        postTaskDelay: 0
    },
    {
        id: "PreparePlatformHighlightOpenPackage",
        name: "Prepare Platform - HighlightOpenPackage",
        description: "",
        actionId: 1,
        type: "D",
        source: "preparePlatform",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PreparePlatformHighlightOpenPackage",
        postTaskDelay: 0
    },
    {
        id: "OpenPackage",
        name: "Open the Package",
        description: "Perform activity to open the Package.",
        actionId: 1,
        type: "A",
        source: "preparePlatform",
        destination: "pseudoCode",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "OpenPackage",
        postTaskDelay: 0
    },
    {
        id: "Fasteners",
        name: "Open the Package",
        description: "The fastener conundrum!",
        actionId: 1,
        type: "A",
        source: "preparePlatform",
        destination: "currActivity",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "Fasteners",
        postTaskDelay: 0
    },
    {
        id: "RemoveOpenPackage",
        name: "Remove Open Package",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "OpenPackage",
        postTaskDelay: 0
    },
    {
        id: "FastenersRemoveImage",
        name: "Remove the Fasteners Image",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "Fasteners",
        postTaskDelay: 0
    },
    {
        id: "PreparePlatformHighlightRemoveElement",
        name: "Prepare Platform - HighlightOpenPackage",
        description: "",
        actionId: 1,
        type: "D",
        source: "preparePlatform",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PreparePlatformHighlightRemoveElement",
        postTaskDelay: 0
    },
    {
        id: "RemoveElement",
        name: "Remove Element",
        description: "Get &quot;x&quot; slices of bread.",
        actionId: 1,
        type: "A",
        source: "preparePlatform",
        destination: "pseudoCode",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "RemoveElement",
        postTaskDelay: 0
    },
    {
        id: "RetrieveBread",
        name: "Retrieve 2 Slices of Bread",
        description: "",
        actionId: 1,
        type: "A",
        source: "preparePlatform",
        destination: "currActivity",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "RetrieveBread",
        postTaskDelay: 0
    },
    {
        id: "RemoveRemoveElement",
        name: "Remove the RemoveElement Message",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "RemoveElement",
        postTaskDelay: 0
    },
    {
        id: "RemoveRetrieveBread",
        name: "Remove Retrieve Bread Image",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "RetrieveBread",
        postTaskDelay: 0
    },
    {
        id: "PreparePlatformHighlightPlaceElements",
        name: "Prepare Platform - Highlight Place Elements",
        description: "",
        actionId: 1,
        type: "D",
        source: "preparePlatform",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PreparePlatformHighlightPlaceElements",
        postTaskDelay: 0
    },
    {
        id: "PlaceElement",
        name: "Place Element",
        description: "Put slices in work area (will be done for each slice).",
        actionId: 1,
        type: "A",
        source: "preparePlatform",
        destination: "pseudoCode",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PlaceElement",
        postTaskDelay: 0
    },
    {
        id: "PlaceBread",
        name: "Place Bread",
        description: "",
        actionId: 1,
        type: "A",
        source: "preparePlatform",
        destination: "currActivity",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PlaceBread",
        postTaskDelay: 0
    },
    {
        id: "RemovePlaceElement",
        name: "Remove the PlaceElement Message",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PlaceElement",
        postTaskDelay: 0
    },
    {
        id: "RemovePlaceBread",
        name: "Remove Place Bread Image",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "PlaceBread",
        postTaskDelay: 0
    },

    /* Apply Ingredients  */
    {
        id: "OverviewHighlightApplyIngredients",
        name: "Overview - Highlight Apply Ingredients",
        description: "",
        actionId: 1,
        type: "D",
        source: "overview",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "OverviewHighlightApplyIngredients",
        postTaskDelay: 0
    },
    {
        id: "ResetPreparePlatform",
        name: "Prepare Platform - Reset",
        description: "",
        actionId: 1,
        type: "D",
        source: "preparePlatform",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayPreparePlatform",
        postTaskDelay: 0
    },
    {
        id: "DisplayApplyIngredientsHighlightOpenContainer",
        name: "ApplyIngredients - Highlight OpenContainer",
        description: "Let's process the Peanut Butter.",
        actionId: 1,
        type: "D",
        source: "applyIngredients",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayApplyIngredientsHighlightOpenContainer",
        postTaskDelay: 0
    },
    {
        id: "OpenContainer",
        name: "Open Container",
        description: "Open the jar of Peanut Butter.",
        actionId: 1,
        type: "A",
        source: "applyIngredients",
        destination: "pseudoCode",
        duration: 1500,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "OpenCloseContainer",
        postTaskDelay: 0
    },
    {
        id: "RemoveOpenContainer",
        name: "Remove the Open Container Message",
        description: "",
        actionId: 1,
        type: "R",
        source: "",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "OpenCloseContainer",
        postTaskDelay: 0
    },
    {
        id: "DisplayApplyIngredientsHighlightSpreadIngredient",
        name: "ApplyIngredients - Highlight SpreadIngredient",
        description: "",
        actionId: 1,
        type: "D",
        source: "applyIngredients",
        destination: "",
        duration: 0,
        removeOnComplete: false,
        removeDelay: 0,
        messageId: "DisplayApplyIngredientsHighlightSpreadIngredient",
        postTaskDelay: 0
    }



];