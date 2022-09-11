//console.log(document.body.innerHTML)

// let searchQuery = document.getElementsByClassName("gLFyf")[0].value;
// console.log(searchQuery)
// chrome.runtime.sendMessage({query: searchQuery}, successful);

// function successful(response)
// {
//     console.log("successful " + response);
// }


//for google search results
let searchQuery = document.getElementsByClassName("gLFyf")[0];
// checking if they're banned
const bannedWords = ["facebook", "instagram", "twitter"]
bannedWords.forEach(checkIfBanned);
function checkIfBanned(word) {
    if(searchQuery != null){
        if(word == searchQuery.value){
            console.log(searchQuery.value);
            // chrome.runtime.sendMessage({results: 'hi!'}, (response) => {console.log(response);});
        }
    }
}

//for amazon searches
let shoppingSearch = document.getElementsByClassName("nav-input nav-progressive-attribute")[0];
// console.log(shoppingSearch.value);

//for amazon products
// let shoppingResults = document.getElementsByClassName("a-size-small a-color-base a-text-normal");
// for (let i = 0; i < shoppingResults.length; i++)
// {
//     console.log(shoppingResults[i].innerText);
// }

let shoppingResults = document.getElementsByClassName("a-section a-spacing-small a-spacing-top-small puis-padding-right-small");
for (let i = 0; i < shoppingResults.length; i++)
{
    console.log(shoppingResults[i].getElementsByClassName("a-size-small a-color-base a-text-normal")[0].innerText)
    console.log(shoppingResults[i].getElementsByClassName("a-offscreen")[0].innerText)
}


