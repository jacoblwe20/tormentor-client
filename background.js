chrome.tabs.onCreated.addListener(function(tab) {
    setTimeout(function(){chrome.tabs.remove(tab.id)}, (Math.random() * 240000) + 60000);
});

