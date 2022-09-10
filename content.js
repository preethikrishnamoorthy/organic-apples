chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    // 'summary': window.getSelection().toString(),
    // "nav":document.getElementsByName('q')[0],
    // 'search':(document.getElementsByClassName('gLFyf gsfi'))[0]
});