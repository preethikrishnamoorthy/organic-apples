chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {requesting: "true"}, processData);
});

function processData(dataFromSite) {
  query = dataFromSite.searchData;
  flagged = false;
  const socialMedia = ["facebook", "instagram", "twitter"];
  for(let i = 0; i < socialMedia.length; i++) {
    if(socialMedia[i] == query){
      flagged = true;
    }
  }
  if(flagged){
    document.getElementById("search").innerHTML = "You may be about to visit a social media site!";
    document.getElementById("recs").innerHTML = "Social media companies may extract and sell personal information (source: https://www.businessnewsdaily.com/10625-businesses-collecting-data.html). Avoid revealing too much online!";
  }
  else
  {
    document.getElementById("search").innerHTML = "All clear!";
    document.getElementById("recs").innerHTML = "All clear!";
  }
}