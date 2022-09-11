// background.js
console.log("background running!");

// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

function getInfo(whenFinished)
{
  chrome.runtime.onMessage.addEventListener(function(message){
    console.log("message received!");
    whenFinished(message);
  });
}