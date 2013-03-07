chrome.tabs.onCreated.addListener(function(tab) {
    setTimeout(function(){chrome.tabs.remove(tab.id)},60000);
});

