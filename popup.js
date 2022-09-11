// https://markb.uk/building-a-simple-google-chrome-extension.html for window.addEventListener
// window.addEventListener("load", async function() {
//   let [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
//   this.document.getElementById("url").innerHTML = tab.url;
  // pageDocs = chrome.scripting.executeScript({target: {tabId: tab.id}, func: getInfoFromBody});
  // this.document.getElementById("title").innerHTML = 

  // function getInfoFromBody()
  // {
  //   return document.body.innerHTML;
  // }
// });

//if we don't need url
// window.addEventListener("load", function() {
//   this.document.getElementById("title").innerHTML = window.document.body.innerHTML;
// });

// chrome.runtime.onMessage.addListener(processUserSearches);

// function processUserSearches(searchData, sender, response){
//   document.getElementById("url").innerHTML = "lameeee!"
//   document.getElementById("title").innerHTML = "hello!" //searchData.results
//   console.log("hello!")
//   response({'hi': "hello!!!!!"})
// }

//https://markb.uk/building-a-simple-google-chrome-extension.html
// window.addEventListener("load", setupFunction);

// function setupFunction(eventTarget) {
//   this.document.getElementById("title").innerHTML = "window setup!";
//   chrome.runtime.getBackgroundPage(function(currPage) {
//     this.document.getElementById("cookies").innerHTML = "cookkiiiiieee";
//     currPage.getInfo(processInfo);
//   });

//   function processInfo(query) {
//     this.document.getElementById("url").innerHTML = "urlurlrul";
//     response(query.query);
//   }
// }


// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
//   document.getElementById("color").innerHTML=color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: setPageBackgroundColor,
//     });
//   });
  
  // The body of this function will be executed as a content script inside the
  // current page
  // function setPageBackgroundColor() {
  //   chrome.storage.sync.get("color", ({ color }) => {
  //     document.body.style.backgroundColor = color;
  //   });
  // }
