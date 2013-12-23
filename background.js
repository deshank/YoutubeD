function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('youtube.com/watch?v=') > -1) {
		chrome.pageAction.show(tabId);
	}
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);
