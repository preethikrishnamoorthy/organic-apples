let searchQuery = document.getElementsByClassName("gLFyf")[0].value; 
//messaging examples: https://developer.chrome.com/docs/extensions/mv3/messaging/  (license: https://creativecommons.org/licenses/by-sa/4.0/)
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


