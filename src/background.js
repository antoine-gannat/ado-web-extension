// listen to updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  // on page complete loading.
  if (changeInfo.status === "complete") {
    // send a message to the main-thread
    chrome.tabs.sendMessage(tabId, {
      message: "HIDE_WARNING",
    });
  }
});
