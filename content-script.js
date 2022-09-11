const last_search = document.getElementsByClassName("gLFyf")[0].value;


var observer = new MutationObserver(callback);

observer.observe(document, {
    childList: true, // report added/removed nodes
    subtree: true,   // observe any descendant elements
    // attributes: true,
    characterData: true,
    oldValue: true
});

function callback (mutations) {
    console.log(mutations[0])
    for (let mutation of mutations) {
        console.log('mutation', mutations[0].target.baseURI)
    }
}


        

let searchQuery = document.getElementsByClassName("gLFyf")[0].value; 
chrome.runtime.onMessage.addListener(processRequest);
function processRequest(requestMessage, sender, responseFunction)
{
    if(requestMessage.requesting == "true")
    {
        console.log(searchQuery);
        responseFunction({searchData: searchQuery});
    }
}

// //for amazon searches - future work possibly
// let shoppingRecommendations = {};
// let shoppingResults = document.getElementsByClassName("a-section a-spacing-small a-spacing-top-small puis-padding-right-small");
// for (let i = 0; i < shoppingResults.length; i++)
// {
//     productTitle = shoppingResults[i].getElementsByClassName("a-size-small a-color-base a-text-normal")[0].innerText;
//     productPrice = shoppingResults[i].getElementsByClassName("a-offscreen")[0].innerText;
//     shoppingRecommendations[productTitle] = productPrice;
// }


