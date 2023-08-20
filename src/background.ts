chrome.runtime.onMessage.addListener((message) => {
  if (message === "copy-meet-url") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0]?.id;
      if (activeTabId) {
        chrome.tabs.sendMessage(activeTabId, "create-new-meet");
      }
    });
  }
});
